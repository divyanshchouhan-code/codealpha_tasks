let songName=document.querySelector("#Song_name");
let songArtist=document.querySelector("#Artist_name");
let songImage=document.querySelector(".thumbnail");
let Artistimg=document.querySelector(".artist_img");
let playPauseImg = document.querySelector("#play-pause");
let ArtistName=document.querySelector("#Artist_nam");
let volumeRange = document.querySelector("#volume-range");
let songRange = document.querySelector("#duration");
let musicAnim = document.querySelector("#music-animation");
let bars = document.querySelector("#bars");
let playlist = document.querySelector(".playlist");
let playlistSong = document.querySelectorAll(".playlist-song");


let index = 0;
let playingSong = false;
let track=document.createElement("audio");
let songs = [
    {
        name:"Hello BGM",
        path:"first.mp3",
        image:"first_thumbnail.png",
        Artist:"AnupRubens",
        ArtistImage:"artist1.png",
        Artistname:"AnupRubens"

    },
    {
        name:"Faded",
        path:"second.mp3",
        image:"second_thumbnail.png",
        Artist:"Alan Walker",
        ArtistImage:"artist2.png",
        Artistname:"Alan Walker"


    },
    {
        name:"Let Me Love You",
        path:"third.mp3",
        image:"third_thumnail.png",
        Artist:"Justin Bieber",
        ArtistImage:"artist3.png",
        Artistname:"Justin Bieber"


    },
    
]

function loadTrack(index){
    track.src=songs[index].path;
    songName.innerHTML=songs[index].name;
    songArtist.innerHTML= songs[index].Artist;
    songImage.style.backgroundImage = `url('${songs[index].img || songs[index].image}')`;
    Artistimg.style.backgroundImage = `url('${songs[index].ArtistImage}')`; 
    ArtistName.innerHTML=songs[index].Artistname;
    duration()
    setInterval(()=>{
        songRange.max=track.duration
        songRange.value=track.currentTime
    },1000)
    track.load()
}


loadTrack(index);

function playPause() {
    if(playingSong==false){
        playSong();
       
    }
    else{
        pauseSong();
       
    }
}

function playSong(){
    track.play();
    playingSong=true;
    playPauseImg.src = "pause.png";
    musicAnim.style.display="block";
}

function pauseSong(){
    track.pause();
    playingSong=false;
    playPauseImg.src = "play.png";
    musicAnim.style.display="none";
}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index);
        playSong();
    }
    else{
        index=0;
        loadTrack(index)
        playSong()
    }
}

function previousSong(){
    if(index>0){
        index--;
        loadTrack(index);
        playSong();
    }
    else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}

function volume(){
    track.volume=volumeRange.value/100

}
function duration(){
    track.currentTime=songRange.value
}

bars.addEventListener("click",()=>{
    playlist.classList.toggle("playlist-active");
});
playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong();
        
    })
})