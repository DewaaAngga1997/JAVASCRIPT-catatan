 var media = document.getElementById("mus");
// var media = document.getElementById('vid')

function getDuratin(){
   let int = setInterval(() => {
        let time = media.currentTime;
        let duration = media.duration;
        let percent = Math.floor(time/duration * 100)
    document.getElementById('duration').style.width = `${percent}%`;
        if(media.ended){
            clearInterval(int)
        }
   }, 1000);   
}


function play(){
    media.play();
    getDuratin()
}
// function play(){
//     alert(media.currentTime)
//     media.play();
// }

function pause(){
    media.pause();
}
function load(){
    media.load();
}

function stopVolume(){
    media.volume = 0;
}
function playVolume(){
    media.volume = 1;
}

function speedUp(){
    media.playbackRate +=0.10;
}
function slowDown(){
    media.playbackRate -=0.10;
}
if(media.ended == false){

}

// muted duration currentTime 
// playbackRate  ended

