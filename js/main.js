
let nomeUsuario = document.querySelector('.avatar-content div');
nomeUsuario.innerHTML = `<strong>Júlia</strong>`;
//console.log(nomeUsuario)

let inputNome = document.getElementsByName('name')[0];
//console.log(inputNome)
inputNome.setAttribute('placeholder', 'Primeiro nome');



let inputs = document.querySelectorAll('input')

inputs.forEach(elemento => {
    elemento.style.borderRadius = '5px';
    elemento.style.width = '100%';
    elemento.style.boxSizing = 'border-box';
})


document.body.style.backgroundColor = "#fafafa";


