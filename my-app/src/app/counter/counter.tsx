"use client"
import { useState } from "react";

export default function CounterPageRealId() {
    const [count, setCount]  = useState(0)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incremenet</button>
        </div>
    )
}