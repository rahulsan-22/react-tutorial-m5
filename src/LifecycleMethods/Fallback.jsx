import { Component } from 'react'

export default class Fallback extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError) {
     return <h1>Something went wrong...</h1>
    } else {
      return this.props.children
   }
  }
}
