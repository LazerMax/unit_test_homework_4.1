import definitionHealth from '../definitionHealth';

test.each([
  { name: 'Маг', health: 90, expected: 'healthy' },
  { name: 'Маг', health: 40, expected: 'wounded' },
  { name: 'Маг', health: 10, expected: 'critical' },
])('testing definitionHealth function with %s post and %i health', (data) => {
  const result = definitionHealth(data.health);
  expect(result).toBe(data.expected);
});
