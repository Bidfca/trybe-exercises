function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ul = document.getElementById("days")

dezDaysList.forEach(day => {
  let li = document.createElement("li");
  li.innerText = day;
  li.className = "day";

  if (day == 24 || day == 25 || day == 31) {
    li.classList.add("holiday");
  }
  if (day == 4 || day == 11 || day == 18 || day == 25) {
    li.classList.add("friday");
  }

  ul.appendChild(li);
})

function criaBotao(feriados) {
  let botao = document.createElement("button");
  botao.setAttribute("id", "btn-holiday");
  botao.innerText = feriados;
  let div = document.querySelector(".buttons-container");
  div.appendChild(botao);
}

criaBotao("Feriados");

let botao = document.getElementById("btn-holiday");
botao.addEventListener("click", alternarCor);

function alternarCor() {
  let holidays = document.getElementsByClassName("holiday");
  for (const day of holidays) {
    const color = day.style.backgroundColor;
    day.style.backgroundColor = color === "white" ? "rgb(238,238,238)" : "white"
  }
}


function criaBotao2(sextafeira) {
  let botao = document.createElement("button");
  botao.setAttribute("id", "btn-friday");
  botao.innerText = sextafeira;
  let div = document.querySelector(".buttons-container");
  div.appendChild(botao);
}

criaBotao2("Sexta-feira");

let botao2 = document.getElementById("btn-friday");
botao2.addEventListener("click", alternarTexto);
const fridays_numbers = [4,11,18,25];
function alternarTexto() {
  let fridays = document.getElementsByClassName("friday");
  for (let index = 0; index < fridays.length; index++) {
    fridays[index].innerText = fridays[index].innerText === "SEXTOU" ? fridays_numbers[index] : "SEXTOU";
  }
}

let lis = document.getElementsByClassName("day");

for(const day of lis) {
  day.addEventListener("mouseover", zoomIn);
  day.addEventListener("mouseout", zoomOut);
}

function zoomIn(event) {
  event.target.style.fontSize = "25px";
}

function zoomOut(event) {
  event.target.style.fontSize = "20px";
}


