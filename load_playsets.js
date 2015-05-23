---
---

// assuming fiasco_playsets is a variable in global scope

var arrays_to_strings = function(o) {
	for (var prop in o) {
		if (o.hasOwnProperty(prop) && $.isArray(o[prop])) {
			var array = o[prop];
			o[prop] = array.join(", ");
		}
	}
	return o;
}

$(function () {
	var data_for_table = fiasco_playsets.map(arrays_to_strings);
    $('#table').bootstrapTable({
        data: data_for_table
    });
});
