NoseX=0
NoseY=0
RightWristX=0
LeftWristX=0
difference=0;


function setup()
{
    canvas = createCanvas(350,350)
    video = createCapture(VIDEO);
    video.size(400,400)

canvas.position(560,120);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}


function modelLoaded()
{
    console.log('PoseNet Is Initialized!!');
}


function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
       LeftWristX=results[0].pose.leftWrist.x;
       RightWristX=results[0].pose.rightWrist.x;
       difference = floor(LeftWristX - RightWristX);

    


    }
}


function draw()
{
    background("steelblue")
    fill("yellow")
    stroke("black")
    strokeWeight(2)
    textSize(difference)
    text("Krisha",NoseX,NoseY)
}




