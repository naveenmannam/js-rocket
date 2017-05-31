

// console.log(boxOne);
var btn = document.getElementById('clickMe');

// Define the functions for event listeners
function changeColor() {
	var boxOne = document.getElementById('boxOne');
	if (boxOne.className == 'box colorOne' ){
		boxOne.className = 'box colorTwo';
	}
	else {
		boxOne.className = 'box colorOne';
	}
}

// Define the event listeners 

btn.addEventListener('click', changeColor);
