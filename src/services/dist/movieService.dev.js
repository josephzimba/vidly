"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovies = getMovies;
exports.deleteMovie = deleteMovie;
exports.getMovie = getMovie;
exports.saveMovie = saveMovie;

var _httpService = _interopRequireDefault(require("./httpService"));

var _config = require("../config.json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var apiEndPoint = _config.apiUrl + "movies";

function movieUrl(id) {
  return "".concat(apiEndPoint, "/").concat(id);
}

function getMovies() {
  return _httpService["default"].get(apiEndPoint);
}

function deleteMovie(movieId) {
  return _httpService["default"]["delete"](movieUrl(movieId));
}

function getMovie(movieId) {
  return _httpService["default"].get(movieUrl(movieId));
}

function saveMovie(movie) {
  if (movie._id) {
    var body = _objectSpread({}, movie);

    delete body._id;
    return _httpService["default"].put(movieUrl(movie._id), body);
  }

  return _httpService["default"].post(apiEndPoint, movie);
}