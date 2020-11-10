import React from 'react'

//components
import RecipeCard from './recipeCard'
import RecipeForm from './recipeForm'

const Recipes = ()=>{

    return(
        <div>
            <h1>List Of Recipes </h1>
            
            <RecipeForm/>
            <RecipeCard/>
           

        </div>
    )
}
export default Recipes