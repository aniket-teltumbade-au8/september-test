import React, { Component } from 'react'



export class HomePage extends Component {
    handleClick=()=>{
this.props.history.push("/login")
    }
    render() {
        return localStorage.getItem('user')?(
            <h1>Welcome </h1>    
        ):
        (
            <h1 onClick={this.handleClick()}>Login First</h1>
            
        
        )
    }
}
export default HomePage
