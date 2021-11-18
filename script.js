let min = document.getElementById("min");
let Number = document.getElementById("number");
let max = document.getElementById("max");
let reset = document.getElementById("reset");
min.onclick= function(){
    Number.value--;
    
}
max.onclick = function(){
    Number.value++;
}
reset.onclick = function(){
    Number.value = "0";
}
