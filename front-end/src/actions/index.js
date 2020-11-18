
import {
    
    REGISTER_START,
    LOGIN_START,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    EDIT_RECIPE,
    FETCHING_RECIPES_START,
    FETCHING_RECIPES_SUCCESS,
    SELECTED_RECIPE,
    GET_RECIPES,
    ADD_RECIPE,
    DELETE_RECIPE,
    SEARCH
} from '../reducers';


import axiosWithAuth from '../utils/axiosWithAuth'



//Sign Up page
export const register = (registerUser)=>(dispatch)=>{

    dispatch({type:REGISTER_START});

    axiosWithAuth()
    .post('https://team-family-recipes.herokuapp.com/api/register', registerUser)
    .then(res=>{
        dispatch({type:REGISTER_SUCCESS});

        localStorage.setItem("token", res.data.token)

        console.log('res.data in register actions ', res.data)
      

    })
    .catch(err=>{
        console.log(err)
    })
}


//loggin page
export const login = (loginUser)=>(dispatch)=>{

    dispatch({type:LOGIN_START});

    axiosWithAuth()
    .post('https://team-family-recipes.herokuapp.com/api/login', loginUser)
    .then(res=>{
        
        console.log('res.data in login actions ', res.data);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('id',res.data.id); 
        dispatch({type:LOGIN_SUCCESS,payload:res.data});
        

    })
    .catch(err=>{
        console.log(err)
    })
}

//fetching recipes

export const getRecipes = ()=>dispatch=>{

    dispatch({type: FETCHING_RECIPES_START})
    axiosWithAuth()
    .get(`https://team-family-recipes.herokuapp.com/api/recipe`)
    .then(res=>{
        console.log('recipes fetched in get',res.data);

        dispatch({type:FETCHING_RECIPES_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
    })
}

//Fetch single recipe based on ID

export const getMyRecipe=id=>dispatch=>{
    axiosWithAuth()
    .get(`baseUrl/recipes/${id}`)
    .then(res=>{
        console.log(res.data);
        dispatch({type: SELECTED_RECIPE, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
    })

}



//adding recipe
export const addRecipe = (recipe)=>dispatch=>{

    
    axiosWithAuth()
    .post(`/recipes`,recipe)
    .then(res=>{
        console.log('res.data in add recipe ',res.data)
        dispatch({type: ADD_RECIPE,payload:res.data})
        

    })
    .catch(err=>{
        console.log(err)
    })
}

//Edit a recipe
export const editRecipe = id=>dispatch=>{
    
    axiosWithAuth()
    .put(`/recipes/${id}`)
    .then(res=>{
        dispatch({type:EDIT_RECIPE, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
    })
}

//Delete A RECIPE
export const deleteRecipe = id=>dispatch=>{

    axiosWithAuth()
    .delete(`/recipes/${id}`)
    .then(res=>{

    })
    .catch(err=>{
        console.log(err)
    })
}

//SEARCH
export const search = term=>dispatch=>{
    console.log('term searched ',term)
    dispatch({type:SEARCH,payload:term})
}

