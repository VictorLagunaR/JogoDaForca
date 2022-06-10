var secaoJogo = document.querySelector('.jogo')
var botoesInicio = document.querySelector('#botoesInicio')
botaoinicio = document.querySelector("#comecarJogo")
const divErradas = document.querySelector(".letras-erradas")
titulo = document.querySelector("h1")

botaoinicio.addEventListener('click', iniciarJogo)

function iniciarJogo() {

    
    const palavraSecreta = palavraAleatoria()
    palavraAleatoria(palavraSecreta)
    secaoJogo.style.display = "block"
    botoesInicio.style.display = "none"
    atualizandoJogo()
    document.addEventListener("keydown" , reconhecendoDigito)
}

function reconhecendoDigito(){
    const codigoTeclado = event.keyCode // O alfabeto começa no código 65 e vai até 90
        titulo.style.display = "none"
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

const fimDoJogo = () => {
    document.removeEventListener("keydown", reconhecendoDigito);
};

function novoJogo() {
    
    iniciarJogo()
    letrasErradas.splice(0, letrasErradas.length)
    letrasCorretas.splice(0, letrasCorretas.length)
    atualizandoJogo()
}

function desistir() {

    location.reload()
}

function checarjogo(){
    let mensagemPerdeu = document.querySelector(".perdeu")
    let mensagemGanhou = document.querySelector(".ganhou")
    const palavraCorreta = document.querySelector(".palavra-secreta")
    if(letrasErradas.length == 7){
        mensagemPerdeu.style.display = "block";
        fimDoJogo();
    }
    if(palavraSecreta == palavraCorreta.innerText){
        mensagemGanhou.style.display = "block";
        fimDoJogo();
    }
    /*if(mensagem){
        const mensagem = document.querySelector("#mensagem").innerHTML
    }
    */
   
    desenhaForca()
}
