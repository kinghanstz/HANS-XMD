const a29_0xecc157 = function () {
  let _0x34a193 = true;
  return function (_0x1faffd, _0x32db2d) {
    const _0x2afe8b = _0x34a193 ? function () {
      if (_0x32db2d) {
        const _0x2571f1 = _0x32db2d.apply(_0x1faffd, arguments);
        _0x32db2d = null;
        return _0x2571f1;
      }
    } : function () {};
    _0x34a193 = false;
    return _0x2afe8b;
  };
}();
const a29_0x34ce82 = a29_0xecc157(this, function () {
  return a29_0x34ce82.toString().search("(((.+)+)+)+$").toString().constructor(a29_0x34ce82).search("(((.+)+)+)+$");
});
a29_0x34ce82();
const {
  zokou: a29_0x5db7f4
} = require("../framework/zokou");
const a29_0x1b557b = require("../commandes/style");
const a29_0x2648bb = {
  "nomCom": "fancy",
  "categorie": "Fun",
  "reaction": '☑️',
  "desc": "transform text into fancy style",
  "alias": ['fc']
};
a29_0x5db7f4(a29_0x2648bb, async (_0x185456, _0x2ce559, _0x391c45) => {
  const {
    arg: _0xf78f31,
    repondre: _0x41a926,
    prefixe: _0x21da28
  } = _0x391c45;
  const _0x123afc = _0xf78f31[0x0]?.["match"](/\d+/)?.["join"]('');
  const _0x58b13d = _0xf78f31.slice(0x1).join(" ");
  try {
    if (_0x123afc === undefined || _0x58b13d === undefined) {
      return await _0x41a926("\nExemple : " + _0x21da28 + "fancy 10 zokou-md\n" + String.fromCharCode(0x200e).repeat(0xfa1) + a29_0x1b557b.list("Zokou-md", a29_0x1b557b));
    }
    const _0x948d79 = a29_0x1b557b[parseInt(_0x123afc) - 0x1];
    return _0x948d79 ? await _0x41a926(a29_0x1b557b.apply(_0x948d79, _0x58b13d)) : await _0x41a926("_Style introuvable :(_");
  } catch (_0x26ca22) {
    console.error(_0x26ca22);
    return await _0x41a926("_Une erreur s'est produite :(_");
  }
});