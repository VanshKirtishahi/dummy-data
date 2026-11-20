import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb:27017/dummy_db';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: 'ok', service: 'dummy-mern-backend', message: 'API is running' });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'dummy-mern-backend', timestamp: new Date() });
});

app.get('/api/users', async (req, res) => {
    res.json({ users: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }] });
});

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.warn('⚠️ MongoDB connection deferred:', err.message));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`⚡ Dummy Backend running on port ${PORT}`);
});
