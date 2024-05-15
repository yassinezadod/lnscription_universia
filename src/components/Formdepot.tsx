import React, { Component } from 'react'
import "./Fromdepot.css"
import { Link } from 'react-router-dom';


export class Formdepot extends Component {
  render() {
    return (
        <div className="app">
            <br /><br />
      <div>
        <h3>Suivi de la demande #1260300A</h3>
        <div className='form'>
            <hr />
            <div>
    <span style={{ display: 'inline-block', marginRight: '500px', color: 'gray' }}><b>Demandeur</b></span>
    <span style={{ display: 'inline-block', color: 'gray' }}><b>Nom étudiant</b></span>
</div>
<hr />
            <div>
    <span style={{ display: 'inline-block', marginRight: '553px', color: 'gray' }}><b>Pays</b></span>
    <span style={{ display: 'inline-block', color: 'gray' }}><b>MAROC</b></span>
</div>
<hr />
<div>
    <span style={{ display: 'inline-block', marginRight: '500px', color: 'gray' }}><b>Téléphone</b></span>
    <span style={{ display: 'inline-block', color: 'gray' }}><b>+2120605123456</b></span>
</div>
<hr />
<div>
    <span style={{ display: 'inline-block', marginRight: '330px' }}>
        <br />
        <Link to="" className='btn'>compléter votre demande</Link>
    </span>
    <span style={{ display: 'inline-block' }}>
        <h6>Statut de la demande</h6>
        <div className='box'>

            status de la demmande

        </div>
    </span>
</div>

           
          </div>
      </div>
      </div>
    )
  }
}

export default Formdepot