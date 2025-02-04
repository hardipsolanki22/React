import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    
    <div className='w-full  h-screen duration-300  '
        style={{backgroundColor : color}}
     >
     <div className='flex  items-center justify-center  w-auto  md:flex-row bg-white flex-col h-auto md:h-20  rounded-lg'>
       <button onClick={() => setColor('red')} className='bg-red-500 px-4 py-4 mx-4 w-[90px] rounded-md my-4 '>Red</button>
       <button onClick={() => setColor('pink')} className='bg-pink-500 px-4 py-4 mx-4 w-[90px] rounded-md my-4'>Pink</button>
       <button onClick={() => setColor("blue")} className='bg-blue-500 px-4 py-4 mx-4 w-[90px] rounded-md my-4'>Blue</button>
       <button onClick={() => setColor("green")} className='bg-green-500 px-4 py-4 mx-4 w-[90px] rounded-md my-4'>Green</button>
       <button onClick={() => setColor("yellow")} className='bg-yellow-500 px-4 py-4 mx-4 w-[90px] rounded-md my-4'>Yellow</button> 
     </div>
    </div>
  )
}

export default App
