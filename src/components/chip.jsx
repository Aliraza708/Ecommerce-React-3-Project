import { useContext } from "react"
import { themeContext } from "../Context/Theme"

function Chip({showcategory,isChosen,onclick}) {
    const{theme} = useContext(themeContext)
    const {name} = showcategory
    return (
        <div className={`flex flex-wrap  `}>
            <span onClick={onclick} className={`hover:bg-blue-400 cursor-pointer
                 hover:text-white text-sm  font-medium
                   shadow  px-4 py-2 ${theme=="Dark" ?  isChosen ? 'bg-blue-400 text-white' : ' text-gray-700 ':"bg-gray-700 shadow-white text-white"}`}>{name}</span>
        </div>

    )
}
export default Chip