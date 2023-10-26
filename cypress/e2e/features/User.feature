Feature: Criar usuário no Backoffice Gringots
    
    Background: Tela de Login
        Given que estou na tela de Login do backoffice

    @teste
    Scenario: Validar a ativacao do usuário 
        And realizo o login no Backoffice do Gringots com usuario "" e senha ""
        When conecto ao mongo