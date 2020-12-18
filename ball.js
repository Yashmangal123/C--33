class Ball {
    constructor(x, y ) {
      var options = {

          'density':1.5,
          'frictionAir': 0
      }

   
      this.body = Bodies.circle(x, y, 100, options);
      
      this.r = 100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(CENTER);
      fill("white");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  