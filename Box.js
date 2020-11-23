class Box{
    constructor(){
        this.body1 = Bodies.rectangle(width/2, 640, 200, 20 , {isStatic:true} );
 	    World.add(world, this.body1);

        this.body2 = Bodies.rectangle(width/2-100, 600, 20, 100 , {isStatic:true} );
 	    World.add(world, this.body2);

        this.body3 = Bodies.rectangle(width/2+100, 600, 20, 100 , {isStatic:true} );
 	    World.add(world, this.body3);


    }

    display(){
        fill("red");
        noStroke();
        rectMode(CENTER);
        rect(this.body1.position.x,this.body1.position.y,200,20);
        rect(this.body2.position.x,this.body2.position.y,20,100);
        rect(this.body3.position.x,this.body3.position.y,20,100);

}
}