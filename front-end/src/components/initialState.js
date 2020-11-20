


export const initialState = {
    registerUser:{
        name:'',
        email:'',
        username:'',
        password:'',
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


