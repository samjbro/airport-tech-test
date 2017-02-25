var chai = require('chai');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

global.sinon = require('sinon');
global.expect = chai.expect;
global.Airport = require('../app/airport');
global.Plane = require('../app/plane');
