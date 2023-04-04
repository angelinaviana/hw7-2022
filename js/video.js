var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
 	video.play();
 	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Paused");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {;
	video.playbackRate = video.playbackRate * .9;
	console.log("Slower" + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / .9;
	console.log("Faster" + video.playbackRate)
});

// SKIP still working
document.querySelector("#skip").addEventListener("click", function() {
    
	console.log("Skip");

}); 

// MUTE Still working
// document.querySelector("#mute").addEventListener("click", function() {
// 	}
// }); 

document.querySelector("#slider").addEventListener("click", function(){
	console.log("Volume");
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
	console.log("Old School")
}); 

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
	console.log("Old School Removed")
});