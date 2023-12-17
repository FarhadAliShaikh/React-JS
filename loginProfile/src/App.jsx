import { useState } from 'react'


function App() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }


  return (
    <div className='bg-emerald-500  h-screen p-8 '>
      <h2 className=' text-3xl text-center m-4 font-bold'>Login Form</h2>
      
      <label htmlFor="Full-Name" className='text-2xl font-bold'>Full Name</label>
      <input type="text" 
      className='m-4'
      value={fullName}
      onChange={fullNameHandler}/>
      
      <label htmlFor="Password" className='text-2xl font-bold'>Password</label>
      <input type="text" 
      className='m-4'
      value={password}
      onChange={passwordHandler}/>

      <h1 className='mt-8 text-center text-3xl font-bold'>Profile</h1>
      <div className=' text-3xl m-4 font-bold'>
        Full Name: {fullName}</div>
      <div className=' text-3xl m-4 font-bold'>
        Password: {password}</div>
    </div>
  )
}

export default App
