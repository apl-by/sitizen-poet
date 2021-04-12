const json1 = require('./1-999.json')
const json2 = require('./1000-1999.json')
const json3 = require('./2000-2999.json')
module.exports = [...json1, ...json2, ...json3]