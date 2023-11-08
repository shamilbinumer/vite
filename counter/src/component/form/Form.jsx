import React, { Component } from 'react'

export default class Form extends Component {
    state={
        fname:""
    }
    handleKey=(e)=>{
        console.log(e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    Submit=(e)=>{
        e.preventDefault()
        const{fname,lname,age}=this.state
        console.log("fname",fname,"lname",lname,"age",age);
    }
  render() {
    return (
      <div  style={{"textAlign":"center"}}>
        <h2 style={{"textAlign":"center"}}>Form</h2>
        <div>
            <form action="" onSubmit={this.Submit}>
                <input type="text" placeholder='First name' name='fname' onChange={this.handleKey}/>
                <input type="text" placeholder='Last name' name='lname' onChange={this.handleKey}/>
                <input type="text" placeholder='Age' name='age' onChange={this.handleKey}/>
            
            <button>submit</button></form>
            </div>
      </div>
    )
  }
}
