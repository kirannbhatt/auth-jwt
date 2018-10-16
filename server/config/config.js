import Sequelize from 'sequelize'

const sequelize =new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  pool : {
    max: 10,
    min: 0,
    idle: 20000
  }
});

export default sequelize