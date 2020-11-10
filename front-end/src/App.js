
import './App.css';
import {Route,Link} from 'react-router-dom'

//components
import Recipes from './components/recipes'
import Signup from './components/signUp'
import Login from './components/login'

function App() {


  return (
    <div className="App">
     <h1>Build recipe secret</h1>
     <div className='navs'>
       <Link to='/login'>Log In</Link>
       <Link to ='/signUp'>Sign Up</Link>
       <Link to = '/recipes'>Receipes</Link>
     </div>

     <Route exact path='/login' render={()=><Login/>}/>
     <Route path='/signup' render={()=><Signup/>}/>
     <Route exact path='/recipes' render={()=><Recipes/>}/>

    </div>
  );
}

export default App;
