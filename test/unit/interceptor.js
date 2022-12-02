module.exports = {
  mockRequest: () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);

    return req;
  },

  mockResponse: () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.write = jest.fn().mockReturnValue(res);
    res.end = jest.fn();

    return res;
  },
};

//"start": "node server",
//   "migrate": "npx sequelize-cli db:migrate",
//   "migrate:reset": "npx sequelize-cli db:migrate:undo:all & npm run migrate",
//   "test": "cross-env NODE_ENV=test jest --testTimeout=10000 --coverage",
//   "pretest": "cross-env NODE_ENV=test npm run migrate:reset"
