import { Avtars, presentCategoryStateIndex } from '@/lib/atom/atom';
import { GiSpeaker } from 'react-icons/gi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useRecoilValue } from 'recoil';
const QuestionLoaderEffect = ()=>{
    const presentCategoryIndex = useRecoilValue(presentCategoryStateIndex)
    const avtarState = useRecoilValue(Avtars)
    return <div className="flex flex-col gap-3">
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
                        <div className="text-2xl text-[#f1f7fb] font-bold tracking-wider text-center p-2">
                            <Skeleton height={70} width={500}/>
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
                        <div className="flex  w-full rounded-lg">
                            <div className=" text-[] w-[100%]  text-center font-bold text-xl">
                                <Skeleton height={40} />
                            </div>
                        </div>
                        <div className="flex  w-full rounded-lg">
                            <div className=" text-[] w-[100%]  text-center font-bold text-xl">
                                <Skeleton height={40} />
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-3">
                        <div className="flex  w-full rounded-lg">
                            <div className=" text-[] w-[100%]  text-center font-bold text-xl">
                                <Skeleton height={40} />
                            </div>
                        </div>
                        <div className="flex  w-full rounded-lg">
                            <div className=" text-[] w-[100%]  text-center font-bold text-xl">
                                <Skeleton height={40}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-2">
                <button className="flex w-fit text-xl font-bold rounded-lg cursor-pointer disabled:bg-[#38464f] disabled:text-[#4f6269]">
                    <Skeleton className='w-40' width={120} height={40}/>
                </button>
            </div>
        </div>
    </div>
}

export default QuestionLoaderEffect