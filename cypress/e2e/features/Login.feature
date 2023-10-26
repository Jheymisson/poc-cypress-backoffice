Feature: Login Backoffice Gringots

    Background: Tela de Login
        Given que estou na tela de Login do backoffice

    @loginValido
    Scenario: Validar login com sucesso
        And preencha o login com ""
        And preencha a senha com ""
        When aciono o botao do login
        Then é exibido a tela Home com o usuário "Qa Teste"

    @loginSemCredenciais
    Scenario: Validar mensagem de erro ao não informar usuário e senha
        And não preencho as credências do login e senha
        When aciono o botao do login
        Then é exibido a mensagem "Nome do usuário obrigatório" e "Senha obrigatória"

    @loginSenhaIncorreta
    Scenario: Validar mensagem de erro ao informar senha inválida
        And preencha o login com ""
        And preencha a senha com ""
        When aciono o botao do login
        Then é exibido "Usuário ou senha inválido" na tela de login

    @loginSemUsuario
    Scenario: Validar login sem informar o usuário
        And preencha a senha com ""
        When aciono o botao do login
        Then é exibido "Nome do usuário obrigatório" de usuário obrigatório 

    @loginSemSenha
    Scenario: Validar login sem informar a senha
        And preencha o login com ""
        When aciono o botao do login
        Then é exibido "Senha obrigatória" de senha obrigatória

    @acessoBackofficeSemLogin
    Scenario: Validar o não direcionamento para a tela Home
        And tento acessar diretamente a tela Home do backoffice com o Path '/Clients'
        Then sou direcionado novamente para a tela de Login
        