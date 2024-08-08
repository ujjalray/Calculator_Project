import React, { useState } from 'react';
const Calculator = () => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');


  const handleCalculate = () => {

    if (input === '') {
      alert("Please enter a value first.");
      return;
    }

    try {

      let number = eval(input);

      if (Number.isInteger(number)) {
        setOutput(number);
      } else {
        setOutput(number.toFixed(2));
      }
    } catch (error) {
      setOutput('Error');
    }

  }


  const handleClick = (value) => {
    setInput(input + value);
  };



  const handleClear = () => {
    setInput('');
    setOutput('');
  };


  return (
    <div className="calculator">



      <div className="calculator-screen">

        <h2>{input}</h2>
        <h1>{output}</h1>
      </div>





      <div className="calculator-buttons">

        <button onClick={() => { handleClick('7') }}>7</button>
        <button onClick={() => { handleClick('8') }}>8</button>
        <button onClick={() => { handleClick('9') }}>9</button>
        <button onClick={() => { handleClick('/') }}>÷</button>


        <button onClick={() => { handleClick('4') }}>4</button>
        <button onClick={() => { handleClick('5') }}>5</button>
        <button onClick={() => { handleClick('6') }}>6</button>
        <button onClick={() => { handleClick('*') }}>*</button>


        <button onClick={() => { handleClick('1') }}>1</button>
        <button onClick={() => { handleClick('2') }}>2</button>
        <button onClick={() => { handleClick('3') }}>3</button>
        <button onClick={() => { handleClick('-') }}>-</button>


        <button onClick={() => { handleClick('0') }}>0</button>
        <button onClick={() => { handleClick('.') }}>.</button>
        <button onClick={() => { handleCalculate() }}>=</button>
        <button onClick={() => { handleClick('+') }}>+</button>




        <button className="button-ac" onClick={() => { handleClear() }}>AC</button>


      </div>


    </div>
  );
};

export default Calculator;
