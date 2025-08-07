import { TestResults, advanceToFrame, checkBackgroundIsCalledInDraw, getShapes, runMouseClick, simulateKeyboardEvent } from "../../lib/test-utils.js";

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

function clickTheMouse(hist) {
    mouseX = random(width);
    mouseY = random(height);
    hist.push({
        x: mouseX,
        y: mouseY
    });
    runMouseClick();
    advanceToFrame(frameCount+1);
}

function pressAKey(keyName, hist) {
    if (window.hasOwnProperty("keyPressed"))
        simulateKeyboardEvent(keyPressed, keyName);
    if (window.hasOwnProperty("keyReleased"))
        simulateKeyboardEvent(keyReleased, keyName);
    if (keyName === "z") {
        hist.pop();
    }
    advanceToFrame(frameCount+1);
}

function checkLocations(hist, msgPrefix) {
    const actualShapes = getShapes();
    if (actualShapes.length !== hist.length) {
        TestResults.addFail(`${msgPrefix}, ${hist.length} shapes were expected but ${actualShapes.length} were found.`);
    } else {
        let allMatch = true;
        for (let i = 0; i < actualShapes.length; i++) {
            if (hist[i].x !== actualShapes[i].x || hist[i].y !== actualShapes[i].y) {
                allMatch = false;
                break;
            }
        }
        if (allMatch) {
            TestResults.addPass(`${msgPrefix}, the expected shapes are on the canvas.`);
        } else {
            TestResults.addFail(`${msgPrefix}, shapes were expected at the following locations: ${hist.map(h => "(" + h.x + ", " + h.y + ")").join(", ")}. Shapes were found at: ${actualShapes.map(h => "(" + h.x + ", " + h.y + ")").join(", ")}.`)
        }
    }
}

async function runTests(canvas) {
    canvas.style.pointerEvents = "none";
    const resultsDiv = document.getElementById("results");
    checkBackgroundIsCalledInDraw();
    const hist = [];
    clickTheMouse(hist);
    checkLocations(hist, "When the mouse is clicked for the first time");
    clickTheMouse(hist);
    checkLocations(hist, "When the mouse is clicked a second time");
    pressAKey("z", hist);
    checkLocations(hist, "when the 'z' key is pressed to undo");
    pressAKey(" ", hist);
    checkLocations(hist, "when the space bar is pressed and nothing should happen");
    TestResults.display(resultsDiv);
}


const loadTimer = setInterval(waitForP5, 500);
