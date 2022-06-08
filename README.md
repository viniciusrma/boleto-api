# boleto-api

## 💻 applied technologies

- [NodeJS](https://nodejs.org/en/)

## ⁉ How to use

1. Cloning the application:

```sh

$ git clone https://github.com/viniciusrma/boleto-api

```

2. Running the Application:

Setup:

```sh
- run `npm install`
- run `npm start`
```

2. Testing the Application:

```sh

- run `npm test`

```

## ⁉ Available Services

This api is supposed to take a bank slip bar code as input and return valid expiration date, amount and the bar code itself.

It is composed by 5 services:

- barCodeService - Checks if the input is valid - must be only numbers
- verifierDigit - Checks if the input has valids verifier digits, otherwise the barCode despite being composed only of numbers, it does not correctly calculate the verifier digit
- mod10Service - Interacts with service 'verifierDigit' and executes module 10 specific rule from documentation
- expirationDateService - After all validations are done, it returns the expiration date of the bank slip
- amountService - After all validations are done, it returns the amount of the bank slip

<h4  align="center">
Made with ❤ by <a  href="https://www.linkedin.com/in/viniciusrma/"  target="_blank">Vinícius Morais</a>
</h4>
