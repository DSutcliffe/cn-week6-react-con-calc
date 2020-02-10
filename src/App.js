import React from 'react';

import './css/App.css';

function App() {
  return (
    <div>

      <div class="line1">
        <div class="display">
          <h1>0</h1>
        </div>
      </div>

      <div class="line2">
        <button class="buttonFuncA AC">AC</button>
        <button class="buttonFuncA plusMinus">+/-</button>
        <button class="buttonFuncA percent">%</button>
        <button class="buttonFuncB divide">÷</button>
      </div>

      <div class="line3">
        <button class="button seven">7</button>
        <button class="button eight">8</button>
        <button class="button nine">9</button>
        <button class="buttonFuncB multiply">x</button>
      </div>

      <div class="line4">
        <button class="button four">4</button>
        <button class="button five">5</button>
        <button class="button six">6</button>
        <button class="buttonFuncB minus">-</button>
      </div>

      <div class="line5">
        <button class="button four">1</button>
        <button class="button five">2</button>
        <button class="button six">3</button>
        <button class="buttonFuncB plus">+</button>
      </div>

      <div class="line6">
        <button class="button zero">0</button>
  
        <button class="button point">.</button>
        <button class="buttonFuncB equal">=</button>
        
      </div>
      
    </div>
  );
}

export default App;
