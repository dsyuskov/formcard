import React from 'react';
import '../../styles/main.scss';

export default class FormCard extends React.Component {
  constructor() {
    super();
    this.handleCardNumber = this.handleCardNumber.bind(this);
    this.handleCardHolder = this.handleCardHolder.bind(this);
    this.handleCardExpiresMonth = this.handleCardExpiresMonth.bind(this);
    this.handleCardExpiresYear = this.handleCardExpiresYear.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  state = {
    cardNumberItem: '#### #### #### ####',
    cardNumberForm: '',
    cardHolder: 'FULL NAME',
    cardExpiresMonth: 'MM',
    cardExpiresYear: 'YY',
    selected: ''
  }

  handleFocus(element) {
    this.setState({selected: element})
  }

  handleCardNumber(event) {
    let onlyNumber = new RegExp("^([0-9])*$");
    let cardNumberForm = event.target.value.split(' ').join('');
    let newCardNumberForm = '';
    let newCardNumberItem = '';

    if (!onlyNumber.test(cardNumberForm)) {
      return;
    }

    if (cardNumberForm.length > 16) {
      return;
    }

    for (let i = 0; i < 16; i++) {
      
      if (i < cardNumberForm.length) {
        newCardNumberForm += cardNumberForm[i];
        newCardNumberItem += cardNumberForm[i];

        if (i === 3 || i === 7 || i === 11 ) {
          if (i !== cardNumberForm.length - 1) {
            newCardNumberForm = newCardNumberForm + ' ';
          }
          newCardNumberItem = newCardNumberItem + ' ';
        }
      } else {
        newCardNumberItem = newCardNumberItem + '#';
        if (i === 3 || i === 7 || i === 11 ) {
          newCardNumberItem = newCardNumberItem + ' ';
        }
      }
    }
    this.setState({ cardNumberForm: newCardNumberForm, cardNumberItem: newCardNumberItem });
  }

  handleCardHolder(event) {
    let onlyLetter = new RegExp("^([A-z ])+$"); 
    let newCardHolder = event.target.value.toUpperCase();
    if (!newCardHolder.length) {
      newCardHolder = 'FULL NAME';
    }
    if (onlyLetter.test(newCardHolder)) {
      this.setState({ cardHolder: newCardHolder });
    }
  }

  handleCardExpiresMonth(event) {
    let newCardExpiresMonth = event.target.value;
    this.setState({ cardExpiresMonth: newCardExpiresMonth });
  }

  handleCardExpiresYear(event) {
    let newCardExpiresYear = event.target.value;
    this.setState({ cardExpiresYear: newCardExpiresYear });
  }

  render() {
    const { cardNumberForm, cardNumberItem, cardHolder, selected, cardExpiresMonth, cardExpiresYear } = this.state;
    return (
      <div className="card">
        <div className="card-item">
          <div className="card_item__front">
            <label
              htmlFor = "card-number" 
              className = {`card-item__number ${ selected === 'cardNumber' ? 'selected' : '' }`}
            >{ cardNumberItem }
            </label>
            <label
              htmlFor="card-holder"
              className = {`card-item__holder-wrapper ${ selected === 'cardHolder' ? 'selected' : '' }`}
            >
              <span className="card-item__field-caption">Card Holder</span>
              <span className="card-item__holder">{ cardHolder }</span>
            </label>
            <div 
              className = {`card-item__expires-wrapper ${ selected === 'cardExpires' ? 'selected' : '' }`}
            >
              <label htmlFor="card-expires-month">
                <span className="card-item__field-caption">Expires</span>
              </label>
              <label htmlFor="card-expires-month">
                <span className="card-item__expires">{ cardExpiresMonth }</span>
              </label>
              <span>/</span>
              <label htmlFor="card-expires-year">
                <span className="card-item__expires">{ cardExpiresYear }</span>
              </label>
            </div>
          </div>
          <div className="card_item__back">

          </div>
        </div>

        <div className="card-form">
          <div className="card-form__number card-form__row">
            <label className="card-form__caption">Card Number</label>
            <input
              type = "text"
              id = "card-number"
              className = "card-form__input"
              onChange = { this.handleCardNumber }
              onFocus = { () => this.handleFocus('cardNumber') }
              onBlur =  { () => this.handleFocus('') }
              value = { cardNumberForm }
            />
          </div>
          <div className="card-form__holder card-form__row">
            <label className="card-form__caption">Card Holders</label>
            <input
              type = "text"
              id = "card-holder"
              className = "card-form__input"
              onChange = { this.handleCardHolder }
              onFocus = { () => this.handleFocus('cardHolder') }
              onBlur =  { () => this.handleFocus('') }
              value = { cardHolder === 'FULL NAME' ? '' : cardHolder }
            />
          </div>
          <div className="card-form__end-row card-form__row">
            <div
              className="card-form__expires"
              onFocus = { () => this.handleFocus('cardExpires') }
              onBlur =  { () => this.handleFocus('') }
            >
              <label className="card-form__caption">Expires Date</label>
              <div className="card-form__expires-container" id="card-expires">
                <select
                  id = "card-expires-month"
                  className = "card-form__input card-form__select"
                  onChange = { this.handleCardExpiresMonth }
                  value = { cardExpiresMonth }
                >
                  <option value="MM" disabled="disabled" selected="selected">Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select 
                  id = "card-expires-year"
                  className = "card-form__input card-form__select"
                  onChange = { this.handleCardExpiresYear }
                  value = { cardExpiresYear }
                  >
                    <option value="YY" disabled="disabled" selected="selected">Year</option>
                    <option value="20">2020</option>
                    <option value="21">2021</option>
                    <option value="22">2022</option>
                    <option value="23">2023</option>
                    <option value="24">2024</option>
                    <option value="25">2025</option>
                    <option value="26">2026</option>
                    <option value="27">2027</option>
                    <option value="28">2028</option>
                    <option value="29">2029</option>
                    <option value="30">2030</option>
                  </select>
              </div>
            </div>
            <div className="card-form__cvv">
              <label className="card-form__caption">CVV</label>
              <input type="text" id="card-cvv" className="card-form__input"></input>
            </div>
          </div>
          <input type="button" className="card-form__button" value="Submit"></input>
        </div>
      </div>
    );
  }
}