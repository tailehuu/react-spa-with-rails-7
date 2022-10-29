import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0)
  const [calculation, setCalculation] = useState(0)

  useEffect(() => {
    setCalculation(() => count * 2)
  }, [count])

  return (
    <>
      <h1>Timer</h1>
      <p>Count: {count}</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>+</button>
      </p>
      <p>Calculation: {calculation}</p>
    </>
  )
}

export default Timer