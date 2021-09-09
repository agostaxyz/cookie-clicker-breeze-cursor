Game.registerMod("breeze cursor mod",{
	init:function(){

		Game.Notify(`Breeze cursor mod loaded!`,`Libre clicking on the way!`,[16,5]);
		
		//we declare "MOD" as a proxy for "this", since inside other functions and events "this" no longer refers to this mod but to the functions or events themselves!
		let MOD=this;
		
		Game.Loader.Replace('cursor.png',this.dir+'/cursor.png');
		
	},
	save:function(){
	},
	load:function(str){
	},
	updateScore:function()
	{
	},
});