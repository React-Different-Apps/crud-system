import {createContext, React,useReducer} from "react";
import AppReducer from './AppReducer'


export const InitialState={
    notes:[
        
    ]
}

// Create context
export const GlobalContext=createContext(InitialState)

// Global provider
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,InitialState)

    //Delete action
    const removeNote= (id) => dispatch({
        type:'REMOVE_NOTE',
        payload:id
    })

    //Add action
    const addNote= (id) => dispatch({
        type:'ADD_NOTE',
        payload:id
    })

    //Edit action
    const editNote= (id) => dispatch({
        type:'EDIT_NOTE',
        payload:id
    })

    return(
        <GlobalContext.Provider value={{notes:state.notes, removeNote,addNote,editNote}}>
           {children}
        </GlobalContext.Provider>
    )
}