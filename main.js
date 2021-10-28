let deadline = new Date(2021,11,31,23,59,59);

function clock(deadline){
   days = document.querySelector('.timer__days');
   hours = document.querySelector('.timer__hours');
   minutes = document.querySelector('.timer__mintes');
   seconds = document.querySelector('.timer__seconds');

   function updateClock(){
      let remainingTime = Date.parse(deadline) - Date.parse(new Date());

      let newSeconds = Math.floor((remainingTime / 1000) % 60);
      let newMinutes = Math.floor((remainingTime / 1000 / 60) % 60);
      let newHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      let newDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

      days.innerHTML = newDays < 10 ? '0' + newDays: newDays;
      hours.innerHTML = newHours < 10 ? '0' + newHours: newHours;
      minutes.innerHTML = newMinutes < 10 ? '0' + newMinutes: newMinutes;
      seconds.innerHTML = newSeconds < 10 ? '0' + newSeconds: newSeconds;
   }
   updateClock();
   var timeinterval = setInterval(updateClock, 1000);
}
clock(deadline);