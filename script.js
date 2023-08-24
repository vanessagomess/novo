const email = document.getElementById('email')

const senha = document.getElementById('senha')

 

function login() {

    if(email.value == 'admin@email.com' && senha.value == '1234') {

        alert('Login feito com sucesso')

    } 
    
    else {

        alert('Login ou senha incorretos')

    }

}