import { findAllByAltText } from '@testing-library/react'
import React,{useState,useContext, useEffect} from 'react'
import {GlobalContext} from  '../globalContext/context'



const SearchForm = ()=>{


  let {recipes,setFilteredRecipes,setSearchOn} = useContext(GlobalContext)
    const[searchTerm,setSearchTerm] = useState('')
    
  
    const handleChanges = e=>{
        e.preventDefault();
        setSearchTerm(e.target.value)
      
  
    }


    useEffect(()=>{

        if(searchTerm.length>0){ //set search On once I start typing
            // search recipes based on title or category
            setFilteredRecipes(recipes.filter(el=>(el.recipe_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            el.category.toLowerCase().includes(searchTerm.toLowerCase()))))
            setSearchOn(true)
        }
        else{
            //if search input is emty set the filtered data in empty []
            // reset search mode to off
            setSearchOn(false)
            setFilteredRecipes([])
        }
        

    },[searchTerm])
   

    return(
        <form >
             <input id='search-input' type='text' name='search' placeholder='Search Recipes' onChange={handleChanges} value={searchTerm}/>
        </form>
    )
}

export default SearchForm