String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// $.ajaxSetup({
    // beforeSend: function (xhr)
    // {
    	// xhr.setRequestHeader("Origin", true);
       	// xhr.setRequestHeader("Access-Control-Allow-Origin","http://localhost:3000/");
    // }
// });

var Util = {};

Util.Post = function(url, data, success, failure) {
	$.ajax({
		url: app.baseUrl+url,
		data: data,
		success: success,
		error: failure,
		type: 'POST'
	});
};

Util.Get = function(context, url, data, success, failure) {
	if(failure == null) {
		failure = Util.failure;
	}
	$.ajax({
		context: context,
		url: app.baseUrl+url,
		data: data,
		success: success,
		error: failure,
		type: 'GET'
	});
};

Util.failure = function(error) {
	alert(JSON.stringify(error));
};
