import SIGN_IN from '../reducers';
import FETCH_RECIPES from '../reducers';
import SUCCESS_LOGIN from '../reducers'
import ADD_RECIPES from '../reducers';
import EDIT_RECIPES from '../reducers';
import DELETE_RECIPES from '../reducers';

import axiosWithAuth from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

export const login = (user)=>(dispatch)=>{

    dispatch({type:SIGN_IN,payload: user});

    axiosWithAuth()
    .post('http://locathost:3000', user)
    .then(res=>{
        console.log('res.data in login actions ', res.data)
        dispatch({type:SUCCESS_LOGIN})

    })
    .catch(err=>{
        console.log(err)
    })
}

