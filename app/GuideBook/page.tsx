"use client";
import AppBar from "@/components/AppBar";
import { useRouter } from "next/navigation";
import { IoHome } from "react-icons/io5";
const GuideBook = () => {
    const router = useRouter()
    return (
        <div>
            <div className="w-full bg-[#131f24] flex justify-center  h-20 fixed ">
                <div className="bg-[#6f4ea1] text-[#eeee] text-2xl flex justify-center items-center px-5 gap-2 py-4 rounded-xl cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#5a3a86] hover:text-white" onClick={() => {
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
            <div className="flex flex-col px-6 py-4 leading-6 gap-6 pt-24">
                <div className="flex flex-col gap-2 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                    <div className="text-white text-2xl font-bold">What is IQ Arena?</div>
                    <div className="text-gray-200">
                        IQ Arena is an exciting two-player quiz application that lets you
                        challenge your friends to an intense battle of knowledge and
                        intelligence. Using the Trivia API, IQ Arena fetches a wide range of
                        thought-provoking questions across different categories, ensuring
                        every match is a new and fun experience.
                    </div>
                </div>

                <div>
                    <hr className="border-gray-600" />
                </div>

                {/* How to Play Section with Box */}
                <div className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                    <h1 className="text-2xl font-bold text-white mb-4">How to Play IQ Arena</h1>

                    <ol className="list-decimal list-inside space-y-4 text-gray-300">
                        <li>
                            <strong>Enter Player Names:</strong> Begin by entering the names of both players.
                        </li>

                        <li>
                            <strong>Choose a Category:</strong> Select a category you're both interested in. IQ Arena offers 6 exciting categories to choose from:
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>General Knowledge</li>
                                <li>Science</li>
                                <li>History</li>
                                <li>Entertainment</li>
                                <li>Sports</li>
                                <li>Geography</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Start the Game:</strong> After selecting your category, click the <strong>Play Game</strong> button to begin!
                        </li>

                        <li>
                            <strong>Answer Questions in Turns:</strong> The game consists of 6 questions, and you'll take turns answering them:
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Player 1</strong> answers the 1st question.</li>
                                <li><strong>Player 2</strong> answers the 2nd question.</li>
                                <li>This alternates for all 6 questions.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>End of Round:</strong> Once all 6 questions are answered, you'll be taken to a new page where you can decide whether to continue playing or finish the game.
                        </li>

                        <li>
                            <strong>Continue or End the Game:</strong>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>If you want to continue playing, choose a category you haven’t played yet, and start another round!</li>
                                <li>If you wish to end the game, select the <strong>End Game</strong> option.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Score and Winner:</strong> When the game ends, a score sheet will be displayed showing the winner of each round and the final winner of the entire match.
                        </li>
                    </ol>
                </div>

                <div>
                    <hr className="border-gray-600" />
                </div>

                {/* How Score is Counted Section with Box */}
                <div className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                    <h1 className="text-2xl font-bold text-white mb-4">How Score is Counted</h1>

                    <div className="text-gray-300">
                        Each category in IQ Arena consists of three types of questions: <strong>Easy</strong>, <strong>Medium</strong>, and <strong>Hard</strong>.
                    </div>

                    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                        <li>
                            <strong>Easy Questions:</strong> Answering an easy question correctly earns you <strong>10 points</strong>.
                        </li>
                        <li>
                            <strong>Medium Questions:</strong> Answering a medium question correctly earns you <strong>15 points</strong>.
                        </li>
                        <li>
                            <strong>Hard Questions:</strong> Answering a hard question correctly earns you <strong>20 points</strong>.
                        </li>
                    </ul>

                    <div className="text-gray-300 mt-4">
                        The player who wins the most categories will be declared the <strong>final winner</strong>. However, if both players win an equal number of categories, the game will end in a <strong>draw</strong>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideBook;
