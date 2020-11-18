import React,{useContext, useEffect, useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import {addRecipe,editRecipe} from '../actions'
import {GlobalContext} from '../globalContext/context'

const RecipeForm = ()=>{

    let {push} =useHistory();
    let state = useContext(GlobalContext).state
    console.log('status of editing ',state.editing)
    const[recipe,setRecipe] = useState(state.recipe)
    let params = useParams();
    console.log('params in form ',params)
    const handleChanges = e=>{

       setRecipe({...recipe,[e.target.name]:e.target.value})
    }

  
    // useEffect(()=>{
    //     let res = (state.recipes.find(item=>item.id===Number(params.id)))
    //     setRecipe(res)

    // },[params.id])
        // setRecipe(state.recipes.find(item=>item.id===Number(params.id)))
       console.log('recipes ',state.recipes )
  

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

                {!state.editing ? <button onClick={(e)=>{ e.preventDefault();addRecipe(recipe);console.log(recipe,' added')}}>Add Recipe</button> :
                <div> <button onClick={()=>{editRecipe()}}>Save</button> 
                <button onClick={()=>{state.editing=false;push('/recipes')}}>Cancel</button>
                </div>}

            </form>

        </div>
    )
}
export default RecipeForm

