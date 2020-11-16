import React,{useState} from 'react'


const SearchForm = ()=>{

    const[searchTerm,setSearchTerm] = useState('')
    const handleChanges = e=>{
        e.preventDefault();
        setSearchTerm({...searchTerm,[e.target.name]:e.target.value})
        console.log(searchTerm)

    }

    return(
        <form>
             <input id='search-input' type='text' name='search' placeholder='Search Recipes' onChange={handleChanges} value={searchTerm}/>
        </form>
    )
}

export default SearchForm