var txt2SpeechPlugin = {
    version : '1.0.0',
    debug   : '',

    gotit : function () {
        if (txt2SpeechPlugin.debug) {
            document.getElementById(txt2SpeechPlugin.debug).innerHTML = 'talk DONE.';
        }
    },
    err   : function (reason) {
        if (txt2SpeechPlugin.debug) {
            document.getElementById(txt2SpeechPlugin.debug).innerHTML = reason;
        }
    },
    talk  : function (theText) {
        //
        if (txt2SpeechPlugin.debug) {
            document.getElementById(txt2SpeechPlugin.debug).innerHTML = 'talk => called';
        }
        if (theText == 2) {
            TTS.speak({
                text: 'hello, world!',
                locale: 'en-US',
                rate: 0.65
            }, txt2SpeechPlugin.gotit, txt2SpeechPlugin.err);
        } else {
            TTS.speak({
                text: theText,
                locale: 'en-US',
                rate: 0.50
            }, txt2SpeechPlugin.gotit, txt2SpeechPlugin.err);
        }
    }
}
