const express = require('express');
const app = express();
var hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(  express.static( __dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
     
    res.render( 'home', {
        nombre: 'rodrigo cea'
    } );

    //res.send('Hello World')
});

app.get('/about', function (req, res) {
     
    res.render( 'about' );

});
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en ele puerto ${ port }`);
});