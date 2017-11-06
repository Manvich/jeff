var winW;
var winH;
var img;

function preload() {
	img = loadImage("cuts/untrimmed.jpg");
}

function setup() {
	winW = window.innerWidth;
	winH = window.innerHeight;
	createCanvas(winW, winH);
}

function draw() {
	if (window.innerWidth != winW || window.innerHeight != winH) {
		winW = window.innerWidth;
		winH = window.innerHeight;
		createCanvas(winW, winH);
	}
	background(240);
	image(img, winW / 2, winH / 2);
	fill(255);
	rect(winW / 2 - 200, winH / 2 - 200, 400, 400);
}