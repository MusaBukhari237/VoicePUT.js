// var InputType = 'input[type=search]';

if (typeof InputType === 'undefined') {
    var InputType = 'input';
}

document.head.innerHTML += `
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
<link href="VoicePUT.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
`;
var SelectedInput = null;
var BTN = document.createElement('button');
BTN.classList.add('GetSpeechButton');
BTN.classList.add('disabled');
BTN.setAttribute('onclick', 'SpeechToText()');
BTN.innerHTML = `<i class="fas fa-microphone" style="width:20px" ></i>`;
BTN = document.body.appendChild(BTN);



setTimeout(() => {

    var InputObjects = document.querySelectorAll(InputType);
    for (let index = 0; index < InputObjects.length; index++) {
        var Input = InputObjects[index];
        Input.setAttribute('onfocus', 'EnableSpeechToText(this)');
        Input.setAttribute('onblur', 'DisableSpeechToText(this)');
        Input.setAttribute('onkeypress', 'return IsGetSpeechCalledSpeechToText(event)');

    };

}, 500);


// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    // recognition.lang = "en-US";

    recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
    function startSpeechRecognition() {
        BTN.querySelector('i').classList.remove('fa-microphone');
        BTN.querySelector('i').classList.add('fa-stroopwafel');
        BTN.querySelector('i').classList.add('fa-spin');
    }

    recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}

    function endSpeechRecognition() {
        BTN.querySelector('i').classList.remove('fa-stroopwafel');
        BTN.querySelector('i').classList.remove('fa-spin');
        BTN.querySelector('i').classList.add('fa-microphone');
    }

    recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
    function resultOfSpeechRecognition(event) {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;

        if (transcript.toLowerCase().trim() === "stop recording") {
            recognition.stop();
        } else if (transcript.toLowerCase().trim() === "reset") {
            SelectedInput.value = '';
        }
        else {
            SelectedInput.value += transcript;
        }
        $(SelectedInput).keyup();
        $(SelectedInput).keydown();
        $(SelectedInput).keypress();
        $(SelectedInput).change();
    }


    function EnableSpeechToText(Object) {
        SelectedInput = Object;
        setTimeout(() => {
            BTN.classList.remove('disabled');

        }, 200);
    }

    function DisableSpeechToText(Object) {
        recognition.stop();
        setTimeout(() => {
            BTN.classList.add('disabled');

        }, 200);
    }


    function IsGetSpeechCalledSpeechToText(Object) {
        if (Object.keyCode == 126) {
            BTN.click();
            return false;
        };
    }

    function SpeechToText() {
        SelectedInput.focus();
        if (BTN.querySelector('i').classList.contains('fa-microphone')) {
            recognition.start();
        } else {
            recognition.stop();
        }
    }

}
else {
    alert("Your Browser does not support speech Recognition");
}
