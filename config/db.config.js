const developmentInstance = {
  DB: "Application_Changes",
  USER: "root",
  PASSWORD: "Paresh@123",
  HOST: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const testInstance = {
  DB: "Application_Changes_test_db",
  USER: "root",
  PASSWORD: "Paresh@123",
  HOST: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  development: developmentInstance,
  test: testInstance,
};
