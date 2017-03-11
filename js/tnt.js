tnt = function(){

	function tnt(){
		this.fillStyle = "red";
		this.width = 10;
		this.height = 10;
		this.radius = 5;
		this.x = 0;
		this.y = 0;
		this.TNT_STATE_IDLE = 0;
		this.TNT_STATE_EXPLODING = 1;
		this.TNT_STATE_IMPLODING = 2;
		this.TNT_STATE_FINISHED = 3;
		this.radius = 5;
		this.MAX_RADIUS = 50;
		this.EXPLOSION_SPEED = 3;
		this.IMPLOSION_SPEED = 5;
		this.state = 0;
	};
	
	var t = tnt.prototype;
	
	t.init = function(x,y){
		this.image = new Image(10,10);
		this.image.src = 'images/tnt.png';
		this.x = x;
		this.y = y;
		this.state = this.TNT_STATE_IDLE;	
	};
	
	t.draw = function(ctx){
		if(this.image){
			if(this.state === this.TNT_STATE_IDLE){
				ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
			} else {
				ctx.fillStyle = this.fillStyle;
				ctx.beginPath();
				ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
				ctx.closePath();
				ctx.fill();
			}
		}
		if(!this.image){
			if(this.state === this.TNT_STATE_IDLE){
				ctx.fillStyle = this.fillStyle;
				ctx.fillRect(this.x,this.y,this.width,this.height);
				return;
			} else {
				ctx.fillStyle = this.fillStyle;
				ctx.beginPath();
				ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
				ctx.closePath();
				ctx.fill();
			}
		}
	};
	
	return tnt;
}();