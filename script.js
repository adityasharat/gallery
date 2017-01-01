const fs = require('fs');
var images = [];
fs.readdir('./repo', (err, files) => {
  var i = 0;
  files.forEach(file => {
    images.push({
    	src: '/repo/' + file,
    	w: 1920,
        h: 1090,
        pid: i
    });
    i++;
  });

  fs.writeFile('images.json', JSON.stringify(images), function (err) {
    if (err) return console.error(err);
  });
});