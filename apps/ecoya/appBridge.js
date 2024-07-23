nbridge.app = (function(nbridge) {
    return {
		service : 'app',
		appInfo : function() {
			return nbridge.callToNative(this.service, 'appInfo', {});
		}, 
		deviceInfo : function() { 
			return nbridge.callToNative(this.service, 'deviceInfo', {});
		},
        checkGps: function() {
            return nbridge.callToNative(this.service, "checkGps", {});
        }
        checkPermissions: function(permissions) {
            return nbridge.callToNative(this.service, "checkPermissions", {permissions});
        },
        requestPermissions: function(permissions) {
            return nbridge.callToNative(this.service, "requestPermission", {permissions});
        },
        goSettings: function(_type) {
            nbridge.callToNative(this.service, "goSettings", {type: _type});
        },
        uploadFile: function(_type, _url, _param) {
            return nbridge.callToNative(this.service, "uploadFiles", {type: _type, url: _url, param: _param});
        },
		exit : function() { 
			nbridge.callToNative(this.service, 'exit', {});
		}
    }
})(nbridge);
