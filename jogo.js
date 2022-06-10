var secaoJogo = document.querySelector('.jogo')
var botoesInicio = document.querySelector('#botoesInicio')
const divErradas = document.querySelector(".letras-erradas")

function iniciarJogo() {

secaoJogo.style.display = "block"
botoesInicio.style.display = "none"
atualizandoJogo()
    document.addEventListener("keydown" , (event) =>{
        const codigoTeclado = event.keyCode // O alfabeto começa no código 65 e vai até 90
        if (isLetra(codigoTeclado)){
            const letra = event.key
            console.log(event.keyCode)
            //letra faz parte da palavra?
            if (letrasErradas.includes(letra)) {
                letraRepetida()            
            }
            else{
                if (palavraSecreta.includes(letra)) {
                    letrasCorretas.push(letra)
                }
                else{
                    letrasErradas.push(letra)
                }
            }
        }
        atualizandoJogo()

    })
}

function atualizandoJogo() {
    mostrarLetrasErradas()
    mostrarLetrasCertas()
    checarjogo()
}

function mostrarLetrasErradas(){

    divErradas.innerHTML = ""
    letrasErradas.forEach(letra => {
    divErradas.innerHTML += `<span> ${letra} </span>`;

    })
}

function mostrarLetrasCertas(){
    const palavraCorreta = document.querySelector(".palavra-secreta")
    palavraCorreta.innerHTML = ""
    palavraSecreta.split("").forEach(letra =>{
        if (letrasCorretas.includes(letra)){
            palavraCorreta.innerHTML += `<span>${letra}<span>`
        }
        else{
            palavraCorreta.innerHTML += `<span>_<span>`
        }
    })
}

function letraRepetida() {
    console.log("Você já utilizou essa letra!")
}

function isLetra(codigoTeclado) {
    return codigoTeclado >=65 && codigoTeclado <=90
}

function novoJogo() {
    palavraSecreta.splice(0 , palavras.length , 1)
    console.log("clicado!")
    atualizandoJogo()
}

function desistir() {

    location.reload()
}

function checarjogo(){
    let mensagem = ""
    const palavraCorreta = document.querySelector(".palavra-secreta")
    if(letrasErradas.length == 8){
        mensagem = "fim de jogo! voce Perder";
    }
    if(palavraSecreta == palavraCorreta.innerText){
        mensagem = "Parabéns, Você ganhou"
    }
    /*if(mensagem){
        const mensagem = document.querySelector("#mensagem").innerHTML
    }
    */
   
    desenhaForca()
   console.log(mensagem)
}

