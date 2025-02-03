const a33_0x1b0f89 = function () {
  let _0x18c62c = true;
  return function (_0x4878a3, _0x2155cb) {
    const _0x55f1d0 = _0x18c62c ? function () {
      if (_0x2155cb) {
        const _0x31d1e5 = _0x2155cb.apply(_0x4878a3, arguments);
        _0x2155cb = null;
        return _0x31d1e5;
      }
    } : function () {};
    _0x18c62c = false;
    return _0x55f1d0;
  };
}();
const a33_0x268357 = a33_0x1b0f89(this, function () {
  return a33_0x268357.toString().search("(((.+)+)+)+$").toString().constructor(a33_0x268357).search("(((.+)+)+)+$");
});
a33_0x268357();
const {
  zokou: a33_0x20eb8c
} = require("../framework/zokou");
const a33_0x3c91d8 = {
  "nomCom": "help",
  "desc": "show all command descriptions and alias"
};
a33_0x20eb8c(a33_0x3c91d8, async (_0x2b6e9b, _0x8f3629, _0x5d6135) => {
  const {
    repondre: _0x7b3b05,
    arg: _0x3f0027
  } = _0x5d6135;
  const {
    cm: _0x157ae1
  } = require("../framework/zokou");
  if (!_0x3f0027[0x0] || _0x3f0027[0x0].trim() == '') {
    function _0x5a6ecc(_0x5f588c, _0x4eb7dc) {
      if (_0x5f588c.nomCom < _0x4eb7dc.nomCom) {
        return -0x1;
      }
      if (_0x5f588c.nomCom > _0x4eb7dc.nomCom) {
        return 0x1;
      }
      return 0x0;
    }
    _0x157ae1.sort(_0x5a6ecc);
    let _0x5bbcec = '';
    _0x157ae1.forEach((_0xd107f9, _0x5016d6) => {
      _0x5bbcec += "╭────────────────────╮\n";
      _0x5bbcec += "│ *Name:* " + _0xd107f9.nomCom + "\n";
      _0x5bbcec += "│ *Description:* " + _0xd107f9.desc + "\n";
      if (_0xd107f9.alias.length > 0x0) {
        _0x5bbcec += "│ *Alias:* " + _0xd107f9.alias.join(", ") + "\n";
      } else {
        _0x5bbcec += "│ *Alias:* none\n";
      }
      _0x5bbcec += "╰────────────────────╯\n";
      if (_0x5016d6 < _0x157ae1.length - 0x1) {
        _0x5bbcec += "\n";
      }
    });
    _0x7b3b05(_0x5bbcec);
  } else {
    let _0x2e5b8c = _0x3f0027[0x0].toLowerCase();
    let _0x4eee6b = _0x157ae1.find(_0x1772ae => _0x1772ae.nomCom == _0x2e5b8c || _0x1772ae.alias.includes(_0x2e5b8c));
    if (_0x4eee6b) {
      _0x7b3b05("*name :* " + _0x4eee6b.nomCom + "\n\n*description :* " + _0x4eee6b.desc + "\n\n*alias :* " + (_0x4eee6b.alias.length > 0x0 ? _0x4eee6b.alias.join(", ") : "none"));
    } else {
      _0x7b3b05("command not found");
    }
  }
});