import 'dotenv/config';
import mongoose from 'mongoose';

const isLocal = process.env.NODE_ENV !== 'prod';

export async function loadDb() {

  const db = mongoose.connection;
  db.on('connected', () => {
    console.log('db connected');
  });
  db.on('error', () => {
    console.error('=== mongoose connection error');
  });

  const url = isLocal ? 'localhost' : process.env.DATABASE_URL || ''
  console.log('=== connect to db in', url)
  const connect = await mongoose.connect(url, {
    authSource: 'admin',
    user: 'root',
    pass: '1234',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('=== db connected');
  return connect;
}
