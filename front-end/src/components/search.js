import { findAllByAltText } from '@testing-library/react'
import React,{useState,useContext, useEffect} from 'react'
import {GlobalContext} from  '../globalContext/context'



const SearchForm = ()=>{


    // let {recipes} = useContext(GlobalContext)
    const[searchTerm,setSearchTerm] = useState('')
    
  
    const handleChanges = e=>{
        e.preventDefault();
        setSearchTerm(e.target.value)
        console.log('search values  ', searchTerm)
  
    }

    // const search = term=>{

    // recipes.map((el)=>{if(el.title.includes(term)){
    //     return filteredRecipes.push(el)
    // }})
   
    // }
    // useEffect(()=>{

    //     search(searchTerm)

    // },[searchTerm])
   

    return(
        <form>
             <input id='search-input' type='text' name='search' placeholder='Search Recipes' onChange={handleChanges} value={searchTerm}/>
        </form>
    )
}

export default SearchForm