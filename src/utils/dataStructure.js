
const roomsMap = [];
const adjacencyMap = [];
const objectsMap = [];

function createDataStructure(map) {
  map.rooms.forEach(room => {
    createRoomsMap(room);
    createAdjacencyMap(room);
    createObjectsMap(room);
  });

  return;
}

function createRoomsMap(room) {
  roomsMap[room.id] = room;
  return roomsMap;
}

function createAdjacencyMap(room) {
  adjacencyMap[room.id] = createRoomNeighbors(room);
  return adjacencyMap;
}

function createRoomNeighbors(room) {
  let neighbors = [];

  if (room.north) {
    neighbors[room.north] = 1;
  }
  if (room.south) {
    neighbors[room.south] = 1;
  }
  if (room.west) {
    neighbors[room.west] = 1;
  }
  if (room.east) {
    neighbors[room.east] = 1;
  }

  return neighbors;
}

function createObjectsMap(room) {
  if (room.objects.length) {
    room.objects.forEach(object => {
      objectsMap[object.name] = room.id;
    });
  }

  return objectsMap;
}

function getObjectsRooms(objects) {
  let nodes = [];
  objects.forEach(currentObject => {
    if (
      objectsMap[currentObject] &&
      !nodes.includes(objectsMap[currentObject])
    ) {
      nodes.push(objectsMap[currentObject]);
    }
  });

  return nodes;
}

const getAdjacencyMap = () => adjacencyMap;

const getObjectsMap = () => objectsMap;

const getRoomsMap = () => roomsMap;

module.exports = {
  createDataStructure,
  getAdjacencyMap,
  getObjectsMap,
  getRoomsMap,
  getObjectsRooms
}