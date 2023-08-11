// Timer

// Set the deadline for the countdown timer
let deadLine = '2023-08-12';

// Function to calculate the time remaining until the specified endtime
function getTimeRemaining(endtime) {
    // Calculate the time difference between the endtime and the current date
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

    // Return the remaining time as an object
    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    }    
}

// Function to set up and update the countdown clock
function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    // Update the clock display
    function updateClock() {
        let t = getTimeRemaining(endtime);

        // Function to add leading zero to numbers less than 10
        function addZero(num){
            if(num <= 9) {
                return '0' + num;
            } else return num;
        };

        // Update the clock elements with the remaining time
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        // If the countdown reaches zero, clear the interval and display 00:00:00
        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}

// Initialize the countdown clock
setClock('timer', deadLine);
