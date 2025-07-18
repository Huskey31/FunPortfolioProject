const project = document.getElementById("front");
const cv = document.getElementById("back");
const quali = document.getElementById("full");

const audio = document.getElementById("myAudio");
const btn = document.getElementById("playPauseBtn");

project.addEventListener("click",function(){
    window.location.href ="front.html";
})

cv.addEventListener("click",function(){
     window.location.href ="back.html";
})

quali.addEventListener("click",function(){
     window.location.href ="full.html";
})


 

    btn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            btn.textContent = "Pause";
        } else {
            audio.pause();
            btn.textContent = "Play";
        }
    });
