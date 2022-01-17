"use strict";

const MIN_ALLOWED_PAREMETERS = 2;
const ERR_EXIT_CODE = 1;

process.exitCode = 0;

function startRoom(startRoom, roomsMap) {
  if (!roomsMap[startRoom]) {
    process.stderr.write("\nErrore | Stanza di partenza non valida\n");
    process.exitCode = ERR_EXIT_CODE;
    process.exit(ERR_EXIT_CODE);
  }
}

function objectsToCollect(toCollect, objectsMap) {
  toCollect.forEach(object => {
    isObjectValid(object, objectsMap);
  });
}

function isObjectValid(object, objectsMap) {
  if (!objectsMap[object]) {
    process.stderr.write("\nErrore | Impossibile trovare un percorso\n");
    process.exitCode = ERR_EXIT_CODE;
    process.exit(ERR_EXIT_CODE);
  }
}

function inputLength(inputArgs) {
  if (inputArgs.length < MIN_ALLOWED_PAREMETERS) {
    process.stderr.write(
      "\nErrore | Il numero minimo di input consetito è pari a due\n"
    );
    process.exitCode = ERR_EXIT_CODE;
    process.exit(ERR_EXIT_CODE);
  }
}

function isStartRoomNumber(startRoom) {
  let start = Number(startRoom);
  if (!Number.isInteger(start) || start < 1) {
    process.stderr.write("\nErrore | Stanza di partenza non valida\n");
    process.exitCode = ERR_EXIT_CODE;
    process.exit(ERR_EXIT_CODE);
  }
}

module.exports = {
  inputLength: inputLength,
  isStartRoomNumber: isStartRoomNumber,
  isObjectValid: isObjectValid,
  objectsToCollect: objectsToCollect,
  startRoom: startRoom
};
