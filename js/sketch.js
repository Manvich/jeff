var winW;
var winH;
var img;

function preload() {
	img = loadImage("cuts/untrimmed2.jpg");
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
	image(img, winW / 2 - 250, winH / 2 - 300);
	fill(255);
}