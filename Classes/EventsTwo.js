const EmitterEvents= require('events');
const fs = require('fs');
const arrayObject = ["One" , "Two" , "Three" , "Four" , "Five"];

class EventsTwo extends EmitterEvents{
    constructor(){
        super()
        this.on('ArrayNames' , (array)=>{return fs.readFile('ArrayOfKids' , JSON.stringify(arrayObject.toString()))})
    }
    EmitFunction (array){
        this.emit('ArrayNames',array)
    }
}

module.exports = new EventsTwo();
