class Paper{
    constructor(x,y,radius){
       var options={
            isStatic : false,
            restitution: 0.3,
            friction : 0.5,
            density : 1.2
        }

    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
   this.paperimage = loadImage("paper.png") 
      
    World.add(world, this.body);
    }
  display(){
   
    var paperpos=this.body.position;		

		push()
		translate(paperpos.x, paperpos.y);
    
    imageMode(CENTER)
    image(this.paperimage, 0,0, 2*this.radius,2*this.radius)
 
    pop()
    }

        

    }
