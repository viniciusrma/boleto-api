# Boleto-api ð§¾ð§®

## ð¨âð» Applied technologies ð

- [NodeJS](https://nodejs.org/en/)

## â How to use ð§

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

- run `npm run test`
- run `npm run coverage`

```

## ð¥ Available Services ð

This api is supposed to take a bank slip bar code as input and return valid expiration date, amount and the bar code itself.

It is composed by 5 services:

- barCodeService - Checks if the input is valid - must be only numbers
- verifierDigit - Checks if the input has valids verifier digits, otherwise the barCode despite being composed only of numbers, it does not correctly calculate the verifier digit
- mod10Service - Interacts with service 'verifierDigit' and executes module 10 specific rule from documentation
- expirationDateService - After all validations are done, it returns the expiration date of the bank slip
- amountService - After all validations are done, it returns the amount of the bank slip

## test cases

- 21290001192110001210904475617405975870000002000 (successful),
- 21290008192110001290904475617405976870000502000 (error)

<h4  align="center">
Made with â¤ by <a  href="https://www.linkedin.com/in/viniciusrma/"  target="_blank">VinÃ­cius Morais</a>
</h4>
