var a54_0x3b729c = function () {
  var _0x5310b1 = true;
  return function (_0x163103, _0xe1103c) {
    var _0x179f5f = _0x5310b1 ? function () {
      if (_0xe1103c) {
        var _0x21ee43 = _0xe1103c.apply(_0x163103, arguments);
        _0xe1103c = null;
        return _0x21ee43;
      }
    } : function () {};
    _0x5310b1 = false;
    return _0x179f5f;
  };
}();
var a54_0x115759 = a54_0x3b729c(this, function () {
  return a54_0x115759.toString().search("(((.+)+)+)+$").toString().constructor(a54_0x115759).search("(((.+)+)+)+$");
});
a54_0x115759();
const {
  zokou: a54_0x3cdb86
} = require("../framework/zokou");
var a54_0x193024 = {
  "nomCom": 'vv',
  "categorie": "General",
  "reaction": "🤲🏿",
  "desc": "show view once message"
};
a54_0x3cdb86(a54_0x193024, async (_0x21086e, _0x2511a2, _0x5541ce) => {
  const {
    ms: _0x4fe93d,
    msgRepondu: _0x4fc5e2,
    repondre: _0x3d2246
  } = _0x5541ce;
  if (!_0x4fc5e2) {
    return _0x3d2246("*Please mention a message sent in single view*.");
  }
  if (_0x4fc5e2.viewOnceMessage || _0x4fc5e2.viewOnceMessageV2 || _0x4fc5e2.viewOnceMessageV2Extension) {
    let _0x32c1f0 = _0x4fc5e2?.["viewOnceMessage"] ?? _0x4fc5e2?.["viewOnceMessageV2"] ?? _0x4fc5e2.viewOnceMessageV2Extension;
    if (_0x32c1f0.message.imageMessage) {
      var _0x101cd1 = await _0x2511a2.downloadAndSaveMediaMessage(_0x32c1f0.message.imageMessage);
      var _0x43aa62 = _0x32c1f0.message.imageMessage.caption;
      var _0x19502d = {
        url: _0x101cd1
      };
      var _0x5a0e98 = {
        "image": _0x19502d,
        "caption": _0x43aa62
      };
      var _0x195c12 = {
        "quoted": _0x4fe93d
      };
      await _0x2511a2.sendMessage(_0x21086e, _0x5a0e98, _0x195c12);
    } else {
      if (_0x32c1f0.message.videoMessage) {
        var _0x1dc5c1 = await _0x2511a2.downloadAndSaveMediaMessage(_0x32c1f0.message.videoMessage);
        var _0x43aa62 = _0x32c1f0.message.videoMessage.caption;
        var _0x5d0d3e = {
          url: _0x1dc5c1
        };
        var _0x32d182 = {
          "video": _0x5d0d3e,
          "caption": _0x43aa62
        };
        var _0x3af2fa = {
          "quoted": _0x4fe93d
        };
        await _0x2511a2.sendMessage(_0x21086e, _0x32d182, _0x3af2fa);
      } else {
        if (_0x32c1f0.message.audioMessage) {
          var _0x3adb2d = await _0x2511a2.downloadAndSaveMediaMessage(_0x32c1f0.message.audioMessage);
          var _0x55873b = {
            url: _0x3adb2d
          };
          var _0xa8327 = {
            "audio": _0x55873b,
            "mymetype": "audio/mp4"
          };
          var _0x4d8954 = {
            "quoted": _0x4fe93d,
            "ptt": false
          };
          await _0x2511a2.sendMessage(_0x21086e, _0xa8327, _0x4d8954);
        }
      }
    }
  } else {
    return _0x3d2246("The message you mentioned is not a single view message.");
  }
});