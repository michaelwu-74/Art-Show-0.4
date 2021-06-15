function setup() {
  player = new Person();
}

var x;
x = -100;

function keyPressed(){
    if (keyIsDown(32)) {
    let force = createVector(0, -16);
    player.applyForce(force);
  }
}

function draw() {

  //point of view around "man"
  
  let gravity = createVector(0,1);
  player.applyForce(gravity);



  player.update();
  player.display();
  player.edges()


  //obstacle

}

function Person() {
  this.pos = createVector(10, height-50);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  // this.mass = m;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.edges = function() {
    if (this.pos.y > height-50) {
      this.vel.y = 0;
      this.pos.y = height-50;
    }

    // if (this.pos.x > width) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    // }
  }
}