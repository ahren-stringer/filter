//var audio, context, analyser, src, array, logo;

// document.getElementById('player').onclick = function (event) {
//     let hightFr = event.target.parentElement.querySelectorAll('input')[0].value;
//     let lowFr = event.target.parentElement.querySelectorAll('input')[1].value;
//     var audioNew = document.createElement('audio');
//     //audio.class = String(fr);
//     audioNew.src = audioUrl;
//     audioNew.controls = true;

//     var message = document.createElement("div")
//     message.classList.add('filtered__message')
//     divFilter.append(audio)
//     if (event.target.id == 'filter__polos') {
//         audio = event.target.parentElement.querySelectorAll('audio')[event.target.parentElement.querySelectorAll('audio').length - 1]
//         preparation(+document.getElementById('lowFr').value, +document.getElementById('hightFr').value);
//         message.innerHTML = 'Звуковое сообщение на выходе фильтра c полосой пропускания от ' + lowFr + ' Гц' + ' до ' + hightFr + ' Гц'
//         if (audio.paused) {
//             audio.play();
//             loop();
//         } else {
//             audio.pause();
//         }
//     }
//     if (event.target.id == 'filter__rej') {
//         audio = event.target.parentElement.querySelectorAll('audio')[event.target.parentElement.querySelectorAll('audio').length - 1]
//         preparation(+document.getElementById('hightFr').value, +document.getElementById('lowFr').value);
//         message.innerHTML = 'Звуковое сообщение на выходе фильтра c полосой подавления от ' + lowFr + ' Гц' + ' до ' + hightFr + ' Гц'
//         if (audio.paused) {
//             audio.play();
//             loop();
//         } else {
//             audio.pause();
//         }
//     }
//     divFilter.append(messageNew)
// }

// function preparation(lowFr, hightFr) {
//     context = new AudioContext();
//     src = context.createMediaElementSource(audio);
//     //let fr=(lowFr+hightFr)/2;

//     var FNCH = context.createBiquadFilter(hightFr);
//     FNCH.type = 'lowpass'; // тип фильтра
//     FNCH.frequency.value = hightFr; // частота
//     FNCH.Q.value = 0.7;

//     var FVCH = context.createBiquadFilter(lowFr);
//     FVCH.type = 'highpass'; // тип фильтра
//     FVCH.frequency.value = lowFr; // частота
//     FVCH.Q.value = 0.7;

//     src.connect(FVCH);
//     FVCH.connect(FNCH);
//     FNCH.connect(context.destination)
// }
