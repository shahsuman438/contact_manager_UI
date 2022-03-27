import { createContext, useReducer } from "react"
import darkmodeReducer from "./darkmodeReducer"

const initialState={
    darkMode:false
}

export const darkmodeContext=createContext(initialState)

export const DarkmodeContextProvider=({children})=>{
    const [state,dispatch]=useReducer(darkmodeReducer,initialState);
    return (
        <darkmodeContext.Provider value={{darkMode:state.darkMode,dispatch}} >
            {children}
        </darkmodeContext.Provider>
    )
}