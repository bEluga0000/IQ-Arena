import { presentCategoryStateName, presentCategoryStateIndex } from "@/lib/atom/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AiFillStar } from "react-icons/ai"; 
import { ImCross } from "react-icons/im";
import React, { ReactNode } from "react";

interface CategoriesCardInterface {
    name: string;
    disable: boolean;
    ind: number;
    color: string;
}

const CategoriesCard = ({ name, disable, ind, color }: CategoriesCardInterface) => {
    const presentCategory = useRecoilValue(presentCategoryStateName);
    const setPresentCategory = useSetRecoilState(presentCategoryStateName);
    const setPresentCategoryIndex = useSetRecoilState(presentCategoryStateIndex);

    return (
        <div className={`  flex justify-center w-full `}>
            <div className={`flex flex-col items-center border border-gray-700 w-fit ${disable ? "cursor-not-allowed" : "cursor-pointer"} h-52 w-full items-center justify-center rounded-2xl bg-gray-800 gap-2 `}>
                <div
                    className={`w-28 h-28  rounded-full flex justify-center items-center p-4  `}
                    onClick={() => {
                        if (!disable) {
                            setPresentCategory(name);
                            setPresentCategoryIndex(ind);
                        }
                    }}
                    style={presentCategory == name ? { backgroundColor: "#58cc02" } : disable ? { backgroundColor: "#ffc800" }:{backgroundColor:color}}
                >
                    {disable ? <ImCross className="text-white text-4xl"/> :<AiFillStar className="text-white text-5xl" />}
                </div>

                <div className={` text-white text-md md:text-lg py-1 px-4 rounded-md group-hover:bg-[#1a1a1a]   shadow-md transition-shadow duration-300 hover:shadow-xl`} style={presentCategory == name ? { backgroundColor: "#58cc02" } : disable ? { backgroundColor: "#ffc800" } : { backgroundColor: color }}>
                    {name}
                </div>
            </div>
            
        </div>
    );
};

export default CategoriesCard;
