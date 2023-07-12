import React from "react";

let count = 0;
    let increaseCount = () =>{
        count++;
    }

const Counter = () => {
    return (
        <div>
        <p>Button Clicked {count} times</p>
        <br></br>
        <button id="clickMe" onClick={increaseCount}>Click me</button>
        </div>
    )
}

export default Counter;