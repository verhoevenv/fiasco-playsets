---
---

var data = {{site.data.playsets | jsonify}};

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
	data = data.map(arrays_to_strings);
    $('#table').bootstrapTable({
        data: data
    });
});
