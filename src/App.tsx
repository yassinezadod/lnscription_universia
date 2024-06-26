import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Suivi from './components/suivi';
import Formulaire from './form/formulaire';
import Demande from './components/demande';
import Formdepot from './components/Formdepot';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="app">
    // <Navbar/><br /><br />
    //   <Formulaire/>
      
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Formulaire} />
      <Route path="/suivi" Component={Suivi} />
      <Route path="/demande" Component={Demande} />
      <Route path="/depot" Component={Formdepot} />
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
