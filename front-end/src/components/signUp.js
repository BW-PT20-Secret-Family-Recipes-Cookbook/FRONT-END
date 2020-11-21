import React,{useState,useContext} from 'react'
import {GlobalContext} from '../globalContext/context'
import {useHistory} from 'react-router-dom'
import  axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'

const Signup = ()=>{

    let {push}= useHistory();
    let {loggedIn,setLoggedIn} = useContext(GlobalContext)
   
   
    const[user,setUser]= useState({
        name:'',
        email:'',
        username:'',
        password:'',
    })

    console.log('loggedIn status in signup',loggedIn)

    const handleChanges= e=>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
        console.log('Sign Up user info',user)
    
        }


    
        const handleSubmit = e=>{
            e.preventDefault();
           
            axios
            .post(`https://cors-anywhere.herokuapp.com/https://bwpt20-recipes-backend.herokuapp.com/auth/register`, user)
            .then(res=>{
                console.log('sign up response ',res.data)
             
              
                push('/login')
            })
            .catch(err=>{
                console.log('somehing wrong the error is ',err.message)
            })
        }

    return(
        <div>
            <h2>Please Sign Up </h2>

            <form className='form' onSubmit={handleSubmit}>
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