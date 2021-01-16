Nose_X=0;
Nose_Y=0;
function preload(){
clown_nose=loadImage('https://i2.wp.com/freepngimages.com/wp-content/uploads/2019/03/red-nose.png?fit=800%2C800');
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        Nose_X=results[0].pose.nose.x-15;
        Nose_Y=results[0].pose.nose.y-15;
    }
}
function draw(){
image(video,0,0,400,400);
fill(255,0,0);
stroke(255,0,0);
circle(Nose_X+15,Nose_Y+15,20);
image(clown_nose,Nose_X,Nose_Y,30,30);
}

function take_snapshot(){
    save('Filtered_Img.png');
}