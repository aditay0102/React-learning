import React, { Component } from 'react'
import './App.css'



class App extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      password:"",
      nameError:"",
      passwordError:"" 
    }
  }

  valid(){
    if(!this.state.name.includes("@") && this.state.password.length<5){
      this.setState({nameError:"invalid form",passwordError:"Password Length should be more than 5"})
    }
    else if(!this.state.name.includes("@")){
      this.setState({nameError:"inavalid form"})
    }
    else if(this.state.password.length<5){
      this.setState({passwordError:"Password length should be more than 5"})
    }
  }

  submit(){
    if(this.valid()){
      alert("form has been submited")

    }
  }

  render() {
    return (
      <div className="App">       
        
        <h1>Form validation</h1>
        
        <label>text</label><br></br>
        <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}} />
        <p style={{color:"red"}} >{this.state.nameError}</p>
        <br></br>
        <label>password</label><br></br>
        <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
        <p style={{color:"red"}} > {this.state.passwordError} </p>
        <button onClick={()=> this.submit()} > submit</button>
      </div>
    )
  }
}

export default App
