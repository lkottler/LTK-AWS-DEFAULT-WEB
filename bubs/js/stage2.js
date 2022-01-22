var forestObj;

function init_stage2(){
	init_forest();
}

function init_forest(){
	forestObj = init_graphic(450, 450, 600, 503, 0.6, 1, 
		'res/img/forest.png', 'Enter Forest', 1, 2,

	// Functionality of the graphic
	function() {
		console.log("travelling to forest");
		change_scene(3);
	});
}
