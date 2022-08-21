import express from 'express';
import index from './modules/index.js';
import calculator from './modules/calculator.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', index);
app.use('/calculator', calculator);

export default app;