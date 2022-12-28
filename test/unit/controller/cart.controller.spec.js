const { mockRequest, mockResponse } = require("./../interceptor");
const db = require("./../../../model/index1");
const cartController = require("./../../../controller/cart.controller");

describe("Cart Controller", () => {
  let req, res;
  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
  });

  it("should test the create method of cart controller", async () => {
    const spy = jest.spyOn(db.cart, "create").mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          resolve("Cart Created");
        })
    );

    await cartController.createCart(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Cart Created",
    });
  });
});
