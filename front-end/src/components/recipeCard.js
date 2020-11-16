import React,{useContext} from 'react'
import {GlobalContext} from '../globalContext/context'
import {deleteRecipe,editRecipe} from '../actions'
import {useParams,useHistory,Route} from 'react-router-dom'

const RecipeCard = ({recipe})=>{
    let recipes = useContext(GlobalContext).state.recipes
    let {push}= useHistory();
    let id = useParams();

   //let' find the active card
   let activeCard = recipes.find(item=>item.id===id)
   console.log(id)

    return(
        <div>
            
            <div className='recipe-card'>
               
                <h2>Title: {recipe.title}</h2>
                <p>Source: {recipe.source}</p>
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Instructions: {recipe.instructions}</p>
                <p>Category: {recipe.category}</p>
                <div className='card-buttons'>
                    <button onClick={()=>{deleteRecipe(activeCard.id);push('/recipes')}}>Edit</button>
                    <button onClick={()=>{editRecipe(activeCard.id);push('/recipes')}}>Delete</button>
                </div>
               
            </div>
        </div>
    )
}
export default RecipeCard