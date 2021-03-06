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
<<<<<<< HEAD
=======
import Navs from './components/navs'
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b

// import utilities

import {GlobalContext} from './globalContext/context'
import PrivateRoute from './utils/privateRoute';
import RecipeCard from './components/recipeCard';





function App() {
  let {push} = useHistory();

  let {recipes,loggedIn,filteredRecipes,setFilteredRecipes,searchOn,setSearchOn} =useContext(GlobalContext);

  console.log('filtred data in app ', filteredRecipes)


  return (
    <div className="App">
<<<<<<< HEAD
     <div className='navs'>
=======
      <Navs/>
     {/* <div className='navs'>
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
    <Link to='/'>Home</Link>
   
      {loggedIn ?  
      <Link className='logout-button' onClick={()=>{localStorage.removeItem('token'); loggedIn =false; push('/login')}}> Log Out </Link>:
      <Link to='/login'>Log In</Link>
      
       }
       
     {!loggedIn ?  
     <Link to ='/signUp'>Sign Up</Link> : 
     null}  



      
       <Link to = '/recipes'>Recipes</Link>
       <SearchForm />
<<<<<<< HEAD
     </div>
=======
     </div> */}
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
  
  <Route  exact path='/' >
    <Card className='card-home'>
      <CardImg src={image} alt='' width='350vw' height='300vh'/>
      <div>
<<<<<<< HEAD
      <h2>About our app</h2>
=======
      <h3>All Recipes are under radar with one touch</h3>
>>>>>>> 792ebee403e52688eedefc1175c5bbf56433ef7b
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

  
      <p className='rights'>Kitchen Secret Familly Recipes Coockbook @WBPT20,2020</p>
 
    </div>
  );
}

export default App;
