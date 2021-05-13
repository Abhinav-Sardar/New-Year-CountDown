function setCountDown () {
const newYear = new Date(2022 , 0 , 1 , 0 , 0 , 0) ; 
const today = new Date() ; 
const milliseconds = newYear - today; 
const totalSeconds = milliseconds/1000 ; 
const remainingDays = Math.floor(totalSeconds/60/60/24) ; 
const remainingHours = Math.floor((totalSeconds/60/60)%24);
const remainingMinutes  = Math.floor((totalSeconds/60)%60) ; 
const remainingSeconds = Math.floor((totalSeconds)%60) ; 
const days = document.getElementById('days') ; 
const hours  = document.getElementById('hours') ; 
const minutes = document.getElementById('minutes') ; 
const seconds = document.getElementById('seconds'); 
console.group(remainingDays, remainingHours , remainingMinutes , remainingSeconds) ; 
days.innerText = remainingDays ; 
hours.innerText = remainingHours; 
minutes.innerText = remainingMinutes ; 
seconds.innerText = remainingSeconds; 
}
setInterval(setCountDown , 1000)  ;


