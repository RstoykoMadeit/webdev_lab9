function init(){
//add your javascrip between these two lines of code
 var  button = document.getElementById('entryinput');
 
 function showMeText(){
	 var textbox = document.getElementById('entryinput');
	 document.getElementById('textoutput').innerHTML = textbook.value;
	 alert("Roman Stoyko: " + textbox.value);
 }
 
 button.addEventListener('click', showMeText);
 }







window.addEventListener('load', init);
