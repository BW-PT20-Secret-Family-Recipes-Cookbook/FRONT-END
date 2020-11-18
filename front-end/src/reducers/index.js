
export const REGISTER_START  = 'REGISTER_START'
export const REGISTER_SUCCESS  = 'REGISTER_SUCCESS'
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FETCHING_RECIPES_START = 'FETCHING_RECIPES_START';
export const FETCHING_RECIPES_SUCCESS = 'FETCHING_RECIPES_SUCCESS';
export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const SELECTED_RECIPE = 'SELECTED_RECIPE';
export const SEARCH = 'SEARCH';


export const initialState = {
    registerUser:{
        name:'',
        email:'',
        username:'',
        password:'',
    },
    loginUser:{
        username:'',
        password:''
    },
    recipe:{  
        title:'',
        source:'',
        ingredients:'',
        instructions:'',
        category:''
    },
    recipes:[{
        id:1,
        title:'hot Pizza',
        source:'Grandma Chef',
        ingredients:'one tea spoon of each the following',
        instructions:'step by step',
        category:'spicy food'
    },{
        id:2,
        title:'vegy Pizza',
        source:'pizza master',
        ingredients:'little bit of pepper salt and cheese and green paper and black olives ...',
        instructions:'step one head up your oven to 500 F',
        category:'pizza'
    },],
    editing:false,
    isLoggedIn: false,
    isRegistred:false,
    initialAxiosCall: '',
    fetching: '',
    searchTerm:'',
    filteredRecipes:[],
    searchOn:false
    
}

const myReducer =(state=initialState,action)=>{

    switch(action.type){
        case REGISTER_START: 
            return{...state,initialAxiosCall:'Signing Up'} 
        case REGISTER_SUCCESS: 
            return{...state,isRegistred:true,id:Date.now()} //assigning an id to each user
        case LOGIN_START: 
            return{...state,logging:'logging ...'}
        case LOGIN_SUCCESS: 
            return{...state,isLoggedIn:true,token:action.payload}
       
        case ADD_RECIPE:
            return {...state,recipes: action.payload}
        case FETCHING_RECIPES_START:
            return {...state,fetching: 'fetching ...'}
        case FETCHING_RECIPES_SUCCESS:
            return {...state,recipes:[...state.recipes,action.payload]}

        case SELECTED_RECIPE: 
            let selected = state.recipes.find(el=>el.id===action.payload.id)
        return{...state,selected}

        case EDIT_RECIPE:
           
            return {...state,recipes:[...state.recipes,state.recipes.map(el=>{
               if(el.id===action.payload.id){

                   return{ el:action.payload}
               }
            })]}
        case DELETE_RECIPE:
            return{...state,recipes:state.recipes.map(el=>{

            })}
        case SEARCH:
            console.log('search called')

            return{...state,filteredRecipes: state.recipes.filter(el=>el.name===action.payload)}
        default:
            return state;
    }
}
export default myReducer