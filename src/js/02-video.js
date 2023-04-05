import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayerCurrentTime = 'videoplayer-current-time';
const timeUpdate = 1000;


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', throttle(saveCurrentTime, timeUpdate));

function saveCurrentTime() {
    player.getCurrentTime().then(time => {
        
    localStorage.setItem(videoPlayerCurrentTime, Math.round(time));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem(videoPlayerCurrentTime);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});