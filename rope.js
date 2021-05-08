class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:  bodyA,
            pointB: pointB,
            stifness:1.2,
            length:250
        }
        this.pointB= pointB;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        
    }

    display(){
        var posA= this.chain.bodyA.position;
        var posB= this.pointB;
        push();
        stroke(48,22,8);
        strokeWeight(2);
        line(posA.x,posA.y,posB.x,posB.y);


        pop();
    }
}