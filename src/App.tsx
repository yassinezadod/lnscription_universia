import { useState } from 'react'
import Navbar from "./components/navbar";
import Formulaire from './form/formulaire';
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar/><br /><br />
      <Formulaire/>
      
    </div>
    
    
  )
}

export default App
