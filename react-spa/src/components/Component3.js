import Component4 from "./Component4";

function Component3({ user }) {
  return (
    <>
      <h2>Component 3</h2>

      <Component4 user={user} />
    </>
  )
}

export default Component3