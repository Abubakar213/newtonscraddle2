class Pendulum {
    constructor(x,y,color){
        var options ={
            restitution:1,
            friction:0,
            frictionAir:0.0,
            inertia:Infinity,
            slop:1,
        };
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.x = x;
        this.y = y;
        this.color = color
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipse(0,0,60,60);
        pop();
    }
}