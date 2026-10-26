import { Component } from 'react'
import Unmount from './Unmount';

export default class Lifecycle extends Component {
  constructor() {
    super()
    console.log("Constructor Method Triggered...");
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log("ComponentDidMount Method Triggered...")
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate Method Triggered...")
  }
  handleCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    console.log("Render Method Triggered...")
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleCount}>Increment Count</button>
        {this.state.count < 5 && <Unmount />}
      </div>
    )
  }
}
