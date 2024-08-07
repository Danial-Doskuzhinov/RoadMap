import { useState } from 'react'
import './App.css'
import {Header , HeaderContainer ,MainContainer,Benefits ,Reviews} from './component/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <HeaderContainer/>
        <MainContainer/>
        <Benefits/>
        <Reviews/>
    </>
  )
}

export default App
