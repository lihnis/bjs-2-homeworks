class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this. timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('id не передан!');
        } else if(this.alarmCollection.some((elem) => elem.id === id)) {
            console.error('Такой id уже есть!');
            return;
        }
         
        this.alarmCollection.push({time,callback,id})
    }

    removeClock(id) {
        let remove = this.alarmCollection.filter(item => (item.id !== id));
        this.alarmCollection =  remove;
        return this.alarmCollection.length === remove.length;
    }
        
    getCurrentFormattedTime() {
        let currentDate = new Date;
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();

        if (currentDate.getHours() < 10) {
            hours = '0' + currentDate.getHours();
        }
          if (currentDate.getMinutes() < 10) {
            minutes = '0' + currentDate.getMinutes();
        }
        
        return (hours + ':' + minutes);
    }
            
    start() {
        let currentId;
        if (this.timerId === null) {
            currentId = setInterval((time, callback) => {
                this.alarmCollection.forEach(() => {
                   if (this.getCurrentFormattedTime() === time) return callback;
                })
            },)
            }            
              this.timerId = currentId;
    }
       
    stop() {
        if (this.timerId !== undefined) {
            clearInterval();
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => {
           console.log("Будильник № " + element.id + " заведен на " + element.time)
        });
    }

    clearAlarms() {
        this.stop;
        this.alarmCollection = [];
    }

}

function testCase() {
    let phoneAlarm = new AlarmClock;
    phoneAlarm.addClock("17:25", () => console.log("Пора вставать!"),1);
    phoneAlarm.addClock("17:26", () => {console.log("Давай вставай уже!"); phoneAlarm.removeClock(2)} ,2);
    phoneAlarm.addClock("17:26", () => console.log("Вставай, а то проспишь!"),1);
    phoneAlarm.addClock("17:27", () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    } ,3);
    phoneAlarm.printAlarms();
}

testCase();