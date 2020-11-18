import React,{useState,useContext, useEffect} from 'react'
import {GlobalContext} from  '../globalContext/context'
import {search} from '../actions'


const SearchForm = (recipes,filteredREcipes)=>{


   console.log('recipes in search',recipes)
    const[searchTerm,setSearchTerm] = useState('')
    
  
    const handleChanges = e=>{
        e.preventDefault();
        setSearchTerm(e.target.value)
        console.log('search values  ', searchTerm)
  
    }
    useEffect(()=>{

        search(searchTerm)
    },[searchTerm.length>0])
   

    return(
        <form>
             <input id='search-input' type='text' name='search' placeholder='Search Recipes' onChange={handleChanges} value={searchTerm}/>
        </form>
    )
}

export default SearchForm