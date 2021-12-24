import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTime, 1000));

const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('Set state error: ', error.message);
    }
};

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
};

export default {
    save,
    load,
};

///////////////////////////
function onTime(data) {
    save('videoplayer-current-time', data.seconds);
    console.log(load('videoplayer-current-time'));
}

player.setCurrentTime(load('videoplayer-current-time'));