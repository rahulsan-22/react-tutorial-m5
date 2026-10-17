//!Example 1:
// const Lists = () => {
//   let trainers = ["Pavan","Monty","Ajit","Deva"]
//   return (
//     <ol>
//       {
//         trainers.map((item,index) => {
//           return <li key={index}>{item}</li>
//         })
//       }
//     </ol>
//   )
// }
// export default Lists

//!Example 2:
// const Lists = () => {
//   let num = [1,2,3,4,5,6,7,8,9,10]
//   return (
//     <ul type="none">
//       {
//         num.map((item,index) => {
//           return <li key={index}>2 * {item} = {2*item}</li>
//         })
//       }
//     </ul>
//   )
// }
// export default Lists

//!Example 3:
// import { Fragment } from "react"
// const Lists = () => {
//   let movie = [
//     {
//       id: 1,
//       title: "Jailer-2",
//       hero: "Rajnikanth"
//     },
//     {
//       id: 2,
//       title: "Toxic",
//       hero: "Yash"
//     },
//     {
//       id: 3,
//       title: "Paradise",
//       hero: "Nani"
//     }
//   ]
//   return (
//     <div>
//       {
//         movie.map((item) => {
//           return <Fragment key={item.id}>
//             <h1>Movie: {item.title}</h1>
//             <h1>Hero: {item.hero}</h1>
//             <hr />
//           </Fragment>
//         })
//       }
//     </div>
//   )
// }

// export default Lists

//!Example 4:
import Cricket from './Cricket'
const Lists = () => {
  let players = [
    {
      id: 1,
      name: "Virat Kohli",
      iplTeam: "Rcb",
      jerseyNo:18
    },
    {
      id: 2,
      name: "Rohit Sharma",
      iplTeam: "Mi",
      jerseyNo:45
    },
    {
      id: 3,
      name: "Abhishek Sharma",
      iplTeam: "Srh",
      jerseyNo:4
    }
  ]
  return <>
    {
      players.map((item) => {
        return <Cricket key={item.id} {...item} />
      })
    }
  </>
}

export default Lists