import React,{useContext,useState} from 'react'
import {useHistory} from 'react-router-dom'
import {GlobalContext} from '../globalContext/context'
import  axiosWithAuth from '../utils/axiosWithAuth'

const Login = ()=>{

    let {push} = useHistory();
    let {loggedIn,setLoggedIn} = useContext(GlobalContext)

    const[loginUser,setLoginUser] = useState({
        username:'',
        password:''
    });

    const handleChanges= e=>{
        e.preventDefault();
        setLoginUser({...loginUser,[e.target.name]:e.target.value})
        console.log('log in info',loginUser)

    }
    console.log('loggedIn status in login',loggedIn)
    

    const handleSubmit = e=>{
      e.preventDefault()
      axiosWithAuth()
      .post('https://cors-anywhere.herokuapp.com/https://bwpt20-recipes-backend.herokuapp.com/auth/login', loginUser)
      .then(res=>{
          console.log('res.data in login actions ', res.data);

          localStorage.setItem('token',res.data.token);
        //   localStorage.setItem('id',res.data.id); 
        setLoggedIn(true)
          push('/recipes')

      })
      .catch(err=>{
          if(err.message.includes(401)){
            console.log('This account does not exist  and error code is ' ,err)
          }
          else
          console.log(err)
         
      })

    }


    return(
        <div>
             <div>
            <h2>Please Login </h2>
            <form className='form' onSubmit={handleSubmit}>
                {/* <label>Title</label> */}
                <input type='text' name='username' value={loginUser.username} placeholder='User Name' onChange={handleChanges}/>
                <input type='password' name='password' value={loginUser.password} placeholder='Password' onChange={handleChanges}/>
               
                <button>Log In</button>

            </form>

        </div>

        </div>
    )
}
export default Login