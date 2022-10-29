import { useState } from "react";
import Car from "../components/Car";
import Football from "../components/Football";
import Garage from "../components/Garage";
import Todos from "../components/Todos";

const Home = () => {
  const cars = [
    { id: 1, name: "Audi" },
    { id: 2, name: "BMW" },
    { id: 3, name: "Toyota" }
  ]

  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(["todo 1", "todo 2"])

  const increase = () => {
    setCount((c) => c + 1)
  }

  return (
    <>
      <h1>Home</h1>

      <Car brand="Ford" />

      <Football />

      <Garage cars={cars} />

      {/* TODO: why Todos component is re-render here? */}
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increase}>+</button>
      </div>
    </>
  )
}

export default Home
