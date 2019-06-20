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

  describe("post /something", () => {
    let name = { name: "jenny" };
    it("adds a user to body", () => {
      return supertest(server)
        .post("/something", name)
        .expect(201);
    });
  });

  describe("delete /something", () => {
    let number = 4;
    it("deletes fourth user from something", () => {
      return supertest(server)
        .delete("/something/4")
        .expect(204);
    });
  });
});
