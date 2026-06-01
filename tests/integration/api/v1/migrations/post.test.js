test("POST to /api/v1/migrations should return status code 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response1.status).toBe(201);

  const response1Body = await response1.json();
  expect(Array.isArray(response1Body)).toEqual(true);
  expect(response1Body.length).toBeGreaterThan(0);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(200);

  const response2Body = await response2.json();
  expect(Array.isArray(response2Body)).toEqual(true);
  expect(response2Body.length).toBe(0);
});

test("Invalid Method to /api/v1/migrations should return status code 405", async () => {
  const notCoveredMethod = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PATCH",
  });
  expect(notCoveredMethod.status).toBe(405);
})