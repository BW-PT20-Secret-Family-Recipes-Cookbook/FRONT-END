
import {REGISTER} from '../reducers';
import {SIGN_IN} from '../reducers';
import {FETCHING_RECIPES} from '../reducers';
import {SUCCESS_LOGIN} from '../reducers'
import {GET_RECIPES} from '../reducers'
import {ADD_RECIPE} from '../reducers';
import {EDIT_RECIPES} from '../reducers';
import {DELETE_RECIPES} from '../reducers';

import axiosWithAuth from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'


//Sign Up page
export const register = (registerUser)=>(dispatch)=>{

    dispatch({type:REGISTER,payload: registerUser});

    axiosWithAuth()
    .post('baseUrl/login', registerUser)
    .then(res=>{

        console.log('res.data in register actions ', res.data)
      

    })
    .catch(err=>{
        console.log(err)
    })
}


//loggin page
export const login = (loginUser)=>(dispatch)=>{

    dispatch({type:SIGN_IN,payload: loginUser});

    axiosWithAuth()
    .post('baseUrl/login', loginUser)
    .then(res=>{
        console.log('res.data in login actions ', res.data)
        localStorage.setItem('token',res.data.token)
        dispatch({type:SUCCESS_LOGIN})

    })
    .catch(err=>{
        console.log(err)
    })
}

//fetching recipes

export const getRecipes = ()=>dispatch=>{

    dispatch({type: FETCHING_RECIPES})
    axiosWithAuth()
    .get(`baseUrl/recipes`)
    .then(res=>{
        console.log(res.data);
        dispatch({type: GET_RECIPES, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
    })
}



//adding recipe
export const addRecipe = (recipe)=>dispatch=>{

    
    axiosWithAuth()
    .post(`baseUrl/recipes/${recipe.id}`,recipe)
    .then(res=>{
        console.log('res.data in add recipe ',res.data)
        dispatch({type: ADD_RECIPE,payload:res.data})
        

    })
    .catch(err=>{
        console.log(err)
    })
}

//EDIT A RECIPE
export const editRecipe = id=>dispatch=>{

    axiosWithAuth()
    .put(`baseUrl/recipes/${id}`)
    .then(res=>{

    })
    .catch(err=>{
        console.log(err)
    })
}

//Delete A RECIPE
export const deleteRecipe = id=>dispatch=>{

    axiosWithAuth()
    .delete(`baseUrl/recipes/${id}`)
    .then(res=>{

    })
    .catch(err=>{
        console.log(err)
    })
}

