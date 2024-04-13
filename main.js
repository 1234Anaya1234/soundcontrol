

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/KatE9gCcn/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}