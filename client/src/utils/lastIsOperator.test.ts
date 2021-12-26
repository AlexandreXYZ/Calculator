import {lastIsOperator} from "./lastIsOperator";

test('The last string is operator?', () => {
  expect(lastIsOperator('1-3*224234*')).toBe(true);
  expect(lastIsOperator('1*32-24234/')).toBe(true);
  expect(lastIsOperator('-1322423*4-')).toBe(true);
  expect(lastIsOperator('13-22*4234+')).toBe(true);

  expect(lastIsOperator('1-3*2/24/234')).toBe(false);
  expect(lastIsOperator('1*32-24/2/3/0')).toBe(false);
  expect(lastIsOperator('-1322423*//1')).toBe(false);
  expect(lastIsOperator('+++13-22*423+-2')).toBe(false);
})

