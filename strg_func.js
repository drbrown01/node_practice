function functionName(str, potato) {
  console.log(str);
  potato();
}


function bool(bool, func) {
  if (bool === true) {
    func();
  }
}

function funcVal(F, V) {
  return function(){
    return F(V)
  }
}
var fs = require("fs");

fs.writeFile('testing.txt', "Hello there!", (err)=> {
  if (err) throw err;
  console.log("file has been saved");
} );
