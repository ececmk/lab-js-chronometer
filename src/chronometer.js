let currentTime = 0;
let intervalId = null;


class Chronometer {
  constructor() {
    this.currentTime = currentTime;
    this.intervalId = null;
  }
 
  start(printTimeCallback) {
   
    const interval = setInterval(() => {
      this.currentTime+=1;
      if(printTimeCallback)
      {printTimeCallback();}
    },1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value > 9){
      return  value.toString();
    }
    else{
      return "0" + value;
    }
   //return value > 9 ? value.toString() : "0" + value;// Lloyd's suggestion
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    stop();
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
