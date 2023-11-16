var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
var randomLink1 = "images/dice"+random1+".png";
var randomLink2 = "images/dice"+random2+".png";
var img1 = document.querySelector(".img1");
img1.setAttribute("src",randomLink1);
var img2 = document.querySelector(".img2");
img2.setAttribute("src",randomLink2);
if(random1>random2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}else if(random2>random1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "DRAW";
}

/**
 * innerHtml se text change karna chaiye
 * query selector se eak hi element milega
 * better to set attribute afterwards so that image aachase load ho sake
 */