const shortId = require('shortid')

class Robot{
    constructor(desc = null){
        this._id = shortId()
        this._description = desc
        this._network = []
    }

    // getId(){
    //     return this._id
    // }
    set id(newId){
        throw 'Cannot change ID'
    }
    get id(){
        return this._id
    }

    set description(desc){
        if(!desc) throw 'Must add a description'
        this._description = desc
        // return this._description
    }

    get description(){
        return this._description
    }

    set network(newNet){
        throw 'Cannot change network'
    }

    get network(){
        return this._network
    }

    meet(otherBot){
        if(otherBot instanceof Robot){
            this.network.push(otherBot.id)
            return otherBot.network.push(this.id)
        }
        throw 'You can only meet other robots'

    }
}

console.log(new Robot(false, 'butlerBot'))
console.log(new Robot(true, 'docBot'))

module.exports = Robot