nbridge.preference = (function(nbridge) {
	return {
		service : 'preference',
		get : function(_key, _value) {
            return new Promise(function (resolve, reject) {
                nbridge.callToNative(nbridge.preference.service, 'get', {key : _key, defaultValue : _value})
                .then(function(value) {
                    resolve(atob(value));
                }, function(err) {
                   reject(err);
                });

            });
		},
		set : function(_key, _value) {
			nbridge.callToNative(this.service, 'set', {key : _key, value : _value});
		},
		remove : function(_key) {
			nbridge.callToNative(this.service, 'remove', {key : _key});
		}
	}
})(nbridge);
