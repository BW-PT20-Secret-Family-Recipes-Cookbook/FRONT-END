import React,{useContext,useReducer} from 'react'
import './App.css';
import {Route,Link,useHistory, useParams} from 'react-router-dom'
import {Card,CardImg} from 'reactstrap'
import image from './images/recipe2.jpg'

//components
import Recipes from './components/recipes'
import Signup from './components/signUp'
import Login from './components/login'
import SearchForm from './components/search'
import EditForm from './components/editForm'

// import utilities

import {GlobalContext} from './globalContext/context'
import PrivateRoute from './utils/privateRoute';
import RecipeCard from './components/recipeCard';





function App() {
  let {push} = useHistory();

  let {recipes,loggedIn} =useContext(GlobalContext);


  return (
    <div className="App">
     <div className='navs'>
    <Link to='/'>Home</Link>
   
      {!loggedIn ?  
      <Link to='/login'>Log In</Link> :
      <button onClick={()=>{localStorage.setItem('token',''); loggedIn =false; push('/login')}}> Log Out </button> }
       
     {!loggedIn ?  
      <Link to ='/signUp'>Sign Up</Link>: 
     null} 



      
       <Link to = '/recipes'>Recipes</Link>
       <SearchForm />
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

  
     <Route exact path='/login' render={()=><Login/>}/>
     <Route path='/signup' component={Signup}/>
     <PrivateRoute exact path='/recipes' component = {Recipes}/>
     <Route path={`/recipes/:id`}> <RecipeCard /></Route>
     <Route path={'/updateRecipe/:id'}><EditForm /></Route> 

  

 
    </div>
  );
}

export default App;
