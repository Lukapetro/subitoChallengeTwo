"use strict";

const assert = require("assert");
const validation = require('../src/utils/validation')

const startRoom = 2;
const toCollect = ["Knife", "Potted Plant"];
const object = "Knife";
const objectsMap = { Knife: 3, "Potted Plant": 4 };
const roomsMap = [
  {},
  { id: 1, name: "Hallway", north: 2, objects: [] },
  { id: 2, name: "Dining Room", south: 1, west: 3, east: 4, objects: [] },
  { id: 3, name: "Kitchen", east: 2, objects: [{ name: "Knife" }] },
  { id: 4, name: "Sun Room", west: 2, objects: [{ name: "Potted Plant" }] }
];

describe("Validator", function () {
  describe("#startRoom()", function () {
    it("should execute without error if start room is inside the map", function () {
      validation.startRoom(startRoom, roomsMap);
      assert.equal(0, process.exitCode);
    });
  });

  describe("#objectsToCollect()", function () {
    it("should execute without error if test objects to collect are inside the map", function () {
      validation.objectsToCollect(toCollect, objectsMap);
      assert.equal(0, process.exitCode);
    });
  });

  describe("#isObjectValid()", function () {
    it("should execute without error it test objct is inside map", function () {
      validation.isObjectValid(object, objectsMap);
      assert.equal(0, process.exitCode);
    });
  });

  describe("#isStartRoomNumber()", function () {
    it("should execute without error if start room is inside the map", function () {
      validation.isStartRoomNumber(startRoom);
      assert.equal(0, process.exitCode);
    });
  });

  describe("#inputLength()", function () {
    it("should execute without error if provide at least two input arguments for the script", function () {
      validation.inputLength(["map", 2]);
      assert.equal(0, process.exitCode);
    });
  });
});
