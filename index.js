const clock = document.getElementById("clock-display")

update()
setInterval(update, 1000)


function update(){
    
    let date = new Date()

    clock.innerHTML = formatTime(date)

    function formatTime(date){
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let amOrPm = hours >= 12 ? "pm" : "am"

        hours = (hours % 12) || 12;

        hours = formatZero(hours)
        minutes = formatZero(minutes)
        seconds = formatZero(seconds)
        

       return `${hours}:${minutes}:${seconds} ${amOrPm}`
        
        
    }

    function formatZero(time){
       time = time.toString();

        return time.length < 2 ? "0" + time : time;
    }
}