var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play");
 	video.play();
 	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower");
	video.playbackRate = ncr;
	cr = video.playbackRate/10;
	ncr = video.playbackRate - cr;
	console.log("Playback speed: ", ncr)
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Faster");
	video.playbackRate = ncr;
	cr = video.playbackRate/10;
	ncr = video.playbackRate + cr;
	console.log("Playback fast speed: ", ncr)
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip");
	cr = video.currentTime;
	cr = cr + 10;
	if(cr >= video.duration){
		cr = 0;
	}
	video.currentTime = cr;
	console.log("New time: ", cr)
}); 

document.querySelector("#mute").addEventListener("click", function() {
    console.log(video.muted)
	if (!video.muted){
		video.muted = true;
		console.log("Mute");
		document.querySelector("#mute").innerHTML= "Unmute"
	}
	else
	{
		video.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML= "Mute"
	}
}); 

document.querySelector("#slider").addEventListener("change", function(){
	current_value = document.querySelector("#slider").value;
	console.log("Slider Value:", current_value);
	video.volume = current_value/100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";

});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
	console.log("Old School")
}); 

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
	console.log("Old School Removed")
});