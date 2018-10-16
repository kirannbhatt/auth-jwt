import Sequelize from 'sequelize'
import sequelize from '../config/config'

const User = sequelize.define('User', {
  _uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }, 
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.sync({
  force: false
})
  .then(console.log('User created successfully'))

export default User