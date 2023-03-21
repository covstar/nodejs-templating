const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const app = express();

// static files
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.use('/css', express.static(__dirname + 'public/css'))


// set templating engine 
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    res.render('index', {
        title: 'Home page'
    });
});

app.get("/about", function(req, res) {
    res.render('about', {
        title: 'About page',
        layout: './layouts/sidebar'
    });
});








app.listen(5000, function(){
    console.log("Started listening at port 5000");
})