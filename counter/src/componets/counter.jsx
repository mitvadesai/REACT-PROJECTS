import { useState } from "react";
import './counter.css'

const Counter = () => {
    const [Count, setcount] = useState(0);

    const handleInc = () => {
        setcount(Count + 1)
    }
    const handleDec = () => {
        setcount(Count - 1)
    }
    const reset = () => {
        setcount(0)
    }
    return (
        <div class="card">
            <h1>counter app</h1>
            <h2>Count : {Count}</h2>
            <button onClick={handleInc}>increment</button>
            <button onClick={reset}>reset</button>
            <button className="btn" onClick={handleDec}
            disabled={Count === 0}>decrement</button>
          
        </div>
    )
}
export default Counter;