const rotatingObjects = [
    { name: 'seconds', object: document.getElementById('seconds'), factor: 6 },
    { name: 'minutes', object: document.getElementById('minutes'), factor: 6 },
    { name: 'hours', object: document.getElementById('hours'), factor: 30 },
    { name: 'innerCircleBig', object: document.getElementById('inner-circle-big'), factor: 40 },
    { name: 'innerCircleSmall', object: document.getElementById('inner-circle-small'), factor: -40 },
    { name: 'outerCircleBig', object: document.getElementById('outer-circle-big'), factor: 3 },
    { name: 'outerCircleSmall', object: document.getElementById('outer-circle-small'), factor: -3 }
];

const time = new Date();
let seconds = time.getSeconds();
let minutes = time.getMinutes() + (seconds / 60);
let hours = time.getHours() % 12 + (minutes / 60);

function transform(object, timeUnit, factor) {
    object.style.transform = `translate(-50%, -50%) rotate(${timeUnit * factor}deg)`;
}

setInterval(() => {
    seconds++;
    minutes += 1 / 60;
    hours += 1 / (60 * 60);
    rotatingObjects.forEach(object => {
        if (object.name === 'minutes') {
            transform(object.object, minutes, object.factor);
        } else if (object.name === 'hours') {
            transform(object.object, hours, object.factor);
        } else {
            transform(object.object, seconds, object.factor);
        }
    });
}, 1000);