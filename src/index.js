//los modulos creados por nosotros deben tener la extension .js
import app from './app.js';
import { sequelize } from './database/database.js';

//Probar la conexion a la base de datos
async function main() {
    try {
        //await sequelize.authenticate();
        //console.log('Connection has been established successfully.');
        await sequelize.sync({ force: false }); //sincroniza el modelo con la base de datos
        app.listen(3000);
        console.log('Server on port', 3000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();