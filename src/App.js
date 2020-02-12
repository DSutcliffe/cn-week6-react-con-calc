import React, { Component } from 'react'
import './css/App.css';

// import Calcs from "./components/Calcs";

export default class App extends Component {

  state = {
    displayNumber: 0,
    firstNumber: "",
    operator: "",
    currentNumber: 0,
    firstNumberStored: false
  }

  acSelect = () => {
    this.newNumberStart()
  }

  numberSelect = (buttonPressed) => {
    const stateCopy = {...this.state}

    if(stateCopy.displayNumber === 0 && buttonPressed === 0) {
      this.newNumberStart()
    } else if(stateCopy.displayNumber === 0) {
      stateCopy.displayNumber = "";
      this.setState({
        displayNumber: stateCopy.displayNumber + buttonPressed.toString(),
        currentNumber: stateCopy.displayNumber + buttonPressed.toString()
      })
    } else {
      this.setState({
        displayNumber: stateCopy.displayNumber + buttonPressed.toString(),
        currentNumber: stateCopy.displayNumber + buttonPressed.toString()
      })
    }
  }

  newNumberStart = () => {
    console.log("RESET INITIAL VALUES")
    this.setState({
      displayNumber: 0,
      firstNumber: "",
      operator: "",
      currentNumber: 0,
      firstNumberStored: false
    })

  }

  performCalc = (operator) => {
    console.log("IN PERFORM CALC")
    switch(operator){
      case "+":
        this.addition()
        break;
      case "-":
        this.subtraction()
        break;
      case "x":
        this.multiply()
        break;
      case "÷":
        this.divide()
        break;
      case "=":
        this.equals()
        break;
      default:
        console.log("Something Went Horribly Wrong")
    }

  }

  addition = () => {
    console.log("IN ADDITION FUNCTION")
    const stateCopy = {...this.state}

    this.setState({
      operator: "+"
    })

    if(stateCopy.firstNumberStored) {
      console.log("Plus pressed before equal!")
    } else {
      console.log("Store currentNumber in firstNumber")
      this.setState({
        firstNumber: stateCopy.currentNumber,
        displayNumber: 0,
        currentNumber: 0,
        firstNumberStored: true
      })
    }

  }
  
  subtraction = () => {
    console.log("IN SUBTRACTION FUNCTION")
  
  }

  multiply = () => {
    console.log("IN MULTIPLY FUNCTION")
  
  }

  divide = () => {
    console.log("IN DIVIDE FUNCTION")
  
  }

  equals = () => {
    console.log("IN EQUALS FUNCTION")
    const stateCopy = {...this.state}

    if(stateCopy.firstNumberStored) {
      console.log("firstNumber Has Value")
      if(this.state.operator === "+") {
        this.setState({
          displayNumber: parseInt(this.state.firstNumber) + parseInt(this.state.currentNumber),
          currentNumber: parseInt(this.state.firstNumber) + parseInt(this.state.currentNumber)
        })
      }
    } else {
      console.log("firstNumber has not been stored yet")
    }

  }

  render() {

    console.log(`Display Number: ${this.state.displayNumber}`)
    console.log(`First Number: ${this.state.firstNumber}`)
    console.log(`Operator: ${this.state.operator}`)

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
        <button onClick={() => this.performCalc("÷")} className="buttonFuncB divide">÷</button>
      </div>

      <div className="line3">
        <button onClick={() => this.numberSelect(7)} className="button seven">7</button>
        <button onClick={() => this.numberSelect(8)} className="button eight">8</button>
        <button onClick={() => this.numberSelect(9)} className="button nine">9</button>
        <button onClick={() => this.performCalc("x")} className="buttonFuncB multiply">x</button>
      </div>

      <div className="line4">
        <button onClick={() => this.numberSelect(4)} className="button four">4</button>
        <button onClick={() => this.numberSelect(5)} className="button five">5</button>
        <button onClick={() => this.numberSelect(6)} className="button six">6</button>
        <button onClick={() => this.performCalc("-")} className="buttonFuncB minus">-</button>
      </div>

      <div className="line5">
        <button onClick={() => this.numberSelect(1)} className="button four">1</button>
        <button onClick={() => this.numberSelect(2)} className="button five">2</button>
        <button onClick={() => this.numberSelect(3)} className="button six">3</button>
        <button onClick={() => this.performCalc("+")} className="buttonFuncB plus">+</button>
      </div>

      <div className="line6">
        <button onClick={() => this.numberSelect(0)} className="button zero">0</button>
  
        <button className="button point">.</button>
        <button onClick={() => this.performCalc("=")} className="buttonFuncB equal">=</button>
        
      </div>
      
    </div>
    )
  }
}