import express from 'express';
import companyController from '../controllers/companyController.js';

const router = express.Router();


router.post('/register', companyController.registerCompany);

export default router;
