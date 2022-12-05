void setup() {
	size(768, 768);
	background(30, 30, 55);
	colorMode(HSB, 600, 10, 10);
}

float angle = 0;
float n = 2;
float d = 5;
float k = n / d;
float radius = 350;
float cnt = 0;

void draw() {
	
	fill(0, 0, 0, 10);
	rect(-1, -1, width + 1, height + 1);
	fill(255);
	translate(width/2, height/2);
	n+= 0.003;
	float k = n / d;
	angle = 0;
	while(angle < TWO_PI * d) {
		float x = radius * cos(k * angle) * cos(angle);
		float y = radius * cos(k * angle) * sin(angle);
		stroke(300 + angle * 2, 200, 255);
		fill(300 + angle * 2, 200, 255);
		ellipse(x, y, 5, 5);
		angle += 1;
	}
}