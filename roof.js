class Roof {
    constructor(x, y, width, height){
        var roof_options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, roof_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
}
        display(){
            var position = this.body.position;
            rectMode(CENTER);
            fill("#ff0062");
            rect(position.x, position.y, this.width, this.height);
        }
    }