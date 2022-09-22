//when vutton clicked
var buttons = document.querySelectorAll("button"); //selecting the button tag from  html even .drum class can be used.
for (i = 0; i < buttons.length; i++) { //iterating through all the 7 buttons.
  buttons[i].addEventListener("click", handleClick); //what happens when clicked on those buttons

}

document.addEventListener("keydown",keyBoard);

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

function keyBoard(){
  // console.log(event);
  var clickedKey=event.key;   //event gives info which key is pressed.if "w" is pressed , then clcikedKey is "w" and  make sound acc.
  clickedKey=clickedKey.toLowerCase();
  makeSound(clickedKey);
  buttonAnimation(clickedKey);

}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default: console.log(key);

  }
}

function buttonAnimation(currentKey){
var activeButton=  document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function (){
  activeButton.classList.remove("pressed");
},100)

}
  //var audio=new Audio("sounds/tom-1.mp3");
  //audio.play();
