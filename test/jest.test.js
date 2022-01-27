test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 13;
  expect(number).not.toBeNull();
  expect(number).toBe(13);
});
