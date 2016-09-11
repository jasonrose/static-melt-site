var requireDirectory = require('require-directory');
var data = requireDirectory(module, './src/data');
exports.data = data;
///////////////////////////////////////////////////////////////////////////////

// This is an example transformation.
var output = {};
output.directory1 = data.directory1;
output.directory2 = [];

var dir1LookupMap = {};
for (var dir1Key in data.directory1) {
  if (data.directory1.hasOwnProperty(dir1Key)) {
    var dir1Value = data.directory1[dir1Key];
    dir1LookupMap[dir1Value.title] = dir1Value;
  }
}

for (var dir2Key in data.directory2) {
  if (data.directory2.hasOwnProperty(dir2Key)) {
    var dir2Value = data.directory2[dir2Key];
    var newSomething = [];

    for (var i = 0; i < dir2Value.something.length; i++) {
      newSomething.push(dir1LookupMap[dir2Value.something[i]]);
    }

    dir2Value.something = newSomething;
    output.directory2.push(dir2Value);
  }
}

exports.data = output;
