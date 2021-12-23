// const throttle = require('lodash.throttle');
// import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', onTime);
document.addEventListener(
    'scroll',
    _.throttle(() => {
        console.log('Scroll handler call every 300ms');
    }, 300),
);
// var throttled = _.throttle(renewToken, 300000, { trailing: false });
// jQuery(element).on('click', throttled);

function onTime() {
    // console.log('played the video!');
    player
        .getCurrentTime()
        .then(function(seconds) {
            // seconds = the current playback position
            console.log(seconds);
        })
        .catch(function(error) {
            // an error occurred
        });
}

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
console.log(player);

// {
//   duration: 61.857;
//   percent: 0.049;
//   seconds: 3.034;
// }