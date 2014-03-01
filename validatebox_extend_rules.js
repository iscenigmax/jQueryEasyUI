(function () {
	"use strict";

	var $, exports;
	exports = this;
	$ = exports.jQuery;

	$.extend($.fn.validatebox.defaults.rules, {
		isFormatDate:{
			validator: function(value){
				return (/^\d{4}\/\d{1,2}\/\d{1,2}$/).exec(value) !== null;
			},
			message: 'Ingrese la fecha con formato YYYY/MM/DD.'
		},
		isNotDate:{
			validator: function(value){
				var t = Date.parse(value);
				return !isNaN(t);
			},
			message: 'No es una fecha válida.'
		}
	});
}).call(this);
