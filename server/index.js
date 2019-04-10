const express = require('express');
const MORGAN = require('morgan');
const APP = express();
const { mongoose } = require('./database');
const cors = require('cors');

// Settings
APP.set('port', process.env.PORT || 3131); // para acceder al puerto desde cualquir parte de la app

// Middlewares Procesaminto de datos
APP.use(MORGAN('dev')); // detecta lo que suceden en el navegador
APP.use(express.json());
APP.use(cors({origin: 'http://localhost:4200'}));
// Routes
APP.use('/api/employees', require('./routes/employee.routes'));

// Stating server
APP.listen(APP.get('port'), () => {
    console.log('Server running on port', APP.get('port'));
});
