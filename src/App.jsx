import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Messages from './assets/Messages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Messages/>
    </>
  )
}

export default App
