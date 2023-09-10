import { useState } from "react"

export default function Counter(){
    const [count ,setCount]=useState(0);
    console.log(count);
    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount);
    }
    return (
        <div style={{border:'2px solid yellow',padding:'20px'}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}