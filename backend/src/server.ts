import express, { Express } from 'express';
import routes from './routes';

const app: Express = express();

app.use(express.json());
app.use('/api', routes);

app.listen(5000)