import {useEffect, useRef, useState} from "react";

function HookRef() {
  const [inputValue, setInputValue] = useState("")
  const prevInputValue = useRef("")

  useEffect(() => {
    prevInputValue.current = inputValue
  }, [inputValue])

  return (
    <>
      <h2>Hook Ref</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h3>Current value: {inputValue}</h3>
      <h3>Prev value: {prevInputValue.current}</h3>
    </>
  )
}

export default HookRef