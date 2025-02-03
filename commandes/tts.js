const a53_0x576d10 = function () {
  let _0x3dfddc = true;
  return function (_0x3fd8df, _0x4b8a69) {
    const _0x5dd77e = _0x3dfddc ? function () {
      if (_0x4b8a69) {
        const _0x30e92d = _0x4b8a69.apply(_0x3fd8df, arguments);
        _0x4b8a69 = null;
        return _0x30e92d;
      }
    } : function () {};
    _0x3dfddc = false;
    return _0x5dd77e;
  };
}();
const a53_0x4d5384 = a53_0x576d10(this, function () {
  return a53_0x4d5384.toString().search("(((.+)+)+)+$").toString().constructor(a53_0x4d5384).search("(((.+)+)+)+$");
});
a53_0x4d5384();
const a53_0x85428c = require("google-tts-api");
const {
  zokou: a53_0x24bd2d
} = require("../framework/zokou");
const a53_0x398a80 = {
  "nomCom": "dit",
  "categorie": "tts",
  "reaction": '👄',
  "desc": "read a text in french"
};
a53_0x24bd2d(a53_0x398a80, async (_0x3c563a, _0x437062, _0x3acd52) => {
  const {
    ms: _0xb41b7b,
    arg: _0x168d22,
    repondre: _0xa41693
  } = _0x3acd52;
  if (!_0x168d22[0x0]) {
    _0xa41693("Insert a word");
    return;
  }
  ;
  const _0x2f4df4 = _0x168d22.join(" ");
  const _0xba3f49 = {
    "lang": 'fr',
    "slow": false,
    "host": "https://translate.google.com"
  };
  const _0x1deb58 = a53_0x85428c.getAudioUrl(_0x2f4df4, _0xba3f49);
  console.log(_0x1deb58);
  const _0x23f6e4 = {
    url: _0x1deb58
  };
  const _0x4a5d80 = {
    "audio": _0x23f6e4,
    "mimetype": "audio/mp4"
  };
  const _0x50e9d2 = {
    "quoted": _0xb41b7b,
    "ptt": true
  };
  _0x437062.sendMessage(_0x3c563a, _0x4a5d80, _0x50e9d2);
});
const a53_0x536db7 = {
  "nomCom": "itta",
  "categorie": "tts",
  "reaction": '👄',
  "desc": "read a text in japanese"
};
a53_0x24bd2d(a53_0x536db7, async (_0x1a138c, _0x5e72e9, _0x54aea9) => {
  const {
    ms: _0x175526,
    arg: _0x3ee7ca,
    repondre: _0x912b1c
  } = _0x54aea9;
  if (!_0x3ee7ca[0x0]) {
    _0x912b1c("Insert a word");
    return;
  }
  ;
  const _0x386482 = _0x3ee7ca.join(" ");
  const _0x3239de = {
    "lang": 'ja',
    "slow": false,
    "host": "https://translate.google.com"
  };
  const _0x1e5ade = a53_0x85428c.getAudioUrl(_0x386482, _0x3239de);
  console.log(_0x1e5ade);
  const _0x10ee57 = {
    url: _0x1e5ade
  };
  const _0x6a13c0 = {
    "audio": _0x10ee57,
    "mimetype": "audio/mp4"
  };
  const _0x494283 = {
    "quoted": _0x175526,
    "ptt": true
  };
  _0x5e72e9.sendMessage(_0x1a138c, _0x6a13c0, _0x494283);
});
const a53_0x15b3a5 = {
  "nomCom": "say",
  "categorie": "tts",
  "reaction": '👄',
  "desc": "read a text in english"
};
a53_0x24bd2d(a53_0x15b3a5, async (_0x5d4148, _0x21eeae, _0x22bc0b) => {
  const {
    ms: _0x11874f,
    arg: _0x4972bd,
    repondre: _0x414bdc
  } = _0x22bc0b;
  if (!_0x4972bd[0x0]) {
    _0x414bdc("Insert a word");
    return;
  }
  ;
  const _0x4cb016 = _0x4972bd.join(" ");
  const _0x1783e8 = {
    "lang": 'en',
    "slow": false,
    "host": "https://translate.google.com"
  };
  const _0x2a426d = a53_0x85428c.getAudioUrl(_0x4cb016, _0x1783e8);
  console.log(_0x2a426d);
  const _0x21e402 = {
    url: _0x2a426d
  };
  const _0x353838 = {
    "audio": _0x21e402,
    "mimetype": "audio/mp4"
  };
  const _0x20ffa1 = {
    "quoted": _0x11874f,
    "ptt": true
  };
  _0x21eeae.sendMessage(_0x5d4148, _0x353838, _0x20ffa1);
});