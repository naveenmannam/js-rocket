// Get the variable names

var launch = document.getElementById('launchRocket');
var rock = document.getElementById('rock');



// Add the event listener functions
function getLaunch(){
    rock.className = 'rocket flying';
}



// Add the event listeners

launch.addEventListener('click',getLaunch);