const hourInput = document.querySelector(".hour-input")
const minInput = document.querySelector(".minute-input")
const secInput = document.querySelector(".second-input")
const countdownInDisplay = document.querySelector("#countdownDisplay")
const startTimer = document.querySelector(".start")
const stopTimer = document.querySelector(".stop")
const resetTimer = document.querySelector(".reset")

let myInterval;

startTimer.addEventListener("click",()=>{
 hour = parseInt(hourInput.value)
 hourInSec = hour*3600
 min = parseInt(minInput.value)
 minInSec = min*60
 sec = parseInt(secInput.value)
 totalSec = hourInSec + minInSec + sec
 startCountDown(totalSec)
})

function startCountDown(totalSec){
     myInterval = setInterval(()=>{
        if(totalSec<=0){
console.log("time's up")
        }else{
            const totalsecond = totalSec--
           console.log(totalsecond)
           updateDisplay(totalSec)
        }
    },1000)

    function clearInterval(){
        clearInterval(myInterval)
        console.log("interval id")
    }
}

function updateDisplay(time){
    const hour = Math.floor(time/3600);
    console.log(hour)
    const minute = Math.floor((time%3600)/60)
    console.log(minute)
    const second = Math.floor((time%60))
    console.log(second)
    const displayTime = `${String(hour).padStart(2,"0")}:${String(minute).padStart(2,'0')}:${String(second).padStart(2,"0")}`
    countdownInDisplay.innerText = (displayTime) 
  
}

resetTimer.addEventListener("click",()=>{
    clearInterval(myInterval)
    countdownInDisplay.innerText="00:00:00"
    hourInput.value = ""
    minInput.value = ""
    secInput.value = ""

})

stopTimer.addEventListener("click",()=> clearInterval(myInterval))