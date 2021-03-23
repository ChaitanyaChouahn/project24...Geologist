class Iron {
    constructor(x,y,width,height) {
      var options = {

        'restitution' : 0.8 ,
        'friction' : 3 , 
        'dencity' : 30
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.body.isStatic = false;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };