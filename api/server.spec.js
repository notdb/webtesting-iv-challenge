const supertest = require("supertest");

const server = require("./server.js");

describe("server", () => {
  describe("GET /", () => {
    it("responds with 200 OK", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });
  });

  describe("get /something", () => {
    it("responds with list of objects", () => {
      return supertest(server)
        .get("/something")
        .expect(200);
    });
  });
});
