var join = require('path').join
var should = require('should')
var memo = require('component-as-module')(join(__dirname, '..'))

describe('async-memo', function() {
  it('Should call underlying function only once', function(done) {
    var calls = 0
      , cb

    var fn = memo(function(callback) {
      calls++
      cb = callback
    })

    fn(function(err, val) {
      err.should.equal('foo')
      val.should.equal('bar')
      fn(function(err, val) {
        err.should.equal('foo')
        val.should.equal('bar')
        calls.should.equal(1)
        done()
      })
    })

    cb('foo', 'bar')
  })

  it('Should support multiple pending calls', function() {
    var called = {}
      , calls = 0
      , cb

    var fn = memo(function(callback) {
      calls++
      cb = callback
    })

    fn(function(err, val) {
      err.should.equal('foo')
      val.should.equal('bar')
      called.first = true
    })

    fn(function(err, val) {
      err.should.equal('foo')
      val.should.equal('bar')
      called.second = true
    })

    fn(function(err, val) {
      err.should.equal('foo')
      val.should.equal('bar')
      called.third = true
    })

    cb('foo', 'bar')

    called.should.eql({first: true, second: true, third: true})
    calls.should.equal(1)
  })
})
