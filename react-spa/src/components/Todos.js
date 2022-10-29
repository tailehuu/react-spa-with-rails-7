import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("render Todos")
  console.log(todos)

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>
      })}
    </>
  )
}

export default memo(Todos)