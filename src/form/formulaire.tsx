import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "./form.css";


interface FormulaireProps {
 
}

interface FormulaireState {
  telephone: string; 
  noEmail: boolean; 
  conditionsAccepted: boolean; 
}

export class Formulaire extends Component<FormulaireProps, FormulaireState> {
  static push(arg0: string) {
    throw new Error('Method not implemented.');
  }
  constructor(props: FormulaireProps) {
    super(props);
    this.state = {
      telephone: '',
      noEmail: false, 
      conditionsAccepted: false 
    };
  }

  handleTelephoneChange = (value: string) => {
    this.setState({ telephone: value });
  }

  handleNoEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ noEmail: event.target.checked });
  }

  handleConditionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ conditionsAccepted: event.target.checked });
  }

  handleValidation = () => {
    Formulaire.push('/suivi');

  }



  render() {
    const { telephone, noEmail, conditionsAccepted } = this.state;
    return (
      <div>
        <h3>Vos informations personnelles</h3>
        <div className='form'>
            <form> 
                <div className='Container'>
                  <div className='box-1'>
                    <div>
                    <label>Prénom</label>
                    <input className='formInput' pattern= "^[A-Za-z]{3,50}$" type='text' name='firstName'  placeholder='entrer votre prenom' required/>
                  </div>
                  <div>
                    <label>Nom</label>
                    <input className='formInput' type='text' pattern= "^[A-Za-z]{3,50}$" name='lastName' placeholder='entrer votre nom' required/>
                  </div>
                  <div>
                    <label>Pays d'origine</label>
                    <input className='formInput' type='text' pattern= "^[A-Za-z]{3,50}$" name='country'  placeholder="entrer votre Pays d'origine"  required/>
                  </div>
                  <div>
                    <label>Sexe</label>
                    <select className='formInput' name='gender' required> 
                      <option value="">Sélectionnez votre sex</option>
                      <option value="male">Homme</option>
                      <option value="female">Femme</option> 
                    </select>
                  </div>
                  <div>
                    <label>Lieu de Naissance</label>
                    <input className='formInput' pattern= "^[A-Za-z]{3,50}$" type='text' name='birthPlace'  placeholder='entrer le lieu de naissance'  required/>
                  </div>
                  <br></br>
                  <div>
                  <label>Email</label>
                  <input className='formInput' pattern= "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/" type='email' name='email'  placeholder='entrer votre email'  required disabled={noEmail}/>   
                  </div>
                  <p>Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles. Ce traitement a été autorisé par la CNDP sous le n°</p> 
                  </div>
                  
                  <div className='box-2'>
                    <div>
                      <label>الاسم</label>
                      <input className='formInput' pattern= "/^[\u0600-\u06FF\s]+$/" type='text' name='arabicFirstName'  placeholder='entrer votre prenom en arabe'  required/>
                    </div>
                    <div>
                      <label>النسب</label>
                      <input className='formInput' pattern= "/^[\u0600-\u06FF\s]+$/" type='text' name='arabicLastName'  placeholder='entrer votre nom en arabe'  required/>
                    </div>
                    <div>
                      <label>Ville</label>
                      <input className='formInput' pattern= "^[A-Za-z]{3,50}$" type='text' name='city' placeholder='entrer votre ville'  required/>
                    </div>
                    <div>
                      <label>مكان الازدياد</label>
                      <input className='formInput' pattern= "/^[\u0600-\u06FF\s]+$/" type='text' name='arabicBirthPlace'  placeholder='entrer le lieu de naissance en arabe' required/>
                    </div>
                    <label>GSM</label>
                    <PhoneInput
                      className='formInput'
                      name="PhoneNumber"
                      placeholder="Numéro de téléphone"
                      onChange={this.handleTelephoneChange}
                      pattern= "^+/[0-9]{9}$"
                      required
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <label>
                    <input type="checkbox" onChange={this.handleNoEmailChange} />
                    Je n'ai pas d'email
                    </label>
                    <br></br>
                    <label>
                    <input className='chek' type="checkbox" onChange={this.handleConditionsChange} />
                    J'ai lu et j'accepte les conditions générales
                    </label>
                  </div>
                </div>
              <center><button onClick={this.handleValidation} className='button' type='submit'>Submit</button></center>
            </form>
          </div>
      </div>
    );
  }
}

export default Formulaire;
