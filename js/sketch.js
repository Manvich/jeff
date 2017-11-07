var winW, winH, x, y;
var img, circles;
var cSlider, sSlider;
var undoButton;
var c, s;
var drewSomething;

function preload() {
	img = loadImage("cuts/untrimmed3.jpg");
}

function setup() {
	cSlider = createSlider(0, 1, 1);
	sSlider = createSlider(5, 100, 20);
	undoButton = createButton("undo");
	undoButton.mousePressed(undo);
	init();
	circles = new Array([]);
	drewSomething = false;
}

function draw() {
	s = sSlider.value();
	c = cSlider.value() * 255;
	
	if (window.innerWidth != winW || window.innerHeight != winH) {
		init();
		drawCircles();
	}
	
	if (mouseIsPressed &&
		mouseX > x + s/2 && mouseX < x + 500 - s/2 &&
		mouseY > y + s/2 && mouseY < y + 450 - s/2) {
		drewSomething = true;
		circles[circles.length - 1].push([mouseX - x, mouseY - y, s, c]);
		noStroke();
		fill(c);
		ellipse(mouseX, mouseY, s);
	}
	
	if (!mouseIsPressed && drewSomething) {
		drewSomething = false;
		circles.push([]);
	}
	
	stroke(0);
	strokeWeight(10);
	noFill();
	rect(x, y, 500, 600);
}

function init() {
	winW = window.innerWidth;
	winH = window.innerHeight;
	createCanvas(winW, winH);
	
	x = winW / 2 - 250;
	y = winH / 2 - 300;
	
	cSlider.position(x + 10, y + 625);
	sSlider.position(x + 10, y + 650);
	undoButton.position(x + 475, y + 625);
	
	background(240);
	image(img, x, y);
}

function undo() {
	circles.pop();
	circles.pop();
	circles.push([]);
	
	background(240);
	image(img, x, y);
	drawCircles();
}

function drawCircles() {
	noStroke();
	for (var i = 0; i < circles.length; i++) {
		for (var j = 0; j < circles[i].length; j++) {
			fill(circles[i][j][3]);
			ellipse(x + circles[i][j][0], y + circles[i][[j][1], circles[i][j][2]);
		}
	}
}

//implementations:
//undo button