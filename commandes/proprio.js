const a45_0x159d3d = function () {
  let _0x3b8bb8 = true;
  return function (_0x101e33, _0x252bc4) {
    const _0x33d887 = _0x3b8bb8 ? function () {
      if (_0x252bc4) {
        const _0x1dda5a = _0x252bc4.apply(_0x101e33, arguments);
        _0x252bc4 = null;
        return _0x1dda5a;
      }
    } : function () {};
    _0x3b8bb8 = false;
    return _0x33d887;
  };
}();
const a45_0x2bc9ab = a45_0x159d3d(this, function () {
  return a45_0x2bc9ab.toString().search("(((.+)+)+)+$").toString().constructor(a45_0x2bc9ab).search("(((.+)+)+)+$");
});
a45_0x2bc9ab();
const {
  zokou: a45_0x6fdd00
} = require("../framework/zokou");
const a45_0x238805 = {
  "nomCom": "reboot",
  "categorie": "Mods",
  "reaction": "👨🏿‍💼",
  "desc": "restart bot"
};
a45_0x6fdd00(a45_0x238805, async (_0x310cc6, _0x190005, _0x3d1821) => {
  const {
    repondre: _0x58dde4,
    ms: _0x34d211,
    dev: _0x1d5839,
    superUser: _0x2c355f
  } = _0x3d1821;
  if (!_0x2c355f) {
    return _0x58dde4("This command is for owner only");
  }
  const {
    exec: _0x56a599
  } = require("child_process");
  _0x58dde4("*restarting ...*");
  _0x56a599("pm2 restart all");
});