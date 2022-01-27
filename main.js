wristX="";
wristY="";
wristScore="";
function preload() {
	
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,400);
	posenet=ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function draw() {
	game();
	if(wristScore > 0.2){
		fill("#DC143C");
		stroke("#DC143C");
		circle(wristX, wristY,3);
	}

}
function modelLoaded(){
	console.log("Model is Loaded");
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results)
		wristX = results[0].pose.wrist.X;
		wristY = results[0].pose.wrist.Y;
		wristScore=results.length;

	}
}

