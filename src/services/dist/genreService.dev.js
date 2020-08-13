"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGenres = getGenres;

var _httpService = _interopRequireDefault(require("./httpService"));

var _config = require("../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getGenres() {
  return _httpService["default"].get(_config.apiUrl + "genres");
}