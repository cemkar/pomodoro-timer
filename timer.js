class Timer {
  constructor(minutes) {
    this.minutes = minutes;
    this.seconds = 60;
  }

  setMinutes(input) {
    this.minutes = input;
  }

  setSeconds(input) {
    this.seconds = input;
  }

  getMinutes(){
    return this.minutes;
  }

  getSeconds(){
    return this.seconds;
  }

  getTimeLeft() {
    if(this.seconds == 60) {
      return this.minutes + ":00";

    } else if(this.seconds < 10)
    {
      return this.minutes + ":0" + this.seconds.toString();

    } else if(this.seconds < 0)
    {
      return "00:00";
    }
    else {
      return this.minutes + ":" + this.seconds;
      
    }
  }

}