const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/data'));

// Starting the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
