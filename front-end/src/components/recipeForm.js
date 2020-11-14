import React,{useContext, useState} from 'react'
import {addRecipe} from '../actions'
import {GlobalContext} from '../globalContext/context'

const RecipeForm = ()=>{

    let dispatch = useContext(GlobalContext)
    console.log(dispatch.dispatchState)
    const[recipe,setRecipe] = useState({
        title:'',
        source:'',
        ingredients:'',
        instructions:'',
        category:''

    })
    const handleChanges = e=>{

       setRecipe({...recipe,[e.target.name]:e.target.value})
    }
    const handleSubmit = e=>{
       
            e.preventDefault();
            addRecipe(recipe)
      
    }

    return(
        <div>
            <h2>Add new recipe</h2>
            <form onSubmit={handleSubmit}>
                {/* <label>Title</label> */}
                <input type='text' name='title' value={recipe.title} placeholder='Title' onChange={handleChanges}/>
                <input type='text' name='source' value={recipe.source} placeholder='Source' onChange={handleChanges}/>
                <input type='text' name='ingredients' value={recipe.ingredients} placeholder='Ingredients' onChange={handleChanges}/>
                <input type='text' name='instructions' value={recipe.instructions} placeholder='Instructions' onChange={handleChanges}/>
                <input type='text' name='category' value={recipe.category} placeholder='Category' onChange={handleChanges}/>
                <button>Add Recipe</button>

            </form>

        </div>
    )
}
export default RecipeForm

