"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.paginate=paginate;var _lodash=_interopRequireDefault(require("lodash"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function paginate(e,t,a){var r=(t-1)*a;return(0,_lodash.default)(e).slice(r).take(a).value()}