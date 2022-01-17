const fs = require('fs')

// Legge il file in input e ritorna un JSON
function readFileAndParseJson(filePath) {
  const data = fs.readFileSync(filePath)
  return JSON.parse(data);
}

function read() {
  let inputArgs = process.argv.slice(2);
  //validate.inputLength(inputArgs);
  //validate.isStartRoomNumber(inputArgs[START_ROOM_INDEX]);

  return inputArgs;
}

module.exports = {
  readFileAndParseJson,
  read
}