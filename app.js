import express from 'express';
import bodyParser from 'body-parser';
import companyRoutes from './src/routes/companyRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/api/companies', companyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
