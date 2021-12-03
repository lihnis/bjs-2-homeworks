class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
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
        let alarmlength = this.alarmCollection.length;
        let remove = this.alarmCollection.filter(item => (item.id !== id));
        this.alarmCollection = remove;
        return alarmlength !== remove.length;
    }
        
    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
            });
        
          return currentDate;
    }
            
    start() {
        let currentId;
        if (this.timerId === null) {
            currentId = setInterval(() => {
                this.alarmCollection.forEach(item => {
                   if (this.getCurrentFormattedTime() === item.time) {
                        item.callback();
                   }
                })
            },3000)
            }            
              this.timerId = currentId;
    }
       
    stop() {
        if (this.timerId !== undefined) {
            let clear = clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(element => {
           console.log(`Будильник № ${element.id} заведен на ${element.time}`)
        });
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }

}

function testCase() {
    let phoneAlarm = new AlarmClock;
    phoneAlarm.addClock("19:33", () => console.log("Пора вставать!"),1);
    phoneAlarm.start();
    phoneAlarm.addClock("19:34", () => {console.log("Давай вставай уже!"); phoneAlarm.removeClock(2)} ,2);
    phoneAlarm.start();
    phoneAlarm.addClock("19:35", () => console.log("Вставай, а то проспишь!"),1);
    phoneAlarm.addClock("19:35", () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    } ,3);
    phoneAlarm.start();
    phoneAlarm.printAlarms();
}

testCase();