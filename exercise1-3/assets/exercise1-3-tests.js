import { TestCircle, TestResults, advanceToFrame, checkBackgroundIsCalledInDraw, checkCanvasSize, getShapes, testShapesMatchWithoutOrder } from "../../lib/test-utils.js";

/**
 * A hacky solution to wait for p5js to load the canvas. Include in all exercise test files.
 */
function waitForP5() {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length > 0) {
        clearInterval(loadTimer);
        runTests(canvases[0]);
    }
}

function createExpectedShapes(xVals, yVals) {
    const shapes = [];
    for (let i = 0; i < xVals.length; i++) {
        shapes.push(new TestCircle(xVals[i], yVals[i], 20 - (xVals.length - (i + 1)) * 2));
    }
    return shapes;
}

async function runTests(canvas) {
    canvas.style.pointerEvents = "none";
    const resultsDiv = document.getElementById("results");
    checkBackgroundIsCalledInDraw();
    // On load
    const xVals = [mouseX];
    const yVals = [mouseY];
    let expected = createExpectedShapes(xVals, yVals);
    let actual = getShapes();
    if (testShapesMatchWithoutOrder(expected, actual)) {
        TestResults.addPass("When the sketch starts, there is one circle of 20px diameter at the mouse coordinates.");
    } else {
        TestResults.addFail(`When the sketch starts, there should be one circle of 20px diameter at the mouse coordinates. ${actual.length === 1 ? "One shape was found but it was a " + actual[0].type + " at " + actual[0].x + ", " + actual[0].y + " with a width of " + actual[0].w : actual.length + " shapes were found."}`);
    }
    // Next frame
    mouseX = 3;
    mouseY = 5;
    xVals.push(mouseX);
    yVals.push(mouseY);
    advanceToFrame(frameCount + 1);
    expected = createExpectedShapes(xVals, yVals);
    actual = getShapes();
    if (testShapesMatchWithoutOrder(expected, actual)) {
        TestResults.addPass(`At frame ${frameCount}, there is one circle of 20px diameter at the current mouse coordinates and one circle of 18px at the previous mouse coodinates.`);
    } else {
        TestResults.addFail(`At frame ${frameCount}, there should be one circle of 20px diameter at the current mouse coordinates (${xVals[1]}, ${yVals[1]}) and one circle of 18px at the previous mouse coodinates (${xVals[0]}, ${yVals[0]}). ${actual.length === 2 ? "Two shapes were found: a " + actual[0].type + " with diameter " + actual[0].w + " at " + actual[0].x + ", " + actual[0].y + " and a " + actual[1].type + " with diameter " + actual[1].w + " at " + actual[1].x + ", " + actual[1].y : actual.length + " shapes were found."}`);
    }
    // Third frame
    mouseX = 6;
    mouseY = 6;
    xVals.push(mouseX);
    yVals.push(mouseY);
    advanceToFrame(frameCount + 1);
    expected = createExpectedShapes(xVals, yVals);
    actual = getShapes();
    if (testShapesMatchWithoutOrder(expected, actual)) {
        TestResults.addPass(`At frame ${frameCount}, there is one circle of 20px diameter at the current mouse coordinates, one circle of 18px at the previous mouse coodinates, and one circle of 16px at the third most recent mouse coordinates.`);
    } else {
        TestResults.addFail(`At frame ${frameCount}, there should be one circle of 20px diameter at the current mouse coordinates (${xVals[2]}, ${yVals[2]}), one circle of 18px at the previous mouse coodinates (${xVals[1]}, ${yVals[1]}), and one circle of 16px at the third most recent mouse corodinates (${xVals[0]}, ${yVals[0]}). ${actual.length === 3 ? "Three shapes were found: a " + actual[0].type + " with diameter " + actual[0].w + " at " + actual[0].x + ", " + actual[0].y + ", a " + actual[1].type + " with diameter " + actual[1].w + " at " + actual[1].x + ", " + actual[1].y + ", and a " + actual[2].type + " with diameter " + actual[2].w + " at " + actual[2].x + ", " + actual[2].y : actual.length + " shapes were found."}`);
    }
    // Fourth frame
    mouseX = 5;
    mouseY = 7;
    xVals.push(mouseX);
    yVals.push(mouseY);
    advanceToFrame(frameCount + 1);
    expected = createExpectedShapes(xVals, yVals);
    actual = getShapes();
    if (testShapesMatchWithoutOrder(expected, actual)) {
        TestResults.addPass(`At frame ${frameCount}, there is one circle of 20px diameter at the current mouse coordinates, one circle of 18px at the previous mouse coodinates, one circle of 16px at the third most recent mouse coordinates, and one circle of 14px at the fourth most recent coordinates.`);
    } else {
        TestResults.addFail(`At frame ${frameCount}, there should be one circle of 20px diameter at the current mouse coordinates (${xVals[3]}, ${yVals[3]}), one circle of 18px at the previous mouse coodinates (${xVals[2]}, ${yVals[2]}), one circle of 16px at the third most recent mouse coordinates (${xVals[1]}, ${yVals[1]}), and one circle of 14px at the fourth most recent mouse coordinates (${xVals[0]}, ${yVals[0]}). ${actual.length === 4 ? "Four shapes were found: a " + actual[0].type + " with diameter " + actual[0].w + " at " + actual[0].x + ", " + actual[0].y + ", a " + actual[1].type + " with diameter " + actual[1].w + " at " + actual[1].x + ", " + actual[1].y + ", a " + actual[2].type + " with diameter " + actual[2].w + " at " + actual[2].x + ", " + actual[2].y + ", and a " + actual[3].type + " with diameter " + actual[3].w + " at " + actual[3].x + ", " + actual[3].y : actual.length + " shapes were found."}`);
    }
    // Fifth frame
    mouseX = 7;
    mouseY = 10;
    xVals.push(mouseX);
    yVals.push(mouseY);
    advanceToFrame(frameCount + 1);
    expected = createExpectedShapes(xVals, yVals);
    actual = getShapes();
    if (testShapesMatchWithoutOrder(expected, actual)) {
        TestResults.addPass(`At frame ${frameCount}, there is one circle of 20px diameter at the current mouse coordinates, one circle of 18px at the previous mouse coodinates, one circle of 16px at the third most recent mouse coordinates, one circle of 14px at the fourth most recent coordinates, and one circle of 12px diameter at the fifth most recent coordinates.`);
    } else {
        TestResults.addFail(`At frame ${frameCount}, there should be one circle of 20px diameter at the current mouse coordinates (${xVals[4]}, ${yVals[4]}), one circle of 18px at the previous mouse coodinates (${xVals[3]}, ${yVals[3]}), one circle of 16px at the third most recent mouse coordinates (${xVals[2]}, ${yVals[2]}), one circle of 14px at the fourth most recent mouse coordinates (${xVals[1]}, ${yVals[1]}), and one circle of 12px at the fifth most recent mouse coordinates (${xVals[0]}, ${yVals[0]}). ${actual.length === 5 ? "Five shapes were found: a " + actual[0].type + " with diameter " + actual[0].w + " at " + actual[0].x + ", " + actual[0].y + ", a " + actual[1].type + " with diameter " + actual[1].w + " at " + actual[1].x + ", " + actual[1].y + ", a " + actual[2].type + " with diameter " + actual[2].w + " at " + actual[2].x + ", " + actual[2].y + ", a " + actual[3].type + " with diameter " + actual[3].w + " at " + actual[3].x + ", " + actual[3].y  + ", a " + actual[4].type + " with diameter " + actual[4].w + " at " + actual[4].x + ", " + actual[4].y : actual.length + " shapes were found."}`);
    }
    // Sixth frame
    mouseX = 11;
    mouseY = 11;
    xVals.push(mouseX);
    xVals.shift();
    yVals.push(mouseY);
    yVals.shift();
    advanceToFrame(frameCount + 1);
    expected = createExpectedShapes(xVals, yVals);
    actual = getShapes();
    if (testShapesMatchWithoutOrder(expected, actual)) {
        TestResults.addPass(`At frame ${frameCount}, there is one circle of 20px diameter at the current mouse coordinates, one circle of 18px at the previous mouse coodinates, one circle of 16px at the third most recent mouse coordinates, one circle of 14px at the fourth most recent coordinates, and one circle of 12px diameter at the fifth most recent coordinates.`);
    } else {
        TestResults.addFail(`At frame ${frameCount}, there should be one circle of 20px diameter at the current mouse coordinates (${xVals[4]}, ${yVals[4]}), one circle of 18px at the previous mouse coodinates (${xVals[3]}, ${yVals[3]}), one circle of 16px at the third most recent mouse coordinates (${xVals[2]}, ${yVals[2]}), one circle of 14px at the fourth most recent mouse coordinates (${xVals[1]}, ${yVals[1]}), and one circle of 12px at the fifth most recent mouse coordinates (${xVals[0]}, ${yVals[0]}). ${actual.length === 5 ? "Five shapes were found: a " + actual[0].type + " with diameter " + actual[0].w + " at " + actual[0].x + ", " + actual[0].y + ", a " + actual[1].type + " with diameter " + actual[1].w + " at " + actual[1].x + ", " + actual[1].y + ", a " + actual[2].type + " with diameter " + actual[2].w + " at " + actual[2].x + ", " + actual[2].y + ", a " + actual[3].type + " with diameter " + actual[3].w + " at " + actual[3].x + ", " + actual[3].y  + ", a " + actual[4].type + " with diameter " + actual[4].w + " at " + actual[4].x + ", " + actual[4].y : actual.length + " shapes were found."}`);
    }
    TestResults.display(resultsDiv);
}


const loadTimer = setInterval(waitForP5, 500);
