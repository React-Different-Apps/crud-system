import {createContext, React,useReducer} from "react";
import AppReducer from './AppReducer'


export const InitialState={
    notes:[
        {id:1, title:'first note', details: 'note 1 desc'},
        {id:2, title:'sec note', details: 'note 2 desc'},
        {id:3, title:'third note', details: 'note 3 desc'},
    ]
}

// Create context
export const GlobalContext=createContext(InitialState)

// Global provider
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,InitialState)

    return(
        <GlobalContext.Provider value={{notes:state.notes}}>
           {children}
        </GlobalContext.Provider>
    )
}