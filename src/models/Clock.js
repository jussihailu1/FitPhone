export class Clock {

    constructor() {
        this.bedTime = "";
        this.wakeUpTime = "";

        // this.hours = [];
        // for (let i = 0; i < 25; i++) {
        //     this.hours.push(i)
        // }

        // this.minutes = [];
        // for (let i = 0; i < 61; i++) {
        //     this.minutes.push(i)
        // }
    }

    setBedTime(bedTime) {
        this.bedTime = bedTime;
    }

    setWakeUpTime(wakeUpTime) {
        this.wakeUpTime = wakeUpTime;
    }
}