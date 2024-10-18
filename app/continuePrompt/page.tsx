"use client";
import CategoriesCard from "@/components/userInfo/categoriesCard";
import { allCategories, presentCategoryStateName } from "@/lib/atom/atom";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

const ContinuePrompt = () => {
    const allcategories = useRecoilValue(allCategories);
    const presentCategory = useRecoilValue(presentCategoryStateName)
    const router = useRouter();
    return (
        <div className="p-4">
            <p className="text-center text-xl mb-6 text-white">
                Would you like to continue?
            </p>

            <div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-6">
                    {allcategories.map((c, index) => {
                        return (
                            <CategoriesCard
                                key={index}
                                name={c.name}
                                disable={c.completed}
                                ind={index}
                                color={c.color}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center gap-4">
                {/* Continue Button */}
                <button
                    onClick={() => {
                        router.push("/question");
                    }}
                    className="bg-[#58cc02] hover:bg-[#46a901] text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:cursor-not-allowed cursor-pointer"
                disabled={presentCategory.length==0}>
                    Continue
                </button>

                {/* End Button */}
                <button
                    onClick={() => {
                        router.push("/score");
                    }}
                    className="bg-red-600 hover:bg-red-500 text-white py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    End
                </button>
            </div>
        </div>
    );
};

export default ContinuePrompt;
