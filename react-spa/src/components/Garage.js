import '../css/garage.scss'

function Garage(props) {
  console.log('render Garage')

  const cars = props.cars

  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <>
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
          <ul>
            {cars.map((car) => <li key={car.id}>{car.name}</li>)}
          </ul>
        </>
      }
    </>
  )
}

export default Garage