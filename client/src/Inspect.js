import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers, deleteUser} from './actions/formAction.js'

import Spinner from './spinner/spinner.js'
import './styles/Inspect.css'
import { Link } from 'react-router-dom'




class Inspect extends Component {

 

  constructor(props){
    super(props);
    this.state ={


      id_counter: 0,
    
   
    }
    this.selectUserPlus = this.selectUserPlus.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.selectUserMinus =   this.selectUserMinus.bind(this)
    this.backToStart = this.backToStart.bind(this);
  }
  componentDidMount(){
    this.props.getUsers();

    }


handleDelete(id){
  //preventDefault();
  this.props.deleteUser(id)
  this.setState(prevState=>{return{id_counter: prevState.id_counter-1}})
}

backToStart(e){
  e.preventDefault(e);
  this.setState({id_counter: 0})
}

selectUserPlus(e) {
  e.preventDefault(e);
  this.setState(prevState=>{return {id_counter: prevState.id_counter+1}})

}
selectUserMinus(e){
  e.preventDefault(e)
  this.setState(prevState=>{return{id_counter: prevState.id_counter-1}})
  
}

render(){
 

  const {id_counter} = this.state
  const list = this.props.users  
  
  if(this.props.loading){
    return(<Spinner/>)
  }else if(list.length < id_counter || list.length === 0 || id_counter < 0 || list[id_counter] === undefined){
    
    return (
     <div id="bg">
     <form className= "form"
     style={{margin:"auto"}}>
       <p>no more users to see..</p>
       <button  onClick={this.backToStart} className= "btn btn-success">Back to start</button>
       <Link to="/" class="submit"><p>Back to Main</p></Link>
       </form>
       
       </div>)
       }else if (list.length > 0){
     
  
         return(<div id="bg">
         <form className= "form"
        style={{margin:"auto"}}>
        
        <label >
        First Name: {list[id_counter].firstname}
        </label><br/>
        <label>
        Last Name: {list[id_counter].lastname}
        </label><br/>
        <label>
        User Name: {list[id_counter].user}
        </label><br/>
        <label>
        Position: {list[id_counter].position}
        </label><br/>
        
        
         <div id="buttons">
         <button  onClick={(e)=>this.selectUserMinus(e)} className= "btn btn-success">Prev.</button>
       
         <button className = "remove-btn" color="danger" size="sm" 
         onClick={()=>{this.handleDelete(list[id_counter]._id)}}>Delete user</button>
         
         <button  onClick={(e)=>this.selectUserPlus(e)} className= "btn btn-success">Next</button>
         </div>
         <Link to="/" className="submit"><p>Back to Main</p></Link>
        </form>
        </div>)
  
  
        }

    }
  }




const mapStateToProps = (state) =>({
    form: state.form.form,
    users: state.form.users, 
    loading: state.form.loading
  })

export default connect(mapStateToProps, {getUsers, deleteUser})(Inspect);
/*
 
 */