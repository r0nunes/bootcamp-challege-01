
![Actions Status](https://github.com/r0nunes/bootcamp-challege-01/workflows/CI/badge.svg)
![chance](https://img.shields.io/npm/v/chance?label=chanceJS)
![mocha](https://img.shields.io/npm/v/mocha?color=yellow&label=mocha)
![mochawesome](https://img.shields.io/npm/v/mochawesome?color=yellow&label=mochawesome)
![mochawesome-merge](https://img.shields.io/npm/v/mochawesome-merge?color=yellow&label=mochawesome-merge)
![mochawesome-report-generator](https://img.shields.io/npm/v/mochawesome-report-generator?color=yellow&label=mochawesome-report-generator)
![cypress-multi-reporters](https://img.shields.io/npm/v/cypress-multi-reporters?color=green&label=cypress-multi-reporters)


![as](https://agilizei.files.wordpress.com/2020/08/agilizei.png?w=120&h=580)

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

# Execução do projeto

Para executar o projeto: 

- Clonar o repositório
- Dentro da raiz do projeto, executar o comando abaixo:
`npm install`
- Após o término, executar o comando:
`npm run cy:run`

Lembrando que a execução acima é feita em modo headless, ou seja, não teremos visão da interface gráfica nessa situação. 

Ao realizar o término da execução do testes, é possível gerar os relatórios com os comandos abaixo:

`npm run report:merge`

`npm run report:mocha`

# Relatório de execução

O relatório desse projeto é publicado atráves do Github Pages, ao realizar a execução do Github Actions a cada nova alteração no repósitório. Para consultar a execução, acesse o portal: https://r0nunes.github.io/bootcamp-challenge-01/


