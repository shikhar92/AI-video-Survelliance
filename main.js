objects=[];
status="";

function setup(){
c1=createCanvas(480,380);
c1.center();
video.hide();
}

function Start(){

myModel=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";

}

function preload(){

    video=createVideo("video.mp4");
    
    }


function Pause(){

video.pause();

}

function Resume(){

video.play();

}

function vo(){

video.volume(1);

}

function voff(){

video.volume(0);

}

function modelLoaded(){

console.log("Model is Loaded")
status=true;
video.loop();
    video.speed(1);
}
function gotResult(error,results){
    if(error){

console.log(error);

    }
else{

console.log(results);
objects=results;

}


}

function draw(){

image(video,0,0,480,380)

if(status != "")
{
    myModel.detect(video,gotResult)
for(i=0;i<objects.length;i++)
{

document.getElementById("status").innerHTML="Objects Detected";
document.getElementById("n1").innerHTML="Number of Objects Detected Are "+objects.length;
percent=floor(objects[i].confidence*100);
fill("yellow")
text(objects[i].label+" "+percent+" %",objects[i].x+15,objects[i].y+15 )
noFill();
rect (objects[i].x,objects[i].y,objects[i].width,objects[i].height)


}

}


}