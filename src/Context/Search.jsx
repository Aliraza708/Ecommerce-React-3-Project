import { createContext, useState } from "react";


export const search = createContext()
function SearchContextProvidner({children}){
  const[Search,setSearch] =useState("") 
  return(
    <search.Provider value={{Search,setSearch}}>
        {children}
    </search.Provider>
  )
}
export default SearchContextProvidner