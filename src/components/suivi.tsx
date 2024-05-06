import Demande from "./demande";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import "./suivi.css";

function Suivi() {
  return (
    <div className="app">
       <Navbar />
        <br /><br />
   
  <div>
      <div className='form'>
      <h1>Suivi</h1>
      <div>
        
        <p>Saissisez votre n° de demande</p>
        <input className='input' type='number' pattern= "^+/[0-9]{9}$" name='N° Demande' placeholder='N° Demande' required/>
        <center><Link to="/demande"  className='button' type='submit'>Submit</Link></center>

      </div>
      </div>
    </div>
    </div>
    
  );
}

export default Suivi;
