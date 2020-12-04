class Ball {  
    constructor(x, y){
        var options = {
        'density':1.2,
        'frictionAir':0.005
        }
        
        this.body = Bodies.circle(x,y,60,options);
      
        World.add(world, this.body);
        
       
        
   }
   display(){
    push();
    var pos = this.body.position;
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    fill(200);
    ellipse(0,0,60,60);
    pop();
   }
}