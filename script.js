// TO CHECK IF .js FILE IS RENDERED FROM HTML PROPERLY, this will be printed on console only when html is rendered completely and <script> tag is read at the end
console.log('script loaded')

//------------------- TO CHECK WHICH KEY IS PRESSED ON THE KEYBOARD

// var box = document.querySelector('#box');
// document.addEventListener('keydown', function(){
// 	console.log(event.key);
// });

//-------------------MOVING THE BOX

// var box = document.querySelector('#box');
// document.addEventListener('keydown', function(){

// 	// console.log(event.key);
// 	// console.log(box.style.left);

// var b = box.getBoundingClientRect();

// if (event.key == 'ArrowRight' && (b.x+b.width) < window.innerWidth){
// 	box.style.left = b.x + 20 + 'px'; // don't forget to add 'px', it doesn't work!
// }
// if (event.key == 'ArrowLeft' && b.x > 0){
// 	box.style.left = b.x - 20 + 'px'; // don't forget to add 'px', it doesn't work!
// }
// if (event.key == 'ArrowUp' && b.y > 0){
// 	box.style.top = b.y - 20 + 'px'; // don't forget to add 'px', it doesn't work!
// }
// if (event.key == 'ArrowDown' && (b.y+b.height) < window.innerHeight){
// 	box.style.top = b.y + 20 + 'px'; // don't forget to add 'px', it doesn't work!
// }

// });


//---------------------TOUCH ME IF YOU CAN

 // changing box color using random color generator
var box = document.querySelector('#box');

box.addEventListener('mouseover', function(){
	
// this.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16) OR
   let r = getRandomNo(0, 255);
   let g = getRandomNo(0, 255);
   let b = getRandomNo(0, 255);
    this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
   }
);

function getRandomNo(min, max){
	return Math.random()*(max-min)+min;
} 

//------- for sudden change in position, no smooth movement
// var b = box.getBoundingClientRect();

// box.addEventListener('mouseover',function(){
// 	this.style.top = getRandomNo(0, (window.innerHeight-b.height)) + 'px'; 
// 	this.style.left = getRandomNo(0, (window.innerWidth-b.width)) + 'px';
// });

//------ for smooth movement of box
// we find a random positon of box (function randomGenerator) and make the box start moving to that location @1px/ms in x and y directions equllay(diagonally). We use the clearInterval(movement) function so that if the previous motion of box is on it's way but we've hovered the cursor within that time
function catchMeIfYouCan(){

	function randomGenerator(upper, lower){
		return Math.floor((Math.random() * (upper - lower)) + lower);
	}

	var movement;
	box.addEventListener('mouseover', function(){
		
		clearInterval(movement);

		let boxX = box.getBoundingClientRect().x;
		let boxY = box.getBoundingClientRect().y;

		let newX = randomGenerator(0, window.innerWidth);
		let newY = randomGenerator(0, window.innerHeight);

		let moveX = 1;
		let moveY = 1;

		if (newX < boxX){
			moveX = -1;
		}

		if (newY < boxY){
			moveY = -1;
		}

		movement = setInterval(function(){
			boxX += moveX;
			boxY += moveY;
			box.style.left = boxX + 'px';
			box.style.top = boxY + 'px';

		}, 10);

	});
}
catchMeIfYouCan();