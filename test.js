const sechand = document.querySelector("[data-second]")

function setclock(){
    console.log("Test")
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60;
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();
    
    console.log(seconds)

    setrotation(sechand, seconds)
    setrotation(minhand, minutes)
    setrotation(hourhand, hours)
}

function setrotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation * 360)
}

setInterval(setclock, 1000)
setclock()