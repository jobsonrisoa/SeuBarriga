test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 13;
  expect(number).not.toBeNull();
  expect(number).toBe(13);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'John', email: 'john@email.com' };
  expect(obj).toHaveProperty('name', 'John');
  expect(obj.name).toBe('John');
});
