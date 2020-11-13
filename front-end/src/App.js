import {useContext,useReducer} from 'react'
import './App.css';
import {Route,Link} from 'react-router-dom'
import {Card,CardImg} from 'reactstrap'
import image from './images/recipe2.jpg'

//components
import Recipes from './components/recipes'
import Signup from './components/signUp'
import Login from './components/login'

// import utilities
import myReducer from './reducers'
import {login} from './actions'
import {GlobalContext} from './globalContext/context'
import {initialState} from './reducers'
import PrivateRoute from './utils/privateRoute';



function App() {

  const[state,dispatchState] = useReducer(myReducer,initialState)

  return (
    <div className="App">
     <div className='navs'>
     <Link to='/'>Home</Link>
       <Link to='/login'>Log In</Link>
       <Link to ='/signUp'>Sign Up</Link>
       <Link to = '/recipes'>Recipes</Link>
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
     <PrivateRoute exact path='/recipes'>
       <Recipes/>
      </PrivateRoute>
    
   </GlobalContext.Provider>

    </div>
  );
}

export default App;
