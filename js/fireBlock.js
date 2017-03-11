fireBlock = function(){
	function fireBlock(){
		this.color = "blue";
		this.x = 310;
		this.y = 225;
		this.prevLocationX = 0;
		this.prevLocationY = 0;
		this.radius = 5;
		this.velocity = 0;
		this.acceleration = 0;
		this.width = 10;
		this.height = 10;
		this.speed = 250;
		this.speedy = -100;
		this.image = undefined;
		this.drawLib = undefined;
		this.active = false;
		this.directx = true;
	};
	
	var f = fireBlock.prototype;
	
	f.init = function(x,y,speed){
		console.log("fireBlock.init() called");
		this.image = new Image(10,10);
		this.image.src = 'images/fireBlock.png';
		this.active = true;
		this.x = x;
		this.y = y;
		this.speedy = speed;
	};
	
	f.draw = function(ctx) {
		//ctx.fillRect() draws from the upper left of the x,y
		//we're doing these calculations so we are drawing the
		//ship from the center x,y
		var halfW = this.width/2;
		var halfH = this.height/2;
		//this.color = "blue";
		
		if(this.image){ 
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
				
			this.prevLocationX = this.x;
			this.prevLocationY = this.y;
		}

		if(!this.image){
			//this.color = "yellow"; 
					
			ctx.save();
			ctx.fillStyle = this.color;				
			ctx.fillRect(this.x, this.y, this.width, this.height);
			//ctx.fillRect(this.x - halfW, this.y - halfH, this.width, this.height);
			ctx.restore();
				
			this.prevLocationX = this.x;
			this.prevLocationY = this.y;
		}
		
	};
	
	f.update = function(dt){
		this.velocity += this.acceleration;
		this.y += this.velocity * dt;
		this.acceleration = 0;
		if(this.directx){this.moveLeft(1.03);}
		else{this.moveRight(1);}
	};
	
	f.jump = function(){
		this.applyForce(this.speedy);
		this.directx = !this.directx;
	};
	
	f.applyForce = function(force){
		this.acceleration += force;
	};
	
	f.moveLeft = function(dt){
		this.x -= dt;
	};
	
	f.moveRight = function(dt){
		this.x += dt;
	};
	
	f.moveUp = function(dt){
		this.y -= this.speed * dt;
	};
	
	f.moveDown = function(dt){
		this.y += this.speed * dt;
	};

	return fireBlock;
	
}();