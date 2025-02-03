const a22_0x535387 = function () {
  let _0x187376 = true;
  return function (_0x49ba1e, _0x335f2a) {
    const _0x47356b = _0x187376 ? function () {
      if (_0x335f2a) {
        const _0x578dbd = _0x335f2a.apply(_0x49ba1e, arguments);
        _0x335f2a = null;
        return _0x578dbd;
      }
    } : function () {};
    _0x187376 = false;
    return _0x47356b;
  };
}();
const a22_0x34b06c = a22_0x535387(this, function () {
  return a22_0x34b06c.toString().search("(((.+)+)+)+$").toString().constructor(a22_0x34b06c).search("(((.+)+)+)+$");
});
a22_0x34b06c();
const {
  zokou: a22_0xbaf669
} = require("../framework/zokou");
const {
  addOrUpdateDataInAlive: a22_0x2437b1,
  getDataFromAlive: a22_0x36bfb6
} = require("../bdd/alive");
const a22_0x1f54fe = require("moment-timezone");
const a22_0x3acc64 = require(__dirname + "/../set");
const a22_0x17df4c = {
  "nomCom": "alive",
  "categorie": "General",
  "desc": "Get the alive of the bot , you can edit it"
};
a22_0xbaf669(a22_0x17df4c, async (_0x3c11a8, _0x380cb7, _0x23b88e) => {
  const {
    ms: _0x42e01b,
    arg: _0x406ec4,
    repondre: _0x62862a,
    superUser: _0x193c9f
  } = _0x23b88e;
  const _0x466da3 = await a22_0x36bfb6();
  if (!_0x406ec4 || !_0x406ec4[0x0] || _0x406ec4.join('') === '') {
    if (_0x466da3) {
      const {
        message: _0x402207,
        lien: _0x4793c0
      } = _0x466da3;
      var _0x14c5a8 = "public";
      if (a22_0x3acc64.MODE.toLocaleLowerCase() != "yes") {
        _0x14c5a8 = "private";
      }
      a22_0x1f54fe.tz.setDefault("Etc/GMT");
      const _0x147a6e = a22_0x1f54fe().format("HH:mm:ss");
      const _0x3aee9c = a22_0x1f54fe().format("DD/MM/YYYY");
      const _0x5708c8 = "\n*Owner* : " + a22_0x3acc64.OWNER_NAME + "\n*Mode* : " + _0x14c5a8 + "\n*Date* : " + _0x3aee9c + "\n*Hours(GMT)* : " + _0x147a6e + "\n\n " + _0x402207 + "\n \n \n *Zokou_MD version 2.0*";
      if (_0x4793c0.match(/\.(mp4|gif)$/i)) {
        try {
          const _0x242375 = {
            url: _0x4793c0
          };
          const _0x7e7629 = {
            "video": _0x242375,
            "caption": _0x5708c8
          };
          const _0x46bad2 = {
            "quoted": _0x42e01b
          };
          _0x380cb7.sendMessage(_0x3c11a8, _0x7e7629, _0x46bad2);
        } catch (_0x24dea3) {
          console.log("🥵🥵 Menu erreur " + _0x24dea3);
          _0x62862a("🥵🥵 Menu erreur " + _0x24dea3);
        }
      } else {
        if (_0x4793c0.match(/\.(jpeg|png|jpg)$/i)) {
          try {
            const _0x8a6a28 = {
              url: _0x4793c0
            };
            const _0x327f54 = {
              "image": _0x8a6a28,
              "caption": _0x5708c8
            };
            const _0x5096a0 = {
              "quoted": _0x42e01b
            };
            _0x380cb7.sendMessage(_0x3c11a8, _0x327f54, _0x5096a0);
          } catch (_0x4fdadd) {
            console.log("🥵🥵 Menu erreur " + _0x4fdadd);
            _0x62862a("🥵🥵 Menu erreur " + _0x4fdadd);
          }
        } else {
          _0x62862a(_0x5708c8);
        }
      }
    } else {
      if (!_0x193c9f) {
        _0x62862a("there is no alive for this bot");
        return;
      }
      ;
      await _0x62862a("You have not yet saved your alive, to do this;  enter after alive your message and your image or video link in this context: .alive message;lien");
      _0x62862a("don't do fake thinks :)");
    }
  } else {
    if (!_0x193c9f) {
      _0x62862a("Only the owner can  modify the alive");
      return;
    }
    ;
    const _0x42aad4 = _0x406ec4.join(" ").split(';')[0x0];
    const _0x5d55f9 = _0x406ec4.join(" ").split(';')[0x1];
    await a22_0x2437b1(_0x42aad4, _0x5d55f9);
    _0x62862a("message alive refresh successfully");
  }
});