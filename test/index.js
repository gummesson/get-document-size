/**
 * Dependencies
 */

var test         = require('tape')
var documentSize = require('../')

/**
 * Tests
 */

test('documentSize', function(t) {
  t.test('.height', function(assert) {
    assert.notEqual(documentSize.height, 0)
    assert.end()
  })

  t.test('.width', function(assert) {
    assert.notEqual(documentSize.width, 0)
    assert.end()
  })

  t.end()
})
