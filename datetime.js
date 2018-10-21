//
//   Date & Time
//   https://www.w3schools.com/jsref/jsref_obj_date.asp
//
var datetime = {
    version  : '0.9.0',
    date     : null,
    epoch    : '',
    dateStr  : '',
    monthStr : '',
    yearStr  : '',
    dowStr   : '',
    hourStr  : '',
    minuteStr : '',
    secondStr : '',

    monthString : ['January','February','March','April','May','June',
                   'July','August','September','October','November','December'],
    dowString   : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],

    get : function () {
        datetime.date = new Date();

        //  milliseconds since midnight Jan 1, 1970
        datetime.epoch     = Date.now();

        // 1-31
        datetime.dateStr   = datetime.date.getDate();
        // 0-11
        datetime.monthStr  = datetime.date.getMonth();
        //
        datetime.yearStr   = datetime.date.getFullYear();
        // Day Of Week 0-6 (Sun, Mon ... Sat)
        datetime.dowStr    = datetime.date.getDay();
        // 0-23
        datetime.hourStr   = datetime.date.getHours();
        // 0-59
        datetime.minuteStr = datetime.date.getMinutes();
        // 0-59
        datetime.secondStr = datetime.date.getSeconds();
    }
}