import React from "react"
import styles from "../css/car.module.css"

// class component
class Car extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      model: "Mustang",
      color: "red",
      year: 1964
    }
  }

  changeColor = () => {
    this.setState({ color: "blue" })
  }

  render() {
    console.log('render Car')

    return (
      <div>
        <h1 className={styles.red}>Car</h1>
        <h2>My {this.props.brand}</h2>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}

export default Car