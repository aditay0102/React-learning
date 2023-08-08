import React, { Component } from 'react'
import './App.css'

// =---------------------=====================         Listing with map fuction

class App extends Component {
  // make constructor and state
  // save some names in state
  // use map function  for make liting of names 

  constructor(){
    super();
    this.state={
      list:[
        {name:'adi',phone:'2343',email:'aditya@gma8i.com'},
        {name:'ghj',phone:'4564',email:'aditya@gma8i.com'},
        {name:'sdfs',phone:'5678',email:'thakur@gma8i.com'},


      ]
    }
  }

  render() {
    return (
      <div className="App">       
        
        <h1>Form validation</h1>

        {
          this.state.list.map((item)=>
            <div>
              Name:-<span>{item.name}</span>
              Phone:-<span>{item.phone}</span>
              Email:-<span>{item.email}</span>
            </div>
          )
        }
        
       
      </div>
    )
  }
}

export default App
