import React, { Component } from 'react'
import './css/App.css';

// import Calcs from "./components/Calcs";

export default class App extends Component {

  state = {
    displayNumber: 0,
    storedNumber: "",
    currentNumber: "",
    operator: "",
    sum: 0
  }

  recordEntry = (buttonPressed) => {
    console.log(buttonPressed);
    console.log(typeof(buttonPressed));

    const stateCopy = {...this.state}

    // if(stateCopy.displayNumber === 0) {
    //   stateCopy.displayNumber = "";
    // }
    
    // this.setState({
    //   displayNumber: stateCopy.displayNumber + buttonPressed.toString()
    // })

    switch(buttonPressed) {
      case "ac":
        this.setState({
          displayNumber: 0,
          currentNumber: "",
          storedNumber: ""
        })
        break;
      case 0:
        if(stateCopy.displayNumber === 0) {
          this.setState({
            displayNumber: 0,
            currentNumber: "",
            storedNumber: ""
          })
        } else {
          this.setState({
            displayNumber: stateCopy.displayNumber + buttonPressed.toString(),
            currentNumber: stateCopy.displayNumber + buttonPressed.toString(),
            storedNumber: stateCopy.displayNumber + buttonPressed.toString()
          })
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
          this.setState({
            displayNumber: stateCopy.displayNumber + buttonPressed.toString(),
            currentNumber: stateCopy.displayNumber + buttonPressed.toString(),
            storedNumber: stateCopy.displayNumber + buttonPressed.toString()
          })
        } else {
          this.setState({
            displayNumber: stateCopy.displayNumber + buttonPressed.toString(),
            currentNumber: stateCopy.displayNumber + buttonPressed.toString(),
            storedNumber: stateCopy.displayNumber + buttonPressed.toString()
          })
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

        if (this.state.currentNumber > 0) {
          this.setState({
            operator: "+"
          })
          console.log("OPERATORE SET TO +")
        }
       
        break;
      case "=":
        console.log("IN EQUAL CASE")
        if (this.state.operator === "+") {
          this.setState({
            sum: this.state.currentNumber + this.state.displayNumber
          })
        } 
        // else if (this.state.operator === "-") {
        //   this.setState({
        //     sum: this.state.currentNumber - this.state.displayNumber
        //   })
        // } 
        // else if (this.state.operator === "x") {
        //   this.setState({
        //     sum: this.state.currentNumber * this.state.displayNumber
        //   })
        // } 
        // else if (this.state.operator === "÷") {
        //   this.setState({
        //     sum: this.state.currentNumber / this.state.displayNumber
        //   })
        // }
       
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

  render() {

    console.log(`Stored Number: ${this.state.currentNumber}`)
    console.log(`Display Number: ${this.state.displayNumber}`)

    return (
      <div>

      <div className="line1">
        <div className="display">
          <h1>{this.state.displayNumber}</h1>
        </div>
      </div>

      <div className="line2">
        <button onClick={() => this.recordEntry("ac")} id="ac" className="buttonFuncA AC">AC</button>
        <button onClick={() => this.recordEntry("+/-")} id="+/-" className="buttonFuncA plusMinus">+/-</button>
        <button onClick={() => this.recordEntry("%")} id="%" className="buttonFuncA percent">%</button>
        <button onClick={() => this.recordEntry("÷")} id="÷" className="buttonFuncB divide">÷</button>
      </div>

      <div className="line3">
        <button onClick={() => this.recordEntry(7)} className="button seven">7</button>
        <button onClick={() => this.recordEntry(8)} className="button eight">8</button>
        <button onClick={() => this.recordEntry(9)} id="9" className="button nine">9</button>
        <button onClick={() => this.recordEntry("x")} id="x" className="buttonFuncB multiply">x</button>
      </div>

      <div className="line4">
        <button onClick={() => this.recordEntry(4)} id="4" className="button four">4</button>
        <button onClick={() => this.recordEntry(5)} id="5" className="button five">5</button>
        <button onClick={() => this.recordEntry(6)} id="6" className="button six">6</button>
        <button onClick={() => this.recordEntry("-")} id="-" className="buttonFuncB minus">-</button>
      </div>

      <div className="line5">
        <button onClick={() => this.recordEntry(1)} id="1" className="button four">1</button>
        <button onClick={() => this.recordEntry(2)} id="2" className="button five">2</button>
        <button onClick={() => this.recordEntry(3)} id="3" className="button six">3</button>
        <button onClick={() => this.recordEntry("+")} id="+" className="buttonFuncB plus">+</button>
      </div>

      <div className="line6">
        <button onClick={() => this.recordEntry(0)} id="0" className="button zero">0</button>
  
        <button onClick={() => this.recordEntry(".")} id="." className="button point">.</button>
        <button onClick={() => this.recordEntry("=")} id="=" className="buttonFuncB equal">=</button>
        
      </div>
      
    </div>
    )
  }
}