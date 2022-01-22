var warriorObj,
	mapObj;

function init_stage1(){
	init_warrior();

}

function init_warrior(){
	warriorObj = init_graphic(200, 150, 741, 547, 0.4, 1, 
		'res/img/warrior.png', 'Purchase Mouse Warrior\nCost: 50 pats', 1, 1,

	// Functionality of the graphic
	function() {
		init_map();
		if (!warrior.alive && pats >= 50){
			pats-=50;
			warrior.alive = true;
			update_text(warriorObj[1], 'Revive Warrior\nCost: 50 pats');
		}
	});
}

function init_map(){
	mapObj = init_graphic(1750, 800, 640, 554, 0.4, 1,
		'res/img/map.png', 'Explore', 1, 1,

		function() {
			change_scene(2);
		})
}