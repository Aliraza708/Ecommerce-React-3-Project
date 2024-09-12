import { createContext, useState } from "react";

export const themeContext = createContext()
function ThemeProvider({children}){
    const [theme,settheme]=useState("Dark")
    return(
       
      < themeContext.Provider value={{theme,settheme}}>
         {children}
       </themeContext.Provider>
    )

}
export default ThemeProvider