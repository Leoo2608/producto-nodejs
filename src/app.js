import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/user.routes'
import prodRoutes from './routes/prod.routes'
import authRoutes from './routes/auth.routers';

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/',function(req, res, next){
    res.send('Bienvenido a NodeJS...!');
})

app.use('/api/auth', authRoutes);

app.use('/api/auth/users', userRoutes);
app.use('/api/auth/prods', prodRoutes);
export default app;