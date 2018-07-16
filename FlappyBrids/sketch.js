var bird;
var pipes = [];


function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    
}

function draw() {
    background(0);

    for (var i = pipes.length-1; i>=0; i--) {
        pipes[i].show();
        pipes[i].upadte();

        if (pipes[i].hits(bird)) {
            console.log("Bateu");
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.upadte();
    bird.show;

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }


}

function keyPressed() {
    if (key == ''){
        bird.up();
    }
}

