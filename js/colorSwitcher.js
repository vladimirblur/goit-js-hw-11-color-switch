// ----------------------------------------------------------------------------
// --------------------------------- ФУНКЦИИ ----------------------------------
// ----------------------------------------------------------------------------

import refs from './refs.js'

const { startBtnRef, stopBtnRef, bodyRef } = refs;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getColor = () => {
  const colorNumber = randomIntegerFromInterval(0, colors.length - 1)
    bodyRef.style.backgroundColor = colors[colorNumber];
}



startBtnRef.addEventListener('click', (e) => {
  e.target.setAttribute("disabled", true);
  intervalId = setInterval (getColor , 1000)
}
);

   
stopBtnRef.addEventListener('click', () => {
  refs.startBtnRef.removeAttribute("disabled");
  clearInterval(intervalId);
});



