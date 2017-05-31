// Get the variable names

var launch = document.getElementById('launchRocket');
var abort = document.getElementById('abortRocket');
var countdown = document.getElementById('countdown');
var rock = document.getElementById('rock');
var count = countdown.innerText;


// Add the event listener functions
function startLaunch() {
    for (var i = count; i >= 0; i--) {
        countdown.innerText = i;
        if (countdown.innerText == 0) {
            rock.className = 'rocket flying';
        }
    }
}

function stopLaunch() {
    rock.className = 'rocket';
}



// Add the event listeners

launch.addEventListener('click', startLaunch);
abort.addEventListener('click', stopLaunch);