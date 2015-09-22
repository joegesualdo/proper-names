var fs = require('fs')
var path = require('path')

var ProperNames= {
  getNames: getNames
}

function getNames(callback){
  names = []
  var rl = require('readline').createInterface({
    input: require('fs').createReadStream(__dirname + '/propernames.txt')
  });

  rl.on('line', function(line) {
    names.push(line)
  });
  rl.on('close', function(){
    callback(names)
  })
}

module.exports = ProperNames 
