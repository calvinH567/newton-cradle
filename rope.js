class Rope {
    constructor(bodyA,pointB){
        var options = {
            length: 100,
            stiffness: 0.001,
            bodyA: bodyA,
            pointB: pointB
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body)
    }
    display(){
        strokeWeight(10);
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,
            this.pointB.x,this.pointB.y)
    }
}
