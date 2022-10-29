import { useState } from "react";

const FavoriteColor = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  })

  const changeYear = (year) => {
    setCar(prevState => {
      return { ...prevState, year: year }
    })
  }

  return (
    <>
      <h1>My {car.year} {car.brand} {car.model} color is {car.color}!</h1>

      <h2>Change Year</h2>
      <button type="button" onClick={() => changeYear("1910")}>1910</button>
      <button type="button" onClick={() => changeYear("1960")}>1960</button>
      <button type="button" onClick={() => changeYear("1964")}>1964</button>
    </>
  )
}

export default FavoriteColor