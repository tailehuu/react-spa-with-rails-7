import { useState } from "react";
import Component2 from "./Component2";

function Component1() {
  const [user, setUser] = useState("Tai LE")

  return (
    <>
      <h1>Props drilling</h1>

      <h2>Component 1</h2>
      <p>
        Hello {user}!
      </p>

      <Component2 user={user} />
    </>
  )
}

export default Component1