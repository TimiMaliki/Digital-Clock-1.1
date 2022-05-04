
function clock(){
    var todate = new Date();

    var hours = todate.getHours();
    var minutes = todate.getMinutes();
    var seconds = todate.getSeconds();

    var period = "AM";

    if(hours >12){
        period = "PM";
    }
    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
        hours = hours > 12 ? hours % 12 : hours;

    
    }
    

   
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds< 10){
        seconds = "0" + seconds;
    }

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;

  
}
 

 var updateClock = setInterval(clock, 1000);


 const formatSwitchBtn = document.querySelector(".format-switch-btn");
 formatSwitchBtn.addEventListener("click",() => {
    formatSwitchBtn.classList.toggle("active");
    

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else {
        formatSwitchBtn.setAttribute("data-format", "12");
    }
   
   
 });


 
 const dotmenuBtn = document.querySelector(".dot-menu-btn");
 const dotMenu = document.querySelector(".dot-menu");
 const period = document.querySelector(".period");

 dotmenuBtn.addEventListener("click", () =>{
     dotMenu.classList.toggle("active");
     period.classList.toggle("active");
 });

 document.addEventListener("click",(e) =>{
if(e.target.id !== "active-menu"){
    dotMenu.classList.remove("active");
}
 });