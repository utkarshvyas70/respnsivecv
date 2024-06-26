// Get all elements with class videoPlayer and playPauseBtn
const videoPlayers = document.querySelectorAll('.videoPlayer');
const playPauseBtns = document.querySelectorAll('.playPauseBtn');

// Add event listener to each playPauseBtn
playPauseBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const videoId = this.getAttribute('data-player');
    const video = document.getElementById(videoId);

    if (video.paused) {
      video.play();
      this.textContent = 'Pause';
    } else {
      video.pause();
      this.textContent = 'Play';
    }
  });
});