# gnats-static

Node module packaged with the NATS server, gnats, binaries

## Installation

This module is installed via npm:

``` bash
$ npm install gnats-static
```

## Example Usage

Returns the path of a statically linked gnats binary on the local filesystem.

``` js
var gnatsPath = require('gnats-static');
console.log(gnatsPath);
// /home/jacob/personal/gnats/bin/linux/x64/gnatsd
```
