const findLongestString = require("./find-longest-string");

test("finds longest string in array of strings", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("returns first longest string when more than one of equal length", () => {
  expect(findLongestString(["it", "is", "a", "nice", "here"])).toBe("nice");
  expect(findLongestString(["why", "yes", "to", "you"])).toBe("why");
});
