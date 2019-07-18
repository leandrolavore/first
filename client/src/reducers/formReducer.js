import {ADD_USER, DELETE_USER, MODIFY_USER, INSPECT, USERS_LOADING} from '../actions/types.js'


const initialState = {

    form:{
        
        firstname: "",
        lastname:"",
        user: "",
        password:"",
        position:"",
        email:"",
        terms: true
        },


    loading: false,    
    users: []
}

function formReducer(state = initialState, action){
    
    switch(action.type){

        case ADD_USER:
        return {
            ...state,
            users :[...state.users, action.payload] 
        }
        
        case DELETE_USER:
        return {
            ...state,
            users: state.users.filter(user=>user._id!==action.payload)
        }

        case MODIFY_USER:
        return {
            ...state
        }
        
        case INSPECT:
        return {
            ...state,
            users: action.payload,
            loading: false
        }
        case USERS_LOADING:
        return {
            loading: true
        }    
       
        default: return state;



}}

export {formReducer}