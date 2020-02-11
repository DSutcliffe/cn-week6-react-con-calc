import React, { Component } from 'react'
import './css/App.css';

// import Calcs from "./components/Calcs";

export default class App extends Component {

  state = {
    displayNumber: 0,
    currentNumber: "",
    firstNumber: "",
    secondNumber: "",
    operator: "",
    sum: 0
  }

  recordEntry = (buttonPressed) => {
    console.log(buttonPressed);

    const stateCopy = {...this.state}
    
    switch(buttonPressed) {
      case "ac":
        this.newNumberStart()
        break;

      case 0:
        if(stateCopy.displayNumber === 0) {
          this.newNumberStart()
        } else {
          this.setCurrentNumber(stateCopy.displayNumber, buttonPressed.toString())
        }
        break;

      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        if(stateCopy.displayNumber === 0) {
          stateCopy.displayNumber = "";
          this.setCurrentNumber(stateCopy.displayNumber, buttonPressed.toString())
        } else {
          this.setCurrentNumber(stateCopy.displayNumber, buttonPressed.toString())
        }
        break;

      case "÷":
        console.log("IN DIVIDE CASE")
    
        break;

      case "x":
        console.log("IN MULTIPLY CASE")
   
        break;

      case "-":
        console.log("IN MINUS CASE")
     
        break;

      case "+":
        console.log("IN ADDITION CASE")
        
        if (stateCopy.displayNumber > 0) {
          this.addition(stateCopy.displayNumber)
        }
       
        break;

      case "=":
        console.log("IN EQUAL CASE")
        this.setState({
          secondNumber: stateCopy.displayNumber
        })
        this.equals()
       
        break;

      case "+/-":
        console.log("Function Not Yet Supported")
        break;

      case "%":
        console.log("Function Not Yet Supported")
        break;

      case ".":
        console.log("Function Not Yet Supported")
        break;

      default:
        console.log("Calulator Failed!")
    }
    
  }

  newNumberStart = () => {
    console.log("TRYING TO RESET TO 0")
    this.setState({
      displayNumber: 0,
      currentNumber: "",
      firstNumber: 0,
      secondNumber: 0,
      sum: 0
    })
    console.log(`NewNumberStart ${this.state.displayNumber}`)
  }

  setCurrentNumber = (displayNo, buttonPressed) => {
    this.setState({
      displayNumber: displayNo + buttonPressed
    })
  }

  addition = (displayNo) => {
    if (this.state.firstNumber === "") {
      this.setState({
        operator: "+",
        firstNumber: displayNo
      })
    } else {
      this.setState({
        operator: "+",
        secondNumber: displayNo
      })
    }
  }

  equals = () => {
    console.log(`equals secondNumber ${this.state.secondNumber}`)
    if(this.state.operator === "+") {
      this.setState({
        sum: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)
      })
    }
  }

  render() {

    console.log(`Display Number: ${this.state.displayNumber}`)
    console.log(`Current Number: ${this.state.currentNumber}`)
    console.log(`First Number: ${this.state.firstNumber}`)
    console.log(`Operator: ${this.state.operator}`)
    console.log(`Second Number: ${this.state.secondNumber}`)
    console.log(`SUM: ${this.state.sum}`)

    return (
      <div>

      <div className="line1">
        <div className="display">
          <h1>{this.state.displayNumber}</h1>
        </div>
      </div>

      <div className="line2">
        <button onClick={() => this.recordEntry("ac")} className="buttonFuncA AC">AC</button>
        <button onClick={() => this.recordEntry("+/-")} className="buttonFuncA plusMinus">+/-</button>
        <button onClick={() => this.recordEntry("%")} className="buttonFuncA percent">%</button>
        <button onClick={() => this.recordEntry("÷")} className="buttonFuncB divide">÷</button>
      </div>

      <div className="line3">
        <button onClick={() => this.recordEntry(7)} className="button seven">7</button>
        <button onClick={() => this.recordEntry(8)} className="button eight">8</button>
        <button onClick={() => this.recordEntry(9)} className="button nine">9</button>
        <button onClick={() => this.recordEntry("x")} className="buttonFuncB multiply">x</button>
      </div>

      <div className="line4">
        <button onClick={() => this.recordEntry(4)} className="button four">4</button>
        <button onClick={() => this.recordEntry(5)} className="button five">5</button>
        <button onClick={() => this.recordEntry(6)} className="button six">6</button>
        <button onClick={() => this.recordEntry("-")} className="buttonFuncB minus">-</button>
      </div>

      <div className="line5">
        <button onClick={() => this.recordEntry(1)} className="button four">1</button>
        <button onClick={() => this.recordEntry(2)} className="button five">2</button>
        <button onClick={() => this.recordEntry(3)} className="button six">3</button>
        <button onClick={() => this.recordEntry("+")} className="buttonFuncB plus">+</button>
      </div>

      <div className="line6">
        <button onClick={() => this.recordEntry(0)} className="button zero">0</button>
  
        <button onClick={() => this.recordEntry(".")} className="button point">.</button>
        <button onClick={() => this.recordEntry("=")} className="buttonFuncB equal">=</button>
        
      </div>
      
    </div>
    )
  }
}