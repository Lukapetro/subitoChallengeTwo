'use strict';

const reader = require('./src/utils/fileReader')
const printer = require('./src/utils/printer')
const dataStructure = require('./src/utils/dataStructure')
const roomNavigator = require('./src/utils/roomNavigator');
const validation = require('./src/utils/validation');

const args = reader.read();

const mapPath = args[0];
const objectsToCollect = args.slice(2);
const startRoom = Number(args[1]);

const map = reader.readFileAndParseJson(mapPath)
dataStructure.createDataStructure(map)

const roomsMap = dataStructure.getRoomsMap()
const targetRooms = dataStructure.getObjectsRooms(objectsToCollect);
const objectsMap = dataStructure.getObjectsMap();

validation.startRoom(startRoom, roomsMap);
validation.objectsToCollect(objectsToCollect, objectsMap);

const adjacencyMap = dataStructure.getAdjacencyMap();

const route = roomNavigator.getRoute(adjacencyMap, startRoom, targetRooms);

printer.printResult(route, roomsMap, objectsToCollect);
