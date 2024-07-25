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

function checkGps() {
    nbridge.app.checkGps().then(function(result) {
        // alert(JSON.stringify(result));
        if (result.isGpsEnabled === false) {
            alert("위치서비스가 비활성화 상태입니다. 설정에서 위치서비스를 활성화 해주세요.");
            nbridge.app.goSettings("location");
        } else {
            alert("위치서비스가 활성화 상태입니다.")
        }
    });
}

function goSetting(type) {
    nbridge.app.goSettings(type);
}

function checkPermission(permission) {
    nbridge.app.checkPermission(permission).then(function(result) {
        alert(JSON.stringify(result));
    });
}

function checkPermissions() {
    nbridge.app.checkPermissions(["camera", "location", "storage"]).then(function(result) {
        alert(JSON.stringify(result));
    });
}

function requestPermissions() {
    nbridge.app.requestPermissions(["camera", "location", "storage"]).then(function(result) {
        alert(JSON.stringify(result));
    });
}

function requestPermission(permission) {
        nbridge.app.requestPermission(permission).then(function(result) {
        alert(JSON.stringify(result));
    });

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

function showLoading() {
    nbridge.app.showLoading("Loading");
}

function hideLoading() {
    nbridge.app.hideLoading();
}