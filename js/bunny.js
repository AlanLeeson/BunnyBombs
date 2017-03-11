var bunny={
	color: "yellow",
	x: 310,
	y: 225,
	radius: 5,
	velocity: 0,
	acceleration: 0,
	width: 10,
	height: 14,
	speed: 250,
	speedy: -100,
	image: undefined,
	drawLib: undefined,
	health: 3,
	BLINKING_DURATION: 50,
	blinkingTime: 0,
	hurt: false,
	init: function(){
		console.log("bunny.init() called");
		this.image = new Image(10,14);
		this.image.src = 'images/rabbit.png';
	
	},
	prevLocationX: 0,
	prevLocationY: 0,
	
	draw: function(ctx) {
		//ctx.fillRect() draws from the upper left of the x,y
		//we're doing these calculations so we are drawing the
		//ship from the center x,y
		var halfW = this.width/2;
		var halfH = this.height/2;
		this.color = "yellow";
		
		//with this
		if(this.image){ 
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
			if(this.hurt){
				this.blinkingTime ++;
				if(this.blinkingTime >= this.BLINKING_DURATION){
					this.hurt = false;
					this.blinkingTime = 0;
					this.health --;
				}
				if(this.blinkingTime % 4 == 0){
					ctx.save();
					this.color = "black";
					ctx.fillStyle = this.color;				
					ctx.fillRect(this.x, this.y, this.width, this.height);
					ctx.restore();
				}
			}		
			
			//ctx.save();
			//ctx.fillStyle = this.color;				
			//ctx.fillRect(this.x, this.y, this.width, this.height);
			//ctx.fillRect(this.x - halfW, this.y - halfH, this.width, this.height);
			//ctx.restore();
				
			this.prevLocationX = this.x;
			this.prevLocationY = this.y;
		}
		
		if(!this.image){
			this.color = "yellow"; 
			if(this.hurt){
				this.blinkingTime ++;
				if(this.blinkingTime >= this.BLINKING_DURATION){
					this.hurt = false;
					this.blinkingTime = 0;
					this.health --;
				}
				if(this.blinkingTime % 4 == 0){
					this.color = "black";
				}
			}		
			ctx.save();
			ctx.fillStyle = this.color;				
			ctx.fillRect(this.x, this.y, this.width, this.height);
			//ctx.fillRect(this.x - halfW, this.y - halfH, this.width, this.height);
			ctx.restore();
				
			this.prevLocationX = this.x;
			this.prevLocationY = this.y;
		}
		
	},
	
	update: function(dt){
		this.velocity += this.acceleration;
		this.y += this.velocity * dt;
		this.acceleration = 0;
	},
	
	jump: function(){
		this.applyForce(this.speedy);
	},
	
	applyForce: function(force){
		this.acceleration += force;
	},
	
	moveLeft: function(dt){
		this.x -= this.speed * dt;
	},
	
	moveRight: function(dt){
		this.x += this.speed * dt;
	},
	
	moveUp: function(dt){
		this.y -= this.speed * dt;
	},
	
	moveDown:function(dt){
		this.y += this.speed * dt;
	},
	
	
};