const EventEmitter = require('events')
const eventEmitter =  require('events')
const uuid =  require('uuid')

console.log(uuid.v1())


class Logger extends EventEmitter {

    log(msg){
        this.emit('message',{id:uuid.v4(),msg});
    }
}

module.exports = Logger