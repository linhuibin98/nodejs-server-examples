const { commandSync } = require('execa');

module.exports = () => {
  commandSync('npx sequelize db:migrate');
};
