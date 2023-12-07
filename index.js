const express = require('express');
const app = express();

app.get('/dist/bundle.js', (req, res) => {
    res.header('Content-Type', 'text/javascript'); // Assurez-vous d'utiliser le bon type MIME ici
    res.sendFile(__dirname + '/dist/bundle.js');
  });

app.use(express.static(__dirname + "/public/"));

app.listen(3000, () => {
    console.log("App listening on port 3000");
});