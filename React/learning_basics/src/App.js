import logo from './logo.svg';
import './App.css';
import React from 'react';



// free apis in  // reqres.in

class App extends React.Component{
  constructor(){
    super();
    this.state={
      users: null
    }
  }

  componentDidMount(){  // used to fetch api and store it 
    fetch('https://reqres.in/api/users').then((resp)=>{
      resp.json().then((result)=>{
        console.log(result.data) // here .data is the particular data we needed  
        this.setState({users:result.data}) // storing the data 
      })
    })
  }


  render(){
    return(
      <div className='App'>
        <h1>Fetch Api Data</h1>

      { 
        this.state.users ?
        this.state.users.map((item,i)=> // here i is the serial number or key
          
        <div>
          <p>{i}---
            {item.first_name}
            {item.last_name}
            ---
            {item.email}
          </p>
        </div>
        )
        :
        null
      }
      </div>

    );
  }
}

export default App;