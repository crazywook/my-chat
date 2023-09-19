import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import { config } from './config';

const app = express();
app.use(morgan('dev'));
app.use(cors(config.server.cors));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cookieParser());

export default app;
