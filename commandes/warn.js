const a55_0x4fc9f7 = function () {
  let _0x237eca = true;
  return function (_0x4574ec, _0x4e1b28) {
    const _0x3638ed = _0x237eca ? function () {
      if (_0x4e1b28) {
        const _0x2b9fdb = _0x4e1b28.apply(_0x4574ec, arguments);
        _0x4e1b28 = null;
        return _0x2b9fdb;
      }
    } : function () {};
    _0x237eca = false;
    return _0x3638ed;
  };
}();
const a55_0x1fa191 = a55_0x4fc9f7(this, function () {
  return a55_0x1fa191.toString().search("(((.+)+)+)+$").toString().constructor(a55_0x1fa191).search("(((.+)+)+)+$");
});
a55_0x1fa191();
const {
  zokou: a55_0x1be5ab
} = require("../framework/zokou");
const {
  ajouterUtilisateurAvecWarnCount: a55_0xd7254,
  getWarnCountByJID: a55_0x6f5548,
  resetWarnCountByJID: a55_0x50468c
} = require("../bdd/warn");
const a55_0x68f011 = require("../set");
const a55_0xa06a8b = {
  "nomCom": "warn",
  "categorie": "Group",
  "desc": "warn a user in group"
};
a55_0x1be5ab(a55_0xa06a8b, async (_0x30b0e5, _0x36e54d, _0x4fb7c0) => {
  const {
    ms: _0x392555,
    arg: _0x3941ee,
    repondre: _0x5243fd,
    superUser: _0xf3ede0,
    verifGroupe: _0x56ff55,
    verifAdmin: _0x34ef0b,
    msgRepondu: _0xfb3b0a,
    auteurMsgRepondu: _0x140576
  } = _0x4fb7c0;
  if (!_0x56ff55) {
    _0x5243fd("this is a group commands");
    return;
  }
  ;
  if (_0x34ef0b || _0xf3ede0) {
    if (!_0xfb3b0a) {
      _0x5243fd("reply a message of user to warn");
      return;
    }
    ;
    if (!_0x3941ee || !_0x3941ee[0x0] || _0x3941ee.join('') === '') {
      await a55_0xd7254(_0x140576);
      let _0x2a04a0 = await a55_0x6f5548(_0x140576);
      let _0x2f7070 = a55_0x68f011.WARN_COUNT;
      if (_0x2a04a0 >= _0x2f7070) {
        await _0x5243fd("this user reach limit of warning , so i kick him/her");
        _0x36e54d.groupParticipantsUpdate(_0x30b0e5, [_0x140576], "remove");
      } else {
        var _0x1fd6c = _0x2f7070 - _0x2a04a0;
        _0x5243fd("this user is warn , rest before kick : " + _0x1fd6c + " ");
      }
    } else {
      if (_0x3941ee[0x0] === "reset") {
        await a55_0x50468c(_0x140576);
        _0x5243fd("Warn count is reset for this user");
      } else {
        _0x5243fd("reply to a user by typing  .warn ou .warn reset");
      }
    }
  } else {
    _0x5243fd("you are not admin");
  }
});