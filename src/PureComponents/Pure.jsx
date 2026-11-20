import {  PureComponent } from 'react'

export default class Pure extends PureComponent {
  constructor() {
    super()
    this.state = {
      name:"Monty"
    }
  }
  render() {
    console.log("Pure Component Rendering....")
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Pavan"})}>Change Name</button>
      </div>
    )
  }
}
