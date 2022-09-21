const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {seederMarcas}=require('./src/Seeders/marca.seeders')
const {seederRole}=require('./src/Seeders/role.seeders')
const {productoSeeder}=require('./src/Seeders/producto.seeders')
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    // seederMarcas();
    // productoSeeder();
    // seederRole();  
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});