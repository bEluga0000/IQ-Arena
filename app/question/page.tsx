"use client";
import { GiSpeaker } from "react-icons/gi";
import AppBar from "@/components/AppBar";
import { allCategories, Avtars, completedCatsState, player1NameState, player1PresentMarksState, player2NameState, player2PresentMarksState, presentCategoryStateIndex, presentCategoryStateName, presentQuestion, scoreBoardState } from "@/lib/atom/atom";
import { API_URL } from "@/lib/urls";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface QuestionSchema {
    category: string,
    id: string,
    correctAnswer: string,
    incorrectAnswers: string[],
    question: {
        text: string
    },
    tags: string[],
    type: string,
    difficulty: string,
    regions: string[],
    isNiche: boolean
}
const Question = () => {
    const router = useRouter()
    const presentCategory = useRecoilValue(presentCategoryStateName)
    const presentQuestinoNumber = useRecoilValue(presentQuestion)
    const [question, setQuestion] = useState<QuestionSchema | null>(null)
    const [err, setError] = useState<boolean>(false)
    const [isLoading, setLoading] = useState<boolean>(true)
    const [options, setoptions] = useState<string[]>([])
    const player1Name = useRecoilValue(player1NameState)
    const player2Name = useRecoilValue(player2NameState)
    const setPresentCategory = useSetRecoilState(presentCategoryStateName);
    const [categories, setCategories] = useRecoilState(allCategories);
    const setPresentQuestionNumber = useSetRecoilState(presentQuestion)
    const [selectedAns, setSelectedAns] = useState<null | string>(null)
    const [player1Score, setPlayer1Score] = useRecoilState(player1PresentMarksState)
    const [player2Score, setPlayer2Score] = useRecoilState(player2PresentMarksState)
    const[completedCategories,setCompletedCategories] = useRecoilState(completedCatsState)
    const presentCategoryIndex = useRecoilValue(presentCategoryStateIndex)
    const avtarState = useRecoilValue(Avtars)
    const shuffleArray = (array: string[]): string[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };
    const [scoreBoard, setScoreBoard] = useRecoilState(scoreBoardState)
    const setCategoryState = useSetRecoilState(allCategories)
    useEffect(() => {
        (async () => {
            try {
                const questionLevel = presentQuestinoNumber <= 2 ? "easy" : presentQuestinoNumber <= 4 && presentQuestinoNumber > 2 ? "medium" : "hard"
                const res = await axios.get(`${API_URL}&categories=${presentCategory}&difficulties=${questionLevel}`)
                if (res.data) {
                    setQuestion(res.data[0])
                    setoptions(shuffleArray([res.data[0].correctAnswer, res.data[0].incorrectAnswers[0], res.data[0].incorrectAnswers[1], res.data[0].incorrectAnswers[2]]))
                }
                else
                    setError(true)
            }
            catch {
                setError(true)
            }
            finally {
                setLoading(false)
            }
        })()
    }, [presentQuestinoNumber])
    const updateCategory = async () => {
        const updatedCategories = categories.map((c) => c.name == presentCategory ? { ...c, completed: true } : c)
        setCategories(updatedCategories)
        const updatedScoreBoard = scoreBoard.map((s) =>{return s.category == presentCategory ? { ...s, player1: player1Score, player2: player2Score, winner: player1Score == player2Score ? "Draw" : player1Score > player2Score ? player1Name : player2Name } : s})
        setScoreBoard(updatedScoreBoard)
        setCompletedCategories(completedCategories+1)
        console.log(completedCategories)
        setPlayer1Score(0)
        setPlayer2Score(0)
        setPresentCategory("")
    }
    const updatedSelected = (selected: string) => {

    }
    return <div>
        {
            isLoading && <div>Loading ....</div>
        }
        {
            !isLoading && question && <div className="flex flex-col gap-3">
                {/* <div className="bg-[#00cd9c] flex justify-between mx-2 rounded-md p-4 text-[#ffff] text-2xl font-bold">
                    <div>
                        {presentCategory}
                    </div>
                    <div>
                        {presentQuestinoNumber <= 2 ? "easy" : presentQuestinoNumber <= 4 && presentQuestinoNumber > 2 ? "medium" : "hard"}
                    </div>
                </div> */}
                <div>
                    <div className="w-full flex justify-center">
                        <div className="flex items-center md:flex-row flex-col justify-center md:w-5/6 w-full gap-2">
                            <div className={`flex items-center  justify-center `}>
                                <div className="">
                                    <img src={avtarState[presentCategoryIndex]} alt="Avtar" className="w-2/4  h-20 md:w-full md:h-full " />
                                </div>
                                <div className="bg-[#49c0f8] p-2 rounded-lg  md:hidden ">
                                    <GiSpeaker className="text-[#182e38] lg:text-3xl font-black text-5xl" />
                                </div>  
                        </div>
                            <div className={`flex items-center flex-col rounded-lg p-1 md:p-2 gap-2  md:flex-row`}>
                                {/* border-2 border-[#37464f] */}
                                <div className="bg-[#49c0f8] p-2 rounded-lg hidden md:block">
                                    <GiSpeaker className="text-[#182e38] text-3xl font-black" />
                                </div>
                                <div className="text-2xl text-[#f1f7fb] font-bold tracking-wider text-center">
                                    {question.question.text}{question.correctAnswer}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-4">
                        <hr />
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="flex w-4/5 flex-col gap-3">
                            <div className="flex md:flex-row flex-col gap-3">
                                <div className="flex  py-1.5 w-full  items-center  border-2 rounded-lg cursor-pointer pl-5"
                                    onClick={() => {
                                        setSelectedAns(options[0])
                                    }}
                                    style={selectedAns == options[0] ? { color: "#1a75a0", borderColor: "#376f8a" } : { color: "#324149", borderColor: "#324149" }}>
                                    <div className=" text-lg border-2 px-3 py-1   flex items-center justify-center rounded-lg font-bold"
                                        style={selectedAns == options[0] ? { borderColor: "#1a75a0" } : { borderColor: "#324149" }}>
                                        A
                                    </div>
                                    <div className=" text-[] w-[100%]  text-center font-bold text-xl"
                                        style={selectedAns == options[0] ? { color: "#1a75a0" } : { color: "#ced5d9" }}>
                                        {options[0]}
                                    </div>
                                </div>
                                <div className="flex text-[] py-1.5 w-full  items-center border-[] border-2 rounded-lg cursor-pointer pl-5"
                                    onClick={() => {
                                        setSelectedAns(options[1])
                                    }}
                                    style={selectedAns == options[1] ? { color: "#1a75a0", borderColor: "#376f8a" } : { color: "#324149", borderColor: "#324149" }}>
                                    <div className=" text-lg border-2 px-3 py-1   flex items-center justify-center rounded-lg font-bold border-[]"
                                        style={selectedAns == options[1] ? { borderColor: "#1a75a0" } : { borderColor: "#324149" }}>
                                        B
                                    </div>
                                    <div className=" text-[] w-[100%]  text-center font-bold text-xl"
                                        style={selectedAns == options[1] ? { color: "#1a75a0" } : { color: "#ced5d9" }}>
                                        {options[1]}
                                    </div>
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col gap-3">
                                <div className="flex text-[#324149] py-1.5 w-full  items-center border-[#324149] border-2 rounded-lg cursor-pointer pl-5"
                                    onClick={() => {
                                        setSelectedAns(options[2])
                                    }}
                                    style={selectedAns == options[2] ? { color: "#1a75a0", borderColor: "#376f8a" } : { color: "#324149", borderColor: "#324149" }}>
                                    <div className=" text-lg border-2 px-3 py-1   flex items-center justify-center rounded-lg font-bold border-[#324149]"
                                        style={selectedAns == options[2] ? { borderColor: "#1a75a0" } : { borderColor: "#324149" }}>
                                        C
                                    </div>
                                    <div className=" text-[#ced5d9] w-[100%]  text-center font-bold text-xl"
                                        style={selectedAns == options[2] ? { color: "#1a75a0" } : { color: "#ced5d9" }}>
                                        {options[2]}
                                    </div>
                                </div>
                                <div className="flex text-[#324149] py-1.5 w-full  items-center border-[#324149] border-2 rounded-lg cursor-pointer pl-5"
                                    onClick={() => {
                                        setSelectedAns(options[3])
                                    }}
                                    style={selectedAns == options[3] ? { color: "#1a75a0", borderColor: "#376f8a" } : { color: "#324149", borderColor: "#324149" }}>
                                    <div className=" text-lg border-2 px-3 py-1   flex items-center justify-center rounded-lg font-bold border-[#324149]"
                                        style={selectedAns == options[3] ? { borderColor: "#1a75a0" } : { borderColor: "#324149" }}>
                                        D
                                    </div>
                                    <div className=" text-[#ced5d9] w-[100%]  text-center font-bold text-xl"
                                        style={selectedAns == options[3] ? { color: "#1a75a0" } : { color: "#ced5d9" }}>
                                        {options[3]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-2">
                        <button className="bg-[#93d334] text-[#102a0f] py-2 px-3 flex w-fit text-xl font-bold rounded-lg cursor-pointer disabled:bg-[#38464f] disabled:text-[#4f6269]" 
                        disabled={selectedAns==null}
                        onClick={() => {
                            if (presentQuestinoNumber < 6) {
                                if (selectedAns == question.correctAnswer) {
                                    if (presentQuestinoNumber <= 2)
                                        presentQuestinoNumber % 2 != 0 ? setPlayer1Score(player1Score + 10)
                                            :setPlayer2Score(player2Score + 10) 
                                    else if (presentQuestinoNumber > 2 && presentQuestinoNumber <= 4)
                                        presentQuestinoNumber % 2 != 0 ? setPlayer1Score(player1Score + 15):setPlayer2Score(player2Score + 15)
                                    else
                                        presentQuestinoNumber % 2 != 0 ? setPlayer1Score(player1Score + 20): setPlayer2Score(player2Score + 20)
                                }
                                setPresentQuestionNumber(presentQuestinoNumber + 1)
                                setSelectedAns(null)
                            }
                            else {
                                setPresentQuestionNumber(1)
                                updateCategory()
                                    completedCategories >=5 ? router.push("/score"):router.push("/continuePrompt")
                            }
                        }}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        }
    </div>
}

export default Question