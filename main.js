//https://teachablemachine.withgoogle.com/models/Bt8y3DReL/model.json

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier
    ('https://teachablemachine.withgoogle.com/models/Bt8y3DReL/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
console.log('gotResults');
if(error)
{
console.error(error);
}
else{
    console.log(results);

}
random_r=Math.floor(Math.random()*255)+1;
random_g=Math.floor(Math.random()*255)+1;
random_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML='I can hear '+ results[0].label;
document.getElementById("result_confidence").innerHTML='Accuracy '+(results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

img=document.getElementById('Dog');
img1=document.getElementById('Cat');
img2=document.getElementById('Bird');
img3=document.getElementById('Background');

if(results[0].label=="dog barking"){
img.src='Dogb.gif';
img1.src='Cat.PNG';
img2.src='bird.PNG';
img3.src='Background.PNG';
}

else if(results[0].label=="Cat meowing"){
    img.src='Dog.PNG';
    img1.src='cat-meow.gif';
    img2.src='bird.PNG';
    img3.src='Background.PNG';
    }

    else if(results[0].label=="birds chirping"){
        img.src='Dog.PNG';
        img1.src='Cat.PNG';
        img2.src='birdc.gif';
        img3.src='Background.PNG';
        }

        else if (results[0].label=="Background Noise"){
            img.src='Dog.PNG';
            img1.src='Cat.PNG';
            img2.src='bird.PNG';
            img3.src='backnoise.gif';
            }

}

