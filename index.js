// This code is a modified version of:
// https://github.com/eugeneware/ffmpeg-static
// Here is the associated license for that project:
//
// Copyright (c) 2015, Eugene Ware
// All rights reserved.

// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:

// 1. Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
// 3. Neither the name of Eugene Ware nor the names of its contributors
//    may be used to endorse or promote products derived from this software
//    without specific prior written permission.

// THIS SOFTWARE IS PROVIDED BY EUGENE WARE ''AS IS'' AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL EUGENE WARE BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//

var os = require('os')
var path = require('path')

var platform = os.platform()
if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
  console.error('Unsupported platform.')
  process.exit(1)
}

var arch = os.arch()
if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.')
  process.exit(1)
}

var gnatsdPath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'gnatsd.exe' : 'gnatsd'
)

module.exports = gnatsdPath;