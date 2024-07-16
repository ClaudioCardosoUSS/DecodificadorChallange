let textarea = document.querySelector("textarea");
let botaoCripto = document.getElementById("botaoCripto");
let botaoDescripto = document.getElementById("botaoDescripto");
let resultado = document.getElementById("resultado");
let mensagemNaoEncontrada = document.querySelector("aside h2");
let mensagemInstrucao = document.querySelector("aside p");

function carregaPagina() {
    limparResultado();
    textarea.focus();
}

textarea.addEventListener("input", () => {
    let texto = textarea.value.trim();
    let valido = /^[a-z\s]+$/.test(texto);
    
    botaoCripto.disabled = !valido;
    botaoDescripto.disabled = !valido;
    
    botaoCripto.classList.toggle("desabilitado", !valido);
    botaoDescripto.classList.toggle("desabilitado", !valido);
    
    botaoCripto.classList.toggle("criptografar", valido);
    botaoDescripto.classList.toggle("descriptografar", valido);
});

function criptografar() {
    let texto = textarea.value.toLowerCase();
    let cripto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    exibirResultado(cripto);
}

function descriptografar() {
    let texto = textarea.value;
    let descripto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    exibirResultado(descripto);
}

function exibirResultado(texto) {
    resultado.innerText = texto;
    resultado.style.display = "block";
    document.querySelector("#copiar").style.display = "block";
    document.querySelector("aside img").style.display = "none";
    mensagemNaoEncontrada.style.display = "none";
    mensagemInstrucao.style.display = "none";
    textarea.value = "";
    textarea.focus();
}

function limparResultado() {
    resultado.style.display = "none";
    document.querySelector("#copiar").style.display = "none";
    document.querySelector("aside img").style.display = "block";
    mensagemNaoEncontrada.style.display = "block";
    mensagemInstrucao.style.display = "block";
    resultado.innerText = "";
}

function copiar() {
    navigator.clipboard.writeText(resultado.innerText)
        .then(() => {
            alert("Texto copiado!");
            limparResultado();
        })
        .catch(err => console.error('Erro ao copiar texto: ', err));
}

carregaPagina();