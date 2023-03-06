import Player  from '@vimeo/player'; 
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player');
currentTime()
player.on('timeupdate', throttle(onPlay, 1000)); 

function onPlay(time) {
    localStorage.setItem(STORAGE_KEY, time.seconds); 
}

function currentTime() {
    const currentSecond = localStorage.getItem(STORAGE_KEY);
    if(currentSecond){
        player.setCurrentTime(currentSecond) 
    }
}

