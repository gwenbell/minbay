var fs = require('fs')
var path = require('path')

fs.writeFileSync(
  path.join(__dirname, '..', 'minbay.css.json'),
  JSON.stringify(fs.readFileSync(path.join(__dirname, '..', 'minbay.css'), 'utf8'))
)

