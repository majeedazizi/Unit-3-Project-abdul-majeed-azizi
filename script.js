/* Declare variables below to save the different sections (divs) of your story*/
let optionOne=document.querySelector(".option-one-screen");
let optionTow=document.querySelector(".option-tow-crash");
let optionThree=document.querySelector(".option-two-screen");
let optionFour=document.querySelector(".option-one-end");
let optionFive=document.querySelector(".option-two-end");
let leftTurn = document.querySelector(".option-one");
let rightTurn = document.querySelector(".option-two");
let opaning=document.querySelector(".story-opening");
let optionSick=document.querySelector(".option-sick");
let optionSafe=document.querySelector(".optionsafe");
leftTurn.onclick=function(){
	optionOne.style.display = "block";
    opaning.style.display="none";
};
rightTurn.onclick=function(){
	optionFive.style.display = "block";
    opaning.style.display="none";
};

optionOne.onclick=function(){
optionFour.style.display = "block";
 optionOne.style.display="none";};

optionSick.onclick=function(){
optionFour.style.display = "none";
 optionFive.style.display="block";};
leftTurn.onmouseover=function(){ 
    optionFive.style. backgroundColor="green";
                                
	leftTurn.style. color="red";
};


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


