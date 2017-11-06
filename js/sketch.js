var winW, winH, img, circles, s, c;

function preload() {
	img = loadImage("cuts/untrimmed3.jpg");
}

function setup() {
	winW = window.innerWidth;
	winH = window.innerHeight;
	createCanvas(winW, winH);
	circles = new Array();
	s = 10;
	c = 255;
}

function draw() {
	if (window.innerWidth != winW || window.innerHeight != winH) {
		winW = window.innerWidth;
		winH = window.innerHeight;
		createCanvas(winW, winH);
	}
	
	var x = winW / 2 - 250;
	var y = winH / 2 - 300;
	
	background(240);
	image(img, x, y);
	
	if (mouseIsPressed &&
		mouseX > x && mouseX < x + 500 &&
		mouseY > y && mouseY < y + 475) {
		circles.push([mouseX - x, mouseY - y, s, c]);
	}
	
	noStroke();
	for (var i = 0; i < circles.length; i++) {
		fill(circles[i][3]);
		ellipse(x + circles[i][0], y + circles[i][1], circles[i][2]);
	}
	
	stroke(255);
	noFill();
	rect(x, y, 500, 600);
}