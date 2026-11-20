import { Component } from 'react'

export default class Normal extends Component {
  constructor() {
    super()
    this.state = {
      name:"Monty"
    }
  }
  render() {
    console.log("Normal Component Rendering....")
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Pavan"})}>Change Name</button>
      </div>
    )
  }
}
