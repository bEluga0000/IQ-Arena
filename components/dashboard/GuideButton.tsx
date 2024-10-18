"use client";
import { useRouter } from "next/navigation";
import { ImBook } from "react-icons/im";
const GuideButton = ()=>{
    const router = useRouter()
    return <div className="flex items-center gap-3 text-[#ffffff] rounded-lg border-2 p-2 cursor-pointer hover:bg-[#202f36]  hover:text-[#49c0f8] hover:border-4 hover:border-[#3f85a7]" onClick={() => {
        router.push("/GuideBook")
    }}>
        <div>
            <ImBook className="text-3xl" />
        </div>
        <div className="text-3xl font-medium">
            Giude Book
        </div>
    </div>
}
export default GuideButton