var element, timer;
window.onload = function () {
    element = document.getElementById("timer");
    timer = new Timer(0);
};

function init(type) {
  timer.setMinutes(type);
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

  /*function init(type) {
    timer.setMinutes(type);
    setInterval(function(){
      if(timer.getSeconds <= 60 && !timer.getSeconds < 1)
        {
            timer.setSeconds(--timer.getSeconds());
            console.log(timer.getSeconds());   
        }
        if(timer.getSeconds() < 10)
        {
            element.innerHTML = timer.getTimeLeft(); 
        } else{
            element.innerHTML = timer.getTimeLeft();
        }
        if(timer.getSeconds() <= 1)
        {
            timer.setSeconds()
        }
        if (timer.getSeconds() < 60 && timer.getSeconds() > 58) {
          timer.setMinutes(--timer.getSeconds())
        }  
    }, 1000);*/
}



 
