class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = 400;
        this.height = 50;
        this.body = Bodies.rectangle(400,200,400,50,options);
        World.add(world,this.body);
    }
    display(){
        
        push()
      //  translate(this.body.position.x,this.body.position.y);
        rect(400,200,400,50);
        pop()
    }
}