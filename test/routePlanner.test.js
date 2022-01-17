"use strict";

const assert = require("assert");
const { getRoute } = require("../src/utils/roomNavigator");

const targetRooms = [3, 4];
const startRoom = 2;
const adjacencyMap = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
];

describe("Route Planner", function () {
  describe("#getRoute()", function () {
    it("should return [2,4,2,3] when I provide the test adjacenyMap, the test start room and the tast target rooms", function () {
      assert.deepEqual(
        [2, 4, 2, 3],
        getRoute(adjacencyMap, startRoom, targetRooms)
      );
    });
  });
});
