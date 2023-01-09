let symmetry = 3;   
let angle = 360 / symmetry;
let rot = 0;
let d = 100;
let nw = 1;

var r = {};

function setup() {
  var can = createCanvas(0.60*displayWidth, 800);
	can.parent('splash_img');
  can.class('bannerCanvas');

  background('#1a1a1a');
  angleMode(DEGREES);
  frameRate(60);
  
  for (let i = 0; i < 5; i++) {
    r[i] = new myRect(random(0, height), random(20));
  }
}

function draw() {
  background('#1a1a1a');
  translate(width / 2, height / 2);
  
  // Change symmetry with mouseX
  let mx = abs(mouseX - width/ 2);
  symmetry = mx/30 + 6;
  angle = 360 / symmetry;
  // // console.log(mouseX, symmetry);
  
  rotate(rot);
  
  stroke('#2bbc8a');

  // let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;

  for (let i = 0; i < symmetry; i++) {
    rotate(angle);
    strokeWeight(3);
    line(0, 0, 2*displayWidth, 2*displayWidth);
    
//     strokeWeight(3);
//     let x = d*tan(angle/2);
//     rect(d, d, -(x+d), 50);
//     triangle(d, d, d, d+50, d+50, d+50);
    
    for (let i = 0; i < 5; i++) {
      r[i].draw();
    }
  }
  
  for (let i = 0; i < 5; i++) {
      r[i].update();
  }
  // rot += 0.5;
  // d += 5;
  if (d >= height) {
    d = 0;
  }
}

class myRect {
  
  constructor(d_, w_) {
    this.d = d_;
    this.w = w_;
    this.x = this.d*tan(angle/2);
  }
  
  draw() {
    strokeWeight(1);
    fill('#2bbc8a');
    this.x = this.d*tan(angle/2);
    rect(this.d, this.d, -(this.x+this.d), this.w);
    triangle(this.d, this.d, this.d, this.d+this.w, this.d+this.w, this.d+this.w);
  }
  
  update() {
    this.d += 5;
    if (this.d >= width)
      this.d = 0;
  }
}

function windowResized() {
  resizeCanvas(0.60*displayWidth, 800);
}

