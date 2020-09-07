const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

let accessCount = 0;

const count = () => {
    return (req, res, next) => {
        accessCount++;
        console.log(accessCount);
        next();
    }
}

// count as a global middleware - used for every route
// app.use(count());

app.get('/', count(), (req, res) => {
    res.render('form');
});

app.post('/login', (req, res) => {
    console.log('request body', req.body);
    res.render('dashboard', {
        name: req.body.username,
        password: req.body.pass
    });
});


// app.get('/about', (req, res) => {
//     res.render('form');
// });



app.listen(3000);








