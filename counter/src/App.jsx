import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const incrementHandler = () => setCounter(counter + 1);
  const decrementHandler = () => setCounter(counter - 1);

  return (
    <>
      <div className="text-white p-8  bg-gray-700">
        <div className='text-3xl font-extrabold mb-4'>Counter: {counter}</div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded-full m-4'
        onClick= {incrementHandler}
        >
          Increment by 1</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded-full m-4'
        onClick={decrementHandler}>Decrement by 1</button>
      </div>
    </>
  )
}

export default App
