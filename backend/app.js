import express from 'express';
import {connectDB} from './utils/database.js';
import env from 'dotenv';
import cors from 'cors';
/* import path from 'path';
const __dirname = path.resolve(); */
env.config({path: './'});
// initialize
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
// App started

// routers
import authRoute from './routes/auth.js'

/* app.use("/uploads", express.static('uploads')); */

app.use('/api/v1/auth', authRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Application running on http://localhost:${PORT}`);
});