import React,{useContext, useEffect, useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

import {GlobalContext} from '../globalContext/context'

const RecipeForm = ()=>{


    let {push} =useHistory();
    let {recipes,editing,setRecipes} = useContext(GlobalContext)
    // console.log("context recipes in add form ",recipes)
 
    let params = useParams();

    const[recipe,setRecipe,setEditing] = useState(
        {  
        title:'',
        source:'',
        ingredients:'',
        instructions:'',
        category:''
    })

    // console.log('params in form ',params)
    // console.log('status of editing ',state.editing)
   

 

    const handleChanges = e=>{
        // let newVal= {[e.target.name]:e.target.value,id:Date.now()}

       setRecipe({...recipe,[e.target.name]:e.target.value})
    }


    //adding recipe
    const addRecipe = (recipe)=>{
    
    //     console.log('recipe add in action')
    //     let newV = {recipe,id:Date.now()}
        // dispatch({type: ADD_RECIPE,payload:recipe})
        
        axiosWithAuth()
        .post(`https://bwpt20-recipes-backend.herokuapp.com/recipes/`,recipe)
        .then(res=>{
            console.log('res.data in add recipe ',res.data)
            setRecipes(...recipes,res.data)
          
    
        })
        .catch(err=>{
            console.log(err)
        })
    }
    

    //Save  changes
        const saveRecipe = id=>{
        
        axiosWithAuth()
        .put(`https://bwpt20-recipes-backend.herokuapp.com/recipes/${id}`)
        .then(res=>{

            setEditing(true)
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

  
    return(
        <div>
            <h2>Add new recipe</h2>
            <form className='form'>
                {/* <label>Title</label> */}
                <input type='text' name='title' value={recipe.title} placeholder='Title' onChange={handleChanges}/>
                <input type='text' name='source' value={recipe.source} placeholder='Source' onChange={handleChanges}/>
                <input type='text' name='ingredients' value={recipe.ingredients} placeholder='Ingredients' onChange={handleChanges}/>
                <input type='text' name='instructions' value={recipe.instructions} placeholder='Instructions' onChange={handleChanges}/>
                <input type='text' name='category' value={recipe.category} placeholder='Category' onChange={handleChanges}/>

                {!editing ? <button onClick={(e)=>{ e.preventDefault();addRecipe(recipe);console.log('New Recipe added in form ',recipe,
                 'and new recipes ',recipes)}}>Add Recipe</button> :
                <div> <button onClick={()=>{editing=false;saveRecipe()}}>Save</button> 
                <button onClick={()=>{editing=false;push('/recipes')}}>Cancel</button>
                </div>}

            </form>

        </div>
    )
}
export default RecipeForm

