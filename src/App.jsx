import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonIcon } from '@radix-ui/react-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Subcribe to my Channel
     <ButtonIcon/>
    </>
  )
}

export default App
