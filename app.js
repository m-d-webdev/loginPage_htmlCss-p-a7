/*function white() {
    document.getElementById('light').style.filter = "drop-shadow(1px 1px 30px #fff)";

}
function black() {
    document.getElementById('light').style.filter = "drop-shadow(1px 1px 30px rgb(0, 255, 30))";

}
function red() {
    document.getElementById('light').style.filter = "drop-shadow(1px 1px 30px red)";

}
function yellow() {
    document.getElementById('light').style.filter = "drop-shadow(1px 1px 30px yellow)";

}
function blue() {
    document.getElementById('light').style.filter = "drop-shadow(1px 1px 30px rgb(31, 31, 202))";

}

function ba9zza() {
    let a = document.getElementById("iinput").value;
    let b = document.getElementById("input2").value;
    c = document.getElementById("demo2").value;
    let c = a +"  "+ b;
    let s ="hello mester";
    let d = " what do you will bay inchaallah ???";
    document.getElementById("demo").innerHTML = s  + "  " + c + " " + d;
    document. getElementById("demo2").style.color = "red";

}*/
let hour = document.getElementById("hoour");
let minut = document.getElementById("minutt");
let secont = document.getElementById("secont");


setInterval(() => {
    
    let timme = new Date();
    hour.innerHTML=(timme.getHours() < 10 ? "0" : "") + timme.getHours()
    minut.innerHTML= (timme.getMinutes() <10 ? "" : "") + timme.getMinutes()
    secont.innerHTML = (timme.getSeconds() < 10 ? "0" : "") + timme.getSeconds()
}, 1000)