const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'user' })
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if((username=='admin') && (password=='admin')){
        res.send(`Welcome : ${username}`);
        }else{
          res.send(`UserName & Password is incorrect`);
        }
        return res.end();
});
app.listen(3000);