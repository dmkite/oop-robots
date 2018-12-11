const { expect } = require('chai')
const Robot = require('../src/robot')

describe('Robot', function () {
  describe('new Robot()', function () {
    it('should randomly generate a unique id upon creation', function(){
      const robot = new Robot()
      const robot2 = new Robot()
      expect(robot.id).to.not.equal(robot2.id)
    })
    it('should allow for a description property to be set in the constructor', function(){
      const robot = new Robot('Robot C-3PO')
      expect(robot.description).to.equal('Robot C-3PO')
    })
    it('if the description is not set, it should be null', function(){
      const robot = new Robot()
      expect(robot.description).to.equal(null)
    })
  })

  describe('get id', function () {
    it('should return the id of the robot', function(){
      const robot = new Robot()
      expect(robot.id).to.be.a('string')
      expect(robot.id).to.have.lengthOf(10)
    })
  })

  describe('set id', function () {
    it('should throw an error if an attempt is made to change the id', function(){
      const robot = new Robot()
      expect(() => robot.id = 5).to.throw('Cannot change ID')
    })
  })

  describe('get description', function () {
    it('should return the description', function(){
      const robot = new Robot('I am a robot')
      expect(robot.description).to.equal('I am a robot')
    })
  })

  describe('set description', function () {
    it('should throw an error if the value is empty', function(){
      const robot = new Robot()

      expect( () => robot.description = null).to.throw()
      expect( () => robot.description = '').to.throw()
    })
    it('should set the description of the robot', function(){
      const robot = new Robot()
      robot.description = 'I am a robot'
      expect(robot.description).to.equal('I am a robot')
    })
  })

  describe('get network', function () {
    it('should return an array of all the ids the robot has met', function(){
      const robot = new Robot()
      expect(robot.network).to.be.an('array')
    })
  })

  describe('set network', function () {
    it('should throw an error if an attempt is made to change the network', function(){
      const robot = new Robot()

      expect( () => robot.network = 'big').to.throw()

    })
  })

  describe('#meet()', function () {
    it('should have a meet function that takes another instance of a robot', function(){
      const robot = new Robot()
      expect(robot.meet).to.be.a('function')
    })
    it('should throw an error if the inserted value is not a robot instance', function () {
      const robot = new Robot()
      const fakeRobot = {}
      expect( () => robot.meet(fakeRobot)).to.throw()
    })
    it('should add the robots ids to each other\'s networks', function(){
      const robot = new Robot()
      const robot2 = new Robot()
      robot.meet(robot2)
      expect(robot.network).to.include(robot2.id)
      expect(robot2.network).to.include(robot.id)
    })
  })
})
