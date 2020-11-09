class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0.5,
            density:0.75
        }
        this.body=Bodies.circle(x,y,25)
        World.add(world,this.body)
    }
    display(){
        //circleMode(RADIUS)
        fill("pink")
        circle(this.body.position.x,this.body.position.y,50)
    }
}