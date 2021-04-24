setInterval(updateTime, 1000);

function updateTime(){
    let myDate = new Date();

    var i=myDate.getDay();
    var days=["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    $('#day').text(days[i]);
    //document.getElementById("day").innerHTML = days[i];

    $('#date').text(myDate.getDate());
    //document.getElementById("date").innerHTML = myDate.getDate();

    i = myDate.getMonth();
    var mnths=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $('#month').text(mnths[i]);
    //document.getElementById("month").innerHTML = mnths[i];

    $('#year').text(myDate.getFullYear());

    var a=myDate.getHours();
    var hr;
    if(a>12){
        a-=12;
    }
    else if(a==0){
        a=12;
    }

    if(a<10){
        hr= "0"+a;
    }
    else{
        hr = a;
    }

    $('#hour').text(hr);
    

    a=myDate.getMinutes();
    if(a<10){
        $('#minute').text("0"+a);
    }
    else{
        $('#minute').text(a);
    }
    //document.getElementById("minute").innerHTML = myDate.getMinutes();

    a=myDate.getSeconds();
    if(a<10){
        $('#second').text("0"+a);
    }
    else{
        $('#second').text(a);
    }
    //document.getElementById("second").innerHTML = myDate.getSeconds();
}

