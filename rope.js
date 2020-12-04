class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:200
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var pointB = this.pointB;

        push();
        stroke("white");
        strokeWeight(3);
        
        line(pointB.x,pointB.y,posA.x,posA.y);
        pop();
    }
}