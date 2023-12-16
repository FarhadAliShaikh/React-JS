import { useEffect, useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200 py-8 px-2"
    style={{backgroundColor: color}}>
        <div className="bg-gray-200 p-6 rounded-full flex flex-wrap justify-center">
          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'red'}} 
          onClick= {() => setColor('red')}
          >Red</button>
          
          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'blue'}} 
          onClick= {() => setColor('blue')}
          >Blue</button>

          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'yellow'}} 
          onClick= {() => setColor('yellow')}
          >Yellow</button>

          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'green'}} 
          onClick= {() => setColor('green')}
          >Green</button>

          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'orange'}} 
          onClick= {() => setColor('orange')}
          >Orange</button>

          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'skyblue'}} 
          onClick= {() => setColor('skyblue')}
          >Skyblue</button>

          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'cyan'}} 
          onClick= {() => setColor('cyan')}
          >Cyan</button>
          
          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'olive'}} 
          onClick= {() => setColor('olive')}
          >Olive</button>
          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'indigo'}} 
          onClick= {() => setColor('indigo')}
          >Indigo</button>

          <button 
          className='px-7 py-3 rounded-full text-white text-xl font-bold mx-1'
          style={{backgroundColor: 'black'}} 
          onClick= {() => setColor('black')}
          >Black</button>

        </div>
      </div>
      
    </>
  )
}

export default App
