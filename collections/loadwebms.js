var total_videos = 2;

for (let i = 1; i < (total_videos + 1); i++) {
	var video = document.createElement('video');

	video.src = "video/webm";
	video.src = "webms/" + i + ".webm";

	video.setAttribute("width", "400");
	video.setAttribute("height", "300");
	video.setAttribute("controls", "controls");
	document.body.appendChild(video);
}