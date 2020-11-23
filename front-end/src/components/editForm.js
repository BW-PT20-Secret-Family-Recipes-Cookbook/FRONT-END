import React,{useContext, useEffect, useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import {GlobalContext} from '../globalContext/context'
import axiosWithAuth from '../utils/axiosWithAuth'
import Recipes from './recipes'
import axios from 'axios'

const EditForm = ()=>{

    let {push} =useHistory();
    let {editing,setRecipes,recipes} = useContext(GlobalContext)

    const[recipe,setRecipe] = useState({  
        recipe_name:'',
        source:'',
        // ingredients:'',
        // instructions:'',
        category:''
    })
    let params = useParams();
    console.log('params in edit form ',params)

    useEffect(()=>{
        setRecipe(recipes.find(item=>item.id===Number(params.id)))
        
      },[])

    const handleChanges = e=>{

       setRecipe({...recipe,[e.target.name]:e.target.value})
    }

    //Save changes recipe
    const saveRecipe =()=>{
<<<<<<< HEAD
       
    axios
    .put(`https://cors-anywhere.herokuapp.com/https://bwpt20-recipes-backend.herokuapp.com/recipes/:${params.id}`)
=======
        console.log('recipe is updated before axios call ',recipe )

    axios
        .put(`https://cors-anywhere.herokuapp.com/https://bwpt20-recipes-backend.herokuapp.com/recipes/${params.id}`)
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
    .then(res=>{

        console.log('updated data',res.data)
        push(`/recipes/${params.id}`)
    })
    .catch(err=>{
<<<<<<< HEAD
        console.log(err)
=======
        console.log('recipe unsuccessfully updated with error ',err.message)
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
    })
}
       

 
       
  

    return(
        <div className='edit-form'>
            <h2>Add new recipe</h2>
            <form className='form'>
                {/* <label>Title</label> */}
                <input type='text' name='recipe_name' value={recipe.recipe_name} placeholder='Title' onChange={handleChanges}/>
                <input type='text' name='source' value={recipe.source} placeholder='Source' onChange={handleChanges}/>
                {/* <input type='text' name='ingredients' value={recipe.ingredients} placeholder='Ingredients' onChange={handleChanges}/> */}
                {/* <input type='text' name='instructions' value={recipe.instructions} placeholder='Instructions' onChange={handleChanges}/> */}
                <input type='text' name='category' value={recipe.category} placeholder='Category' onChange={handleChanges}/>
                <div className='edit-buttons'>
                    
<<<<<<< HEAD
                 <button onClick={()=>{saveRecipe();push(`/recipes/${params.id}`)}}>Save</button> 
=======
                 <button onClick={(e)=>{e.preventDefault();saveRecipe()}}>Save</button> 
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
                <button onClick={()=>{editing=false;push('/recipes')}}>Cancel</button>
               
                
                </div>

            </form>

        </div>
    )
}
export default EditForm

