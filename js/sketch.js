var winW, winH, img, circles;
var cSlider, sSlider;
var c, s;

function preload() {
	img = loadImage("cuts/untrimmed3.jpg");
}

function setup() {
	init();
	circles = new Array();
}

function draw() {
	var x = winW / 2 - 250;
	var y = winH / 2 - 300;
	
	s = sSlider.value();
	c = cSlider.value();
	
	if (window.innerWidth != winW || window.innerHeight != winH) {
		init();
		noStroke();
		for (var i = 0; i < circles.length; i++) {
			fill(circles[i][3]);
			ellipse(x + circles[i][0], y + circles[i][1], circles[i][2]);
		}
	}
	
	if (mouseIsPressed &&
		mouseX > x + s/2 && mouseX < x + 500 - s/2 &&
		mouseY > y + s/2 && mouseY < y + 450 - s/2) {
		circles.push([mouseX - x, mouseY - y, s, c]);
		noStroke();
		fill(c);
		ellipse(mouseX, mouseY, s);
	}
	
	stroke(0);
	strokeWeight(20);
	noFill();
	rect(x, y, 500, 600);
}

function init() {
	winW = window.innerWidth;
	winH = window.innerHeight;
	createCanvas(winW, winH);
	
	x = winW / 2 - 250;
	y = winH / 2 - 300;
	
	background(240);
	image(img, x, y);
	
	cSlider = createSlider(0, 1, 1);
	cSlider.position(x + 10, y + 625);
	sSlider = createSlider(5, 100, 20);
	sSlider.position(x + 10, y + 650);
}

//implementations:
//undo button
//black and white pens
//slider to change size