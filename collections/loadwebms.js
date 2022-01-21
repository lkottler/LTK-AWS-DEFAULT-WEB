var categories = [{"folder": "trollface", "count": 20}, {"folder": "terry", "count": 0}];
var test = categories.findIndex(x => x.folder === "terry");
console.log(categories[test].count);


var category = "trollface";
var count = categories[categories.findIndex(x => x.folder === category)].count;


function generateVideos(){
	for (let i = 1; i < (count + 1); i++) {
		var video = document.createElement('video');

		video.src = "video/webm";
		video.src = "webms/" + category + "/" + i + ".webm";

		video.setAttribute("id", "vid" + i);
		video.setAttribute("width", "376");
		video.setAttribute("height", "260");
		video.setAttribute("controls", "controls");
		document.body.appendChild(video);
	}
}


function destroyVideos(){
	for (let i = 1; i < (count + 1); i++) {
		var elem = document.getElementById("vid" + i);
		document.body.removeChild(elem);
	}

}