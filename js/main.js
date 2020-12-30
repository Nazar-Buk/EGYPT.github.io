// встановлюю час для відліку
let countDownDate = new Date('Jan 1, 2022 00:00:00').getTime();

// обновляю таймер кожної секунди
let countDownFunction = setInterval(()=>{

  //час на даний момент
  let now = new Date().getTime();

  //обчислюю проміжуток часу між встановленим часом та сьогодні
  let distance = countDownDate - now;

  // обчислюю час для днів, годин, хвилин і секунд
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //
  document.getElementById('timer').innerHTML =
    days + 'д ' + hours + 'год ' + minutes + 'хв ' + seconds + 'с ';

  // дії коли відлік буде 0
  if (distance < 0){
    clearInterval(countDownDate);
    document.getElementById('timer').innerHTML = 'Час вичерпано';
  }
}, 1000);
