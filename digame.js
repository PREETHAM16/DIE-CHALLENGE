var rnum1= Math.floor(Math.random()*6)+1;
var rimg1="die"+rnum1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rimg1);
var rnum2= Math.floor(Math.random()*6)+1;
var rimg2="die"+rnum2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",rimg2);
if(rnum1>rnum2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(rnum2>rnum1){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
  document.querySelector("h1").innerHTML="ITS A DRAW OR TIE";
}
