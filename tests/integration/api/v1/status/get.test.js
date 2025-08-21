test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  const updatedAt = responseBody.updated_at;
  expect(updatedAt).toBeDefined();

  const parseUpdatedAt = new Date(updatedAt).toISOString();
  expect(updatedAt).toBe(parseUpdatedAt);

  const database = responseBody.dependencies.database;
  expect(database.version).toEqual("16.9");
  expect(database.max_connections).toEqual(100);
  expect(database.opened_connections).toEqual(1);
});
