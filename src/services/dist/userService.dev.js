"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _httpService = _interopRequireDefault(require("./httpService"));

var _config = require("../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiEndPoint = _config.apiUrl + "users";

function register(user) {
  return _httpService["default"].post(apiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}