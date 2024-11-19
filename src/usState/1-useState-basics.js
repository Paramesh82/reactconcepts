import React, { useState } from "react";
/*
    useState is a Hook that lets you add state to only function components
    useState should only be declared inside a function component
    useState returns an array with two elements
    The first element is the current state value
    The second element is a state setter function
    You can pass the initial state to useState
    useState(initialState) returns an array [state, setState]
    You can have multiple useState in one component
    useState is a named export from react
*/
const Index = () => {
  console.log(useState(0));
  const [value, setVaule] = useState(10);

  const incrementCount = () => {
    setVaule((preValue) => preValue + 1);
    setVaule((preValue) => preValue + 1);
    //setVaule(value + 1);
  };

  const decrementCount = () => {
    setVaule((preValue) => preValue - 1);
    setVaule((preValue) => preValue - 1);
   // setVaule(value - 1);
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{value}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Index;
