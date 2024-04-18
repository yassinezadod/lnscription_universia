import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import "./form.css";

interface FormulaireProps {
  // Définissez les types de vos props ici
}

interface FormulaireState {
  telephone: string; // Ajoutez un type pour le numéro de téléphone
  noEmail: boolean; // Ajoutez un type pour la case à cocher "Je n'ai pas d'email"
  conditionsAccepted: boolean; // Ajoutez un type pour la case à cocher "J'ai lu et j'accepte les conditions générales"
}

export class Formulaire extends Component<FormulaireProps, FormulaireState> {
  constructor(props: FormulaireProps) {
    super(props);
    this.state = {
      telephone: '',
      noEmail: false, // Par défaut, la case à cocher est décochée
      conditionsAccepted: false // Par défaut, la case à cocher est décochée
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
    // Logique de validation ou envoi du formulaire ici
    // Vous pouvez accéder aux données du formulaire dans this.state
  }

  render() {
    const { telephone, noEmail, conditionsAccepted } = this.state;
    return (
      <div>
        <h3>Vos informations personnelles</h3>
        <div className='frm'>
          <form>
            <input type="text" id="prenom" name="prenom" placeholder='Prenom.......' required></input>
            <input type="text" id="nom" name="nom" placeholder='Nom .......' required></input>
            <input type="text" id="sm" name="sm" placeholder='الاسم' required></input>
            <input type="text" id="nb" name="nb" placeholder='النسب' required></input>
            <select id="pays" name="pays" required>
              <option value="">Sélectionnez votre pays</option>
              <option value="france">France</option>
              <option value="espagne">Espagne</option>
              <option value="italie">Maroc</option>
            </select>
            <select id="ville" name="ville" required> 
              <option value="">Sélectionnez votre ville</option>
              <option value="ville1">Agadir</option>
              <option value="ville2">Marakech</option>
              <option value="ville3">Rabat</option>
            </select>
            <select id="sex" name="sex" required> 
              <option value="">Sélectionnez votre sex</option>
              <option value="male">Homme</option>
              <option value="female">Femme</option> 
            </select>
            <input type="date" id="birth" name="birth" placeholder='date de naissance' required></input>
            <input type="text" id="lieu" name="lieu" placeholder='Lieu de Naissance' required></input> 
            <input type="email" id="email" name="email" placeholder='Email' required disabled={noEmail}></input>
            <label>
              <input type="checkbox" onChange={this.handleNoEmailChange} />
              Je n'ai pas d'email
            </label>
            
            <PhoneInput
              className='phone'
              id="telephone"
              name="telephone"
              placeholder="Numéro de téléphone"
              value={telephone}
              onChange={this.handleTelephoneChange}
              required
            />

            <label>
              <input className='chek' type="checkbox" onChange={this.handleConditionsChange} />
              J'ai lu et j'accepte les conditions générales
            </label>

            <br />

            <center><button className="btnValider" onClick={this.handleValidation}>Valider</button></center>

            
          </form>
        </div>
      </div>
    );
  }
}

export default Formulaire;
