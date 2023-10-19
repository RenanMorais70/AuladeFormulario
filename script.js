// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const  usernameLabel = document.querySelector('label[for="username"]');
const  usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório

usernameInput.addEventListener('focus', () => {
    usernameLabel.classList.add('required-popup')
})

function handleCorrect(input, helper) {
    input.classList.remove('error')
    helper.classList.remove('visible')
    input.classList.add('correct')
}

// Ocultar popup de campo 

usernameInput.addEventListener('blur', (event) => {
    usernameLabel.classList.remove('required-popup')

    const valorInseridoPeloUsuario = event.target.value
    
    if(valorInseridoPeloUsuario.length > 3) {
       handleCorrect(usernameInput, usernameHelper)
    } 
    else {
        usernameInput.classList.remove('correct')
        console.log('error')
        usernameHelper.innerText = 'O username deve ter mais de 3 caracteres'
        usernameHelper.classList.add('visible')
    }
   
})


// Validação de e-mail

const emailInput = document.getElementById('email');
const emailLabel = document.getElementById('emaillabel');
const emailHelper = document.getElementById('email-help')

emailInput.addEventListener('blur', (event) => {
    const valorInseridoPeloUsuario = event.target.value
    if(valorInseridoPeloUsuario.includes('@') && valorInseridoPeloUsuario.includes('.com')) {
       handleCorrect(emailInput, emailHelper)
    }
    else {
        emailInput.classList.remove('correct')
        usernameInput.classList.add('error')
        usernameHelper.innerText = 'O username deve ter mais de 3 caracteres'
        usernameHelper.classList.add('visible')
    }
})

//Validação de idade

const idadeInput = document.getElementById('idade');
const idadeLabel = document.getElementById('idadelabel');
const idadeHelper = document.getElementById('idade-help')

function handleCorrect(input, helper) {
    input.classList.remove('error')
    helper.classList.remove('visible')
    input.classList.add('correct')
}

idadeInput.addEventListener('blur', (event) => {
    const valorInseridoPeloUsuario = event.target.value

    if(valorInseridoPeloUsuario.length > 17) {
        handlerCorrect(idadeInput, idadeHelper)
    } 
    else {
        idadeInput.classList.remove('correct')
        idadeInput.classList.add('error')
        idadeInput.innerText = ' Maior de idade.'
        idadeHelper.classList.add('visible')
    }
} )
