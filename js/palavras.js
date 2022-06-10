palavras = [
    "java", "oracle" , "desafio", "tartaruga", "codigo", "sublime", "basquete"
]

function palavraAleatoria(){
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase()
}


const letrasErradas = []
const letrasCorretas = [];