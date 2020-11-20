import React,{useContext,useEffect,useState} from 'react'
import {GlobalContext} from '../globalContext/context'
import axiosWithAuth from '../utils/axiosWithAuth'

import {useParams,useHistory,Route} from 'react-router-dom'

const RecipeCard = ()=>{
    let {recipes,editing} = useContext(GlobalContext)
    let {push}= useHistory();
    let params = useParams();
  
    console.log('params',params)

   //let' find the active card
   let recipe = recipes.find(item=>item.id===Number(params.id));


  
//Delete A RECIPE
    const deleteRecipe = id=>{

    axiosWithAuth()
    .delete(`https://bwpt20-recipes-backend.herokuapp.com/recipes/${id}`)
    .then(res=>{

    })
    .catch(err=>{
        console.log(err)
    })
}
   

  

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
                <button onClick={()=>{{editing=true};push(`/updateRecipe/${Number(params.id)}`)}}>Edit</button>
                </div>
               
            </div>
           
        </div>
    )
}
export default RecipeCard