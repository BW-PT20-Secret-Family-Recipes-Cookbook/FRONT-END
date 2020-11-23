import React,{useContext,useState,useEffect} from 'react'
import {Link,Route,useParams,useHistory} from 'react-router-dom'
import axios from 'axios'


//components
import RecipeCard from './recipeCard'
import RecipeForm from './addRecipeForm'

import {GlobalContext} from '../globalContext/context'
import axiosWithAuth from '../utils/axiosWithAuth'


const Recipes = ()=>{
<<<<<<< HEAD
    // let user = {usename:'simo',password:'123546'}
    let {recipes,setRecipes,searchOn,filteredRecipes} = useContext(GlobalContext);  

  
    console.log('recipes in recipes ', recipes)


    let {push}= useHistory();
    let params = useParams();

   //let' find the active card
//    let activeCard = recipes.find(item=>item.id===id.id)
=======

    let {recipes,setRecipes,searchOn,filteredRecipes} = useContext(GlobalContext);  
    // let {push}= useHistory();
    // let params = useParams();

   //let' find the active card
//    let activeCard = recipes.find(item=>item.id===id.id)


>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
useEffect(()=>{
    axios
    .get('https://cors-anywhere.herokuapp.com/https://bwpt20-recipes-backend.herokuapp.com/recipes')
    .then(res=>{
<<<<<<< HEAD
        console.log('recipes fetched from server ', res.data)
=======
        // console.log('recipes fetched from server ', res.data)
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
        setRecipes(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[])

 
<<<<<<< HEAD
  console.log('searchOn',searchOn)
=======
//   console.log('searchOn',searchOn)
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b

 


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