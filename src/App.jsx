
import { useCallback, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Newsboard from './components/Newsboard'
import Newsitem from './components/Newsitem'



function App() {
  const [category,setCategory]=useState("general")

  return (
    <>
  <Nav setCategory={setCategory}/>
  <Newsitem category={category}/>
 {/*  <Newsboard/> */}

    </>
  )
}

export default App
