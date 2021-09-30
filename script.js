
                                                             //  For displaying current date on the header

$(document).ready(function () {
    var reformatDate = moment().format("dddd, MMMM Do YYYY, H:mm a");
    $("#currentDay").text(reformatDate);
    
    var currentHour = (new Date()).getHours(); 
    
   
                                                               // Saving text content to local storage

    let calendarEventLocalString = localStorage.getItem("calendarEventLocal");
    let calanderEventData;
    if (calendarEventLocalString === null) {
        calanderEventData = {};
        localStorage.setItem("calendarEventLocal", JSON.stringify(calanderEventData));
    } else {
        calanderEventData = JSON.parse(calendarEventLocalString);
    }
    
    $('.container textarea').each(function(){
        if($(this).data('hour') < currentHour) {  
                    // PAST
            $(this).addClass("past"); 
        } else if($(this).data('hour') == currentHour) { 
                    //  PRESENT
            $(this).addClass("present"); 
        } else {  
                    // FUTURE
            $(this).addClass("future"); 
        } 
        $(this).val(calanderEventData[$(this).data('hour')]);
    }) 
    
    $('.container button').each(function(){
       $(this).click(saveEvent);
    })
    
    function saveEvent() {
       
        let textInput = $(this).siblings('textarea')
        let hour = textInput.data('hour');
        calanderEventData[hour] = textInput.val();
        localStorage.setItem("calendarEventLocal", JSON.stringify(calanderEventData));
    }
    
    
    function resetCalender(){
        localStorage.clear();
        $('.container textarea').each(function(){
            $(this).val('');
        }) 
    };
    
    $('#reset').click(resetCalender);
    
    
    })