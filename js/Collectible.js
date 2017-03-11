collectible = function(){

	function collectible(){
		this.color = "green";
		this.x = 400;
		this.y = 300;
		this.width = 10;
		this.height = 10;
		this.speed = 250;
		this.image = undefined;
		this.drawLib = undefined;
		this.active = true;
	};
	
	var c = collectible.prototype;
	
	c.init = function(){
		console.log("collectible.init() called");
	};
	
	c.draw = function(ctx){
	
		if(this.active){
			if(!this.image){
				//update through draw
				ctx.save();
				ctx.fillStyle = "white";
				ctx.fillRect(this.x,this.y,this.width,this.height);
				ctx.restore();
				
				ctx.save();
				ctx.fillStyle = this.color;
				ctx.fillRect(this.x,this.y,this.width,this.height);
				ctx.restore();
			}
		}
	};
	
	c.clear = function(ctx){
		//update through draw
		ctx.save();
		ctx.fillStyle = "white";
		ctx.fillRect(this.x,this.y,this.width,this.height);
		ctx.restore();
	};
	
	return collectible;

}();