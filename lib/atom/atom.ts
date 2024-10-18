import {atom} from "recoil"
import { BsGlobeAmericas } from "react-icons/bs";
export const player1NameState = atom<string>({
    key:"player1NameState",
    default:""
}) 
export const player2NameState = atom<string>({
    key: "player2NameState",
    default: ""
}) 
export const presentCategoryStateName = atom({
    key:"presentCategoryStateNameName",
    default:""
})
export const presentCategoryStateIndex = atom<number>({
    key:"presentCategoryStateIndex",
    default:0
})
export const allCategories = atom({
    key: "allCategories",
    default: [
        { name: "science", color: "#ce82ff", completed: false },          
        { name: "geography", color: "#2b70c9", completed: false },         
        { name: "capital_cities", color: "#ff9600", completed: false },    
        { name: "society_and_culture", color: "#1cb0f6", completed: false }, 
        { name: "food_and_drink", color: "#ff4b4b", completed: false },    
        { name: "general_knowledge", color: "#4b4b4b", completed: false }  
    ]
});

export const presentQuestion = atom<number>({
    key:"presentQuestionNumber",
    default:1
})
export const  player1PresentMarksState = atom<number>({
    key:"player1PresentMarksState",
    default:0
})
export const player2PresentMarksState = atom<number>({
    key: "player2PresentMarksState",
    default: 0
})
interface scoreBoardStateSchema{
    category:string
    player1:null|number
    player2:null|number
    winner:null|string
}
export const scoreBoardState = atom<scoreBoardStateSchema[]>({
    key:"scoreBoardState",
    default: [{ category: "science", player1: null, player2: null, winner: null }, { category: "geography", player1: null, player2: null, winner: null }, { category: "capital_cities", player1: null, player2: null, winner: null }, { category: "society_and_culture", player1: null, player2: null, winner: null }, { category: "food_and_drink", player1: null, player2: null, winner: null }, { category: "general_knowledge", player1: null, player2: null, winner: null }]
})
export const completedCatsState = atom({
    key:"completedCatsState",
    default:0
})
export const Avtars = atom({
    key:"AvtarState",
    default: ["/Avtar1.png", "/Avtar2.png", "/Avtar3.png", "/Avtar4.png", "/Avtar5.png", "/Avtar6.png"]
})
// presentCategoryStateName