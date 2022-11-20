// Start here @i_m_nitian_vijay
// Jai Shree Ram

let capture;
let posenet;
let singlePose;
let skeleton;
//let reyeX, reyeY, leyeX, leyeY;

function setup(){
    createCanvas(800, 600);
    capture = createCapture(VIDEO)
    capture.hide()

    posenet = ml5.poseNet(capture, modelLoaded)
    posenet.on('pose', receivedPoses)
}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose
        skeleton = poses[0].skeleton
    }
    // leyeX = singlePose.leftEye.x
    // leyeY = singlePose.leftEye.y

    
    // reyeX = singlePose.rightEye.x
    // reyeY = singlePose.rightEye.y

}

function modelLoaded(){
    console.log('Model has loaded')
}
//******************************** */
// function draw(){
//     background(120);
//     // point
//     point(200, 200);
//     // line
//     line(200, 200, 300, 300);
//     // triangle
//     triangle(100, 200, 300, 100, 200, 300);
//     // rectangle
//     rect(500, 200, 300, 100);
//     //circle
//     circle(200, 200, 50);
// }

//**************************************** */

// function draw(){
//     background(200)

//     // Stroke and color // rgb opacity
//     fill(120, 200, 120, 150)
//     stroke(255, 0, 0, 255);
//     strokeWeight(5)
//     ellipse(100, 200, 100, 100);
//     stroke(0, 255, 0);
//     strokeWeight(2)
//     ellipse(250, 200, 100, 100);
//     ellipse(400, 200, 100, 100);
//     ellipse(550, 200, 100, 100);
// }

//************************************* */
// function getRandomArbitrary(min, max){
//     return Math.random() * (max - min) + min;
// }

// function draw() {
//     r = getRandomArbitrary(0, 255)
//     g = getRandomArbitrary(0, 255)
//     b = getRandomArbitrary(0, 255)
//     o = getRandomArbitrary(0, 255)

//     fill(r, g, b, o)
//     stroke(r, g, b, o);
//     ellipse(mouseX, mouseY, 50, 50);
// }

function draw(){
    // images and videos
    image(capture, 0, 0)
    fill(0, 0, 255);
    // ellipse(reyeX, reyeY, 30);
    // ellipse(leyeX, leyeY, 30)

    if(singlePose){
        for(let i = 0; i < singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 30, 30)
        }
        stroke(255, 0, 0)
        strokeWeight(10)
        for(let j = 0; j < skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
    }
}

    