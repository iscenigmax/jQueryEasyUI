(function () {
	"use strict";

	var $, exports;
	exports = this;
	$ = exports.jQuery;

	$.extend($.fn.datetimebox.methods, {
		DateNow: function (jq) {
			return jq.each(function () {
				var date = new Date()
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				var d = date.getDate();
				var hh = date.getHours();
				var mm = date.getMinutes();
				var ss = date.getSeconds();

				$(this).datetimebox('setValue', y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d) + ' ' + hh + ':' + mm);
			});
		}
	});
}).call(this);
