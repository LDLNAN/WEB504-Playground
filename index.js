// index.js - Basic custom video player functionality
const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progess');
const timestamp = document.getElementById('timestamp');

// Toggle play/pause
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updatePlayIcon() {
  const icon = playBtn.querySelector('i');
  if (video.paused) {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  } else {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  }
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Update progress bar and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  let mins = Math.floor(video.currentTime / 60);
  let secs = Math.floor(video.currentTime % 60);
  if (mins < 10) mins = '0' + mins;
  if (secs < 10) secs = '0' + secs;
  timestamp.textContent = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('input', setVideoProgress);

// Initialize
updatePlayIcon();
updateProgress();
