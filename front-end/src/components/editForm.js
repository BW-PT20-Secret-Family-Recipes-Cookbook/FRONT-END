import React,{useContext, useEffect, useState} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import {GlobalContext} from '../globalContext/context'
import axiosWithAuth from '../utils/axiosWithAuth'

const EditForm = ()=>{

    let {push} =useHistory();
    let {editing} = useContext(GlobalContext)

    const[recipe,setRecipe] = useState({  
        title:'',
        source:'',
        ingredients:'',
        instructions:'',
        category:''
    })
    let params = useParams();
    console.log('params in form ',params)

    // useEffect(()=>{
    //     setRecipe(recipes.find(item=>item.id===Number(params.id)))
        
    //   },[])

    const handleChanges = e=>{

       setRecipe({...recipe,[e.target.name]:e.target.value})
    }

 //adding recipe
 const addRecipe = (recipe)=>{
    
    //     console.log('recipe add in action')
    //     let newV = {recipe,id:Date.now()}
        // dispatch({type: ADD_RECIPE,payload:recipe})
        
        axiosWithAuth()
        .post(`https://bwpt20-recipes-backend.herokuapp.com/recipes/`,recipe)
        .then(res=>{
            console.log('res.data in add recipe ',res.data)
          
    
        })
        .catch(err=>{
            console.log(err)
        })
    }
//Edit a recipe
const editRecipe = id=>{
        
    axiosWithAuth()
    .put(`https://bwpt20-recipes-backend.herokuapp.com/recipes/${id}`)
    .then(res=>{
        
    })
    .catch(err=>{
        console.log(err)
    })
}
       

 
       
  

    return(
        <div>
            <h2>Add new recipe</h2>
            <form className='form'>
                {/* <label>Title</label> */}
                <input type='text' name='title' value={recipe.title} placeholder='Title' onChange={handleChanges}/>
                <input type='text' name='source' value={recipe.source} placeholder='Source' onChange={handleChanges}/>
                <input type='text' name='ingredients' value={recipe.ingredients} placeholder='Ingredients' onChange={handleChanges}/>
                <input type='text' name='instructions' value={recipe.instructions} placeholder='Instructions' onChange={handleChanges}/>
                <input type='text' name='category' value={recipe.category} placeholder='Category' onChange={handleChanges}/>

                {!editing ? <button onClick={(e)=>{ e.preventDefault();addRecipe(recipe);console.log(recipe,' added')}}>Add Recipe</button> :
                <div> <button onClick={()=>{editRecipe();push(`/recipes/${params.id}`)}}>Save</button> 
                <button onClick={()=>{editing=false;push('/recipes')}}>Cancel</button>
                </div>}

            </form>

        </div>
    )
}
export default EditForm

