'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RtValueConverter = undefined;

var _relativeTime = require('./relativeTime');



var RtValueConverter = exports.RtValueConverter = function () {
  RtValueConverter.inject = function inject() {
    return [_relativeTime.RelativeTime];
  };

  function RtValueConverter(relativeTime) {
    

    this.service = relativeTime;
  }

  RtValueConverter.prototype.toView = function toView(value) {
    return this.service.getRelativeTime(value);
  };

  return RtValueConverter;
}();