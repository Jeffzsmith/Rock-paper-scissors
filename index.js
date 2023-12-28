var x="Rock";
var y="Paper";
var z="Scissors";
var playerpoint=0;
var computerpoint=0;
var count=0;
var temp="";
document.querySelector(".restart").addEventListener("click",restart);
document.querySelector(".text1").innerHTML="Please select a button!";  
    for(var i=0;i<=3;i++){
        document.querySelectorAll(".btn")[i].addEventListener("click",
        function(){
        count++;
        temp= this.innerHTML;
        game();
        console.log(temp);
        if(count===5){
            game();
            if(playerpoint>computerpoint){
                document.querySelector(".text2").innerHTML=" Your points:"+playerpoint+ 
                    "  Computer points:"+computerpoint+"  YOU WIN!";
            }
            else if(playerpoint<computerpoint){
                document.querySelector(".text2").innerHTML=" Your points:"+playerpoint+
                    "  Computer points:"+computerpoint+"  YOU LOSE.";
            }
            else{
                document.querySelector(".text2").innerHTML=" Your points:"+playerpoint+ 
                    "  Computer points:"+computerpoint+"  MATCH DRAWN!";
            }
            for(var i=0;i<=2;i++){
                document.querySelectorAll(".btn")[i].addEventListener("click",
                function(){ 
                    if(count===6){
                        document.querySelector(".text1").innerHTML="Please restart the game"; 
                        document.querySelector(".text2").innerHTML="";
                    }
                    if(count===7){
                        document.querySelector(".text1").innerHTML="Please restart the game"; 
                        document.querySelector(".text2").innerHTML="";
                    }
                    if(count===8){
                        document.querySelector(".text1").innerHTML="Please restart the game"; 
                        document.querySelector(".text2").innerHTML="";
                    }
                    if(count===9){
                        document.querySelector(".text1").innerHTML="Please restart the game";
                        document.querySelector(".text2").innerHTML=""; 
                    }
                    if(count===10){
                        restart();
                        document.querySelector(".text1").innerHTML=
                        "Game restarted automatically.Please select a button"; 
                        document.querySelector(".text2").innerHTML="";
                    }
                });
            }
        }
    });    
    }
function restart(){
 document.querySelector(".text1").innerHTML="Please select a button!";  
 document.querySelector(".text2").innerHTML="";
 playerpoint=0;
 computerpoint=0;
 count=0;
}

function computer(){
    let a=Math.floor((Math.random()*3)+1);
if(a===1){
    console.log(x);
    return x;
}
if(a===2){
    console.log(y);
    return y;
}
if(a===3){
    console.log(z);
    return z;
}
}

function round(computer,player){
if(computer===x && player===y){
    document.querySelector(".text1").innerHTML="Computer:"+x+". You win a point!";
    playerpoint++;
}
else if(computer===x && player===z){
    document.querySelector(".text1").innerHTML="Computer:"+x+". You lost this round.";
    computerpoint++;
}
else if(computer===y && player===x){
    document.querySelector(".text1").innerHTML="Computer:"+y+". You lost this round."; 
    computerpoint++;
}
else if(computer===y && player===z){
    document.querySelector(".text1").innerHTML="Computer:"+y+". You win a point!";
    playerpoint++;
}
else if(computer===z && player===y){
    document.querySelector(".text1").innerHTML="Computer:"+z+". You lost this round.";
    computerpoint++;
}
else if(computer===z && player===x){
    document.querySelector(".text1").innerHTML="Computer:"+z+". You win a point!";
    playerpoint++;
}    
else if(computer===x && player===x){
    document.querySelector(".text1").innerHTML="Computer:"+x+". It's a Draw!";
}
else if(computer===y && player===y){
    document.querySelector(".text1").innerHTML="Computer:"+y+". It's a Draw!";
}
else if(computer===z && player===z){
    document.querySelector(".text1").innerHTML="Computer:"+z+". It's a Draw!";
}
    else{
        console.log("error");
    }
}

function game(){
    var playerselection=temp;
    var computerselection=computer();
    round(computerselection,playerselection);    
}






