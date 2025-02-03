const a37_0x5e59f2 = function () {
  let _0x3c350 = true;
  return function (_0x163a69, _0x40fb71) {
    const _0x6fd4ba = _0x3c350 ? function () {
      if (_0x40fb71) {
        const _0x157217 = _0x40fb71.apply(_0x163a69, arguments);
        _0x40fb71 = null;
        return _0x157217;
      }
    } : function () {};
    _0x3c350 = false;
    return _0x6fd4ba;
  };
}();
const a37_0x42a787 = a37_0x5e59f2(this, function () {
  return a37_0x42a787.toString().search("(((.+)+)+)+$").toString().constructor(a37_0x42a787).search("(((.+)+)+)+$");
});
a37_0x42a787();
const {
  zokou: a37_0x43ae34
} = require("../framework/zokou");
var a37_0xb3ee2 = require("g-i-s");
const a37_0x4f5398 = {
  "nomCom": "img",
  "categorie": "Search",
  "reaction": '📷',
  "description": "search image"
};
a37_0x43ae34(a37_0x4f5398, async (_0x3cf4be, _0x46d41c, _0x1f804d) => {
  const {
    repondre: _0x5781a7,
    ms: _0x10b4f3,
    arg: _0x5b5a28
  } = _0x1f804d;
  if (!_0x5b5a28[0x0]) {
    _0x5781a7("which image ? !");
    return;
  }
  const _0xbaff94 = _0x5b5a28.join(" ");
  a37_0xb3ee2(_0xbaff94, _0x1f0182);
  function _0x1f0182(_0x49e947, _0x319b0a) {
    if (_0x49e947) {
      _0x5781a7("oups une error ");
    } else {
      for (var _0x5c5f9f = 0x0; _0x5c5f9f < 0x5; _0x5c5f9f++) {
        const _0x24881c = {
          url: _0x319b0a[_0x5c5f9f].url
        };
        const _0x4a2882 = {
          image: _0x24881c
        };
        const _0xb20cdd = {
          "quoted": _0x10b4f3
        };
        _0x46d41c.sendMessage(_0x3cf4be, _0x4a2882, _0xb20cdd);
      }
    }
  }
});