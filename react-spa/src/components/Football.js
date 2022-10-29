function Football() {
  console.log('render Football')

  const shoot = () => {
    alert("Great shot!")
  }

  const pass = (string, event) => { alert(event.type) }

  return (
    <>
      <h1>Football</h1>
      <button onClick={ shoot }>Take a shoot!</button> &nbsp;
      <button onClick={ (event) => pass("pass to Tai!", event) }>Pass to Tai</button>
    </>
  )
}

export default Football