if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa pagina')
    window.location.href = 'http://localhost:63342/PhpstormProjects/Register-and-Login-System/login/login.html?_ijt=q00o59homm1u6vo06ga895rucb&_ij_reload=RELOAD_ON_SAVE'
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.getElementById('logado')

logado.innerHTML = 'Olá ' + userLogado.user + '!'

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'http://localhost:63342/PhpstormProjects/Register-and-Login-System/login/login.html?_ijt=q00o59homm1u6vo06ga895rucb&_ij_reload=RELOAD_ON_SAVE'
}
