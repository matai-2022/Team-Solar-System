import React from 'react'
import Planets from './Planets'
//import { PerspectiveCamera, TextureLoader } from 'three'

// /import { getPlanets } from '../apis/planets'

function App() {
  return <Planets />
  //insert react router
}

export default App

// const [fruits, setFruits] = useState([])
// useEffect(() => {
//   getFruits()
//   .then(fruits => {
//     setFruits(fruits)
//   })
// }, [])

// return (
//   <>
//     <div className='app'>
//       <h1>Fullstack Boilerplate - with Fruits!</h1>
//       <ul>
//         {fruits.map(fruit => (
//           <li key={fruit}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   </>
// )
