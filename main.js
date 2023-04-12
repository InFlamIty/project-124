function setup()
{
    video = createCapture(VIDEO)
    video.size(600 , 500)
    canvas = createCanvas(800 , 700)
    canvas.position(610 , 135)
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose" , gotResults)
}
function modelLoaded()
{
    console.log("Model Loaded")
}
function gotResults(results)
{
    if (results.length > 0) {
        console.log(results)
    }
}
function draw()
{
    background("#00ff62")
}