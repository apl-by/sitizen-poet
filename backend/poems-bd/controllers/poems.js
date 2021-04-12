const bd = require('../bd')

const getPoems = (req, res) => {
  const { q, onlyLines } = req.query
  if (!q && !onlyLines) return res.send(bd)
  const foundPoems = bd.reduce((sum, item) => {
    const text = item.fields.text
    const hasText = text.includes(q)
    if (!hasText) return sum
    if (onlyLines) {
      const lines = text.split(/\r?\n/).filter(line => line.includes(q))
      return sum.concat({ ...item, fields: { ...item.fields, text: lines } })
    }
    return sum.concat(item)
  }, [])
  res.send(foundPoems)
}


module.exports = {
  getPoems
}