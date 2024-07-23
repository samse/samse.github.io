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
        goSettings: function() {
            nbridge.callToNative(this.service, "goSettings", {});
        },
		exit : function() { 
			nbridge.callToNative(this.service, 'exit', {});
		}
    }
})(nbridge);
