console.log("Welcome to Spotify")
let songIndex = 1;
let audioElement = new Audio('songs/2.mp3');
//audioElement.play(); 
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let previousBtn = document.getElementById('previousBtn');
let nextBtn = document.getElementById('nextBtn');
let songInfo = document.getElementById('songInfo');
let songPlay = document.getElementsByClassName('songPlay');

let songs = [
    {songName: "Warriyo-Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo-Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV-Invincible[NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EHIDE-My Heart[NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba-Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan-Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena-Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam-Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana-Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
 masterPlay.addEventListener("click", function() {
    if (audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

 }
 );
 audioElement.addEventListener("timeupdate" , function() {
    let progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    myProgressBar.value = progress;
 });
 myProgressBar.addEventListener('change', function() {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
 })

 previousBtn.addEventListener("click" , function() {
    if(songIndex>0) {
    songIndex = songIndex-1;
    audioElement.src = songs[songIndex].filePath
    audioElement.currentTime = 0;
    audioElement.play(); 
    masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
    songInfo.innerHTML = songs[songIndex].songName;
    }
    
 })
 nextBtn.addEventListener("click" , function() {
    if(songIndex<(songs.length-1)) {
    songIndex = songIndex+1;
    audioElement.src = songs[songIndex].filePath
    audioElement.currentTime = 0;
    audioElement.play(); 
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    songInfo.innerHTML = songs[songIndex].songName;
    }
})
var n = songPlay.length;
console.log(songPlay);
for(var i=0;i<n;i++) {
    let currentSongIdx = i;
    songPlay[i].addEventListener("click", function() {
        audioElement.src = songs[currentSongIdx].filePath
        songIndex = currentSongIdx;
        if (audioElement.paused || audioElement.currentTime<=0 ){
            
            adioElementCurrentTime = 0;
            audioElement.play();
            makeOtherPause();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            this.classList.remove('fa-circle-play');
            this.classList.add('fa-circle-pause');
            
            console.log(gif);
            //gif.style.opacity = 1;
            console.log(gif);
            songInfo.innerHTML = songs[currentSongIdx].songName;
        }
        else {
            audioElement.pause();
            this.classList.remove('fa-circle-pause');
            this.classList.add('fa-circle-play');
            //gif.style.opacity = 0;
    }
}
    )
}
function makeOtherPause() {
    for(var i=0;i<n;i++){
        songPlay[i].classList.add('fa-circle-play')
        songPlay[i].classList.remove('fa-circle-pause')

    }
}
