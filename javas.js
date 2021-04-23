setInterval(updateTime, 1000);

function updateTime(){
    let myDate = new Date();
    document.getElementById("date").innerHTML = myDate.getDate();
    document.getElementById("month").innerHTML = myDate.getMonth();
    document.getElementById("year").innerHTML = myDate.getFullYear();
    document.getElementById("hour").innerHTML = myDate.getHours()-12;
    document.getElementById("minute").innerHTML = myDate.getMinutes();
    document.getElementById("second").innerHTML = myDate.getSeconds();
}
