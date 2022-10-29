import TodoChildCallback from "./TodoChildCallback";
import {useCallback, useState} from "react";

const TodoCallback = () => {
  console.log("render TodoCallback")

  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increase = () => {
    setCount((c) => c + 1)
  }

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"])
  }, [todos])

  return (
    <>
      <TodoChildCallback todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increase}>+</button>
      </div>
    </>
  )
}

export default TodoCallback
