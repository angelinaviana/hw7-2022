var video;
video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate = video.playbackRate - (0.1 * video.playbackRate);
    console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate = video.playbackRate + (0.1 * video.playbackRate);
    console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime = video.currentTime + 10;
    console.log(video.currentTime);
}); 

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted === false) {    
        video.muted = true;
        document.getElementById("mute").innerHTML = "Unmute";
 }

    else {
        video.muted = false;
         document.getElementById("mute").innerHTML = "Mute";
 }
    
}); 

var output = document.getElementById("volume");
output.innerHTML = slider.value + "%";

slider.oninput = function() {
    output.innerHTML = this.value + "%";
    video.volume = this.value/100;
}

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
}); 

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});