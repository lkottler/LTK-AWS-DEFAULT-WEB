var categories = [
	{"folder": "trollface", "count": 22},
	{"folder": "terry", "count": 7},
	{"folder": "feels", "count": 44},
	{"folder": "funny", "count": 71},
	{"folder": "kino", "count": 16},
	{"folder": "hyperborea", "count": 31},
	{"folder": "animals", "count": 47}
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


		video.addEventListener( "loadedmetadata", function (e) {
		    var width = this.videoWidth,
		        height = this.videoHeight;

		   	this.style.order = Math.ceil((height/width)*100);
		}, false );

		video.src = "video/webm";
		video.src = "webms/" + category + "/" + i + ".webm";

		video.setAttribute("id", "vid" + i);
		video.setAttribute("controls", "controls");
		video.volume = 0.05;
		// TODO: add volume input
		//document.getElementsByTagName('video')[0].volume = 0.5;


		let container = document.getElementById("webm-container");
		container.appendChild(video);
	}
}


function destroyVideos(){
	var container = document.getElementById("webm-container");

	for (let i = 1; i < (count + 1); i++) {
		var elem = document.getElementById("vid" + i);

		if (elem)
			container.removeChild(elem);
	}

}