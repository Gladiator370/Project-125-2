leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log("model is Inatialized");
}

function gotPoses(results) 
{
    if (results.length > 0) 
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() 
{
    background("#809aed");
    textSize(difference);
    fill("#f3f57f");
    stroke("#f3f57f");
    text("Neil", 50, 400);
    document.getElementById("font").innerHTML="Font size of the text will be = " + difference + "px";  
}