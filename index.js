var path = require('path');
var app = require('express')();
app.listen(7000);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
