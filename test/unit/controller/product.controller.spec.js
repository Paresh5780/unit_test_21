const { mockRequest, mockResponse } = require("./../interceptor");
const db = require("./../../../model/index1");
const productController = require("./../../../controller/product.controller");

describe("product_controller", () => {
  let req, res;
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  let testPayload = { name: "Hrx", categoryId: 1, price: 18000 };
  let singleProduct = { name: "Iphone 13", categoryId: 2, price: 60000 };

  it("should test the create method with payload", async () => {
    const spy = jest.spyOn(db.product, "create").mockImplementation(
      (testPayload) =>
        new Promise((resolve, reject) => {
          resolve(testPayload);
        })
    );
    req.body = testPayload;
    await productController.create(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(testPayload);
  });

  it("should test the error for create method", async () => {
    const spy = jest.spyOn(db.product, "create").mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          reject({
            message: "Some internal error occured",
          });
        })
    );
    req.body = 1;
    await productController.create(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("should test the insertCategories method with payload", async () => {
    const spy = jest.spyOn(db.product, "bulkCreate").mockImplementation(
      (testPayload) =>
        new Promise((resolve, reject) => {
          resolve(testPayload);
        })
    );
    req.body = testPayload;
    await productController.insertProducts(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Products added",
    });
  });

  it("should test the getProductsById method", async () => {
    const spy = jest.spyOn(db.product, "findAll").mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          resolve(singleProduct);
        })
    );
    req.params.productId = 1;
    await productController.getProductById(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
