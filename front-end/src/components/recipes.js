import React,{useContext} from 'react'
import {Link,Route,useParams,useHistory} from 'react-router-dom'

//components
import RecipeCard from './recipeCard'
import RecipeForm from './recipeForm'

import {GlobalContext} from '../globalContext/context'


const Recipes = ()=>{
    // let user = {usename:'simo',password:'123546'}
  
    let recipes = useContext(GlobalContext).state.recipes;  
    let logging = useContext(GlobalContext).state.isLoggedIn;

    let {push}= useHistory();
    let id = useParams();

   //let' find the active card
   let activeCard = recipes.find(item=>item.id===id)

   console.log('activeCard ',id)

        console.log('context in recipes ',useContext(GlobalContext))

    return(
       
        <div className='recipes-container'>
             <RecipeForm />
        
            <div className='recipes-list'>
            <h1>List Of Recipes </h1>
            {recipes.map(recipe=>{

                return ( <div className='recipe-card'>
                    <Link to={`/recipes/${recipe.id}`}>
                            <h2>Title: {recipe.title}</h2>
                            <p>Source: {recipe.source}</p>
                            <p>Ingredients: {recipe.ingredients}</p>
                            <p>Instructions: {recipe.instructions}</p>
                            <p>Category: {recipe.category}</p>
                    </Link>
                        </div>
                )
            })}
            
                    
      
            </div>
        </div>
    )
}
export default Recipes