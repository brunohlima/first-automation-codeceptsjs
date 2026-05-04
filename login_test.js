Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');            // Abrir uma página especifica
    I.click('Login')                                            // Clicar no ícone da navbar
    I.waitForText('Login', 10)                                  // Aguardar a tela carregar
    I.fillField('#user', 'brunohlimag21@hotmail.com')           // Clicar no campo e digitar e-mail
    I.fillField('#password', secret('123456789'))               // Clicar no campo e digitar senha
    I.click('#btnLogin')                                        // Clicar no botão de login
    I.waitForText('Login realizado', 10)                        // Aguardar tela carregar e exibir texto

}).tag('@sucesso')                                              // Para colocar tag para rodar 1 teste

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'brunohlimag21@hotmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.', 3)

}).tag('@email')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 10)

}).tag('vazio')

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', secret('123456789'))
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 10)

}).tag('senha')