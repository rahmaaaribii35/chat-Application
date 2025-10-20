import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/list/list'
import Chat from './components/chat/chat'
import Detail from './components/detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
      
    </div>
  )
}

export default App
