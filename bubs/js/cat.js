// This is the main file for creation of the cheesy web
// Images & Texts
var mouseObj,
	catObj,
	mouseholeObj;

function init_stage0(){
	init_cat();
}

function init_cat(){
	catObj = init_graphic(width/2, height/2, 400, 500, 1, 1, 
		'res/img/cat.png', '', 1, 0,

	// Functionality of the cat
	function() {
		let multiplier = 1;

		pats+=multiplier;
		total_pats+=multiplier;
		if (total_pats >= 10 && mouseObj == undefined){
			init_mouse();
		} else if (total_pats > 10 && total_pats <= 50){
			mouseObj[0].setAttr('opacity', total_pats * 0.02);
		} else if (total_pats > 50){
			mouseObj[1].setAttr('opacity', 1);
		}
		update_text(catObj[1], "pats: " + pats)
	});
}

function init_mouse(){
	mouseObj = init_graphic(300, 120, 601, 358, 0.8, 0.1, 
		'res/img/mouse.png', 'Bribe the Mousie', 0, 0,

	function() {
		if (pats > 50){
			pats--;
			mouse_bribe++;
			update_text(catObj[1], "pats: " + pats)
		}
		if (mouse_bribe == 10){
			init_mousehole();
		}
	});
}

function init_mousehole(){
	mouseObj = init_graphic(200, 975-292/2, 349, 292, 1, 1, 
		'res/img/mousehole.png', '', 1, 0,

	function() {
		change_scene(1);
	});
}