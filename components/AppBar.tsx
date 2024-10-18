import { ImBook } from "react-icons/im";
const AppBar = ()=>{
    return <div className="flex items-center justify-between px-5  p-2 h-20  fixed w-screen top-0 bg-[#131f24] border-b-2 border-b-[#131f24] shadow-lg">
        <div className="flex items-center gap-5">
            <div>
                <img src="/Logo.png" alt="" className="h-16 w-12 bg-transparent"/>
            </div>
            <div className="text-4xl font-black text-[#58cc02]">
                IQ Arena
            </div>
        </div>
    </div>
}
export default AppBar