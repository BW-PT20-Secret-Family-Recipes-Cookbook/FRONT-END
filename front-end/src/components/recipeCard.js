import React,{useContext,useEffect,useState} from 'react'
import {GlobalContext} from '../globalContext/context'
import {deleteRecipe,editRecipe} from '../actions'
import {useParams,useHistory,Route} from 'react-router-dom'

const RecipeCard = ()=>{
    let state = useContext(GlobalContext).state
    let {push}= useHistory();
    let params = useParams();
  
    console.log('params',params)

   //let' find the active card
   let recipe = state.recipes.find(item=>item.id===Number(params.id));


  

   

  

    return(
        <div>
            
            <div className='recipe-card'>
           
                <h2>Title: {recipe.title}</h2>
                <p>Source: {recipe.source}</p>
                <p>Ingredients: {recipe.ingredients}</p>
                <p>Instructions: {recipe.instructions}</p>
                <p>Category: {recipe.category}</p>
                <div className='card-buttons'>
                   <button onClick={()=>{deleteRecipe(recipe.id);}}>Delete</button>
                <button onClick={()=>{{state.editing=true};push(`/updateRecipe/${Number(params.id)}`)}}>Edit</button>
                </div>
               
            </div>
           
        </div>
    )
}
export default RecipeCard