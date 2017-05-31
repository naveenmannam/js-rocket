// Get the variable names

var launch = document.getElementById('launchRocket');
var abort = document.getElementById('abortRocket');
var rock = document.getElementById('rock');



// Add the event listener functions
function startLaunch(){
    rock.className = 'rocket flying';
}

function startLaunch(){
    rock.className = 'rocket';
}



// Add the event listeners

launch.addEventListener('click',startLaunch);
abort.addEventListener('click',stopLaunch);