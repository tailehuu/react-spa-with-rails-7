import { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your name:
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>Enter your age:
            <input
              type="text"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>Select your car:
            <select name="myCar" value={inputs.myCar} onChange={handleChange}>
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
          </label>
        </div>

        <div>
          <label>Enter your working history:
            <textarea
              type="text"
              name="history"
              value={inputs.history || ""}
              onChange={handleChange} />
          </label>
        </div>

        <input type="Submit" />
      </form>
    </>
  )
}

export default MyForm