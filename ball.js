class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    var box_features = {
      isStatic: false,
    };
    this.ball = Bodies.circle(x, y, r/2, box_features);

    World.add(world, this.ball);
  }
  display() {
    push();
    translate(this.ball.position.x, this.ball.position.y);
    rotate(this.ball.angle);
    ellipseMode(CENTER);
    ellipse(0, 0, this.r);
    pop();
  }
}
