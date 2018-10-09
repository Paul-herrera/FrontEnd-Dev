var DateFormatter = {
    getShortTime: function(newDate)
    {
        var time = new Date(newDate);
        return time.toLocaleString('en-US',
        {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    },
    getLongTime: function(newDate)
    {
        var time = new Date(newDate);
        return time.toLocaleTimeString([], 
        {
            hour: '2-digit', 
            minute:'2-digit',
            second:'2-digit', 
            hour12: true
        });
    },
    getShortDate: function(newDate)
    {
        var date = new Date(newDate);
        return date.toLocaleString([],
        {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        });
    },
    getLongDate: function(newDate)
    {
        var date = new Date(newDate);
        return date.toLocaleString([],
        {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    },
    getShortDateTime: function(newDate)
    {
        return DateFormatter.getShortDate(newDate) + " " + DateFormatter.getShortTime(newDate)
    },
    getLongDateTime: function(newDate)
    {
        return DateFormatter.getLongDate(newDate) + " " + DateFormatter.getShortTime(newDate)
    },
    getExtendedDateTime: function(newDate)
    {
        var date = new Date(newDate);
        return date.toLocaleString([],
        {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    },

};

var testDate = "Wed Oct 31 2018 13:13:13 GMT-0600";

if (DateFormatter.getShortTime(testDate) == "2:13 PM") {
    console.log("success");
} else {
    throw "Error";
}

if (DateFormatter.getLongTime(testDate) == "2:13:13 PM") {
    console.log("success");
} else {
    throw "Error";
}

if (DateFormatter.getShortDate(testDate) == "10/31/2018") {
    console.log("success");
} else {
    throw "Error";
}

if (DateFormatter.getLongDate(testDate) == "October 31, 2018") {
    console.log("success");
} else {
    throw "Error";
}

if (DateFormatter.getShortDateTime(testDate) == "10/31/2018 2:13 PM") {
    console.log("success");
} else {
    throw "Error";
}

if (DateFormatter.getLongDateTime(testDate) == "October 31, 2018 2:13 PM") {
    console.log("success");
} else {
    throw "Error";
}

if (DateFormatter.getExtendedDateTime(testDate) == "Wednesday, October 31, 2018, 2:13 PM") {
    console.log("success");
} else {
    throw "Error";
}

function test(method, expected) {
    results.total++;
    var result = method;
    if (result !== expected) {
        results.bad++;
        console.log("Expected " + expected + ", but was " + result);
    }
}
var results = {
    total: 0,
    bad: 0
};

test(DateFormatter.getShortTime(testDate), "2:13 PM");
test(DateFormatter.getLongTime(testDate), "2:13:13 PM");
test(DateFormatter.getShortDate(testDate), "10/31/2018");
test(DateFormatter.getLongDate(testDate), "October 31, 2018");
test(DateFormatter.getShortDateTime(testDate), "10/31/2018 2:13 PM");
test(DateFormatter.getLongDateTime(testDate), 'October 31, 2018 2:13 PM');
test(DateFormatter.getExtendedDateTime(testDate), 'Wednesday, October 31, 2018, 2:13 PM');

console.log("Of " + results.total + " tests, " + results.bad + " failed, "
    + (results.total - results.bad) + " passed.");
