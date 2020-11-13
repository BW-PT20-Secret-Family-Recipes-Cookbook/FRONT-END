
export const REGISTER  = 'REGISTER'
export const SIGN_IN = 'SIGN_IN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FETCHING_RECIPES = 'FETCHING_RECIPES';
export const GET_RECIPES = 'GET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';


export const initialState = {
    registerUser:{
        name:'',
        email:'',
        username:'',
        password:''
    },
    loginUser:{username:'',password:''},
    recipe:{
        title:'hot Pizza',
        source:'Grandma',
        ingredients:'one tea spoon of each the following',
        instructions:'step by step',
        category:'spicy food'
    },
    recipes:[],
    editing:false,
    isLoggedIn: false,
    logging: '',
    fetching: ''
    
}

const myReducer =(state=initialState,action)=>{

    switch(action.type){
        case REGISTER: 
            return{...state,registerUser:action.payload,id:Date.now()} //assigning an id to each user
        case SIGN_IN: 
            return{...state,loginUser:action.payload,logging:'logging ...'}
        case SUCCESS_LOGIN: 
            return{...state,isLoggedIn:true}
       
        case ADD_RECIPE:
            return {...state,recipes: [...state.recipes,action.payload]}
        case FETCHING_RECIPES:
            return {...state,fetching: 'fetching ...'}
        case GET_RECIPES:
            return {...state,recipes:[...state.recipes,action.payload]}
        case EDIT_RECIPE:
            return {...state,recipes:state.recipes.map(el=>{

            })}
        case DELETE_RECIPE:
            return{...state,recipes:state.recipes.map(el=>{

            })}
        default:
            return state;
    }
}
export default myReducer