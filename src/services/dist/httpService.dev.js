"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].interceptors.response.use(null, function (error) {
  var expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);

    _reactToastify.toast.error("An unexpected error occurred");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  _axios["default"].defaults.headers.common["x-auth-token"] = jwt;
}

var _default = {
  get: _axios["default"].get,
  post: _axios["default"].post,
  put: _axios["default"].put,
  "delete": _axios["default"]["delete"],
  setJwt: setJwt
};
exports["default"] = _default;