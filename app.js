
let VIDEO = null;
let CANVAS = null;
let CAPTURE = null
let CONTEXT = null;
let SCALER = 0.6;
let SIZE = {x:0, y:0, width:0, height:0};

function main() {
    CANVAS = document.getElementById("camera--view");
    CONTEXT = CANVAS.getContext("2d");
    CAPTURE = document.getElementById("#camera--output");
    cameraTrigger = document.querySelector("#camera--trigger")

    let promise = navigator.mediaDevices.getUserMedia({video: true});

    promise.then(
    	function(signal){
    		VIDEO = document.createElement("video");
    		VIDEO.srcObject = signal;
    		VIDEO.play();

    		VIDEO.onloadeddata - function(){
    			updateCanvas();
    		}

    	}).catch(function(err){
    		alert("Camera error: " + err);
    	}
    );

   	// Take a picture when cameraTrigger is tapped
    cameraTrigger.onclick = function() {
        CONTEXT.width = CANVAS.videoWidth;
        CONTEXT.height = CANVAS.videoHeight;
        //cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
        //cameraOutput.src = cameraSensor.toDataURL("image/webp");
        //cameraOutput.classList.add("taken");
    };
};



function updateCanvas(){
	CONTEXT.drawImage(VIDEO, 0, 0);
	window.requestAnimationFrame(updateCanvas);
}
