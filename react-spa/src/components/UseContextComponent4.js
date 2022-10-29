import { useContext } from "react";
import UserContext from "../hooks/UserContext";

function UseContextComponent4() {
  const data = useContext(UserContext)

  return (
    <>
      <h2>User Context Component 4</h2>
      <h3>Data from the top component</h3>
      <ul>
        <li key="name">name: {data.name}</li>
        <li key="email">email: {data.email}</li>
        <li key="phone">phone: {data.phone}</li>
        <li key="user">user: {data.user}</li>
      </ul>
    </>
  )
}

export default UseContextComponent4