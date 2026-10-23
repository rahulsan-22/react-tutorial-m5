//!Example 1:
// import { Component } from 'react'
// export default class Mutable extends Component {
//   state = {
//     count: 0
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={()=>this.setState({count: this.state.count+1})}>Increment</button>
//         <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
//         <button onClick={()=>this.setState({count:0})}>Reset</button>
//       </div>
//     )
//   }
// }

//!Example 2:
// import { Component } from 'react'
// export default class Mutable extends Component {
//   state = {
//     name: "Monty",
//     age: 30
//   }
//   render() {
//     return (
//       <div>
//         <h1>Name: {this.state.name}</h1>
//         <h1>Age: {this.state.age}</h1>
//         <button onClick={() => this.setState({
//           name: "Pavan",
//           age: 26
//         })}>Update Info</button>
//       </div>
//     )
//   }
// }

//!Example 3:
import  { Component } from 'react'
export default class Mutable extends Component {
  state = {
    isMorning : true
  }
  changeDayStaus = () => {
    this.setState({ isMorning : !this.state.isMorning})
  }
  render() {
    return (
      <div>
        <h1>Day : {this.state.isMorning ? "Morning" : "Night"}</h1>
        <h1>{this.state.isMorning ? "Breakfast" : "Dinner"}</h1>
        <button onClick={this.changeDayStaus}>Change Day/Night</button>
      </div>
    )
  }
}

