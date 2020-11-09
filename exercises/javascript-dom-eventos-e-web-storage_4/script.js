window.onload = function () {
    document.body.style.background = localStorage.getItem("fundo")
    conteudo.style.color = localStorage.getItem("texto")
    conteudo.style.fontSize = localStorage.getItem("tamanho")
    conteudo.style.lineHeight = localStorage.getItem("espacamento")
    conteudo.style.fontFamily = localStorage.getItem("fonte")
}

const fundo = document.getElementById("fundo")
const texto = document.getElementById("texto")
const tamanho = document.getElementById("tamanho")
const espacamento = document.getElementById("espacamento")
const fonte = document.getElementById("fonte")
const conteudo = document.getElementById("conteudo")

function mudaFundo() {
    document.body.style.background = fundo.value
    localStorage.setItem("fundo", fundo.value)
}
function mudaTexto() {
    conteudo.style.color = texto.value
    localStorage.setItem("texto", texto.value)
}
function mudaTamanho() {
    conteudo.style.fontSize = tamanho.value + "px"
    localStorage.setItem("tamanho", tamanho.value + "px")
}
function mudaEspacamento() {
    conteudo.style.lineHeight = espacamento.value
    localStorage.setItem("espacamento", espacamento.value)
}
function mudaFonte() {
    conteudo.style.fontFamily = fonte.value
    localStorage.setItem("fonte", fonte.value)
}

fundo.addEventListener("input", mudaFundo)
texto.addEventListener("input", mudaTexto)
tamanho.addEventListener("input", mudaTamanho)
espacamento.addEventListener("input", mudaEspacamento)
fonte.addEventListener("input", mudaFonte)


