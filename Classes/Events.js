const EventsEmitter = require("events");
const fs = require('fs')

class Events extends EventsEmitter {
  constructor() {
    super();
    this.on('EventOn', () => fs.writeFile('EmitText.txt' , "On listening", ()=>{}));
  }
  EmitFun(){
      this.emit('EventOn');
  }
}

module.exports = new Events();
