// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case

// Once you've identified the elements you want to change, you can use the "classList" (to change classes) or "innerHTML" (to change the text):
// classList = https://www.w3schools.com/jsref/prop_element_classlist.asp
// innerHTML = https://www.w3schools.com/jsref/prop_html_innerhtml.asp


function playCheer(e){
	document.getElementById("crowd-noise").play();
}

function showText1(elem){
	document.getElementById("one").classList.toggle("blue");
	document.getElementById("one").innerHTML = "FOCUS";
}	

function showText2(elem){
	document.getElementById("two").classList.toggle("white");
	document.getElementById("two").innerHTML = "PATIENCE";
}

function showText3(elem){
document.getElementById("three").classList.toggle("blue");
	document.getElementById("three").innerHTML = "LOVE";
}

function showText4(elem){
    document.getElementById("four").classList.toggle("blue");
	document.getElementById("four").innerHTML = "IMAGINATION";
}

function showText5(elem){
    document.getElementById("five").classList.toggle("white");
	document.getElementById("five").innerHTML = "FAMILY";
}

function showText6(elem){
	  document.getElementById("six").classList.toggle("blue");
	document.getElementById("six").innerHTML = "FEAR";
}