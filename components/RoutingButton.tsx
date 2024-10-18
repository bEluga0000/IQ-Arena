"use client";
import { BASE_URL } from "@/lib/urls";
import { useRouter } from "next/navigation"

interface ButtonSchema {
    holder:string
    page:string
}
const RoutingButton = ({holder,page}:ButtonSchema)=>{
    const router = useRouter()
    return <button onClick={()=>{
        router.push(`${BASE_URL}${page}`)
    }}>
        {holder}
    </button>
}
export default RoutingButton