var DateFormatter = {
    getShortTime: function()
    {
        var time = new Date();
        return time.toLocaleString('en-US',
        {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    },
    getLongTime: function()
    {
        var time = new Date();
        return time.toLocaleTimeString([], 
        {
            hour: '2-digit', 
            minute:'2-digit',
            second:'2-digit', 
            hour12: true
        });
    },
    getShortDate: function()
    {
        var date = new Date();
        return date.toLocaleString([],
        {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        });
    },
    getLongDate: function()
    {
        var date = new Date();
        return date.toLocaleString([],
        {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    },
    getShortDateTime: function()
    {
        return DateFormatter.getShortDate() + " " + DateFormatter.getShortTime()
    },
    getLongDateTime: function()
    {
        return DateFormatter.getLongDate() + " " + DateFormatter.getShortTime()
    },
    getExtendedDateTime: function()
    {
        var date = new Date();
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

    console.log(DateFormatter.getShortTime());
    console.log(DateFormatter.getLongTime());
    console.log(DateFormatter.getShortDate());
    console.log(DateFormatter.getLongDate());
    console.log(DateFormatter.getShortDateTime());
    console.log(DateFormatter.getLongDateTime());
    console.log(DateFormatter.getExtendedDateTime());
