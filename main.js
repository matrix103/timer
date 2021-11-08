let DEADLINE = new Date(2021,11,31,23,59,59);
// const DEADLINE = new Date();
let stopwatchFlag = false;

let countdownTimer = document.querySelector('.__countdownTimer');
let stopwatch = document.querySelector('.__stopwatch');
let timer = document.querySelector('.__timer');
let alarm = document.querySelector('.__alarm');
let timer_switches = document.querySelector('.timer_switches');

countdownTimer.addEventListener('click', function(){
   document.querySelector('.timer_switches').classList.add('ret');
   DEADLINE = new Date(2021,11,31,23,59,59);
   document.querySelector('.timer_switches').classList.remove('ret');
   stopwatchFlag = false;
   clock(DEADLINE);
   console.log(1);
});

stopwatch.addEventListener('click', function(){
   stopwatchBtn = document.querySelector('.stopwatch_start');
   stopwatchBtn.style.display = 'block';
   stopwatchBtn.addEventListener('click', function(){
      DEADLINE = new Date();
      stopwatchFlag = true;
      clock(DEADLINE);
   });
   console.log(2);
});

function clock(DEADLINE){
   let daysValue = document.querySelector('.timer__days');
   let hoursValue = document.querySelector('.timer__hours');
   let minutesValue = document.querySelector('.timer__mintes');
   let secondsValue = document.querySelector('.timer__seconds');

   let daysItem = document.querySelector('._days');
   let hoursItem = document.querySelector('._hours');
   let minutesItem = document.querySelector('._minutes');
   let secondsItem = document.querySelector('._seconds');

   function updateClock(){
      let remainingTime = Math.abs(Date.parse(DEADLINE) - Date.parse(new Date()));
      
      let newSeconds = Math.floor((remainingTime / 1000) % 60);
      getParametrs(secondsItem, newSeconds, 60)
      let newMinutes = Math.floor((remainingTime / 1000 / 60) % 60);
      getParametrs(minutesItem, newMinutes, 60)
      let newHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      getParametrs(hoursItem, newHours, 24)
      let newDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      getParametrs(daysItem, newDays, 360)

      function getParametrs(item, time, num){
         item.countValue = +time;
         item.countRatio = 360 / item.countValue;
         item.countColor = 100 / item.countValue;
         item.countLight = item.countValue / 20;
         item.countTimer = setInterval( fCountdown.bind(item, num), 1000);

         function fCountdown(num) {
            let val = 360 / num;
            let nCount = this.countValue;
            if (nCount >= 0) {
               fillingScale = (stopwatchFlag) ? nCount*val : (num - nCount) * val;
               this.style.setProperty("--deg", fillingScale);
               this.style.setProperty("--col", `hsla(${nCount/(num/100)}, 100%, ${60}%, 1)`);
            }
         }
      }
      daysValue.innerHTML = newDays < 10 ? '0' + newDays: newDays;
      hoursValue.innerHTML = newHours < 10 ? '0' + newHours: newHours;
      minutesValue.innerHTML = newMinutes < 10 ? '0' + newMinutes: newMinutes;
      secondsValue.innerHTML = newSeconds < 10 ? '0' + newSeconds: newSeconds;
   }
   updateClock();
   var timeinterval = setInterval(updateClock, 1000);
}
// clock(DEADLINE);

// let deadline = new Date();


// function clock(deadline){
//    let daysValue = document.querySelector('.timer__days');
//    let hoursValue = document.querySelector('.timer__hours');
//    let minutesValue = document.querySelector('.timer__mintes');
//    let secondsValue = document.querySelector('.timer__seconds');

//    let daysItem = document.querySelector('._days');
//    let hoursItem = document.querySelector('._hours');
//    let minutesItem = document.querySelector('._minutes');
//    let secondsItem = document.querySelector('._seconds');

//    function updateClock(){
//       let remainingTime = Math.abs(Date.parse(deadline) - Date.parse(new Date()));
      
//       let newSeconds = Math.floor((remainingTime / 1000) % 60);
//       getParametrs(secondsItem, newSeconds, 60)
//       let newMinutes = Math.floor((remainingTime / 1000 / 60) % 60);
//       getParametrs(minutesItem, newMinutes, 60)
//       let newHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
//       getParametrs(hoursItem, newHours, 24)
//       let newDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
//       getParametrs(daysItem, newDays, 360)

//       function getParametrs(item, time, num){
//          item.countValue = +time;
//          item.countRatio = 360 / item.countValue;
//          item.countColor = 100 / item.countValue;
//          item.countLight = item.countValue / 20;
//          item.countTimer = setInterval( fCountdown.bind(item, num), 1000);

//          function fCountdown(num) {
//             let val = 360 / num;
//             let nCount = this.countValue;
//             if (nCount >= 0) {
//                this.style.setProperty("--deg", ((nCount) * val));
//                this.style.setProperty("--col", `hsla(${nCount/(num/100)}, 100%, ${60}%, 1)`);
//             }
//          }
//       }

//       daysValue.innerHTML = newDays < 10 ? '0' + newDays: newDays;
//       hoursValue.innerHTML = newHours < 10 ? '0' + newHours: newHours;
//       minutesValue.innerHTML = newMinutes < 10 ? '0' + newMinutes: newMinutes;
//       secondsValue.innerHTML = newSeconds < 10 ? '0' + newSeconds: newSeconds;
//    }
//    updateClock();
//    var timeinterval = setInterval(updateClock, 1000);
// }
// clock(deadline);