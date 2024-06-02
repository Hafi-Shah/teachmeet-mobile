"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
var fs_1 = require("fs");
var path_1 = require("path");
function getLocalIPAddress() {
    var interfaces = (0, os_1.networkInterfaces)();
    for (var _i = 0, _a = Object.keys(interfaces); _i < _a.length; _i++) {
        var name_1 = _a[_i];
        for (var _b = 0, _c = interfaces[name_1]; _b < _c.length; _b++) {
            var iface = _c[_b];
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}
var ipAddress = getLocalIPAddress();
var configFilePath = (0, path_1.join)(__dirname, 'capacitor.config.ts');
(0, fs_1.readFile)(configFilePath, 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading capacitor.config.ts:', err);
        return;
    }
    var updatedData = data.replace(/url: 'http:\/\/.*:\d+'/, "url: 'http://".concat(ipAddress, ":4200'"));
    (0, fs_1.writeFile)(configFilePath, updatedData, 'utf8', function (err) {
        if (err) {
            console.error('Error writing capacitor.config.ts:', err);
            return;
        }
        console.log('Updated capacitor.config.ts with local IP address:', ipAddress);
    });
});
