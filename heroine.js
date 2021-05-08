class Heroine{
    constructor(x,y,radius){
var options={
    density: 1,
    frictionAir: 0.005
}
this.x=x
this.y=y
this.radius=radius
this.image=loadImage("superheroimg.png")
this.body=Bodies.circle(this.x,this.y,this.radius,options)
World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y-100);
        fill("yellow");
        //ellipseMode(RADIUS);
        imageMode(CENTER)
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();

    }
}