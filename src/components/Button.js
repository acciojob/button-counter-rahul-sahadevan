import React,{useState} from "react";


function Increase(){
    let [count,setCount]= useState(0);

    function handleCount(){
        setCount(count+1);
    }

    return(
        <>
        <p>Button cliked {count} times</p>
        <button onClick={handleCount}>Click me</button>
        </>
    )
}
export default Increase