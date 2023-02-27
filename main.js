Webcam.set({
  width:350, 
  height:300,
  image_format:"png",
  png_quality:90
});

Webcam.attach("#camera");


function take_snapshot(){
  Webcam.snap(function(pic_uri){
    document.getElementById("result").innerHTML="<img id = 'captured_selfie' src = '"+pic_uri+"'/>";
  });
  
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Pqd8Nlx2z/model.json",model_loaded);


function model_loaded(){
  console.log("Model is loaded");
}