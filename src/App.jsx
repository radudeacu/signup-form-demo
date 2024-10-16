import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpForm from './SignUpForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  )
}

export default App
