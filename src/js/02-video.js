import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_PLAYER_CURRENT_TIME = 'videoplayer-current-time';
const TIME_UPDATE = 1000;


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', throttle(saveCurrentTime, TIME_UPDATE));

function saveCurrentTime() {
    player.getCurrentTime().then(time => {
        
    localStorage.setItem(VIDEO_PLAYER_CURRENT_TIME, Math.round(time));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem(VIDEO_PLAYER_CURRENT_TIME);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});