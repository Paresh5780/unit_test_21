const db = require("../../../model/index1");
const request = require("supertest");
const app = require("../../../app");

const api_v1_endpoint = "/categories/";

describe("Category routes", () => {
  it("should get all categories", async () => {
    const res = await request(app).get(api_v1_endpoint);
    expect(res.statusCode).toEqual(200);
  });

  // it("should get categories By ID", async () => {
  //   const res = await request(app)
  //     .get(api_v1_endpoint + "/2")
  //     .send({ name: "Mobile" });
  //   expect(res.statusCode).toEqual(201);
  // });
});
