var app = {
    version : '1.0.0',
    targetEvent : 'click',
    isCordova   : false,
    stop        : false,

    // start the "ticker", if (not app.stop)
    kickTicker : function () {
        if (! app.stop) {
            setTimeout(app.updateDateTimeDisplay, 1000);
            document.getElementById('status').innerHTML  = "kickedTicker";
        }
    },
    //
    updateDateTimeDisplay : function () {
        document.getElementById('status').innerHTML      = "fired clock";
        datetime.get();
        document.getElementById('status').innerHTML      = "got get()";
        //document.getElementById('epochTime').innerHTML = datetime.epoch;
        //  Date
        document.getElementById('month').innerHTML     = datetime.monthString[datetime.monthStr];
        document.getElementById('date').innerHTML      = datetime.dateStr;
        document.getElementById('year').innerHTML      = datetime.yearStr;
        document.getElementById('status').innerHTML    = "got date";
        //  Day Of the Week
        document.getElementById('dow').innerHTML       = datetime.dowString[datetime.dowStr];
        //  Time
        //  https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date
        document.getElementById('hour').innerHTML      = ('0' + datetime.hourStr).slice(-2);
        document.getElementById('minute').innerHTML    = ('0' + datetime.minuteStr).slice(-2);
        document.getElementById('second').innerHTML    = ('0' + datetime.secondStr).slice(-2);
        document.getElementById('status').innerHTML    = "got time";
        app.kickTicker();
    },
    //
    hook : function () {
        // SHOULD HIDE THIS BUTTON IN THE BROWSER ONLY
        document.getElementById('exitApp').addEventListener(app.targetEvent,
            function () { 
                if (app.isCordova) {
                    navigator.app.exitApp();  
                } else {
                    app.stop = ! app.stop;
                    app.kickTicker();
                }
            },
            false);
        document.getElementById('talkApp').addEventListener(app.targetEvent,
            function () { 
                if (app.isCordova) {
                    txt2SpeechPlugin.talk(2);
                } else {
                    alert("not working at this time.");
                }
            },
            false);
    },
    //
    onDOMContentLoaded : function () {
        app.hook();
        //
        document.getElementById('appVersion').innerHTML  = app.version;
        //
        app.isCordova                               = (typeof window.cordova !== "undefined");
        document.getElementById('status').innerHTML = 'is webbrowser';
        app.updateDateTimeDisplay();
    },
    //
    onDeviceReady : function () {
        app.targetEvent = 'touchend';
        //
        app.isCordova                                     = (typeof window.cordova !== "undefined");
        //document.getElementById('isCordovaApp').innerHTML = app.isCordova;
        document.getElementById('status').innerHTML       = 'is Cordova';
        window.screen.orientation.lock('landscape-primary');
        app.updateDateTimeDisplay();
    }
}
