let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelNome');
let validNome = false;

let email = document.getElementById('email')
let labelEmail = document.getElementById('labelEmail');
let validEmail = false;

let user = document.getElementById('user');
let labelUser = document.getElementById('labelUser');
let validUser = false;

let senha = document.getElementById('senha');
let labelSenha = document.getElementById('labelSenha');
let validSenha = false;

let Sucesso = document.querySelector('#Sucesso')
let Erro = document.querySelector('#Erro')

nome.addEventListener('keyup', () => {
    console.log('OI')
    if (nome.value.length <= 3) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'O <strong>nome</strong> deve conter pelo menos <strong>4 caracteres</strong>'
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        validNome = true;
    }
})

email.addEventListener('change', () => {
    console.log('OI')
    if (!email.value.includes('@') || !email.value.includes('.')) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'O <strong>email</strong> não é válido'
        validEmail = false;
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        validEmail  = true;
    }
})

user.addEventListener('keyup', () => {
    console.log('OI')
    if (user.value.length <= 2) {
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = 'O <strong>usuário</strong> deve conter pelo menos <strong>3 caracteres</strong>'
        validUser = false;
    } else {
        labelUser.setAttribute('style', 'color: green')
        labelUser.innerHTML = 'Usuário'
        validUser  = true;
    }
})

senha.addEventListener('keyup', () => {
    console.log('OI')
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'A <strong>senha</strong> deve conter pelo menos <strong>6 caracteres</strong>'
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true;
    }
})

function registrar() {
    if(validNome && validEmail && validUser && validSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeR: nome.value,
                emailR: email.value,
                userR: user.value,
                senhaR: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        Sucesso.setAttribute('style', 'display: block')
        Sucesso.innerHTML = '<strong>Cadastrando Usuário...</strong>'
        Erro.setAttribute('style', 'display: nome')
        Erro.innerHTML = ''


        window.location.href = 'http://localhost:63342/PhpstormProjects/Register-and-Login-System/login/login.html?_ijt=q00o59homm1u6vo06ga895rucb&_ij_reload=RELOAD_ON_SAVE'


    } else {
        Erro.setAttribute('style', 'display: block')
        Erro.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
        Sucesso.setAttribute('style', 'display: nome')
        Sucesso.innerHTML = ''
    }
}
