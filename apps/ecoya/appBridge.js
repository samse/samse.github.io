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
        checkPermission: function(permissions) {
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
            return nbridge.callToNative(this.service, "uploadFiles", {type: _type, url: _url, param: _param});
        },
		exit : function() { 
			nbridge.callToNative(this.service, 'exit', {});
		}
    }
})(nbridge);
