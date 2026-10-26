//!09/10/2026 (Components)
// import Header from "./Components/Header"
// import Navbar from "./Components/Navbar"
// let App = () => {
//   return <div>
//     <Navbar />
//     <Navbar />
//     <Header />
//     <Header />
//   </div>
// }
// export default App

//!10/10/2026 (JSX,Fragments,Expression)
// import Qspider from "./JSX/Qspider"
// let App = () => {
//   return <Qspider/>
// }
// export default App

//!13/10/2026 (Props)
// import Welcome from './Props/Welcome'
// const App = () => {
//   let pavanSir = ()=>"Pavan Sir"
//   let montySir = ()=>"Monty Sir"
//   let raviSir = ()=>"Ravi Sir"
//   return <>
//     <Welcome trainer="Pavan" subject="Core Java" duration={90} isStrict={false} skills={["Cooking", "Dancing", "Singing"]} address={{ place: "Mysore" }} fun={pavanSir} />
//     <Welcome trainer="Monty" subject="Python" isStrict={false} skills={["Motivating", "Dancing", "Singing"]} address={{place:"Gulbarga"}} fun={montySir}/>
//     <Welcome trainer="Ravi Sir" subject="Sql" duration={30} isStrict={true} skills={["Cooking", "Dancing", "Scolding"]} address={{place:"Bangalore"}} fun={raviSir}/>
//   </>
// }

// export default App

//!14/10/2026 (Props Children)
// import Welcome from './Props/Welcome'
// const App = () => {
//   return <Welcome breakfast="Dosa">
//     <h1>Hope you enjoyed your new batch timings</h1>
//     <p>Hello</p>
//   </Welcome>
// }

// export default App

//!Props Drilling
// import Parent from './Props/Parent'

// const App = () => {
//   return <Parent name="Someone" age={18} />
// }

// export default App

//!15/10/2026 (Rendering Lists and Keys)
// import Lists from './RenderingLists/Lists'

// const App = () => {
//   return <Lists/>
// }

// export default App

//!16/10/2026 (Conditional Rendering)
// import Condition from './ConditionalRendering/Condition'

// const App = () => {
//   return <Condition/>
// }

// export default App

//!22/10/2026 (Events)
// import Actions from './Events/Actions'

// const App = () => {
//   return <Actions/>
// }

// export default App

//!23/10/2026 (State)
// import Mutable from './State/Mutable'

// const App = () => {
//   return <Mutable/>
// }

// export default App

//!26/10/2026 (Lifecycle Methods)
import Lifecycle from './LifecycleMethods/Lifecycle'

const App = () => {
  return <Lifecycle/>
}

export default App