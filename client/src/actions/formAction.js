import {ADD_USER, DELETE_USER, INSPECT, USERS_LOADING} from '../actions/types.js'
import axios from 'axios'

export const addUser = (newUser) => dispatch =>{
    
    axios 
    .post('/api/user', newUser)
    .then(res => dispatch({
        type: ADD_USER,
        payload: res.data
    }))
    .catch(function (error) {
        console.log(error.response);
   });
}
    

export const deleteUser = (id) => dispatch =>{
        axios
        .delete(`/api/user/${id}`)
        .then(res => dispatch({
            type: DELETE_USER,
            payload: id
        }))
        .catch(function (error) {
            console.log(error.response);
       });}

export const usersLoading = () =>{

    return{
        type: USERS_LOADING
    }
}
export const getUsers = () => dispatch =>{
    dispatch(usersLoading());
    axios 
    .get('/api/user')
    .then(res => dispatch({
        type: INSPECT,
        payload: res.data
    }))
    .catch(function (error) {
        console.log(error.response);
   });
}
