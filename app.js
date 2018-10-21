var app = {
    version : '1.0.0',
    targetEvent : 'click',

    //
    hook : function () {
        document.getElementById('exitApp').addEventListener(app.targetEvent,
            function () { navigator.app.exitApp(); },
            false);
        document.getElementById('talkApp').addEventListener(app.targetEvent,
            function () { txt2SpeechPlugin.talk(2); },
            false);
    },
    //
    onDOMContentLoaded : function () {
        document.getElementById('appVersion').innerHTML  = app.version;
        //
        app.hook();
        document.getElementById('status').innerHTML = 'is webbrowser';
    },
    //
    onDeviceReady : function () {
        app.targetEvent = 'touchend';
        //
    }
}
