require('dotenv').config();

const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const cors           = require('cors');
const session        = require('express-session');
// const request 		 = require('superagent');

require('./db/db');

// app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "This is a string, the string of strings",
  resave: false,
  saveUninitialized: false // legal
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


const authController 	 = require('./Controllers/authController.js');
const userController 	 = require('./Controllers/userController.js');
const gameController 	 = require('./Controllers/gameController.js');
// const gitHubController   = require('./Controllers/gitHubController.js');

app.use('/auth', authController);
app.use('/users', userController);
app.use('/games', gameController);
// app.use('/gitHub', gitHubController);


app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
	const today = new Date();
	console.log(today.toLocaleDateString('en-US') + ': ' + today.toLocaleTimeString('en-US'));
});