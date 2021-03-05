import dayjs from 'dayjs';
import { computed, makeAutoObservable } from 'mobx';

function addZero(n) {
  if(n>=10){
    return n
  }
  else{
    return `0${n}`
  }
}

export class TimerStore {

  constructor() {
    makeAutoObservable(this)
  }

  startTime = dayjs()
  isTicking = false
  seconds = 0
  waiting = false
  doubleClick = false

  startStopTimer() {
    if (this.isTicking) { this.stopTimer() }
    else {
      if (this.waiting) {
        this.waiting = false
        this.startTime = dayjs().subtract(this.seconds, 'second');

      } else {
        this.startTime = dayjs();
      }
      this.isTicking = true;
      this.measure();
    }
  }

  wait() {
    
    if(this.doubleClick){
      this.waiting = true
      this.isTicking = false
    }else{
      this.doubleClick = setTimeout(() => {
        this.doubleClick = false
      }, 300);
    }
    
  }

  reset() {
    this.startTime = dayjs()

  }

  stopTimer() {
    this.isTicking = false
    this.startTime = dayjs()
    this.seconds = 0
  }

  measure() {
    if (!this.isTicking) return;

    this.seconds = dayjs().diff(this.startTime, 'second');

    setTimeout(() => this.measure(), 1000);

  }

  @computed get display() {
    let hours = Math.floor(this.seconds / 3600)
    let minutes = Math.floor(this.seconds / 60)
    let seconds = this.seconds % 60

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
  }


}
