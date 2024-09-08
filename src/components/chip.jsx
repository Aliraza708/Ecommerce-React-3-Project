
function Chip({showcategory,isChosen,onclick}) {

    // console.log(isChosen)
    
    const {name} = showcategory
    return (
        <div className="flex flex-wrap ">
            <span onClick={onclick} className={`hover:bg-blue-400 cursor-pointer
                 hover:text-white text-sm  font-medium
                  shadow  px-4 py-2 ${isChosen ? 'bg-blue-400 text-white' : ' text-gray-700'}`}>{name}</span>
        </div>

    )
}
export default Chip