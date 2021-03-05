import dayjs from 'dayjs';
import { makeAutoObservable } from 'mobx';

function addZero(n) {
  if (n >= 10) {
    return n
  }
  else {
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
  isWaiting = false
  doubleClick = false
  resetButtonDisabled = false

  startStopTimer() {
    if (this.isTicking) { this.stopTimer() }
    else {
      if (this.isWaiting) {
        this.isWaiting = false
        this.startTime = dayjs().subtract(this.seconds, 'second');
        this.resetButtonDisabled = false
      } else {
        this.startTime = dayjs();
      }
      this.isTicking = true;
      this.measure();
    }
  }

  wait() {
    if (this.doubleClick) {
      this.isWaiting = true
      this.resetButtonDisabled = true
      this.isTicking = false
    } else {
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



  get display() {
    let hours = Math.floor(this.seconds / 3600)
    let minutes = Math.floor(this.seconds / 60)
    let seconds = this.seconds % 60
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`
  }


}
