"use client";
import { FcStart } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Startbutton = ()=>{
    const router = useRouter()
    return <button onClick={()=>{
        router.push("/userInfo")
    }} className="hover:bg-[#202f36] text-[#cfe6ec] hover:text-[#49c0f8] hover:border-4 hover:border-[#3f85a7] flex items-center text-2xl gap-2 border-4 p-3 rounded-2xl hover:font-black">
        <div className="text-3xl">
            <FcStart />
        </div>
        <div className="">
        Start Game
        </div>
    </button>
}

export default Startbutton