import React from 'react';
import '../../styles/main.scss';

export default class FormCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-item">
          <label 
            for="card-number" 
            className="card-item__number selected"
          >
            ####&nbsp;&nbsp;&nbsp;&nbsp;####&nbsp;&nbsp;&nbsp;&nbsp;####&nbsp;&nbsp;&nbsp;&nbsp;####
          </label>
          <label for="card-holder" className="card-item__holder-wrapper selected">
            <div className="card-item__field-caption">Card Holder</div>
            <div className="card-item__holder">FULL NAME</div>
          </label>
          <label for="card-expires" className="card-item__expires-wrapper selected">
            <div className="card-item__field-caption">Expires</div>
            <div className="card-item__expires">MM/YY</div>
          </label>
        </div>

        <div className="card-form">
          <label>Card Number
            <input type="text" id="card-number" className="card-form__number"></input>
          </label>
          <label>Card Holder
            <input type="text" id="card-holder" className="card-form__holder"></input>
          </label>
          <label>Expires Date
            <input type="text" id="card-expires-month" className="card-form__expires"></input>
            <input type="text" id="card-expires-year" className="card-form__expires"></input>
          </label>
          <label>CVV
            <input type="text" id="card-cvv" className="card-form__cvv"></input>
          </label>
          <input type="button" className="card-form__button" value="submit"></input>
        </div>
      </div>
    );
  }
}