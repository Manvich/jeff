var winW, winH, x, y;
var img1, img2, circles;
var cSlider, sSlider;
var undoButton;
var c, s;
var drewSomething;

function preload() {
	img1 = loadImage("cuts/untrimmed3.jpg");
	img2 = loadImage("cuts/untrimmed4.png");
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
		outline();
	}
	
	if (mouseIsPressed &&
		mouseX > x && mouseX < x + 500 &&
		mouseY > y && mouseY < y + 450) {
		drewSomething = true;
		circles[circles.length - 1].push([mouseX - x, mouseY - y, s, c]);
		noStroke();
		fill(c);
		ellipse(mouseX, mouseY, s);
		outline();
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
	
	cSlider.position(x + 50, y + 625);
	sSlider.position(x + 50, y + 650);
	undoButton.position(x + 450, y + 625);
	
	background(240);
	image(img1, x, y);
	text("Color:", x + 10, y + 638);
	text("Size:", x + 10, y + 663);
}

function undo() {
	circles.pop();
	circles.pop();
	circles.push([]);
	
	background(240);
	text("Color:", x + 10, y + 638);
	text("Size:", x + 10, y + 663);
	image(img1, x, y);
	drawCircles();
	outline();
}

function drawCircles() {
	noStroke();
	for (var i = 0; i < circles.length; i++) {
		for (var j = 0; j < circles[i].length; j++) {
			fill(circles[i][j][3]);
			ellipse(x + circles[i][j][0], y + circles[i][j][1], circles[i][j][2]);
		}
	}
}

function outline() {
	noStroke();
	fill(240);
	rect(x - 50, y - 50, 600, 50);
	rect(x - 50, y - 50, 50, 600);
	rect(x + 500, y - 50, 50, 600);
	image(img2, x, y);
}	