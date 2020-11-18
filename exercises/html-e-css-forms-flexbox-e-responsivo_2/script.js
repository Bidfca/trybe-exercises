new window.JustValidate(".js-form", {
    rules: {
        cpf: {
            required: true,
            maxLength: 11
        },
        endereco: {
            required: true,
            maxLength: 200
        },
        cidade: {
            required: true,
            maxLength: 28
        },
        radio: {
            required: true
        },
        curriculo: {
            required: true,
            maxLength: 1000
        },
        cargo: {
            required: true,
            maxLength: 40
        },
        descricao: {
            required: true,
            maxLength: 500
        },
        data: {
            required: true
        }
    }
});


let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

let inputs = document.getElementsByTagName("input");
let botaoLimpar = document.getElementById("limpar");
let botaoEnviar = document.getElementById("enviar");
let datePicker = document.getElementById("data").DatePickerX.init({ format: "dd/mm/yyyy" });

botaoLimpar.addEventListener("click", limparInputs);

function limparInputs() {
    let areaTexto = document.getElementById("curriculo");
    areaTexto.value = "";
    for (input of inputs) {
        input.value = "";
    }
    p.innerText = "";
}

estados.forEach(estado => {
    let opcoes = document.getElementById("estado");
    let opcao = document.createElement("option");
    opcao.value = estado.toLowerCase();
    opcao.innerText = estado;
    opcoes.appendChild(opcao);
})
