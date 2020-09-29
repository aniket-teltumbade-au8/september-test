import React, { Component } from 'react'
import '../css/calculator.css'
import { Link } from "react-router-dom";
export class Calculator extends Component {
    state={
        expression1:'',
        expression2:'',
        value:'',
        operators:''
    }
    handleButton=(event)=>{
        if(this.state.operators==''){
        this.setState({
         expression1:this.state.expression1+event.target.value   
        })
    }
    else{
        this.setState({
        expression2:this.state.expression2+event.target.value   
        })
    }
    }
    handleOps=(event)=>{
        if(this.state.expression1!=='' && this.state.operators==''){
        this.setState({
            operators:event.target.value   
           })
        }
    }
    handleResult=()=>{
        if(this.state.expression1!=='' && this.state.expression2!=='' && this.state.operators!==''){
            if(this.state.operators==='+'){
                
                this.setState({
                    value:Number(this.state.expression1)+Number(this.state.expression2)
                })
            }
            if(this.state.operators==='-'){
                
                this.setState({
                    value:Number(this.state.expression1)-Number(this.state.expression2)
                })
            }
            if(this.state.operators==='*'){
                
                this.setState({
                    value:Number(this.state.expression1)*Number(this.state.expression2)
                })
            }
            if(this.state.operators==='/'){
                
                this.setState({
                    value:Number(this.state.expression1)/Number(this.state.expression2)
                })
            }
        }
    }
    render() {
        return (
            <div className="calculator">
    <input type="text" className="calculator-screen" value={this.state.value} disabled />
  <input type="text" className="calculator-screen" value={this.state.expression1+this.state.operators+this.state.expression2} disabled />
  
  <div className="calculator-keys">
    
    <button type="button" className="operator" onClick={this.handleOps} value="+">+</button>
    <button type="button" className="operator" onClick={this.handleOps} value="-">-</button>
    <button type="button" className="operator" onClick={this.handleOps} value="*">&times;</button>
    <button type="button" className="operator" onClick={this.handleOps} value="/">&divide;</button>

    <button type="button" onClick={this.handleButton} value="7">7</button>
    <button type="button" onClick={this.handleButton} value="8">8</button>
    <button type="button" onClick={this.handleButton} value="9">9</button>


    <button type="button" onClick={this.handleButton} value="4">4</button>
    <button type="button" onClick={this.handleButton} value="5">5</button>
    <button type="button" onClick={this.handleButton} value="6">6</button>


    <button type="button" onClick={this.handleButton} value="1">1</button>
    <button type="button" onClick={this.handleButton} value="2">2</button>
    <button type="button" onClick={this.handleButton} value="3">3</button>


    <button type="button" onClick={this.handleButton} value="0">0</button>
    <button type="button" className="equal-sign" onClick={this.handleResult} value="=">=</button>

  </div>
</div>
        );
    }
}

export default Calculator
