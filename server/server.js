const express = require('express');
const testdb = require('./routes');

/* import 'babel-polyfill';
import { join } from 'path';


const CLIENT_PATH = join(__dirname, '../../client'); */
const app = express();


/* app.use(express.static(CLIENT_PATH)); */
app.use(express.json());


app.use('/api/chirps', testdb)

app.listen(process.env.Port || '3000', () => {

    console.log(`Server is running on port: ${process.env.PORT || '3000'}`)

});