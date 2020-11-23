import React,{useContext, useEffect, useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'
import {GlobalContext} from '../globalContext/context'
<<<<<<< HEAD
=======
import axios from 'axios'
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b



const RecipeForm = ()=>{

    let {push} =useHistory();
    let {recipes,editing,setRecipes} = useContext(GlobalContext)
    // console.log("context recipes in add form ",recipes)
 
    let params = useParams();

    const[recipe,setRecipe,setEditing] = useState(
        {  
        recipe_name:'',
        source:'',
        // ingredients:'',
        // instructions:'',
        category:''
    })

    // console.log('params in form ',params)
    // console.log('status of editing ',state.editing)
<<<<<<< HEAD
=======
    const getRecipes = ()=>{
        axios
        .get('https://cors-anywhere.herokuapp.com/https://bwpt20-recipes-backend.herokuapp.com/recipes')
        .then(res=>{
            setRecipes(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
   

 

    const handleChanges = e=>{
<<<<<<< HEAD
        // let newVal= {[e.target.name]:e.target.value,id:Date.now()}

       setRecipe({...recipe,[e.target.name]:e.target.value})
    }
=======
       
       setRecipe({...recipe,[e.target.name]:e.target.value})
    }
    const reset= ()=>{
        setRecipe(
            {  
            recipe_name:'',
            source:'',
            // ingredients:'',
            // instructions:'',
            category:''
        })
    }
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b


    //adding recipe
    const addRecipe = (recipe)=>{
    
    //     console.log('recipe add in action')
    //     let newV = {recipe,id:Date.now()}
        // dispatch({type: ADD_RECIPE,payload:recipe})
        
        axiosWithAuth()
        .post(`https://cors-anywhere.herokuapp.com/https://bwpt20-recipes-backend.herokuapp.com/recipes/`,recipe)
        .then(res=>{
            console.log('res.data in add recipe ',res.data)
<<<<<<< HEAD
=======
            getRecipes();
           reset();

>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
           push('/recipes')
          
    
        })
        .catch(err=>{
            console.log(err)
        })
    }
   
  
    return(
        <div className='add-form'>
            <h2>Add new recipe</h2>
            <form className='form'>
                {/* <label>Title</label> */}
                <input type='text' name='recipe_name' value={recipe.recipe_name} placeholder='Title' onChange={handleChanges}/>
                <input type='text' name='source' value={recipe.source} placeholder='Source' onChange={handleChanges}/>
                {/* <input type='text' name='ingredients' value={recipe.ingredients} placeholder='Ingredients' onChange={handleChanges}/> */}
                {/* <input type='text' name='instructions' value={recipe.instructions} placeholder='Instructions' onChange={handleChanges}/> */}
                <input type='text' name='category' value={recipe.category} placeholder='Category' onChange={handleChanges}/>

               <button onClick={(e)=>{ e.preventDefault();addRecipe(recipe);console.log('New Recipe added in form ',recipe,
                 'and new recipes ',recipes)}}>Add Recipe</button> 
                

            </form>

        </div>
    )
}
export default RecipeForm

