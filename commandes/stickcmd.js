const a49_0x282e65 = function () {
  let _0x4a48df = true;
  return function (_0x4aa5c2, _0x4cec7c) {
    const _0x392d52 = _0x4a48df ? function () {
      if (_0x4cec7c) {
        const _0x1d2afd = _0x4cec7c.apply(_0x4aa5c2, arguments);
        _0x4cec7c = null;
        return _0x1d2afd;
      }
    } : function () {};
    _0x4a48df = false;
    return _0x392d52;
  };
}();
const a49_0x10028e = a49_0x282e65(this, function () {
  return a49_0x10028e.toString().search("(((.+)+)+)+$").toString().constructor(a49_0x10028e).search("(((.+)+)+)+$");
});
a49_0x10028e();
const {
  zokou: a49_0x30ad50
} = require("../framework/zokou");
const {
  addstickcmd: a49_0x2383a3,
  deleteCmd: a49_0x556bf4,
  getCmdById: a49_0xf5c7ab,
  inStickCmd: a49_0x3badfb,
  getAllStickCmds: a49_0x5a69a8
} = require("../bdd/stickcmd");
const a49_0x2372a8 = {
  "nomCom": "setcmd",
  "categorie": "stickcmd",
  "desc": "set sticker as command"
};
a49_0x30ad50(a49_0x2372a8, async (_0x1d2ec5, _0x4e0e84, _0x45f21d) => {
  const {
    ms: _0x280161,
    arg: _0x6c4d4f,
    repondre: _0x4be4b8,
    superUser: _0x1815fd,
    msgRepondu: _0x515ad1
  } = _0x45f21d;
  if (!_0x1815fd) {
    _0x4be4b8("you can't use this command");
    return;
  }
  ;
  if (_0x515ad1 && _0x515ad1.stickerMessage) {
    if (!_0x6c4d4f || !_0x6c4d4f[0x0]) {
      _0x4be4b8("put the name of the command");
      return;
    }
    ;
    await a49_0x2383a3(_0x6c4d4f.join(" "), _0x515ad1.stickerMessage.mediaKey.join(','));
    _0x4be4b8("Stick cmd save successfully");
  } else {
    _0x4be4b8("mention a sticker");
  }
});
const a49_0x3078f7 = {
  "nomCom": "delcmd",
  "categorie": "stickcmd",
  "desc": "delete a stick command"
};
a49_0x30ad50(a49_0x3078f7, async (_0x2d3cfc, _0x13bcfc, _0x542e64) => {
  const {
    ms: _0x5b36f7,
    arg: _0x132f02,
    repondre: _0x23be00,
    superUser: _0x371a9d
  } = _0x542e64;
  if (!_0x371a9d) {
    _0x23be00("only Mods can use this command");
    return;
  }
  if (!_0x132f02 || !_0x132f02[0x0]) {
    _0x23be00("put the name of the command that you want to delete");
    return;
  }
  const _0x35642a = _0x132f02[0x0];
  try {
    await a49_0x556bf4(_0x35642a);
    _0x23be00("the commande " + _0x35642a + " is deleted successfully.");
  } catch {
    _0x23be00("the command " + _0x35642a + " don't existe");
  }
});
const a49_0x55aabc = {
  "nomCom": "allcmd",
  "categorie": "stickcmd",
  "desc": "get all stick command"
};
a49_0x30ad50(a49_0x55aabc, async (_0x2f00ea, _0x579881, _0x31cde3) => {
  const {
    repondre: _0x3f39a9,
    superUser: _0x309914
  } = _0x31cde3;
  if (!_0x309914) {
    _0x3f39a9("only Mods can use this command");
    return;
  }
  const _0x3b9cd2 = await a49_0x5a69a8();
  if (_0x3b9cd2.length > 0x0) {
    const _0x170dbd = _0x3b9cd2.map(_0xb0a521 => _0xb0a521.cmd.split(" ")[0x0]).join("\n");
    _0x3f39a9("*List of all stickcmd :*\n " + _0x170dbd);
  } else {
    _0x3f39a9("No stickcmd save");
  }
});