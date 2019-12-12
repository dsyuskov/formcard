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
            #### #### #### ####
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
          <label className="card-form__caption">Card Number
            <input type="text" id="card-number" className="card-form__input"></input>
          </label>
          <label className="card-form__caption">Card Holders
            <input type="text" id="card-holder" className="card-form__input"></input>
          </label>
          <div className="card-form__end-row">
            <label className="card-form__caption">Expires Date
              <div className="card-form__expires-container">
                <select id="card-expires-month" className="card-form__input card-form__expires">
                  <option value="" disabled="disabled" selected="selected">Month</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select id="card-expires-year" className="card-form__input card-form__expires">
                  <option value="" disabled="disabled" selected="selected">Year</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
            </label>
            <label className="card-form__caption">CVV
              <input type="text" id="card-cvv" className="card-form__input card-form__cvv"></input>
            </label>
          </div>
          <input type="button" className="card-form__button" value="Submit"></input>
        </div>
      </div>
    );
  }
}