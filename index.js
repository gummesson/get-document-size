/**
 * Dependencies
 */

var doc  = document
var body = doc.body
var elem = doc.documentElement

/**
 * Get the height of the document.
 *
 * @return {integer}
 *
 * @api public
 */

function getHeight() {
  return Math.max(
    body.scrollHeight, elem.scrollHeight,
    body.offsetHeight, elem.offsetHeight,
    body.clientHeight, elem.clientHeight
  )
}

/**
 * Get the width of the document.
 *
 * @return {integer}
 *
 * @api public
 */

function getWidth() {
  return Math.max(
    body.scrollWidth, elem.scrollWidth,
    body.offsetWidth, elem.offsetWidth,
    body.clientWidth, elem.clientWidth
  )
}

/**
 * Exports
 */

module.exports = {
  height: getHeight(),
  width: getWidth()
}
