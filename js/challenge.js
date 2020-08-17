const minusButton = document.querySelector('button#minus');
const plusButton = document.querySelector('button#plus');
const heartButton = document.querySelector('button#heart');
const pauseButton  = document.querySelector('button#pause');

function buttonDisable (){
  minusButton.disabled = true;
  heartButton.disabled = true;
  plusButton.disabled = true;
}

function buttonEnable () {
  minusButton.disabled = false;
  heartButton.disabled = false;
  plusButton.disabled = false;
}




document.querySelector("#comment-form").addEventListener("submit", function(event) {
  let inputValue = document.getElementById("comment-input").value;
         document.getElementById("list").innerHTML += ("</br>" + inputValue + "</br>");
         event.preventDefault();
}, false);

document.querySelector("#pause").addEventListener("click", function(event) {
  console.log("here");
  if (minusButton.disabled == true){
    buttonEnable();
  } else
  buttonDisable();
}, false);
