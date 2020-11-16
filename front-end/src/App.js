import {useContext,useReducer} from 'react'
import './App.css';
import {Route,Link,useHistory} from 'react-router-dom'
import {Card,CardImg} from 'reactstrap'
import image from './images/recipe2.jpg'

//components
import Recipes from './components/recipes'
import Signup from './components/signUp'
import Login from './components/login'
import SearchForm from './components/search'

// import utilities
import myReducer from './reducers'
import {login} from './actions'
import {GlobalContext} from './globalContext/context'
import {initialState} from './reducers'
import PrivateRoute from './utils/privateRoute';
import RecipeCard from './components/recipeCard';



function App() {

  const[state,dispatchState] = useReducer(myReducer,initialState)
let {push} = useHistory();
  return (
    <div className="App">
     <div className='navs'>
     <Link to='/'>Home</Link>
     {/*If logged in display Logout button otherwise display log in link if not logged in. After Log out clicked route user to log in page*/}
      {!state.isLoggedIn ? <Link to='/login'>Log In</Link> : <button onClick={()=>{localStorage.setItem('token',''); state.isLoggedIn =false; push('/login')}}> Log Out </button>} 
      {!state.isLoggedIn ? <Link to ='/signUp'>Sign Up</Link>: null} {/* hide signup button if I am logged in*/}
       <Link to = '/recipes'>Recipes</Link>
      <SearchForm/>
     </div>
  
  <Route  exact path='/' >
    <Card className='card-home'>
      <CardImg src={image} alt='' width='350vw' height='300vh'/>
      <div>
      <h2>About our app</h2>
      <p>Welcome to my grandma secret recipies. Now you will have the full control on your recipies.
         You can access your recipies from anywhere securely. You will be able to add, update and delete your recipies.</p>
      </div>
     
    </Card>
   </Route>

   <GlobalContext.Provider value={{state,dispatchState}}>
     <Route exact path='/login' render={()=><Login/>}/>
     <Route path='/signup' render={()=><Signup/>}/>
     <PrivateRoute exact path='/recipes' component = {Recipes}/>
      <Route path={`/recipes/:id`}> <RecipeCard recipe={state.recipe}/></Route>
   </GlobalContext.Provider>

 
    </div>
  );
}

export default App;
