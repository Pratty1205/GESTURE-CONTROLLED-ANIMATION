noseX = 0;
noseY = 0;
LwristX = 0;
RwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 250);
    canvas = createCanvas(400, 250);
    canvas.position(700, 200);
    video.position(300, 200);
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', gotResults);
}

function draw() {
    background('#000000');
    square(noseX, noseY, difference);
    stroke("#00F2FF");
    fill("#00F2FF");
    document.getElementById("Size of The Square:" + difference + "Px");
}

function model_loaded() {
    console.log("Model is not loaded")
}

function gotResults(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX" + noseX + ", noseY" + noseY);
        LwristX = result[0].pose.leftWrist.x;
        RwristX = result[0].pose.rightWrist.y;
        difference = floor(LwristX - RwristX);
        console.log("LwristX" + LwristX + ", RwristX" + RwristX + ", difference" + difference);
    }
}