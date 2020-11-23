import React,{useContext} from 'react'
import {GlobalContext} from '../globalContext/context'
import {Route,Link,useHistory, useParams} from 'react-router-dom'
import SearchForm from '../components/search'

const Navs = ()=>{
    let {loggedIn,setLoggedIn} = useContext(GlobalContext)
    let {push} =useHistory();
    const logOut = ()=>{
        localStorage.removeItem('token'); 
        setLoggedIn (false); 
        push('/login')

    }


    return(

        <div >
            {loggedIn
             ? 
            <div className='navs'>
             <Link to='/'>Home</Link>
             <Link className='logout-button' onClick={()=>{logOut()}}> Log Out </Link>
             <Link to = '/recipes'>Recipes</Link>
            <SearchForm /> 
            </div>
            :
            <div className='navs'>
             <Link to='/'>Home</Link>
  
            <Link to='/login'>Log In</Link>
            <Link to ='/signUp'>Sign Up</Link> 
     </div>

            }



      
     
     </div>
    )
}
export default Navs