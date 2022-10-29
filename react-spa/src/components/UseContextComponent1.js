import { useState, createContext, useContext } from "react";
import UserContext from "../hooks/UserContext";
import UseContextComponent2 from "./UseContextComponent2";

function UseContextComponent1() {
  const [user, setUser] = useState("Tai LE")
  const data = {
    name: "Tai LE",
    email: "lhtai181@gmail.com",
    phone: "0938 471 436",
    user: user
  }

  return (
    <UserContext.Provider value={data}>
      <h1>Use React Context</h1>
      <h2>User Context Component 1</h2>
      <p>
        Hello {user}!
      </p>
      <UseContextComponent2 />
    </UserContext.Provider>
  )
}

export default UseContextComponent1