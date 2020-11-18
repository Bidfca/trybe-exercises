let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

let inputs = document.getElementsByTagName("input");
let botaoLimpar = document.getElementById("limpar");
let botaoEnviar = document.getElementById("enviar");
let div = document.createElement("div");
let p = document.getElementById("mensagem");
let form = document.querySelector("form");

botaoLimpar.addEventListener("click", limparInputs);
botaoEnviar.addEventListener("click", enviarForms);

function limparInputs() {
    let areaTexto = document.getElementById("curriculo");
    areaTexto.value = "";
    for (input of inputs) {
        input.value = "";
    }
    p.innerText = "";
}

function enviarForms(event) {
    var validacao = form.checkValidity();
    form.reportValidity();
    event.preventDefault();
    if (validacao) {
        let dataInput = document.getElementById("data").value.split("/");
        if (dataInput.length < 3) {
            div.innerText = "";
            p.innerText = "data deve ter o formato: dd/mm/yyyy";
        } else if (dataInput[0] < 0 || dataInput[0] > 31) {
            div.innerText = "";
            p.innerText = "dia inválido";
        } else if (dataInput[1] < 0 || dataInput[1] > 12) {
            div.innerText = "";
            p.innerText = "mês inválido";
        } else if (dataInput[2] < 0) {
            div.innerText = "";
            p.innerText = "ano inválido";
        } else if (isNaN(dataInput[0]) || isNaN(dataInput[1]) || isNaN(dataInput[2])) {
            div.innerText = "";
            p.innerText = "data deve conter apenas números";
        } else {
            let formData = new FormData(form);
            div.innerText = "";
            for (input of formData.entries()) {
                let campo = document.createElement("p");
                campo.innerText = input[0] + ":" + input[1];
                div.appendChild(campo);
            }
            document.body.appendChild(div);
            p.innerText = "";
        }
    }
}

estados.forEach(estado => {
    let opcoes = document.getElementById("estado");
    let opcao = document.createElement("option");
    opcao.value = estado.toLowerCase();
    opcao.innerText = estado;
    opcoes.appendChild(opcao);
})