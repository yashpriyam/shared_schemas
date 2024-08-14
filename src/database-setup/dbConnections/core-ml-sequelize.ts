import { Sequelize } from 'sequelize-typescript';
import { NoUser } from '../core-ml-models/user.model';  // Import all your models here

export const coreMlSequelize = new Sequelize({
    database: process.env.CORE_ML_DB_NAME || 'core_ml',
    username: process.env.CORE_ML_DB_USER || 'user',
    password: process.env.CORE_ML_DB_PASSWORD || 'password',
    host: process.env.CORE_ML_DB_HOST || 'core-ml-db',
    port: Number(process.env.CORE_ML_DB_PORT) || 5432,
    dialect: 'postgres',
    models: [NoUser],
  });

