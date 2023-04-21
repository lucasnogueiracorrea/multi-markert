let count = 1;

document.getElementById("slide1").checked = true;

setInterval(function() {
    nextImagem();
}, 5000)


function nextImagem(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("slide"+count).checked = true;
}