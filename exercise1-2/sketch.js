let starx=[];
let stary=[];

function setup() {
createCanvas(400,400);
}

function draw() {
background(22, 36, 102);
for (i=0; i<stary.length;i++){
    star(starx[i],stary[i])
}
}

/**
 * Draws a star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */
function star(x, y) {
    fill(255, 234, 0);
    noStroke();
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}

function mouseClicked(){
    starx.push(mouseX);
    stary.push(mouseY);
}


