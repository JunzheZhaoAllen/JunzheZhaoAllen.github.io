// 获取视频播放器元素
var video = document.getElementById('custom-video-player');
video.controls = false;
 
function playFn() {
    video.play();
    document.querySelector('#play-btn').className = 'none'
    document.querySelector('#play-pause-btn').className = 'block'
}
 
function pauseFn() {
    video.pause();
    document.querySelector('#play-btn').className = 'block'
    document.querySelector('#play-pause-btn').className = 'none'
}
 
function FastbackwardFn() {
    video.currentTime -= 10;
}
 
function FastforwardFn() {
    video.currentTime += 10;
} 
function restFn() {
    video.currentTime = 0;
    pauseFn();  
}
 
function TurnOnsound() {
    video.muted = true;
    document.querySelector('#audio-btn').className = 'none'
    document.querySelector('#no-audio-btn').className = 'block'
}
 
function Soundoff() {
    video.muted = false;
    document.querySelector('#audio-btn').className = 'block'
    document.querySelector('#no-audio-btn').className = 'none'
}
 
function FullscreenFn() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // 兼容火狐
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // 兼容Chrome和Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // 兼容IE11
        video.msRequestFullscreen();
    }
}

 
function updateProgressBar() {
    var progressBar = document.getElementById('progress-bar-fill');
    var currentTime = video.currentTime;
    var duration = video.duration;
    var percentage = (currentTime / duration) * 100;
    progressBar.style.width = percentage + '%';
}
 
video.addEventListener('timeupdate', updateProgressBar);

function videoonly() {
    document.querySelector('.uls').innerHTML = `  <li><span type="./media/2.mp4">video2</span></li>`
}
function musiconly() {
    document.querySelector('.uls').innerHTML = ` <li><span type="./media/1music.mp3"> music1</span></li>
    <li><span type="./media/2music.mp3"> music2</span></li>`
}
function listonly() {
    document.querySelector('.uls').innerHTML = `     <li><span type="./media/2.mp4">video2</span></li>
    <li><span type="./media/1music.mp3"> music1</span></li>
    <li><span type="./media/2music.mp3"> music2</span></li>`
}
 
var ul = document.querySelector('.uls');
ul.addEventListener('click', function (event) {
    if (event.target.tagName === 'SPAN') { 
        var content = event.target.getAttribute('type');
 
        video.src = content
        pauseFn(); 
    }
});
