document.addEventListener("DOMContentLoaded", function () {

const text = "Hey Bestie ❤️ I Made This For You";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,80);
}
}

typing();

window.startJourney = function(){
window.location="memories.html"
}

window.yes = function(){
alert("You made me the happiest person ❤️")
}

const noBtn = document.getElementById("noBtn")

if(noBtn){

noBtn.addEventListener("mouseover", function(){

const x = Math.random() * (window.innerWidth - 100)
const y = Math.random() * (window.innerHeight - 50)

noBtn.style.position = "absolute"
noBtn.style.left = x + "px"
noBtn.style.top = y + "px"

})

}

})
