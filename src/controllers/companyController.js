import CompanyService from '../services/companyService.js';

const companyService = new CompanyService();

const registerCompany = async (req, res) => {
  try {
    const { name, inn, ogrn } = req.body
    const registeredCompany = await companyService.registerCompany(name, inn, ogrn);
    res.status(201).json({ success: true, company: registeredCompany });
  } catch (error) {
    res.status(error.statusCode).json({ success: false, message: error.message, description: error.name});
  }
};

export default { registerCompany };
