setInterval(updateTime, 1000);
let myDate = new Date();

function updateTime(){
    myDate = new Date();

    var i=myDate.getDay();
    var days=["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    $('#day').text(days[i]);

    $('#date').text(myDate.getDate());

    i = myDate.getMonth();
    var mnths=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $('#month').text(mnths[i]);

    $('#year').text(myDate.getFullYear());

    var a=myDate.getHours();
    var hr, ampm="AM";
    if(a>12){
        a-=12;
        ampm="PM";
    }
    else if(a==0){
        a=12;
        //ampm="AM"
    }
    if(a<10){
        hr= "0"+a;
    }
    else{
        hr = a;
    }
    $('#hour').text(hr);
    $('#ampm').text(ampm);
    

    a=myDate.getMinutes();
    if(a<10){
        $('#minute').text("0"+a);
    }
    else{
        $('#minute').text(a);
    }

    a=myDate.getSeconds();
    if(a<10){
        $('#second').text("0"+a);
    }
    else{
        $('#second').text(a);
    }
}

var setAlarm = $('#setAlarm');

$('#setAlarm').click(setAlarmFunction);

var audio = new Audio('ringtone.mp3');

function stopAlarmFunction(){
    $("button").remove(".stopButton");
    audio.pause();
    
}

function ringBell(){
    audio.play();
    console.log("RINGING!!");
    $('#status_alarm').text("Create new alarm.");
    $("button").remove("deleteButton");

    var stopbutton = "<button class='stopButton'>🔇</button>";
    $('#status_alarm').after(stopbutton);


    
    $(".stopButton").click(stopAlarmFunction);

}

//$("status_alarm").append(<button id="stop_button">STOP</button>);
var a=$("button").attr("class");
console.log(a);

function setAlarmFunction(e){
    e.preventDefault();

    var a_hour = document.getElementById("form_hours").value;
    var a_minute = document.getElementById("form_minutes").value;
    var a_ampm = document.getElementById("form_ampm").value;
    var a_date=document.getElementById("form_date").value;

    var min;
    if(a_minute==0){
        min="00";
    }
    else if(a_minute<10){
        min="0"+String(a_minute);
    }
    else{
        min=String(a_minute);
    }
    console.log(a_hour+":"+a_minute+" "+a_ampm+" "+a_date+" ");

    if(a_ampm=="PM" && a_hour<12){
        a_hour=12+Number(a_hour);
        console.log("checking hour! "+a_hour);
    }
    else if(a_ampm=="AM" && a_hour==12){
        a_hour=0;
    }
    var alarmdate = new Date(myDate.getFullYear(), myDate.getMonth(), a_date, a_hour, a_minute, 0);
    console.log(alarmdate);

    $('#alarm_hour').text(a_hour);

    now = new Date();
    let timetoring = alarmdate - now;
    


    if(timetoring>=0){
        $('#status_alarm').text("Alarm set for "+a_hour+":"+min+", on "+a_date+"/"+myDate.getMonth()+"/"+myDate.getFullYear());
        var deleteAlarm = "<button class='deleteButton'>🗑</button>";
        $('#status_alarm').append(deleteAlarm);

        function deleteAlarmFunction(){
            timetoring=-1;
            $('#status_alarm').text("Alarm deleted, create another.");
            console.log(timetoring);
            $("button").remove("deleteButton");
        }

        $('#status_alarm').click(deleteAlarmFunction);

        console.log(timetoring);
        setTimeout(ringBell, timetoring);
        // $("button").remove('#stopButton');

    }
}
