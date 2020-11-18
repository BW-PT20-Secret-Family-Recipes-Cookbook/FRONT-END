import React,{useContext,useState} from 'react'
import {login} from '../actions'
import {useHistory} from 'react-router-dom'
import {GlobalContext} from '../globalContext/context'

const Login = ()=>{
let {push} = useHistory();
// let login = useContext(GlobalContext).login
let user = useContext(GlobalContext).state.loginUser; //logging user info from reducer
console.log('login and user ',user)

const[loginUser,setLoginUser] = useState(user);

const handleChanges= e=>{
    e.preventDefault();
    setLoginUser({...loginUser,[e.target.name]:e.target.value})
    console.log('log in info',loginUser)

}
 //reset the form
 const reset=()=>{
    setLoginUser({
        username:'',
        password:''
    })
 }
    
    const handleSubmit = e=>{
        login(loginUser);

        push('/recipes')
        reset();
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