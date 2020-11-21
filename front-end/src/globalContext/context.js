
import React,{createContext,useState} from 'react';
import {initialState} from '../components/initialState'

export const GlobalContext = createContext();

const ContextProvider= ({children})=>{

    const[recipes,setRecipes] = useState(initialState.recipes)
    const[filteredRecipes,setFilteredRecipes] = useState([])

    const[loggedIn,setLoggedIn] = useState(localStorage.getItem('token')? true:false)
    const[editing,setEditing] = useState(false)
    const[searchOn,setSearchOn] = useState(false)

    return (
        <GlobalContext.Provider value={{recipes,setRecipes,loggedIn,setLoggedIn,
        filteredRecipes,setFilteredRecipes,editing,setEditing,searchOn,setSearchOn}}>

            {children}

        </GlobalContext.Provider>
    )
} 
export default ContextProvider
