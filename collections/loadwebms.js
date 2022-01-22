var categories = [
	{"folder": "trollface", "count": 21},
	{"folder": "terry", "count": 8},
	{"folder": "feels", "count": 41},
	{"folder": "funny", "count": 71},
	{"folder": "kino", "count": 16},
	{"folder": "hyperborea", "count": 25}
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