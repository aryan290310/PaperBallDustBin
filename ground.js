class Ground {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      var ground_features = {
        isStatic: true,
      };
      this.ground = Bodies.rectangle(x, y, w, h, ground_features);
  
      World.add(world, this.ground);
    }
    display() {
        push();
        translate(this.ground.position.x, this.ground.position.y);
        rotate(this.ground.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h)
        pop ()
    }
  }