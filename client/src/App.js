import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addUser} from './actions/formAction.js'
import { Link } from 'react-router-dom'
import logo from "./styles/002-paper.png"
import "./styles/index.css"
import Modal from './Modal.js'




class App extends Component {

  componentDidMount(){
  
    console.log(this.props.users)
  };

  constructor(){

    super();

    this.state={
      
      firstname: "",
      lastname:"",
      user: "",
      password:"",
      position: "",
      email:"",
      terms: false,

      showModal: false,

      form_error:{

      firstname: "",
      lastname:"",
      user: "",
      password:"",
      email:"",
      terms: ""
      },

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleTerms = this.handleTerms.bind(this)
    this.submit = this.submit.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }
  
  handleChange(input){

    
   const {name, value} = input
   
   let form_error = this.state.form_error;
  
  switch (name) {
    case "firstname":
    form_error.firstname = value.length < 3 ? "insert first name" : "";
    

    break;

    case "lastname":
    form_error.lastname = value.length < 3 ? "insert last name" : "";
  

    break;

    case "user":
    form_error.user = value.length < 3 ? "insert valid user name" : "";
    break;
    
    case "password":
    form_error.password = value.length < 3 ? "insert password" : "";
    break;

    case "email":
    form_error.email= value.includes("@") ? "" : "insert valid e-mail account"
    break;

    default:
    break;

    

  } 
  

  this.setState({form_error,[name]:value})

    
   console.log("name :" + name)
   console.log("value :"+ value)
   console.log(this.state)
  }

  closeModal(){
    
    this.setState(prevState=>({showModal: !prevState.showModal}))
    console.log('close modal')
  }
  handleTerms(e){
   
    this.setState({terms: e.target.checked}, ()=> {console.log(this.state.terms)})
  }

  submit(e){
    
      e.preventDefault();

      if(this.state.terms === false){
          this.setState({showModal: true});

          
      }else{
        const newUser={

          firstname: this.state.firstname,
          lastname: this.state.lastname,
          user: this.state.user,
          password: this.state.password,
          position: this.state.position,
          email: this.state.email,
        
          }
    
          this.props.addUser(newUser)
    
          //clear input fields
          this.setState({
    
          firstname: "",
          lastname: "",
          user: "",
          password: "",
          position: "",
          email: "",
    
          })

      }

      

  }


  
  render(){
    
   let {form_error} = this.state;
  return (
    <div className="container">

    <div className="imagelogo" >
      
    <img id="logo" src={logo} height="100" width="100" alt="logo"/>
    </div>

    <div id="bg">
      
      <form id="main-form"
      style={{margin:"auto"}}>

      <div className="row">
      <div className="col">
      <label isfor="firstname">First Name</label>
      <input type="text" id="firstname" name="firstname" value= {this.state.firstname} 
      className="form-control"
      onChange={(e)=>this.handleChange(e.target)}></input>
      <small style={danger} >{form_error.firstname}</small>
      </div>
      <div className="col">
      <label isfor="lastname" >Last Name</label>
      <input type="text" id="lastname" name="lastname" value= {this.state.lastname}
      className="form-control"
      onChange={(e)=>this.handleChange(e.target)}></input>
       <small style={danger} >{form_error.lastname}</small>
      </div>
      </div>

      <div className="form-group">
      <label isfor="username" >User Name</label>
      <input type="text" id="user" name="user" className="form-control" 
      value= {this.state.user}
      onChange={(e)=>this.handleChange(e.target)}></input><br/>
       <small style={danger} >{form_error.user}</small> 
      <label isfor="password">Password</label>
      <input type="password" id="password"name="password" value= {this.state.password}
      className="form-control"
      onChange={(e)=>this.handleChange(e.target)}></input>
       <small style={danger} >{form_error.password}</small>
      </div>

      <div className="form-group">
      <label isfor="email" >E-mail</label>
      <input type="text" id="email" name="email" value= {this.state.email} className="form-control"
      onChange={(e)=>this.handleChange(e.target)}></input>
       <small style={danger} >{form_error.email}</small>
       </div>
      
      <div className="form-group">

      <select value={this.state.position} name="position" onChange={(e) => this.handleChange(e.target)} id="position" className="form-control">
        <option value="warehouse" >warehouse</option>
        <option value="accounting" >accounting</option>
        <option value="sales" >sales</option> 
        <option value="management" >management</option>
      </select>

      </div>

      <div className="form-group">
      <div className="form-check">
     <input type="checkbox" id="accept-terms" className="form-check-input" 
      onChange={(e)=>this.handleTerms(e)}/>
     <label isfor="accept-terms" className="form-check-label">Accept terms &amp; conditions </label>
     </div>
     </div>

     <div>
       <button className="btn btn-success" onClick={this.submit}>Submit</button>
       
        <Link to="/Inspect" className="submit"><p>View Users</p></Link>
    
     </div>
    
    
      </form>
      <div className="disclaimer">
       <p>the background image and the icons belong to www.freepik.com</p>
     </div>
    <Modal className="modal" show={this.state.showModal} closeModal={this.closeModal}/>
    </div>
    </div>
    
  )
  }
}

const danger = {
  color: "red",
  fontSize: "small"
}

const mapStateToProps = (state) =>({
  form: state.form,
  users: state.user
})

export default connect(mapStateToProps, {addUser})(App);
/*

 */