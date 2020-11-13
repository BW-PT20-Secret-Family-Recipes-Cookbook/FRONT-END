import React,{useContext} from 'react'
import {GlobalContext} from '../globalContext/context'

const RecipeCard = ({recipe})=>{

    // let recipe = useContext(GlobalContext).state.recipe

    return(
        <div>
   
                 <div className='recipe-card'>
                <h2>Title: {recipe.title}</h2>
                <p>Source: {recipe.source}</p>
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Instructions: {recipe.instructions}</p>
                <p>Category: {recipe.category}</p>
                </div>
        </div>
    )
}
export default RecipeCard