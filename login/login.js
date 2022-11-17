let usuario = document.getElementById('usuario')
let userLabel = document.getElementById('userLabel')

let senha = document.getElementById('senha')
let senhaLabel = document.getElementById('senhaLabel')

let Erro = document.querySelector('#Erro')
let listaUser = []

let userValid = {
    nome: '',
    email: '',
    user: '',
    senha: '',
}

function enviar() {

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userR && senha.value == item.senhaR){

            userValid = {
                nome: item.nomeR,
                email: item.emailR,
                user: item.userR,
                senha: item.senhaR
            }
        }
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        window.location.href = 'http://localhost:63342/PhpstormProjects/login/logado/logado.html?_ijt=9g6o6mo6j5pcbgt2e2k1rs78ub&_ij_reload=RELOAD_ON_SAVE'
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)
        localStorage.setItem(('userLogado'), JSON.stringify(userValid))
    } else {
        userLabel.setAttribute('style', 'color: red')
        senhaLabel.setAttribute('style', 'color: red')
        Erro.setAttribute('style', 'display: block')
        Erro.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }

}
