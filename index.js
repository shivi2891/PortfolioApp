const express= require('express');
const bodyParser=require('body-parser');
const hbs=require('hbs');
const appMiddleware=require('./middleware');
const app= express();
const validator=require('express-validator');
const routeHandler= require('./routes/index');
const session= require('express-session');

app.set('views',__dirname + '/views');
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(appMiddleware.logger);
app.use(express.static(__dirname + '/static'));
app.use(validator()); //

app.use(session({
    secret: 'my secret',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 30 * 24 * 60 * 1000}
}));

app.get('/test',(req,res) => {
    //console.log(req.session);
    req.session.name='ashu';
    res.send('working with session');
}) ;

app.get('/contact',routeHandler.contact) ;

    app.get('/',routeHandler.index) ;

        app.get('/signup',routeHandler.signup) ;

            app.post('/signup',routeHandler.doSignup);

            app.get('/login',routeHandler.login) ;

            app.post('/login',routeHandler.doLogin);

            app.get('/dashboard',routeHandler.dashBoard);

app.listen(3000, () => console.log('Server up and running on port 3000'));