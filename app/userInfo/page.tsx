"use client";
import AppBar from "@/components/AppBar";
import RoutingButton from "@/components/RoutingButton"
import CategoriesCard from "@/components/userInfo/categoriesCard"
import { allCategories, player1NameState, player2NameState, presentCategoryStateName, presentQuestion } from "@/lib/atom/atom";
import { useRouter } from "next/navigation";

import { useRecoilValue, useSetRecoilState } from "recoil";

const Details = () => {
    // here add the user name recoil cast
    const router = useRouter()
    const allcategories = useRecoilValue(allCategories)
    const presentCategory = useRecoilValue(presentCategoryStateName);
    const setPlayer1Name = useSetRecoilState(player1NameState)
    const setPlayer2Name = useSetRecoilState(player2NameState)
    const player1Name = useRecoilValue(player1NameState)
    const player2Name = useRecoilValue(player2NameState)
    const presentQuestionNumber = useRecoilValue(presentQuestion)
    const setPresentQuestionNumber = useSetRecoilState(presentQuestion)
    return <div className="flex flex-col gap-2 ">
        <div className="flex flex-col px-4 ">
            <div className="md:grid  w-full md:grid-cols-2   flex flex-col gap-3   bg-[#131f24] ">
                <div className="flex flex-col">
                    <div className="text-md text-[#52656d] font-semibold">
                        Player1
                    </div>
                    <div>
                        <input type="text" placeholder="Player 1" value={player1Name}
                            onChange={(e) => {
                                setPlayer1Name(e.target.value)
                            }}
                            className=" text-xl w-full  p-2 outline-none bg-transparent border-b-white border-b text-[#cfe6ec]" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-md text-[#52656d] font-semibold">
                        Player 2
                    </div>
                    <div>
                        <input type="text" placeholder="Player 2" value={player2Name} onChange={(e) => {
                            setPlayer2Name(e.target.value)
                        }}
                            className=" text-xl w-full  p-2 outline-none bg-transparent border-b-white border-b text-[#cfe6ec]" />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
        <div className="w-full flex justify-center text-2xl text-white font-bold mt-2">
            Select category
        </div>
        <div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-6 mx-1 md:mx-4">
                {
                    allcategories.map((c, index) => {
                        return <CategoriesCard name={c.name} disable={c.completed} ind={index} color={c.color} />
                    })
                }
            </div>
        </div>
        <div className="text-lg text-[#ffff] justify-center flex my-5 w-full" >
            <button className="bg-[#6f4ea1] text-[#eeee] text-2xl flex justify-center items-center px-5 gap-2 py-4 rounded-xl cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#5a3a86] hover:text-white disabled:cursor-not-allowed w-4/5" disabled={presentCategory.length == 0 || player1Name.length == 0 || player2Name.length == 0 || player1Name == player2Name} onClick={() => {
                router.push("/question")
            }}
            >
                Submit
            </button>
        </div>
    </div>

}
export default Details