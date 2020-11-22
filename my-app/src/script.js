var audio, context, analyser, src, array, logo;
let map=new Map();

document.getElementById('player').onclick = function (event) {
    if (event.target.id=='filter'){
        audio = event.target.parentElement.querySelector('audio')
        // if (!context) {
            preparation(+audio.class);
        // }
        event.target.hidden=true
        if (audio.paused) {
            audio.play();
            loop();
        } else {
            audio.pause();
        }
    }
}

function preparation(fr) {
    context = new AudioContext();
    src = context.createMediaElementSource(audio);

    var filter = context.createBiquadFilter(fr);
    filter.type = 'lowpass'; // тип фильтра
    filter.frequency.value = fr; // частота
    filter.Q.value = 0.7;
debugger
    src.connect(filter);
    filter.connect(context.destination);
    }
    loop();
//}

function loop() {
    // if (!audio.paused) {
    //     window.requestAnimationFrame(loop);
    // }
    // array = new Uint8Array(analyser.frequencyBinCount);
    // analyser.getByteFrequencyData(array);

    // logo.minHeight = (array[40]) + "px";
    // logo.width = (array[40]) + "px";
}