let eyeLX, eyeLY, eyeRX, eyeRY;
let wingOffset; 

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('lienzo');
  wingOffset = 0; 
  frameRate(60); 
}

function draw() {
  background(255);

  let centerX = width / 2;
  let centerY = height / 2;

  // Alas
  fill(230, 230, 250, 150); 
  let wingY = sin(frameCount * 0.2) * 10; 
  ellipse(centerX - 65, centerY - 20 + wingY, 70, 140); 
  ellipse(centerX + 65, centerY - 20 + wingY, 70, 140); 

  // Body of the ladybug
  fill(255, 0, 0);
  ellipse(centerX, centerY + 50, 180, 260);

  // Head of the ladybug
  fill(0);
  ellipse(centerX, centerY - 100, 120, 120);

  // Eyes
  fill(255);
  ellipse(centerX - 20, centerY - 115, 20, 30);
  ellipse(centerX + 20, centerY - 115, 20, 30);

  // Pupils
  eyeLX = map(mouseX, 0, width, centerX - 25, centerX - 15);
  eyeLY = map(mouseY, 0, height, centerY - 120, centerY - 110);
  eyeRX = map(mouseX, 0, width, centerX + 15, centerX + 25);
  eyeRY = map(mouseY, 0, height, centerY - 120, centerY - 110);

  fill(0);
  ellipse(eyeLX, eyeLY, 10, 10);
  ellipse(eyeRX, eyeRY, 10, 10);

  // Antennas
  line(centerX, centerY - 140, centerX - 25, centerY - 175);
  line(centerX, centerY - 140, centerX + 25, centerY - 175);

  // Dots on the body
  fill(0);
  ellipse(centerX - 30, centerY, 40);
  ellipse(centerX + 30, centerY, 40);
  ellipse(centerX - 50, centerY + 50, 40);
  ellipse(centerX + 50, centerY + 50, 40);
  ellipse(centerX, centerY + 110, 40);
}

function mouseMoved() {
  redraw();
}
