import { useState ,useCallback , useEffect} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumber] = useState(false)
  const [characterAllowed , setCharacter] = useState(false)
  const [password , setPassword] = useState('')


  const passwordGenarator = useCallback( () => {
    let pass = ''
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+="0123456789"
    if(characterAllowed) str+= "!@#$%^&*()_+[]{}<>?"

    for(let i = 1 ; i <= length ; i++) {
       const char = Math.floor(Math.random() *str.length + 1)
       console.log('length of str',str.length);
       console.log('Value of char',char);

       pass += str.charAt(char)
    }
    setPassword(pass)
  } , 
    [length , numberAllowed , characterAllowed,setPassword])

    useEffect(() => {
      passwordGenarator()
    },
  [length,numberAllowed,characterAllowed , setPassword])

  return (
    <>
     <div className='w-full h-auto bg-slate-700 md:px-12 md:py-4 rounded-lg
     mx-2 text-orange-500 md:mx-36 flex flex-col flex-wrap '>
     <form action="#" className='px-8 py-8'>
          <input 
          type="text"
          value={password}
           placeholder='password'
           readOnly
           className='md:py-3 md:px-3 md:w-[80%]  bg-white text-black w-[70%] rounded-md p-2' />
          <button className='bg-blue-700 outline-none text-center md:h-[52px] md:px-8 h-[48px] rounded-md md:rounded-none shrink-0  mt-1'>Copy</button>
          <div className='flex mt-6 gap-x-4  flex-col flex-wrap md:flex-row'>
            <input 
            type="range"
            min={0}
            max={10}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='mx-4 cursor-pointer mb-3' />
            <label className='marker:font-semibold'>Langth : {length}</label>
            <input
             type="checkbox"
             defaultChecked={numberAllowed}
             onChange={() => setNumber((prev) => !prev)}
               />
            <label className='font-semibold'>Number</label>
            <input 
            type="checkbox"
            className=''
            defaultChecked={characterAllowed}
            onChange={()=> setCharacter((prev) => !prev)}
            />
            <label className='font-semibold '>Character</label>
          </div>
        </form>
     </div>
    </>
  )
}

export default App
