const request = require("supertest");
const app = require("./app");

test("GET /health", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe("ok");
});

test("GET /api/books returns list", async () => {
  const res = await request(app).get("/api/books");
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});