/*NBRIDGE*/
function platform() {
    alert('platform : ' + nbridge.platform());
}
/*APP BRIDGE*/
function appInfo() {
    nbridge.app.appInfo().then(function(result) {
        alert('name : ' + result.name + '\nversion : ' + result.version);
    });
}
function deviceInfo() {
    nbridge.app.deviceInfo().then(function(result) {
        alert('deviceId : ' + result.deviceId +
        '\nversion : ' + result.version +
        '\nmodel : ' + result.model +
        '\nnetwork : ' + result.network +
        '\nregion : ' + result.region +
        '\nlanguage : ' + result.language);
    });
}

function exit() {
    nbridge.app.exit();
}

function goSetting(type) {
    nbridge.app.goSetting(type);
}

function toast() {
    nbridge.ui.toast('this is toast');
}
function showLoading() {
    nbridge.ui.showLoading();

    setTimeout(function() {
        nbridge.ui.hideLoading();
    }, 6000);
}
function dismissLoading() {
    nbridge.ui.hideLoading();
}

function uploadFile(type) {
    url = "http://www.csm-testcenter.org/test/";
    param = {"session": "SESSION=OTcyNThlODItMmU4MS00NWQ4LWIwODItNzg4ODY5ZWMxYzVl", "do": "test"};
    nbridge.app.uploadFile(type, url, param).then(function(file) {
        console.log("success upload");
    }, function(err) {
        console.log("err");
    });
}