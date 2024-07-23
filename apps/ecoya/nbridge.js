var nbridge = (function () {
    return {
        platform: function () {
            android = true; try { nBridge } catch(e) { android = false; }
            console.log('android : ' + android);
            if (android) return 'android';
            ios = true; try { window.webkit.messageHandlers.nBridge } catch(e) { ios = false; }
            console.log('ios : ' + ios);
            if (ios) return 'ios';
            return 'web';
        },
        promises: [],
        onBridgeReady: function () {
            if (nbridge.platform() == 'android') {
                nBridge.onBridgeReady();
            } else if (nbridge.platform() == 'ios') {
                var res = {command: 'onBridgeReady'};
                window.webkit.messageHandlers.nBridge.postMessage(JSON.stringify(res));
            }
        },
        callToNative: function(service, action, option) {
            var retain = option.retainCallback;
            var promise = new Promise(function (resolve, reject) {
                var promiseId = nbridge.generatePromiseId();
                nbridge.promises[promiseId] = {resolve, reject, retain};
                try {
                    var command = {service: service, action: action, promiseId: promiseId, option: option};
                    if (nbridge.platform() == 'android') {
                        nBridge.callFromWeb(JSON.stringify(command));
                    } else if (nbridge.platform() == 'ios') {
                        window.webkit.messageHandlers.nBridge.postMessage(JSON.stringify(command));
                    }
                } catch (exception) {
                    console.error(exception);
                }
            });
            return promise;
        },
        generatePromiseId: function () {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        },
        resolvePromise: function (promiseId, data, error) {
            if (error) { 
                nbridge.promises[promiseId].reject(data);
                delete nbridge.promises[promiseId];
            } else {
                if (nbridge.promises[promiseId].retain == undefined) {
                    nbridge.promises[promiseId].resolve(data);
                    delete nbridge.promises[promiseId];
                } else {
                    nbridge.promises[promiseId].retain(data);
                }
            }
        },
        finallyResolvePromise: function (promiseId, data, error) {
            if (error) nbridge.promises[promiseId].reject(data);
            else nbridge.promises[promiseId].resolve(data);
            delete nbridge.promises[promiseId];
        },
        deepCopyObject: function(inObject) {
          var outObject, value, key;
          if(typeof inObject !== "object" || inObject === null) {
            return inObject;
          }
          outObject = Array.isArray(inObject) ? [] : {};
          for (key in inObject) {
            value = inObject[key];
            outObject[key] = (typeof value === "object" && value !== null) ? deepCopyObject(value) : value;
          }
          return outObject;
        }
    }
})();

nbridge.event = (function(nbridge) {
    return {
        eventListeners: {},
        addPushEventListener: function(listener) {
            this.addEventListener('hlfmobrc_pushevent_handler', listener);
        },
        removePushEventListener: function() {
            this.eventListeners['hlfmobrc_pushevent_handler'] = undefined;
        },
        addDynamicLinkEventListener: function(listener) {
            this.addEventListener('hlfmobrc_dynamiclinkevent_handler', listener);
        },
        removeDynamicLinkEventListener: function() {
            this.eventListeners['hlfmobrc_dynamiclinkevent_handler'] = undefined;
        },
        addEventListener: function(name, listener) {
            this.eventListeners[name] = listener;
        },
        removeEventListener: function(name) {
            this.eventListeners[name] = undefined;
        },
        fireEvent: function(name, obj) {
            if (this.eventListeners[name] != undefined) {
                this.eventListeners[name](obj);
            }
        }
    }
})(nbridge);
