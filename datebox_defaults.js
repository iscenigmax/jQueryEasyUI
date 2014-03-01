(function () {
	"use strict";

	var $, exports;
	exports = this;
	$ = exports.jQuery;

	$.fn.datebox.defaults.formatter = function (date) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d);
	};

	$.fn.datebox.defaults.parser = function (s) {
		var t = Date.parse(s);
		if (!isNaN(t) && (/\d{4}\/\d{1,2}\/\d{1,2}/).exec(s) !== null) {
			var a = s.split('/');
			var d = new Date(parseInt(a[0], 10), parseInt(a[1], 10) - 1, parseInt(a[2], 10));
			return d;
		} else {
			return new Date();
		}
	};
}).call(this);
