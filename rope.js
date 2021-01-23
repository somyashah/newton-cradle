class rope{
    constructor(bodyX,bodyY){
var options={
    bodyA:bodyX,
    bodyB:bodyY,
    stiffness:0.04,
    length:10
}
this.rope=Constraint.create(options);
World.add(world,this.rope);
    }

    display(){
var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;
strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}