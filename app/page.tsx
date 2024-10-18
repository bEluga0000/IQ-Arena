import AppBar from "@/components/AppBar";
import GuideButton from "@/components/dashboard/GuideButton";
import Startbutton from "@/components/dashboard/startButton";
import Image from "next/image";
import { ImBook } from "react-icons/im";

export default function Home() {
  return (
    <div className="flex mt-40">
      <div className="flex flex-col items-center justify-center px-6 gap-10">
        <div className="text-[#ffffff] text-3xl text-center font-bold leading-10 ">
          Fight for the crown of intelligence! Challenge your friends and see who reigns supreme in the IQ Arena!
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="">
            <Startbutton />
          </div>
          <div>
            <GuideButton />
          </div>
        </div>
      </div>
    </div>
  );
}
