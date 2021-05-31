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

function createDaysOfTheWeek2() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysList = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = document.createElement('li');

    if ([24, 25, 31].includes(dezDaysList[index])) {
      day.className = 'day holiday';
    } else if ([4, 11, 18, 25].includes(dezDaysList[index])) {
      day.className = 'day friday';
    } else {
      day.className = 'day';
    }

    day.innerText = dezDaysList[index];
    daysList.appendChild(day);
  }
}

createDaysOfTheWeek2();

function createButton(string) {
  const button = document.createElement('button');
  const div = document.getElementsByClassName('buttons-container')[0];

  button.id = 'btn-holiday';
  button.innerText = string;
  div.appendChild(button);
}

createButton('Feriados');

function changeHolidayColor() {
  const holidays = document.getElementsByClassName('holiday');
  const button = document.getElementById('btn-holiday');

  function changeColor() {
    for (let index = 0; index < holidays.length; index++) {
      if (holidays[index].style.backgroundColor === 'white') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'white';
      }
    }
  }

  button.addEventListener('click', changeColor);

}

changeHolidayColor();

function zoom() {
  const days = document.getElementsByClassName('day');

  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    });

    days[index].addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    });
  }
}

zoom();
