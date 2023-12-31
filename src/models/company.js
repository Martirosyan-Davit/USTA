import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../db.js';

const Company = sequelize.define('company', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    createdAt: {
        defaultValue: Sequelize.fn('NOW'),
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        defaultValue: Sequelize.fn('NOW'),
        type: DataTypes.DATE,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    inn: {
        type: DataTypes.STRING,
    },
    ogrn: {
        type: DataTypes.STRING,
    },
});

// Synchronize the model with the database to create the table
Company.sync()
    .then(() => {
        console.log('Company table created successfully');
    })
    .catch((error) => {
        console.error('Error creating Company table:', error);
    });

export default Company;
