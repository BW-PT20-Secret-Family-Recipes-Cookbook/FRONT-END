import React,{useContext} from 'react'
import {login} from '../actions'
import {useHistory} from 'react-router-dom'
import {GlobalContext} from '../globalContext/context'

const Login = ()=>{
let {push} = useHistory();
// let login = useContext(GlobalContext).login
let user = useContext(GlobalContext).state.recipe

console.log('login and user ',user)
    return(
        <div>
            <h1 onClick={()=>{
              login(user)  ;
                push('/recipes')
            }}>Login Page</h1>

        </div>
    )
}
export default Login