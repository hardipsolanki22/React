import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(Counter ++)

      // setCounter(counter + 1)
        // setCounter (counter + 1)
        // setCounter (counter + 1)
        // setCounter (counter + 1)
        // setCounter (counter + 1)

        // setCounter ( (prevCounter) => prevCounter + 1)
        // setCounter ( (prevCounter) => prevCounter + 1)
        // setCounter ( (prevCounter) => prevCounter + 1)
        // setCounter ( (prevCounter) => prevCounter + 1)
        // setCounter ( (prevCounter) => prevCounter + 1)



    if (Counter >= 12) {
      setCounter(Counter = 12)
    }
  }

  const decrement = () => {
    setCounter(Counter --)

    if (Counter < 0) {
      setCounter(Counter = 0)
    }
  }

  return (
    <>
      <h1 className='bg-green-400 p4' >Counter Project</h1>
      <br />
      <h3 className='p4 - 20'>Counter value : {Counter}</h3>
      <br />
      <button onClick={increment}>Incremant Value</button>
      <br />
      <p>Lorem ipsum dolor sit amet. {Counter}</p>
      <br />
      <button onClick={decrement}>Decrement Value</button>
    </>
  )
}

export default App
