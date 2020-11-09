class Rope{
    constructor(body1,body2,xoffset)
    {
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:xoffset,y:0}
        }
        this.xoffset=xoffset
         this.rope=Constraint.create(options)
         
         World.add(world,this.rope)
    }

    display(){
        stroke("white")
        strokeWeight(3)
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
    line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y)
    }
}