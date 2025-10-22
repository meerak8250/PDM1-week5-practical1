let diameters= [360,280,200,150]
let colourVals=[60,140,180,255]

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(255);
for (let i=0; i<diameters.length; i++){
    fill(colourVals[i],100,60);
    circle(200,200,diameters[i]);
}
}
function mouseClicked(){
let colours=colourVals.pop();
colourVals.unshift(colours);

}



