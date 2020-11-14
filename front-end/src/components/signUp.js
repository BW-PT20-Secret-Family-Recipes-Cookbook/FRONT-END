import React,{useState,useContext} from 'react'
import {GlobalContext} from '../globalContext/context'
import {register} from '../actions'
import {useHistory} from 'react-router-dom'

const Signup = ()=>{

    const initialUser = useContext(GlobalContext).state.registerUser
    console.log(initialUser)
    const[user,setUser]= useState(initialUser)
    let {push}= useHistory();

    const handleChanges= e=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
        console.log('Sign Up info',user)
    
    }
     //reset the form
        // setLoginUser({
        //     username:'',
        //     password:''
        // })
        const handleSubmit = e=>{
            register(user);
    
            push('/login')
        }

    return(
        <div>
          
            <h2>Please Sign Up </h2>
            <form onSubmit={handleSubmit}>
                {/* <label>Title</label> */} 
                 <input type='text' name='name' value={user.name} placeholder='Name' onChange={handleChanges}/>
                <input type='email' name='email' value={user.email} placeholder='Email' onChange={handleChanges}/>
                <input type='text' name='username' value={user.username} placeholder='User Name' onChange={handleChanges}/>
                <input type='password' name='password' value={user.password} placeholder='Password' onChange={handleChanges}/>
               
                <button>Sign Up</button>

            </form>
        </div>
    )
}
export default Signup