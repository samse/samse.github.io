nbridge.ui = (function(nbridge) {
	return { 
		service : 'ui',
		showLoading :function(_time) {
            var option = {type : "show"}
            if (_time != undefined) { option.time = _time; }
			nbridge.callToNative(this.service, 'loading', option);
        }, hideLoading : function() {
            nbridge.callToNative(this.service, 'loading', {type : "dismiss"});
        }
	}
})(nbridge);
