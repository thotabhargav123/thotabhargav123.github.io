console.log("JHGUG");
var v;
document.getElementById('btn1').onclick = GFG_click;
document.getElementById('btn2').onclick = GFG_click;
document.getElementById('btn3').onclick = GFG_click;
document.getElementById('btn4').onclick = GFG_click;

function GFG_click(clicked) {
    // el_down.innerHTML = "Button clicked, id = "
    //     + this.id;
    var el = this.value;
    console.log(el);
    if (el == "Maths,Science{physics}") {
        document.getElementById('que').innerText = "You are intersted in"
        document.getElementById('btn1').value = "computers"
        document.getElementById('btn2').value = "Electronics"
        document.getElementById('btn3').value = "Chemicals"
        document.getElementById('btn4').value = "robots"
        // var el2 = this.value;
        // if (el2 == "computers") {
        //     document.getElementById('que').innerText = "what do u want to do"
        //     document.getElementById('btn1').value = "Devlopmet apps or sites"
        //     document.getElementById('btn2').value = "Devloping softwares"
        //     document.getElementById('btn3').value = "Devloping Games"
        //     document.getElementById('btn4').value = "Developing AI,ML"
        // }
    }
    else if (el == "Biology,Science") {
        document.getElementById('que').innerText = "You are intersted in"
        document.getElementById('btn1').value = "zoology"
        document.getElementById('btn2').value = "pyschology"
        document.getElementById('btn3').value = "neurology"
        document.getElementById('btn4').value = "medicne making"
    }
    else if (el == "Maths") {
        document.getElementById('que').innerText = "You are intersted in"
        document.getElementById('btn1').value = "commerical Maths"
        document.getElementById('btn2').value = "Advance Maths"
        document.getElementById('btn3').value = "Geometry"
        document.getElementById('btn4').value = "statistics"
    }
    else if (el == "social") {
        document.getElementById('que').innerText = "You are intersted in"
        document.getElementById('btn1').value = "History"
        document.getElementById('btn2').value = "poltics"
        document.getElementById('btn3').value = "civils"
        document.getElementById('btn4').value = "archeology"
    }

}
// console.log(v);