var categories = [
	{"folder": "trollface", "count": 20},
	{"folder": "terry", "count": 6},
	{"folder": "feels", "count": 40},
	{"folder": "funny", "count": 62},
	{"folder": "kino", "count": 15}
	];

var category = "trollface";
var count = categories[categories.findIndex(x => x.folder === category)].count;

function loadVideos(new_category){
	console.log(new_category);
	destroyVideos();
	category = new_category;
	let index = categories.findIndex(x => x.folder === category);
	if (index == -1)
		console.log("Error, could not find folder in categories");
	else {
		count = categories[categories.findIndex(x => x.folder === category)].count;
		generateVideos();
	}
}

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
		if (elem)
			document.body.removeChild(elem);
	}

}