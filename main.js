function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hsGsG5uBl/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}