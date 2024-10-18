"use client";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { allCategories, Avtars, completedCatsState, player1NameState, player1PresentMarksState, player2NameState, player2PresentMarksState, presentCategoryStateIndex, presentCategoryStateName, presentQuestion, scoreBoardState } from "@/lib/atom/atom";
import AppBar from "@/components/AppBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoHome } from "react-icons/io5";

const Score = () => {
    const [win1, setWin1] = useState(0);
    const [win2, setWin2] = useState(0); 
    const player1Name = useRecoilValue(player1NameState);
    const player2Name = useRecoilValue(player2NameState);
    const scoreBoard = useRecoilValue(scoreBoardState);
    const setScoreBoard = useResetRecoilState(scoreBoardState)
    const setCategories = useResetRecoilState(allCategories)
    const resetP1 = useResetRecoilState(player1NameState)
    const restp2 = useResetRecoilState(player2NameState)
    const rpci = useResetRecoilState(presentCategoryStateIndex)
    const rpcs = useResetRecoilState(presentCategoryStateName)
    const rpq = useResetRecoilState(presentQuestion)
    const rp1pm = useResetRecoilState(player1PresentMarksState)
    const rp2pm = useResetRecoilState(player2PresentMarksState)
    const rcc = useResetRecoilState(completedCatsState)
    const avtars = useRecoilValue(Avtars)
    // Calculate the number of wins for each player
    useEffect(() => {
        let player1Wins = 0;
        let player2Wins = 0;

        // Iterate over the scoreBoard to count wins
        scoreBoard.forEach((s) => {
            console.log(s.player1,s.player2)
            if(s.player1!=null && s.player2!=null)
            {
                if (s.player1 > s.player2) {
                    player1Wins += 1;
                } else if (s.player2 > s.player1) {
                    player2Wins += 1;
                }
            }
        });
        // console.log(player1Wins)
        // console.log(player2Wins)
        setWin1(player1Wins);
        setWin2(player2Wins);
    }, [scoreBoard, player1Name, player2Name]);

    // Determine the overall winner
    const overallWinner =
        win1 > win2 ? "player1 "+player1Name : win2 > win1 ? "player2 "+player2Name : "Draw";
    const router = useRouter()
    const resetAll = ()=>{
        setScoreBoard() 
        setCategories() 
        resetP1() 
        restp2() 
        rpci()
        rpcs() 
        rpq()
        rp1pm()
        rp2pm()
        rcc() 
    }
    return (
        <div>
            <div>
                <AppBar />
            </div>
            <div className="flex justify-between mt-5 p-5">
                <div className="justify-center flex text-5xl text-[#ffffff] font-black">
                    SCORE SHEET
                </div>
                <div className="bg-[#6f4ea1] text-[#eeee] text-2xl flex justify-center items-center px-5 gap-2 py-4 rounded-xl cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#5a3a86] hover:text-white" onClick={() => {
                    resetAll()
                    router.push("/")
                }}>
                    <div>
                        <IoHome />
                    </div>
                    <div>
                        Click to Home Page
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 px-5 py-2 lg:grid-cols-3">
                {scoreBoard.map((s, index) => (
                    <div key={index} className="flex flex-col bg-[#7f39d8] rounded-lg px-3 py-5 gap-4">
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col gap-4">
                                <div className="border text-[rgb(127,57,216)] bg-[#ffffff] w-fit py-1.5 px-2 text-xl font-bold rounded-lg">
                                    {s.category}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex text-lg gap-2">
                                        <div className="text-[#ffffff]">
                                            {player1Name} Score:
                                        </div>
                                        <div className="text-[#ffffff] font-bold">
                                            {s.player1 != null ? s.player1 : "--"}
                                        </div>
                                    </div>
                                    <div className="flex text-lg gap-2">
                                        <div className="text-[#ffffff]">
                                            {player2Name} Score:
                                        </div>
                                        <div className="text-[#ffffff] font-bold">
                                            {s.player2 != null ? s.player2 : "--"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={avtars[index]} alt="" />
                            </div>
                        </div>
                        
                        <div className="bg-[#131f24] text-[#f1f7f7] flex w-full justify-center text-2xl gap-4 p-2 rounded-md">
                            <div>Winner:</div>
                            <div>{s.winner ? s.winner : "--"}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-3 text-[#ffffff] text-3xl items-center justify-center bg-[#58a700] mx-5 rounded-2xl font-bold">
                <div>
                    <img src="/Logo.png" alt="" />
                </div>
                <div>{overallWinner != "Draw" ? `${overallWinner} Wins!` : "It's a Draw!"}</div>
            </div>
        </div>
    );
};

export default Score;
