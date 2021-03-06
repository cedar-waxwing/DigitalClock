/*Javascript timer function. From MDN: 
"Similarly, you can use the setInterval() 
function to execute a function or specified 
piece of code repeatedly at fixed time intervals. 
Its basic syntax is setInterval(function, milliseconds)."
1000 msec is 1 sec. */



//ClockDisplay -- stating variables. Uses Javascript Date object. new Date() defaults to display in milliseconds. 

function displayTime() {
    let date = new Date()
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

    /*Switching military to cilivian time as well as AM/PM differential; 
    can be included in same if statement setup.*/

    if (hour < 12) {
        period = "AM";
    }
    if (hour > 12) {
        hour -= 12;
        period = "PM";
    }

    /*Ternary operator to abbreviate if else statements. Example: "( condition ) ? run this code : otherwise run this code instead".
     Here it's used to pad the clock with a 0 so that the clock has a consistant number of digits listed.
    */

    hour = hour < 10 ? "0" + hour : hour;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    //Making a string of hours, minutes and seconds.  

    let currentTime = hour + ":" + mins + ":" + secs + period

    //Referencing html to display the clock 

    document.getElementById("RachelsDigitalClock")
        .innerHTML = currentTime
}
