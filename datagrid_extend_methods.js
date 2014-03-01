(function () {
	"use strict";

	var $, exports;
	exports = this;
	$ = exports.jQuery;

	$.extend($.fn.datagrid.methods, {
		DeleteRowSelected: function (jq) {
			return jq.each(function () {
				var row = $(this).datagrid('getSelected');
				if (row) {
					var idx = $(this).datagrid('getRowIndex', row);
					$(this).datagrid('deleteRow', idx);
				}
			});
		}
	});
}).call(this);
