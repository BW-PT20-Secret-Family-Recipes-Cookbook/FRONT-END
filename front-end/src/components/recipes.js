import React,{useContext,useState,useEffect} from 'react'
import {Link,Route,useParams,useHistory} from 'react-router-dom'
import axios from 'axios'


//components
import RecipeCard from './recipeCard'
import RecipeForm from './addRecipeForm'

import {GlobalContext} from '../globalContext/context'
import axiosWithAuth from '../utils/axiosWithAuth'


const Recipes = ()=>{

    let {recipes,setRecipes,searchOn,filteredRecipes} = useContext(GlobalContext);  
    // let {push}= useHistory();
    // let params = useParams();

   //let' find the active card
//    let activeCard = recipes.find(item=>item.id===id.id)


useEffect(()=>{
    axios
    .get('https://cors-anywhere.herokuapp.com/https://bwpt20-recipes-backend.herokuapp.com/recipes')
    .then(res=>{
        // console.log('recipes fetched from server ', res.data)
        setRecipes(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[])

 
//   console.log('searchOn',searchOn)

 


    return(
       
        <div className='recipes-container'>
             <RecipeForm/>
             <h3>List of Recipes</h3>
            <div className='recipes-list'>
                

            {searchOn ? 
            
            filteredRecipes.map(recipe=>{

                return ( <div className='recipe-card'>

                    <Link to={`/recipes/${recipe.id}`}>
                        
                        
                            <h2>Title: {recipe.recipe_name}</h2>
                            <p>Source: {recipe.source}</p>
                            {/* <p>Ingredients: {recipe.ingredients}</p> */}
                            {/* <p>Instructions: {recipe.instructions}</p> */}
                            <p>Category: {recipe.category}</p>
                        
                    </Link>
                
                        </div>
                )
                }) : 

            recipes.map(recipe=>{

                return ( <div className='recipe-card'>
              
                    <Link to={`/recipes/${recipe.id}`}>
                         
                        
                            <h2>Title: {recipe.recipe_name}</h2>
                            <p>Source: {recipe.source}</p>
                            {/* <p>Ingredients: {recipe.ingredients}</p> */}
                            {/* <p>Instructions: {recipe.instructions}</p> */}
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