nosex=0;
nosey=0;
function preload(){
    clownnose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is intialized");
}

function draw(){
    image(video,0,0,400,400);
    fill(255,0,0);
    stroke(255,0,0);
    image(clownnose,nosex,nosey,80,35);
}
function snap(){
    save('Mustache.png');
}
function gotposes(results){
if (results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-40;
    nosey=results[0].pose.nose.y;
    console.log("nose x = "+nosex);
    console.log("nose y = "+nosey);
}
}