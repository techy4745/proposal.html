
const text = "Hey Bestie ❤️ I Made This Website For You";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


function startJourney(){

window.location="memories.html"

}


function yes(){

alert("You made me the happiest person ❤️")

}


const noBtn = document.getElementById("noBtn")

if(noBtn){

noBtn.addEventListener("mouseover",function(){

this.style.position="absolute"

this.style.top=Math.random()*500+"px"

this.style.left=Math.random()*500+"px"

})

}
