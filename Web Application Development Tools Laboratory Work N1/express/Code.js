var p,n,s;
setup();
console.log(p)
function setup() { //we aren't using the p5.js canvas, we're using js to create and then manipulate HTML and CSS
    p = document.getElementById("imghj") // create a <p> element in the HTML DOM that contains the listed text.
    n = document.getElementById("nado1")
    s = document.getElementById("nado2")
}

function onDrag() {


    p.style.color = "#000000";


}
function offDrag() {


    p.style.color = "#757575";


}

function onDrag1() {


    n.style.color = "#000000";


}
function offDrag1() {


    n.style.color = "#757575";


}

function onDrag2() {


    s.style.color = "#000000";


}
function offDrag2() {


    s.style.color = "#757575";


}