const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
const video = document.querySelector('video');
const playButton = document.querySelector('.player__button'); // Adjust the selector as needed
const volumeInput = document.querySelector('.volume'); // Adjust the selector as needed
const speedInput = document.querySelector('.playbackSpeed'); // Adjust the selector as needed
const rewindButton = document.querySelector('.rewind'); // Adjust the selector as needed
const skipButton = document.querySelector('.skip'); // Adjust the selector as needed
const progressBar = document.querySelector('.progress__filled'); // Adjust the selector as needed

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚'; // Change to pause symbol
  } else {
    video.pause();
    playButton.textContent = '►'; // Change to play symbol
  }
}

function updateVolume() {
  video.volume = volumeInput.value; // Assuming volumeInput is a range input
}

function updatePlaybackSpeed() {
  video.playbackRate = speedInput.value; // Assuming speedInput is a range input
}

function rewind() {
  video.currentTime -= 10; // Rewind 10 seconds
}

function skip() {
  video.currentTime += 25; // Skip 25 seconds
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

// Event Listeners
playButton.addEventListener('click', togglePlay);
volumeInput.addEventListener('input', updateVolume);
speedInput.addEventListener('input', updatePlaybackSpeed);
rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', skip);
video.addEventListener('timeupdate', updateProgress);