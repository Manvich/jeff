var winW;
var winH;
var img;
var circles;

function preload() {
	img = loadImage("cuts/untrimmed2.jpg");
}

function setup() {
	winW = window.innerWidth;
	winH = window.innerHeight;
	createCanvas(winW, winH);
	circles = new Array();
}

function draw() {
	var x = winW / 2 - 250;
	var y = winH / 2 - 300;
	if (window.innerWidth != winW || window.innerHeight != winH) {
		winW = window.innerWidth;
		winH = window.innerHeight;
		createCanvas(winW, winH);
	}
	background(240);
	image(img, x, y);
	noStroke();
	fill(255);
	if (mouseIsPressed &&
		mouseX > x && mouseX < x + 500 &&
		mouseY > y && mouseY < y + 500) {
		circles.push(ellipse(mouseX, mouseY, 10));
		print(circles[circles.length - 1].args[0]);
	}
	stroke();
	nofill();
	rect(x, y, 500, 600);
}