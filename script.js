var beginCountdown = true;
window.onload(function(){
    init(25);
});


function init(type) {
    element = document.getElementById("timer");
    timer = new Timer(type); 
  timer.setMinutes(type);
  if(beginCountdown){
    beginCountdown = false;
    setInterval(function () {
        element.innerHTML = timer.getTimeLeft();
        let m = timer.getMinutes();
        let s = timer.getSeconds();
        let display = timer.getTimeLeft();

        if(s <= 60 && !s < 1){
            timer.setSeconds(--s);
        }
        if(s < 1 && s > -1)
        {
            timer.setSeconds(59);
        }
        if(s < 60 && s > 58) {
            timer.setMinutes(--m);
        }
        if(m < 1 && s < 1)
        {
            timer.setSeconds(-1);
            timer.setMinutes(0);
        }
    }, 1000);
    }
}



 
