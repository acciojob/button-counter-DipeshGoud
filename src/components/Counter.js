import react from "react";

let count = 0;
{
    let clickme = document.getElementById("clickMe");
    clickme.addEventListner('click',increaseCount);

    let increaseCount = () =>{
        count++;
    }
}

const Counter = () => {
    return (
        <div>
        <p>Button Clicked {count} times</p>
        <br></br>
        <button id="clickMe">Click me</button>
        </div>
    )
}

export default Counter;