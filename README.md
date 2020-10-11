[![Actions Status](https://github.com/r0nunes/bootcamp-challege-01/workflows/CI/badge.svg)](https://github.com/r0nunes/bootcamp-challege-01/actions)

# bootcamp-desafio-01

Projeto desenvolvido para atender os requisitos do desafio 01, referente ao MOD-01 do bootcamp. 

## Arquitetura

- Cypress @ 4.10.0
- NodeJS @ v10.19
- NPM @ 6.14.4

### Dependecias
- mocha 
- mochawesome
- mochawesome-merge
- mochawesome-report-generator
- cypress-multi-reporters
- ChanceJS


## Cenários que devem ser implementados
- Cadastrar um novo usuário

## Fluxo do cenário:

- Acessar o site automation practice http://automationpractice.com
- Clicar no botão de Sign in
- Preencher as informações de e-mail (não pode ser repetido)
- Clicar no botão Create an Account
- Preencher as informações do formulário de cadastro
- Clicar no botão Register
- Validar que foi redirecionado para a url correta
- Validar exibição do texto 'Welcome to your account'
