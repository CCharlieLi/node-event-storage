`use strict`;

const libRegister = new require('file-register')();
module.exports = libRegister.register(__dirname, 'lib').lib;
