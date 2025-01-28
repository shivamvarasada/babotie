var timer= 60;
var forscore = 0;
var gethits=0;

function makebubble(){
    var bubble="";

for(var i=1; i<=120; i++){
     var number= Math.floor(Math.random()*10);
  bubble += `<div id="bubble">${number}</div>`;
}

document.querySelector("#play-area").innerHTML=bubble;
}

function startTimer(){
    var settimer= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").innerHTML=timer;
        }
        else{
            clearInterval(settimer);
            document.querySelector("#play-area").innerHTML="<h1 style='font-size:42px; font-weight:700;'>Time's Up</h1>";
        }
        
       
    },1000);

}

function score(){
    
   forscore += 10;
   document.querySelector("#scorevalue").textContent= forscore;
    
}

function hits(){
    
    gethits= Math.floor(Math.random()*10);
    document.querySelector("#hits").innerHTML=gethits;
    
}

document.querySelector("#play-area").addEventListener("click", function(e){
    var clickcheck= Number(e.target.textContent);
    if(gethits==clickcheck){
        score();
        makebubble();
        hits();
    }
});

startTimer();
makebubble();
hits();
score();
