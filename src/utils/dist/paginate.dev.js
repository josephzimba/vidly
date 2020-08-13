"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginate = paginate;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function paginate(items, pageNumber, pageSize) {
  var startIndex = (pageNumber - 1) * pageSize;
  return (0, _lodash["default"])(items).slice(startIndex).take(pageSize).value();
}