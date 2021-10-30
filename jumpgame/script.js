let charactor = document.getElementById("charactor");
let block = document.getElementById("block");
function jump(){
    if(charactor.classList != "animate")
    {
    charactor.classList.add("animate");
}
    setTimeout(function(){
        charactor.classList.remove("animate");
    },500)
}
function slide(){
     block.classList.add("animated");
}
let checkdead = setInterval(function()  {
    let charactortop = parseInt(window.getComputedStyle(charactor).getPropertyValue("top"));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if (blockleft<20 && blockleft>0 && charactortop>=130) {
    block.style.animation = "none";
  
    //block.style.display = "none";
    alert(" you louse your score is "  +score.value );
    score.value = "try again";
    }    
}, 10);
// start button
let start = document.getElementById("start")
start.onclick = function(){
    let scores = setInterval(function(){
        let score = document.getElementById("score");
    score.value++        
        },1000);  
        slide();
}
