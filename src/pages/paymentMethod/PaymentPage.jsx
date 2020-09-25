import React from 'react';
import { 
    SquarePaymentForm,
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton } from 'react-square-payment-form'
import 'react-square-payment-form/lib/default.css'
import './PaymentPage.css';

class PaymentPage extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        errorMessages: [],
      }
    }
  
    cardNonceResponseReceived = (errors, nonce, cardData, buyerVerificationToken) => {
      if (errors) {
        this.setState({ errorMessages: errors.map(error => error.message) })
        return
      }
      this.setState({ errorMessages: [] })
        alert("nonce created: " + nonce + ", buyerVerificationToken: " + buyerVerificationToken)
    }
  
    createVerificationDetails() {
      return {
        amount: '100.00',
        currencyCode: "USD",
        intent: "CHARGE",
        billingContact: {
          familyName: "Smith",
          givenName: "John",
          email: "jsmith@example.com",
          country: "GB",
          city: "London",
          addressLines: ["1235 Emperor's Gate"],
          postalCode: "SW7 4JA",
          phone: "020 7946 0532"
        }
      }
    }
    render() {
      return (
        <div>
          <SquarePaymentForm
            sandbox={true}
            applicationId={'sandbox-sq0idb-klSZ1SdT7RRKkTy9VoQoig'}
            locationId={'L3DTEMQP32HPN'}
            cardNonceResponseReceived={this.cardNonceResponseReceived}
            createVerificationDetails={this.createVerificationDetails}>
            <div className="sq-fieldset">
              <h4 className="sq-form-text-center">Enter Card Info Below </h4>
                <CreditCardNumberInput/>
                <div className="sq-form-third">
                    <CreditCardExpirationDateInput />
                </div>

                <div className="sq-form-third">
                    <CreditCardPostalCodeInput />
                </div>

                <div className="sq-form-third">
                    <CreditCardCVVInput />
                </div>
            </div>
            <CreditCardSubmitButton> Pay </CreditCardSubmitButton>
          </SquarePaymentForm>
  
          <div className="sq-error-message">
            {this.state.errorMessages.map(errorMessage =>
              <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>
            )}
          </div>
  
        </div>
      )
    }
  }
  
  export default PaymentPage;