import { Component } from 'react'

export default class Unmount extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Hello")
    }, 1000)
  }
  componentWillUnmount() {
    console.log("Component Unmounted...")
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>Unmount</div>
    )
  }
}
