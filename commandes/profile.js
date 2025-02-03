const a44_0x167cde = function () {
  let _0x5d9ce0 = true;
  return function (_0x2085ed, _0xa5a291) {
    const _0x22bcc7 = _0x5d9ce0 ? function () {
      if (_0xa5a291) {
        const _0x4df4e9 = _0xa5a291.apply(_0x2085ed, arguments);
        _0xa5a291 = null;
        return _0x4df4e9;
      }
    } : function () {};
    _0x5d9ce0 = false;
    return _0x22bcc7;
  };
}();
const a44_0x33fd2c = a44_0x167cde(this, function () {
  return a44_0x33fd2c.toString().search("(((.+)+)+)+$").toString().constructor(a44_0x33fd2c).search("(((.+)+)+)+$");
});
a44_0x33fd2c();
const {
  zokou: a44_0x364c33
} = require("../framework/zokou");
const a44_0x3a8913 = require("../set");
const a44_0x5bc3fd = {
  "nomCom": "profile",
  "categorie": "Fun",
  "desc": "get profile picture and status of a user"
};
a44_0x364c33(a44_0x5bc3fd, async (_0x12eb71, _0x5311c0, _0x21d1c1) => {
  const {
    ms: _0x1701fd,
    arg: _0x43ae13,
    repondre: _0x2ead4d,
    auteurMessage: _0x4827d1,
    nomAuteurMessage: _0x496969,
    msgRepondu: _0x122e00,
    auteurMsgRepondu: _0x39d977
  } = _0x21d1c1;
  let _0x323825 = null;
  let _0x158d92 = null;
  if (!_0x122e00) {
    _0x323825 = _0x4827d1;
    _0x158d92 = _0x496969;
    try {
      ppUrl = await _0x5311c0.profilePictureUrl(_0x323825, "image");
    } catch {
      ppUrl = a44_0x3a8913.IMAGE_MENU;
    }
    ;
    const _0x21d6d1 = await _0x5311c0.fetchStatus(_0x323825);
    const _0x2def6e = {
      "url": ppUrl
    };
    mess = {
      'image': _0x2def6e,
      'caption': "*Nom :* " + _0x158d92 + "\n*Status :*\n" + _0x21d6d1.status
    };
  } else {
    _0x323825 = _0x39d977;
    _0x158d92 = '@' + _0x39d977.split('@')[0x0];
    try {
      ppUrl = await _0x5311c0.profilePictureUrl(_0x323825, "image");
    } catch {
      ppUrl = a44_0x3a8913.IMAGE_MENU;
    }
    ;
    const _0x1bf918 = await _0x5311c0.fetchStatus(_0x323825);
    const _0x3c7576 = {
      "url": ppUrl
    };
    mess = {
      'image': _0x3c7576,
      'caption': "*Name :* " + _0x158d92 + "\n*Status :*\n" + _0x1bf918.status,
      'mentions': [_0x39d977]
    };
  }
  ;
  const _0x1604f1 = {
    "quoted": _0x1701fd
  };
  _0x5311c0.sendMessage(_0x12eb71, mess, _0x1604f1);
});