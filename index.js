const vhost = require('vhost');
const path = require('path');
const routes = require('./routes/index');
const express = require('express');

let domain = '*.example.com';
let port = 3000;

if(process.env.NODE_ENV == "production") {
    domain = "*.myshoplist.shop"
}

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(vhost(domain, routes));

app.listen(port, () => {
    console.log(`Render engine running at PORT: ${port}`)
});