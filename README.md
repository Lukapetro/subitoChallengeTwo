**Getting Started**

This project was created as a challenge for subito.it

## Problem

Write a program that will output a valid route one could follow to collect all specified items within a map.

## Usage

This software can be run through a **Docker** container [`lukapetro/subito-challenge`](https://hub.docker.com/r/lukapetro/subito-challenge).

Once you pull the container you can attach a volume containing the map file to use and then run the software with a specific input, like this:

```
docker run --rm -v /host/path/to/map:/testMap lukapetro/subito-challenge /testMap/map.json 2 "<object_to_collect>"
```

You can also run it by cloning the repository and:

```
npm install
```

This command will donwload all the needed dependencies defined inside package.json.

To run the software use the following command:

```
node /path/to/subito-challenge/index.js /path/to/testMap "object_to_collect"
```
