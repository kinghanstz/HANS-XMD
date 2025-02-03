const a41_0x2d577b = function () {
  let _0x20ad04 = true;
  return function (_0x3730ec, _0x6835e1) {
    const _0x24a058 = _0x20ad04 ? function () {
      if (_0x6835e1) {
        const _0x45f4ab = _0x6835e1.apply(_0x3730ec, arguments);
        _0x6835e1 = null;
        return _0x45f4ab;
      }
    } : function () {};
    _0x20ad04 = false;
    return _0x24a058;
  };
}();
const a41_0x32a2f1 = a41_0x2d577b(this, function () {
  return a41_0x32a2f1.toString().search("(((.+)+)+)+$").toString().constructor(a41_0x32a2f1).search("(((.+)+)+)+$");
});
a41_0x32a2f1();
const {
  zokou: a41_0x59ed5e
} = require("../framework/zokou");
const a41_0x154d28 = require("@faouzkk/lyrics-finder");
const a41_0x5bc827 = {
  "nomCom": "lyrics",
  "reaction": '✨',
  "categorie": "Recherche",
  "desc": "Recherche de lyrics"
};
a41_0x59ed5e(a41_0x5bc827, async (_0x3310dd, _0x236a67, _0xfbf831) => {
  const {
    repondre: _0x3d7555,
    arg: _0x5a0996,
    ms: _0x428592
  } = _0xfbf831;
  try {
    if (!_0x5a0996 || _0x5a0996.length === 0x0) {
      return _0x3d7555("Veuillez entrer un nom de musique");
    }
    const _0x33d89f = await a41_0x154d28(_0x5a0996);
    _0x3d7555(_0x33d89f);
  } catch (_0x3b436b) {
    _0x3d7555("lyrics not found");
  }
});