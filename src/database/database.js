import Sequelize from 'sequelize';

// Config database
export const sequelize = new Sequelize(
    'postgresdb',
    'postgres',
    '2940',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);