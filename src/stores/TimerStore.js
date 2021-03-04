import dayjs from 'dayjs';
import { action, computed, observable } from 'mobx';


export class TimerStore {

  constructor(initialMilliseconds = 0) {
    this.milliseconds = initialMilliseconds;
    this.savedMilliseconds = 0;
  }

  @observable startTime = dayjs()
  @observable isTicking = false
  @observable seconds = 0

  @action startTimer() {
    if (this.isTicking) return;
    this.isTicking = true;
    this.startTime = dayjs();
    this.measure();
  }

  @action stopTimer() {
    this.isTicking = false
  }

  @action measure() {
    if (!this.isRunning) return;

    this.seconds = dayjs().diff(this.startTime, 'second');

    setTimeout(() => this.measure(), 1000);
  }

  @computed display() {
    let hours = Math.floor(this.seconds / 3600)
    let minutes = Math.floor(this.seconds / 60)
    let seconds = this.seconds % 60

    return `${hours}:${minutes}:${seconds}`
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
