import Company from '../models/company.js';
import sequelize from '../db.js';
import CompanyCanNotCreated from './extension/companyCanNotCreated.js';

class CompanyService {
  async generateUniqueName() {
    let uniqueName;
    let existingCompany;
    do {
      uniqueName = `Заказчик ${Math.floor(Math.random() * 1000)}`;
      existingCompany = await Company.findOne({ where: { name: uniqueName } });
    } while (existingCompany);

    return uniqueName;
  }

  async registerCompany(name, inn, ogrn) {
    try {
      if (!inn && !ogrn) {
        name = await this.generateUniqueName();
      }
      await sequelize.sync();
      const company = await Company.create({
        name,
        inn,
        ogrn
      });

      return company;
    } catch (error) {
      throw new CompanyCanNotCreated(error);
    }
  }
}

export default CompanyService;
