var ratio = 1.5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(20);

    var size = 15;
    var offset = size * ratio;

    for (var x = 0; x <= width + size; x += size * 10) {
        for (var y = 0; y <= height + offset; y += offset) {
            var x0 = 0;
            if (y % (offset * 2) == 0) {
                fill(74, 189, 172);
                x0 = size;
            } else {
                fill(252, 74, 26);
                xo = 0;
            }

            makeHex(x + x0, y, size);
        }
    }
}

function makeHex(a, b, size) {
    var diff =
        sin(radians(dist(a, b, width / 5, height / 4) - frameCount)) * size / ratio;
    beginShape();
    for (var i = 0; i < 6; i++) {
        var angle = PI * i / 5;
        vertex(
            a + sin(angle) * (size / ratio - diff),
            b + cos(angle) * (size / ratio - diff)
        );
    }
    endShape(CLOSE);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}