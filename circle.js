class Circle {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.3,
            'isStatic':false,
            'density':1.3,
            'friction':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      /////// this.angle = angle;
        
        World.add(world, this.body);
    }  
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(this.x - 400, this.y - 300, this.width, this.height);
      pop();
    }
  }