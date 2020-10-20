const  daysP = document.getElementById('days');
const hoursp = document.getElementById("hours");
const minsP = document.getElementById("mins");
const secondsP = document.getElementById("seconds");


const  newChristmas = '27 August 2021';

function countDown(){
    const newChristmasDate = new Date(newChristmas);
    const currentData = new Date();
    
    const totalSecondes = (newChristmasDate - currentData)/1000;
    const days = Math.floor(totalSecondes/24/60/60);
    const hours = Math.floor(totalSecondes/3600)%24;
    const minutes = Math.floor(totalSecondes/60)%60;
    const seconds = Math.floor(totalSecondes%60);
    
    
     daysP.innerHTML = days;
     hoursp.innerHTML = hours;
     minsP.innerHTML = minutes;
    secondsP.innerHTML = seconds;
    
}


// initial call
countDown();

setInterval(countDown,1000);