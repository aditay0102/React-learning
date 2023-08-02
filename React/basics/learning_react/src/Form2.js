import React from "react";
import { Component } from "react/cjs/react.production.min";

export default class Forms2 extends React.Component{

    constructor(){
        super()
        this.state={
            user:null,
            password:null,
        }
    }


    submit(){
        console.log(this.state)
    }


    render(){
        return(
            <div>
        <h1>Input Form</h1>
        <br></br>
        <br></br>
        <input type="text" user="user"
            onChange={(e)=>{this.setState(
                {
                    user: e.target.value
                }
            )}}
        />
        <br></br>
        <br></br>
        <input type="password" user="password" 
            onChange={(e)=>{
                this.setState({
                    password: e.target.value
                })
            }}
        />
        <br></br>
        <br></br>
        <button onClick={()=>{this.submit()}}>Submit Form</button>
        </div>
        )
    }
    


}