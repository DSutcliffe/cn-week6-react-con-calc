import React, { Component } from 'react'
import './css/App.css';

// import Calcs from "./components/Calcs";

class App extends Component {

  state = {
    displayNumber: 0,
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  }

  acSelect = () => {
    this.setState({
      displayNumber: 0,
      input: ""
    })
  }

  zeroSelect = (buttonPressed) => {
    if(this.state.input !== "") {
      this.setState({
        displayNumber: this.state.input + buttonPressed,
        currentNumber: this.state.input + buttonPressed,
        input: this.state.input + buttonPressed
      })
    }
  }

  numberSelect = (buttonPressed) => {
    this.setState({
      displayNumber: this.state.input + buttonPressed,
      currentNumber: this.state.input + buttonPressed,
      input: this.state.input + buttonPressed
    })
  }

  decimalSelect = (buttonPressed) => {
    // if(this.state.input.indexOf(".") === -1) {
    //   this.setState({
    //     displayNumber: this.state.input + buttonPressed,
    //     input: this.state.input + buttonPressed
    //   })
    // }
  }

  addition = () => {
    console.log("IN ADDITION FUNCTION")
    
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "+"
    })

  }
  
  subtraction = () => {
    console.log("IN SUBTRACTION FUNCTION")
    
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "-"
    })
  }

  multiply = () => {
    console.log("IN MULTIPLY FUNCTION")

    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "x"
    })
  }

  divide = () => {
    console.log("IN DIVIDE FUNCTION")
  
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "÷"
    })
  }

  equals = () => {
    console.log("IN EQUALS FUNCTION")
    // this.setState({
    //   currentNumber: this.state.input,
    // })

    if(this.state.operator === "+") {
      console.log("IN + EQUAL")
      this.setState({
        displayNumber: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber),
        input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
      })
    } else if(this.state.operator === "-") {
      console.log("IN - EQUAL")
      this.setState({
        displayNumber: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber),
        input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
      })
    } else if(this.state.operator === "x") {
      console.log("IN x EQUAL")
      this.setState({
        displayNumber: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber),
        input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
      })
    } else if(this.state.operator === "÷") {
      console.log("IN / EQUAL")
      this.setState({
        displayNumber: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber),
        input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
      })
    } 

  }

  render() {
    console.log(`Previous Number: ${this.state.previousNumber}`)
    console.log(`Input: ${this.state.input}`)
    console.log(`Operator: ${this.state.operator}`)
    console.log(`Currrent: ${this.state.currentNumber}`)
    console.log(`Display: ${this.state.displayNumber}`)

    return (
      <div>

      <div className="line1">
        <div className="display">
          <h1>{this.state.displayNumber}</h1>
        </div>
      </div>

      <div className="line2">
        <button onClick={() => this.acSelect()} className="buttonFuncA AC">AC</button>
        <button className="buttonFuncA plusMinus">+/-</button>
        <button className="buttonFuncA percent">%</button>
        <button onClick={() => this.divide("÷")} className="buttonFuncB divide">÷</button>
      </div>

      <div className="line3">
        <button onClick={() => this.numberSelect(7)} className="button seven">7</button>
        <button onClick={() => this.numberSelect(8)} className="button eight">8</button>
        <button onClick={() => this.numberSelect(9)} className="button nine">9</button>
        <button onClick={() => this.multiply("x")} className="buttonFuncB multiply">x</button>
      </div>

      <div className="line4">
        <button onClick={() => this.numberSelect(4)} className="button four">4</button>
        <button onClick={() => this.numberSelect(5)} className="button five">5</button>
        <button onClick={() => this.numberSelect(6)} className="button six">6</button>
        <button onClick={() => this.subtraction("-")} className="buttonFuncB minus">-</button>
      </div>

      <div className="line5">
        <button onClick={() => this.numberSelect(1)} className="button four">1</button>
        <button onClick={() => this.numberSelect(2)} className="button five">2</button>
        <button onClick={() => this.numberSelect(3)} className="button six">3</button>
        <button onClick={() => this.addition("+")} className="buttonFuncB plus">+</button>
      </div>

      <div className="line6">
        <button onClick={() => this.zeroSelect(0)} className="button zero">0</button>
  
        <button onClick={() => this.decimalSelect(".")} className="button decimal">.</button>
        <button onClick={() => this.equals("=")} className="buttonFuncB equal">=</button>
        
      </div>
      
    </div>
    )
  }
}

export default App;