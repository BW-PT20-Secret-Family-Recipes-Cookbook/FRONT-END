import React,{useContext,useState,useEffect} from 'react'
import {Link,Route,useParams,useHistory} from 'react-router-dom'
import {getRecipes, search} from '../actions'

//components
import RecipeCard from './recipeCard'
import RecipeForm from './recipeForm'

import {GlobalContext} from '../globalContext/context'


const Recipes = ()=>{
    // let user = {usename:'simo',password:'123546'}
    let recipes = useContext(GlobalContext).state.recipes;  
    let searchOn = useContext(GlobalContext).state.searchOn
    let filtered = useContext(GlobalContext).state.filteredREcipes
    
  
    
    let logging = useContext(GlobalContext).state.isLoggedIn;

    let {push}= useHistory();
    let params = useParams();

   //let' find the active card
//    let activeCard = recipes.find(item=>item.id===id.id)

 
 

        console.log('searchOn ',searchOn)
        console.log('filtered ',filtered)


    return(
       
        <div className='recipes-container'>
             <RecipeForm />
        
            <div className='recipes-list'>
            
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