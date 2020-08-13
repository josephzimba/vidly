"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.loginWithJwt = loginWithJwt;
exports.logout = logout;
exports.getCurrentUser = getCurrentUser;
exports.getJwt = getJwt;
exports["default"] = void 0;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _httpService = _interopRequireDefault(require("./httpService"));

var _config = require("../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiEndPoint = _config.apiUrl + "auth";
var tokenKey = " token";

_httpService["default"].setJwt(getJwt());

function login(email, password) {
  var _ref, jwt;

  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_httpService["default"].post(apiEndPoint, {
            email: email,
            password: password
          }));

        case 2:
          _ref = _context.sent;
          jwt = _ref.data;
          localStorage.setItem(tokenKey, jwt);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
  try {
    var jwt = localStorage.getItem(tokenKey);
    return (0, _jwtDecode["default"])(jwt);
  } catch (ex) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

var _default = {
  login: login,
  loginWithJwt: loginWithJwt,
  logout: logout,
  getCurrentUser: getCurrentUser,
  getJwt: getJwt
};
exports["default"] = _default;