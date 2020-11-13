

export const SIGN_IN = 'SIGN_IN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const ADD_RECIPES = 'ADD_RECIPES';
export const EDIT_RECIPES = 'EDIT_RECIPES';
export const DELETE_RECIPES = 'DELETE_RECIPES';


export const initialState = {
    user:{username:'',password:''},
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
    logging: ''
    
}

const myReducer =(state=initialState,action)=>{

    switch(action.type){
        case SIGN_IN: 
            return{...state,user:action.payload,logging:'logging ...'}
        case SUCCESS_LOGIN: 
            return{...state,isLoggedIn:true}
       
        case ADD_RECIPES:
            return {...state,recipe: action.payload}
        // case EDIT_RECIPES:
        //     return {...state,recipes:state.recipes.map(el=>{})}
        // case DELETE_RECIPES:
        //     return{...state,recipes:state.recipes.map(el=>{})}
        default:
            return state;
    }
}
export default myReducer