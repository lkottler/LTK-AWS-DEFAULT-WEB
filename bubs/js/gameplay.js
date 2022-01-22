var warrior = {
	alive: false,
	health : 10,
	attack : 1,
	defense: 1
};

var initFuncs = [init_stage0, init_stage1, init_stage2, init_stage3];

function init_game(){
	change_scene(0);
	//setInterval(gameLoop, 100);
}

function gameLoop(){
	//stage.draw();
}


init_game();