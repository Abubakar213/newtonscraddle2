class Rope {
    constructor(bodyA, pointB,){
        var options ={
            bodyA: bodyA,
            pointB : pointB,
            stiffness:1,
            angularStifness:1,
            length:220
        };
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y-250;
        this.color = color;
        this.body = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
    if(this.sling.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3.5);
        stroke("#fff");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }
        
    }
}
