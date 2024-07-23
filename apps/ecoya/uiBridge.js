nbridge.ui = (function(nbridge) {
	return { 
		service : 'ui',
		showLoading :function(_time) {
            var option = {type : "show"}
            if (_time != undefined) { option.time = _time; }
			nbridge.callToNative(this.service, 'loading', option);
        }, hideLoading : function() {
            nbridge.callToNative(this.service, 'loading', {type : "dismiss"});
        }, uploadFile: function(_type, _url, _uploadKey, _session, _param, _files) {
            var option = {url : _url, type: _type};
            if (_session != undefined) { option.session = _session; }
            if (_uploadKey != undefined) { option.uploadKey = _uploadKey; }
            if (_param != undefined) { option.parameters = _param; }
            if (_files != undefined) { option.files = _files; }
            return nbridge.callToNative(this.service, "uploadFiles", option);
        }
	}
})(nbridge);
