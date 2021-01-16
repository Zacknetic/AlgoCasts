const numIslands = require('./index');

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
    [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]])).toEqual(1);
});

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
  [
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
])).toEqual(1);
});

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
  [
  ["1"]
])).toEqual(1);
});

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
  [
  ["0"]
])).toEqual(0);
});

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
  [
  ["0","1"]
])).toEqual(1);
});

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
  [
  ["0","0","0","0","0","1"]
])).toEqual(1);
});

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
  [

])).toEqual(0);
});

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
[[]])).toEqual(0);
});

test('calculates correct numIslands value for 1', () => {
  expect(numIslands(
    [
    ["1","0","1","1","1"],
    ["1","0","1","0","1"],
    ["1","1","1","0","1"]])).toEqual(1);
});
