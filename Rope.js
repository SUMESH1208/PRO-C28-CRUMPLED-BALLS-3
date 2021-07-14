class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
        this.pointB = pointB
    }
    fly(){
        this.Rope.bodyA = null
    }

    display(){
        if(this.Rope.bodyA){
          var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
   
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}