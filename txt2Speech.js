var txt2SpeechPlugin = {
    version : '1.0.0',

    gotit : function () {
        document.getElementById('status').innerHTML = 'talk DONE.';
    },
    err   : function (reason) {
        document.getElementById('status').innerHTML = reason;
    },
    talk  : function (theText) {
        //
        document.getElementById('status').innerHTML = 'talk => called';
        if (theText == 2) {
            TTS.speak({
                text: 'hello, world!',
                locale: 'en-GB',
                rate: 0.65
            }, txt2SpeechPlugin.gotit, txt2SpeechPlugin.err);
        } else {
            TTS.speak({
                text: theText,
                locale: 'en-US',
                rate: 0.50
            }, txt2SpeechPlugin.gotit, txt2SpeechPlugin.err);
        }
        document.getElementById('status').innerHTML = 'talk => <b>waiting</b>';
    }
}
