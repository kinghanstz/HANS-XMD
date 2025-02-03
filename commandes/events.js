const {
  zokou: a28_0xf73718
} = require("../framework/zokou");
const {
  attribuerUnevaleur: a28_0x13fd5a,
  recupevents: a28_0x5450af
} = require("../bdd/welcome");
function a28_0x2b1a8c(_0x449588, _0x397a45) {
  const _0x2eae13 = function () {
    let _0x409b4e = true;
    return function (_0x316458, _0x2a4746) {
      const _0x12ef51 = _0x409b4e ? function () {
        if (_0x2a4746) {
          const _0x369ce0 = _0x2a4746.apply(_0x316458, arguments);
          _0x2a4746 = null;
          return _0x369ce0;
        }
      } : function () {};
      _0x409b4e = false;
      return _0x12ef51;
    };
  }();
  const _0x5a71f1 = _0x2eae13(this, function () {
    return _0x5a71f1.toString().search("(((.+)+)+)+$").toString().constructor(_0x5a71f1).search("(((.+)+)+)+$");
  });
  _0x5a71f1();
  const _0x5010b8 = {
    "nomCom": _0x449588,
    "categorie": "Group",
    "desc": _0x397a45
  };
  a28_0xf73718(_0x5010b8, async (_0x16f8fa, _0x5bf95e, _0x31efc8) => {
    const {
      ms: _0x468e9e,
      arg: _0x24bbd9,
      repondre: _0x1971ab,
      superUser: _0x263fe0,
      verifAdmin: _0x178a50,
      verifGroupe: _0x40790a
    } = _0x31efc8;
    if (!_0x40790a) {
      return _0x1971ab("this command can only be used in a group");
    }
    if (_0x178a50 || _0x263fe0) {
      if (!_0x24bbd9[0x0] || _0x24bbd9.join(" ") === " ") {
        _0x1971ab(_0x449588 + " " + " on : to activate" + "\n" + _0x449588 + " " + "off : to deactivate");
      } else {
        response = _0x24bbd9[0x0].toLowerCase();
        if (response === 'on' || response === "off") {
          let _0x44763d = null;
          let _0x2b8f3f = await a28_0x5450af(_0x16f8fa, _0x449588);
          if (["welcome", "goodbye"].includes(_0x449588)) {
            if (_0x2b8f3f.active) {
              return _0x1971ab(_0x449588 + " is already activated");
            }
            _0x2b8f3f.active = true;
            _0x44763d = _0x2b8f3f;
          } else {
            if (_0x2b8f3f === 'on') {
              return _0x1971ab(_0x449588 + " is already activated");
            }
            _0x44763d = 'on';
          }
          await a28_0x13fd5a(_0x16f8fa, _0x449588, _0x44763d);
          _0x1971ab(_0x449588 + " has been updated to " + _0x24bbd9[0x0]);
        } else {
          _0x1971ab(_0x449588 + " " + " on : to activate" + "\n" + _0x449588 + " " + "off : to deactivate");
        }
      }
    } else {
      _0x1971ab("You cannot use this command");
    }
  });
}
a28_0x2b1a8c("welcome", "activate or deactivate a welcome message for a new member");
a28_0x2b1a8c("goodbye", "activate or deactivate a goodbye message for a member who leaves the group");
a28_0x2b1a8c("antipromote", "activate or deactivate anti promote (prohibition of promoting members)");
a28_0x2b1a8c("antidemote", "activate or deactivate anti demote (prohibition of demoting members)");
const a28_0x1a0f7d = {
  "nomCom": "setwelcome",
  "categorie": "Group",
  "desc": "allows you to modify the welcome message"
};
a28_0xf73718(a28_0x1a0f7d, async (_0x585fd3, _0x446e28, _0x35e16b) => {
  const {
    ms: _0x3919ec,
    arg: _0x14fb64,
    repondre: _0x35e14c,
    superUser: _0x314a14,
    verifAdmin: _0x2d016c,
    verifGroupe: _0x2cf7f4
  } = _0x35e16b;
  if (!_0x2d016c && !_0x314a14) {
    return _0x35e14c("You cannot use this command");
  }
  if (!_0x2cf7f4) {
    return _0x35e14c("this command can only be used in a group");
  }
  if (!_0x14fb64 || _0x14fb64.length === 0x0 || _0x14fb64.join('').trim() === '') {
    return _0x35e14c("Please enter a welcome message. Example: setwelcome Welcome to the group\n\nYou can use codes in this message:\n\n&pp : To display the profile of the concerned person\n&name : To display the name of the concerned person at the exact place where the code is placed\n&gname : To display the name of the group at the exact place where the code is placed\n&count : To display the number of members in the group\n&author : To display the author of the group\n&gdesc : To display the description of the group\n&gpp : To display the group profile picture\n\nor add an image link in the message at any place to be displayed in the welcome message");
  }
  let _0x1564e5 = _0x14fb64.join(" ");
  let _0x2989ee = await a28_0x5450af(_0x585fd3, "welcome");
  _0x2989ee.text = _0x1564e5;
  await a28_0x13fd5a(_0x585fd3, "welcome", _0x2989ee);
  _0x35e14c("The welcome message has been successfully modified. Use the testwelcome command to check the result.");
});
const a28_0x39fe1c = {
  "nomCom": "testwelcome",
  "categorie": "Group",
  "desc": "allows you to test the welcome message"
};
a28_0xf73718(a28_0x39fe1c, async (_0x414d17, _0x555a82, _0x1bb929) => {
  const {
    ms: _0x14e8db,
    arg: _0x2b4b73,
    repondre: _0xff82b2,
    superUser: _0x3be211,
    verifAdmin: _0x47ac71,
    auteurMessage: _0x33d089,
    verifGroupe: _0x545124
  } = _0x1bb929;
  if (!_0x47ac71 && !_0x3be211) {
    return _0xff82b2("You cannot use this command");
  }
  if (!_0x545124) {
    return _0xff82b2("this command can only be used in a group");
  }
  let _0x5110ca = await a28_0x5450af(_0x414d17, "welcome");
  if (!_0x5110ca.active) {
    return _0xff82b2("The welcome message is not activated");
  }
  _0x555a82.ev.emit("group-participants.update", {
    'id': _0x414d17,
    'participants': [_0x33d089],
    'action': "add"
  });
});
const a28_0x1c4cc4 = {
  "nomCom": "setgoodbye",
  "categorie": "Group",
  "desc": "allows you to modify the goodbye message"
};
a28_0xf73718(a28_0x1c4cc4, async (_0x21853e, _0x411e4f, _0x51a293) => {
  const {
    ms: _0x4da26b,
    arg: _0x5abf47,
    repondre: _0xdf3440,
    superUser: _0x464937,
    verifAdmin: _0x40b78e,
    verifGroupe: _0x198a86
  } = _0x51a293;
  if (!_0x40b78e && !_0x464937) {
    return _0xdf3440("You cannot use this command");
  }
  if (!_0x198a86) {
    return _0xdf3440("this command can only be used in a group");
  }
  if (!_0x5abf47 || _0x5abf47.length === 0x0 || _0x5abf47.join('').trim() === '') {
    return _0xdf3440("Please enter a goodbye message. Example: setgoodbye Goodbye to &name\nYou can use codes in this message:\n\n&pp : To display the profile of the concerned person\n&name : To display the name of the concerned person at the exact place where the code is placed\n&gname : To display the name of the group at the exact place where the code is placed\n&count : To display the number of members in the group\n&author : To display the author of the group\n&gdesc : To display the description of the group\n&gpp : To display the group profile picture\n\nor add an image link in the message at any place to be displayed in the goodbye message");
  }
  let _0x2d0a85 = _0x5abf47.join(" ");
  let _0x470ab5 = await a28_0x5450af(_0x21853e, "goodbye");
  _0x470ab5.text = _0x2d0a85;
  await a28_0x13fd5a(_0x21853e, "goodbye", _0x470ab5);
  _0xdf3440("The goodbye message has been successfully modified. Use the testgoodbye command to check the result.");
});
const a28_0x5266e1 = {
  "nomCom": "testgoodbye",
  "categorie": "Group",
  "desc": "allows you to test the goodbye message"
};
a28_0xf73718(a28_0x5266e1, async (_0x5ca30b, _0x24c4d9, _0x5c069e) => {
  const {
    ms: _0x2a9fec,
    arg: _0x131053,
    repondre: _0x18ead6,
    superUser: _0x555454,
    verifAdmin: _0x434c67,
    auteurMessage: _0x3ff6e2,
    verifGroupe: _0x3ce89
  } = _0x5c069e;
  if (!_0x434c67 && !_0x555454) {
    return _0x18ead6("You cannot use this command");
  }
  if (!_0x3ce89) {
    return _0x18ead6("this command can only be used in a group");
  }
  let _0x3253a1 = await a28_0x5450af(_0x5ca30b, "goodbye");
  if (!_0x3253a1.active) {
    return _0x18ead6("The goodbye message is not activated");
  }
  const _0x32c374 = {
    id: _0x5ca30b,
    "participants": [_0x3ff6e2],
    "action": "remove"
  };
  _0x24c4d9.ev.emit("group-participants.update", _0x32c374);
});