nbridge.app = (function(nbridge) {
    return {
		service : 'app',
		appInfo : function() {
			return nbridge.callToNative(this.service, 'appInfo', {});
		}, 
        checkGps: function() {
            return nbridge.callToNative(this.service, "checkGps", {});
        },
        checkPermissions: function(permissions) {
            return nbridge.callToNative(this.service, "checkPermissions", {permissions});
        },
        checkPermission: function(permission) {
            return nbridge.callToNative(this.service, "checkPermission", {"permission": permission});
        },
        requestPermissions: function(permissions) {
            return nbridge.callToNative(this.service, "requestPermissions", {permissions});
        },
        requestPermission: function(permission) {
            return nbridge.callToNative(this.service, "requestPermission", {"permission": permission});
        },
        goSettings: function(_type) {
            nbridge.callToNative(this.service, "goSettings", {type: _type});
        },
        uploadFile: function(_type, _url, _param) {
            return nbridge.callToNative(this.service, "uploadFile", {type: _type, url: _url, param: _param});
        },
        showLoading: function(_message) {
            return nbridge.callToNative(this.service, "showLoading", {message: _message});
        },
        hideLoading: function() {
            return nbridge.callToNative(this.service, "hideLoading", {});
        },
		exit : function() { 
			nbridge.callToNative(this.service, 'exit', {});
		}
    }
})(nbridge);
