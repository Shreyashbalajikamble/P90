player1_score=0;
player2_score=0;

player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

number_1=document.getElementById("number_1").value;
number_2=document.getElementById("number_2").value;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML=player1_name;
document.getElementById("player_answer").innerHTML=player2_name;

function send(){
    output=number_1+"X"+number_2;
    document.getElementById("number_1").innerHTML="";
    document.getElementById("number_2").innerHTML="";
    
    
}