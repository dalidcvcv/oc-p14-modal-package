"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    title,
    message
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-backdrop"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("h2", null, title || 'Success'), /*#__PURE__*/_react.default.createElement("p", null, message || "The operation has been successfully completed!"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose
  }, "Close")));
};
var _default = exports.default = Modal;