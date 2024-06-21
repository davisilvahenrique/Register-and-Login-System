if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa pagina')
    window.location.href = '../login/login.html'
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.getElementById('logado')

logado.innerHTML = 'Olá ' + userLogado.user + '!'

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '../login/login.html'
}
