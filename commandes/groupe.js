const a32_0x2cffe5 = function () {
  let _0x2aa6e9 = true;
  return function (_0x592d26, _0x309c9a) {
    const _0x287eb5 = _0x2aa6e9 ? function () {
      if (_0x309c9a) {
        const _0x570b54 = _0x309c9a.apply(_0x592d26, arguments);
        _0x309c9a = null;
        return _0x570b54;
      }
    } : function () {};
    _0x2aa6e9 = false;
    return _0x287eb5;
  };
}();
const a32_0x2c355e = a32_0x2cffe5(this, function () {
  return a32_0x2c355e.toString().search("(((.+)+)+)+$").toString().constructor(a32_0x2c355e).search("(((.+)+)+)+$");
});
a32_0x2c355e();
const {
  zokou: a32_0x405994
} = require("../framework/zokou");
const {
  Sticker: a32_0x47fa4b,
  StickerTypes: a32_0x5c165b
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid: a32_0x5618ff,
  mettreAJourAction: a32_0x87b977,
  verifierEtatJid: a32_0x135a51
} = require("../bdd/antilien");
const {
  atbajouterOuMettreAJourJid: a32_0x1c8341,
  atbverifierEtatJid: a32_0x1e5fa8,
  atbmettreAJourAction: a32_0x150f17
} = require("../bdd/antibot");
const {
  search: a32_0x55d592,
  download: a32_0x497b68
} = require("aptoide_scrapper_fixed");
const a32_0x1be539 = require("fs-extra");
const a32_0x255b19 = require("../set");
const {
  default: a32_0x4334c4
} = require("axios");
const {
  generatepp: a32_0x51773b
} = require("../framework/mesfonctions");
const {
  exec: a32_0x1f8f17
} = require("child_process");
const a32_0x1ca57f = {
  "nomCom": "tagall",
  "categorie": "Group",
  "reaction": '📣',
  "desc": "mention all group members",
  "alias": ["tag"]
};
a32_0x405994(a32_0x1ca57f, async (_0x195414, _0x5d6698, _0x3657c8) => {
  const {
    ms: _0x1c9126,
    repondre: _0x3b0aa5,
    arg: _0x110c4b,
    verifGroupe: _0x13c228,
    nomGroupe: _0x4418b4,
    infosGroupe: _0x3cf8da,
    nomAuteurMessage: _0x14ff76,
    verifAdmin: _0x2a8f49,
    superUser: _0x37e7d9
  } = _0x3657c8;
  if (!_0x13c228) {
    _0x3b0aa5("✋🏿 ✋🏿this command is reserved for groups ❌");
    return;
  }
  if (!_0x110c4b || _0x110c4b === " ") {
    mess = "Aucun Message";
  } else {
    mess = _0x110c4b.join(" ");
  }
  ;
  let _0x38da46 = _0x13c228 ? await _0x3cf8da.participants : '';
  var _0x18ab4b = '';
  _0x18ab4b += "========================\n  \n        🌟 *Hans-Md* 🌟\n========================\n\n👥 Group : " + _0x4418b4 + " 🚀 \n👤 Autor : *" + _0x14ff76 + "* 👋 \n📜 Message : *" + mess + "* 📝\n========================\n\n\n\n\n";
  let _0x278110 = ['🦴', '👀', "😮‍💨", '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', "🙏🏿", '⛔️', '$', '😟', '🥵', '🐅'];
  let _0x2f6221 = Math.floor(Math.random() * (_0x278110.length - 0x1));
  for (const _0x4bd88f of _0x38da46) {
    _0x18ab4b += _0x278110[_0x2f6221] + "      @" + _0x4bd88f.id.split('@')[0x0] + "\n";
  }
  if (_0x2a8f49 || _0x37e7d9) {
    const _0x4d4b7c = {
      "quoted": _0x1c9126
    };
    _0x5d6698.sendMessage(_0x195414, {
      'text': _0x18ab4b,
      'mentions': _0x38da46.map(_0x502a90 => _0x502a90.id)
    }, _0x4d4b7c);
  } else {
    _0x3b0aa5("command reserved for admins");
  }
});
const a32_0x5ac31a = {
  "nomCom": "link",
  "categorie": "Group",
  "reaction": '🙋',
  "desc": "get invite group link ; need admin"
};
a32_0x405994(a32_0x5ac31a, async (_0x54ccf9, _0x39915d, _0x5825d6) => {
  const {
    repondre: _0x3cb5ad,
    nomGroupe: _0x19519a,
    nomAuteurMessage: _0x33b825,
    verifGroupe: _0x1a16b8
  } = _0x5825d6;
  if (!_0x1a16b8) {
    _0x3cb5ad("wait bro , you want the link to my dm?");
    return;
  }
  ;
  var _0x59416b = await _0x39915d.groupInviteCode(_0x54ccf9);
  var _0x6ea344 = "https://chat.whatsapp.com/" + _0x59416b;
  let _0x446244 = "hello " + _0x33b825 + " , here is the group link " + _0x19519a + " \n\n\nLien :" + _0x6ea344;
  _0x3cb5ad(_0x446244);
});
const a32_0x2eeedc = {
  "nomCom": "promote",
  "categorie": "Group",
  "reaction": "👨🏿‍💼",
  "desc": "promote an user to admin of group",
  "alias": ['pm']
};
a32_0x405994(a32_0x2eeedc, async (_0x461f0f, _0x46d532, _0x34ac49) => {
  let {
    repondre: _0x330a27,
    msgRepondu: _0x275b5f,
    infosGroupe: _0x38a13f,
    auteurMsgRepondu: _0x156827,
    verifGroupe: _0x1ce763,
    auteurMessage: _0x245f97,
    superUser: _0x27f793,
    idBot: _0xe0300e
  } = _0x34ac49;
  let _0x24bed6 = _0x1ce763 ? await _0x38a13f.participants : '';
  if (!_0x1ce763) {
    return _0x330a27("For groups only");
  }
  const _0xe87151 = _0xa364e1 => {
    for (const _0x2c420d of _0x24bed6) {
      if (_0x2c420d.id !== _0xa364e1) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x1252d7 = _0x554680 => {
    let _0x1238f = [];
    for (m of _0x554680) {
      if (m.admin == null) {
        continue;
      }
      _0x1238f.push(m.id);
    }
    return _0x1238f;
  };
  const _0x584012 = _0x1ce763 ? _0x1252d7(_0x24bed6) : '';
  let _0x548c40 = _0x1ce763 ? _0x584012.includes(_0x156827) : false;
  let _0xfc156d = _0xe87151(_0x156827);
  let _0x30d7be = _0x1ce763 ? _0x584012.includes(_0x245f97) : false;
  zkad = _0x1ce763 ? _0x584012.includes(_0xe0300e) : false;
  try {
    if (_0x30d7be || _0x27f793) {
      if (_0x275b5f) {
        if (zkad) {
          if (_0xfc156d) {
            if (_0x548c40 == false) {
              var _0x1478b0 = "🎊🎊🎊  @" + _0x156827.split('@')[0x0] + " rose in rank.\n\n                      he/she has been named group administrator.";
              await _0x46d532.groupParticipantsUpdate(_0x461f0f, [_0x156827], "promote");
              const _0x592863 = {
                "text": _0x1478b0,
                "mentions": [_0x156827]
              };
              _0x46d532.sendMessage(_0x461f0f, _0x592863);
            } else {
              return _0x330a27("This member is already an administrator of the group.");
            }
          } else {
            return _0x330a27("This user is not part of the group.");
          }
        } else {
          return _0x330a27("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x330a27("please tag the member to be nominated");
      }
    } else {
      return _0x330a27("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x542716) {
    _0x330a27("oups " + _0x542716);
  }
});
const a32_0x539cf0 = {
  "nomCom": "demote",
  "categorie": "Group",
  "reaction": "👨🏿‍💼",
  "desc": "demote an user to admin",
  "alias": ['dm']
};
a32_0x405994(a32_0x539cf0, async (_0x2124be, _0x3f4e8f, _0x4076b7) => {
  let {
    repondre: _0x286605,
    msgRepondu: _0x3aad2c,
    infosGroupe: _0x265bf6,
    auteurMsgRepondu: _0xb81a01,
    verifGroupe: _0x363d25,
    auteurMessage: _0x1c3fc9,
    superUser: _0x5e8fa8,
    idBot: _0x26cb0e
  } = _0x4076b7;
  let _0x2f68af = _0x363d25 ? await _0x265bf6.participants : '';
  if (!_0x363d25) {
    return _0x286605("For groups only");
  }
  const _0x849fb8 = _0x3a4571 => {
    for (const _0x1282e9 of _0x2f68af) {
      if (_0x1282e9.id !== _0x3a4571) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x59699d = _0xbcd6e7 => {
    let _0xede363 = [];
    for (m of _0xbcd6e7) {
      if (m.admin == null) {
        continue;
      }
      _0xede363.push(m.id);
    }
    return _0xede363;
  };
  const _0x546b23 = _0x363d25 ? _0x59699d(_0x2f68af) : '';
  let _0x17d843 = _0x363d25 ? _0x546b23.includes(_0xb81a01) : false;
  let _0x597f9c = _0x849fb8(_0xb81a01);
  let _0x4daaab = _0x363d25 ? _0x546b23.includes(_0x1c3fc9) : false;
  zkad = _0x363d25 ? _0x546b23.includes(_0x26cb0e) : false;
  try {
    if (_0x4daaab || _0x5e8fa8) {
      if (_0x3aad2c) {
        if (zkad) {
          if (_0x597f9c) {
            if (_0x17d843 == false) {
              _0x286605("This member is not a group administrator.");
            } else {
              var _0x422f75 = '@' + _0xb81a01.split('@')[0x0] + " was removed from his position as a group administrator\n";
              await _0x3f4e8f.groupParticipantsUpdate(_0x2124be, [_0xb81a01], "demote");
              const _0x74955a = {
                "text": _0x422f75,
                "mentions": [_0xb81a01]
              };
              _0x3f4e8f.sendMessage(_0x2124be, _0x74955a);
            }
          } else {
            return _0x286605("This user is not part of the group.");
          }
        } else {
          return _0x286605("Sorry I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x286605("please tag the member to be removed");
      }
    } else {
      return _0x286605("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x1012e5) {
    _0x286605("oups " + _0x1012e5);
  }
});
const a32_0x560474 = {
  "nomCom": "remove",
  "categorie": "Group",
  "reaction": "👨🏿‍💼",
  "desc": "remove user form a group",
  "alias": ['rm']
};
a32_0x405994(a32_0x560474, async (_0x38ac5a, _0x50d820, _0x5546f3) => {
  let {
    repondre: _0xa4854a,
    msgRepondu: _0x1147e7,
    infosGroupe: _0x4a0682,
    auteurMsgRepondu: _0x2d343c,
    verifGroupe: _0x5996bd,
    nomAuteurMessage: _0x228cc7,
    auteurMessage: _0x5a323d,
    superUser: _0x51ce85,
    idBot: _0x26f110
  } = _0x5546f3;
  let _0x4458d3 = _0x5996bd ? await _0x4a0682.participants : '';
  if (!_0x5996bd) {
    return _0xa4854a("for groups only");
  }
  const _0x546b42 = _0x514ae1 => {
    for (const _0x3b4e86 of _0x4458d3) {
      if (_0x3b4e86.id !== _0x514ae1) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x2ac5a5 = _0x6af84 => {
    let _0x577ff1 = [];
    for (m of _0x6af84) {
      if (m.admin == null) {
        continue;
      }
      _0x577ff1.push(m.id);
    }
    return _0x577ff1;
  };
  const _0x38ebb1 = _0x5996bd ? _0x2ac5a5(_0x4458d3) : '';
  let _0x40101e = _0x5996bd ? _0x38ebb1.includes(_0x2d343c) : false;
  let _0x351f23 = _0x546b42(_0x2d343c);
  let _0x4c9997 = _0x5996bd ? _0x38ebb1.includes(_0x5a323d) : false;
  zkad = _0x5996bd ? _0x38ebb1.includes(_0x26f110) : false;
  try {
    if (_0x4c9997 || _0x51ce85) {
      if (_0x1147e7) {
        if (zkad) {
          if (_0x351f23) {
            if (_0x40101e == false) {
              const _0x557f7d = {
                "pack": "Hans-Md",
                "author": _0x228cc7,
                "type": a32_0x5c165b.FULL,
                "categories": ['🤩', '🎉'],
                id: "12345",
                "quality": 0x32,
                "background": "#000000"
              };
              var _0x228a35 = new a32_0x47fa4b("https://raw.githubusercontent.com/djalega8000/Hans-Md/main/media/remover.gif", _0x557f7d);
              await _0x228a35.toFile("st.webp");
              var _0x59d7d1 = '@' + _0x2d343c.split('@')[0x0] + " was removed from the group.\n";
              await _0x50d820.groupParticipantsUpdate(_0x38ac5a, [_0x2d343c], "remove");
              const _0x1ad294 = {
                "text": _0x59d7d1,
                "mentions": [_0x2d343c]
              };
              _0x50d820.sendMessage(_0x38ac5a, _0x1ad294);
            } else {
              _0xa4854a("This member cannot be removed because he is an administrator of the group.");
            }
          } else {
            return _0xa4854a("This user is not part of the group.");
          }
        } else {
          return _0xa4854a("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0xa4854a("please tag the member to be removed");
      }
    } else {
      return _0xa4854a("Sorry I cannot perform this action because you are not an administrator of the group .");
    }
  } catch (_0x1b425a) {
    _0xa4854a("oups " + _0x1b425a);
  }
});
const a32_0x7ad480 = {
  "nomCom": "del",
  "categorie": "Group",
  "reaction": '🧹',
  "desc": "delete a message in group or your one message"
};
a32_0x405994(a32_0x7ad480, async (_0x480878, _0x203965, _0x8eb562) => {
  const {
    ms: _0x14c620,
    repondre: _0x3cc9e3,
    verifGroupe: _0x4cbaac,
    auteurMsgRepondu: _0x461186,
    idBot: _0x1db239,
    msgRepondu: _0x25f09c,
    verifAdmin: _0x294687,
    superUser: _0x201104
  } = _0x8eb562;
  if (!_0x25f09c) {
    _0x3cc9e3("Please mention the message to delete.");
    return;
  }
  if (_0x201104 && _0x461186 == _0x1db239) {
    if (_0x461186 == _0x1db239) {
      const _0xa594ac = {
        "remoteJid": _0x480878,
        "fromMe": true,
        id: _0x14c620.message.extendedTextMessage.contextInfo.stanzaId
      };
      const _0x17d879 = {
        "delete": _0xa594ac
      };
      await _0x203965.sendMessage(_0x480878, _0x17d879);
      return;
    }
  }
  if (_0x4cbaac) {
    if (_0x294687 || _0x201104) {
      try {
        const _0x560dce = {
          "remoteJid": _0x480878,
          id: _0x14c620.message.extendedTextMessage.contextInfo.stanzaId,
          "fromMe": false,
          "participant": _0x14c620.message.extendedTextMessage.contextInfo.participant
        };
        const _0x4f5655 = {
          "delete": _0x560dce
        };
        await _0x203965.sendMessage(_0x480878, _0x4f5655);
        return;
      } catch (_0x5e5b6a) {
        _0x3cc9e3("I need admin rights.");
      }
    } else {
      _0x3cc9e3("Sorry, you are not an administrator of the group.");
    }
  }
});
const a32_0x546ee1 = {
  "nomCom": "info",
  "categorie": "Group",
  "desc": "Get information about a group"
};
a32_0x405994(a32_0x546ee1, async (_0x25a243, _0x1da645, _0x232ccb) => {
  const {
    ms: _0x29ea5e,
    repondre: _0x34df94,
    verifGroupe: _0x59f2ef
  } = _0x232ccb;
  if (!_0x59f2ef) {
    _0x34df94("order reserved for the group only");
    return;
  }
  ;
  try {
    ppgroup = await _0x1da645.profilePictureUrl(_0x25a243, "image");
  } catch {
    ppgroup = a32_0x255b19.IMAGE_MENU;
  }
  const _0x5897d4 = await _0x1da645.groupMetadata(_0x25a243);
  const _0x200e0c = {
    url: ppgroup
  };
  const _0x4c1d8f = {
    "image": _0x200e0c,
    "caption": "*━━━━『Info du groupe』━━━━*\n\n*🎐Name:* " + _0x5897d4.subject + "\n\n*🔩Group's ID:* " + _0x25a243 + "\n\n*🔍Desc:* \n\n" + _0x5897d4.desc
  };
  const _0x545f96 = {
    "quoted": _0x29ea5e
  };
  _0x1da645.sendMessage(_0x25a243, _0x4c1d8f, _0x545f96);
});
const a32_0x3d0e08 = {
  "nomCom": "antilink",
  "categorie": "Group",
  "reaction": '🔗',
  "desc": "Enable or diable anti-link feature for the group",
  "alias": ["antil"]
};
a32_0x405994(a32_0x3d0e08, async (_0x387a0f, _0x200efc, _0xaa7e70) => {
  var {
    repondre: _0x126f30,
    arg: _0x359416,
    verifGroupe: _0x4c5e33,
    superUser: _0x5102b6,
    verifAdmin: _0x27594b
  } = _0xaa7e70;
  if (!_0x4c5e33) {
    return _0x126f30("*for groups only*");
  }
  if (_0x5102b6 || _0x27594b) {
    const _0x2542de = await a32_0x135a51(_0x387a0f);
    try {
      if (!_0x359416 || !_0x359416[0x0] || _0x359416.join('').trim() === '') {
        _0x126f30("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
        return;
      }
      ;
      if (_0x359416[0x0] === 'on') {
        if (_0x2542de) {
          _0x126f30("the antilink is already activated for this group");
        } else {
          await a32_0x5618ff(_0x387a0f, "oui");
          _0x126f30("the antilink is activated successfully");
        }
      } else {
        if (_0x359416[0x0] === "off") {
          if (_0x2542de) {
            await a32_0x5618ff(_0x387a0f, "non");
            _0x126f30("The antilink has been successfully deactivated");
          } else {
            _0x126f30("antilink is not activated for this group");
          }
        } else {
          if (_0x359416.join('').split('/')[0x0] === "action") {
            let _0x55a60d = _0x359416.join('').split('/')[0x1].toLowerCase();
            if (_0x55a60d == "remove" || _0x55a60d == "warn" || _0x55a60d == "delete") {
              await a32_0x87b977(_0x387a0f, _0x55a60d);
              _0x126f30("The anti-link action has been updated to " + _0x359416.join('').split('/')[0x1]);
            } else {
              _0x126f30("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x126f30("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
          }
        }
      }
    } catch (_0x4beb30) {
      _0x126f30(_0x4beb30);
    }
  } else {
    _0x126f30("You are not entitled to this order");
  }
});
const a32_0x51ed08 = {
  "nomCom": "antibot",
  "categorie": "Group",
  "reaction": '🔗',
  "desc": "Activate anti-bot measures for the group",
  "alias": ["antib"]
};
a32_0x405994(a32_0x51ed08, async (_0x3259da, _0x1dd713, _0x4b5f6b) => {
  var {
    repondre: _0x29ac5b,
    arg: _0x3ab24c,
    verifGroupe: _0x240e99,
    superUser: _0x3d51fc,
    verifAdmin: _0x136c3d
  } = _0x4b5f6b;
  if (!_0x240e99) {
    return _0x29ac5b("*for groups only*");
  }
  if (_0x3d51fc || _0x136c3d) {
    const _0x5247d3 = await a32_0x1e5fa8(_0x3259da);
    try {
      if (!_0x3ab24c || !_0x3ab24c[0x0] || _0x3ab24c.join('').trim() === '') {
        _0x29ac5b("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
        return;
      }
      ;
      if (_0x3ab24c[0x0] === 'on') {
        if (_0x5247d3) {
          _0x29ac5b("the antibot is already activated for this group");
        } else {
          await a32_0x1c8341(_0x3259da, "oui");
          _0x29ac5b("the antibot is successfully activated");
        }
      } else {
        if (_0x3ab24c[0x0] === "off") {
          if (_0x5247d3) {
            await a32_0x1c8341(_0x3259da, "non");
            _0x29ac5b("The antibot has been successfully deactivated");
          } else {
            _0x29ac5b("antibot is not activated for this group");
          }
        } else {
          if (_0x3ab24c.join('').split('/')[0x0] === "action") {
            let _0xe33beb = _0x3ab24c.join('').split('/')[0x1].toLowerCase();
            if (_0xe33beb == "remove" || _0xe33beb == "warn" || _0xe33beb == "delete") {
              await a32_0x150f17(_0x3259da, _0xe33beb);
              _0x29ac5b("The anti-bot action has been updated to " + _0x3ab24c.join('').split('/')[0x1]);
            } else {
              _0x29ac5b("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x29ac5b("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
          }
        }
      }
    } catch (_0x2db177) {
      _0x29ac5b(_0x2db177);
    }
  } else {
    _0x29ac5b("You are not entitled to this order");
  }
});
const a32_0x47d3b6 = {
  "nomCom": "group",
  "categorie": "Group",
  "desc": "mute or unmute a group",
  "alias": ['gp']
};
a32_0x405994(a32_0x47d3b6, async (_0x4b7aa2, _0x28f8b0, _0x1cf2d4) => {
  const {
    repondre: _0x4aa345,
    verifGroupe: _0x25aea9,
    verifAdmin: _0x1d19ac,
    superUser: _0x120a25,
    arg: _0x353640
  } = _0x1cf2d4;
  if (!_0x25aea9) {
    _0x4aa345("order reserved for group only");
    return;
  }
  ;
  if (_0x120a25 || _0x1d19ac) {
    if (!_0x353640[0x0]) {
      _0x4aa345("Instructions:\n\nType group open or close");
      return;
    }
    const _0x13a519 = _0x353640.join(" ");
    switch (_0x13a519) {
      case "open":
        await _0x28f8b0.groupSettingUpdate(_0x4b7aa2, "not_announcement");
        _0x4aa345("group open");
        break;
      case "close":
        await _0x28f8b0.groupSettingUpdate(_0x4b7aa2, "announcement");
        _0x4aa345("Group close successfully");
        break;
      default:
        _0x4aa345("Please don't invent an option");
    }
  } else {
    _0x4aa345("order reserved for the administratorr");
    return;
  }
});
const a32_0x11a634 = {
  "nomCom": "left",
  "categorie": "Mods",
  "desc": "left a group"
};
a32_0x405994(a32_0x11a634, async (_0x1b17c6, _0x215819, _0x22110d) => {
  const {
    repondre: _0x4eaf7d,
    verifGroupe: _0xa5ec10,
    superUser: _0x1cf4c7
  } = _0x22110d;
  if (!_0xa5ec10) {
    _0x4eaf7d("order reserved for group only");
    return;
  }
  ;
  if (!_0x1cf4c7) {
    _0x4eaf7d("command reserved for the bot owner");
    return;
  }
  await _0x4eaf7d("sayonnara");
  _0x215819.groupLeave(_0x1b17c6);
});
const a32_0x3bdb5c = {
  "nomCom": "gname",
  "categorie": "Group",
  "desc": "edit group name"
};
a32_0x405994(a32_0x3bdb5c, async (_0x3807f3, _0x389a4e, _0x48899b) => {
  const {
    arg: _0x5a310b,
    repondre: _0x22ebff,
    verifAdmin: _0x14cad1
  } = _0x48899b;
  if (!_0x14cad1) {
    _0x22ebff("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x5a310b[0x0]) {
    _0x22ebff("Please enter the group name");
    return;
  }
  ;
  const _0x2d06ee = _0x5a310b.join(" ");
  await _0x389a4e.groupUpdateSubject(_0x3807f3, _0x2d06ee);
  _0x22ebff("group name refresh: *" + _0x2d06ee + '*');
});
const a32_0x2f9a8d = {
  "nomCom": "gdesc",
  "categorie": "Group",
  "desc": "edit group description"
};
a32_0x405994(a32_0x2f9a8d, async (_0x1e76fb, _0x12536e, _0x490e05) => {
  const {
    arg: _0x1d00c9,
    repondre: _0x40c8bf,
    verifAdmin: _0x25f64a
  } = _0x490e05;
  if (!_0x25f64a) {
    _0x40c8bf("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x1d00c9[0x0]) {
    _0x40c8bf("Please enter the group description");
    return;
  }
  ;
  const _0xeaf089 = _0x1d00c9.join(" ");
  await _0x12536e.groupUpdateDescription(_0x1e76fb, _0xeaf089);
  _0x40c8bf("group description update: *" + _0xeaf089 + '*');
});
const a32_0x2a6c80 = {
  "nomCom": "gpp",
  "categorie": "Group",
  "desc": "edit group picture"
};
a32_0x405994(a32_0x2a6c80, async (_0x4ff315, _0x50d4e2, _0x24c040) => {
  const {
    repondre: _0x486eff,
    msgRepondu: _0x3f03b5,
    verifAdmin: _0x2d6bbf
  } = _0x24c040;
  if (!_0x2d6bbf) {
    _0x486eff("order reserved for administrators of the group");
    return;
  }
  ;
  if (_0x3f03b5.imageMessage) {
    const _0x28ee32 = await _0x50d4e2.downloadAndSaveMediaMessage(_0x3f03b5.imageMessage);
    let _0x3407c6 = await a32_0x51773b(_0x28ee32);
    console.log(_0x3407c6);
    a32_0x1be539.writeFile("monpdp.jpg", _0x3407c6.img, async _0x308dae => {
      if (_0x308dae) {
        console.log(_0x308dae);
      } else {
        const _0x218298 = {
          "url": "monpdp.jpg"
        };
        _0x50d4e2.updateProfilePicture(_0x4ff315, _0x218298).then(() => {
          const _0x5b234c = {
            "text": "Group pfp changed"
          };
          _0x50d4e2.sendMessage(_0x4ff315, _0x5b234c);
          a32_0x1be539.unlinkSync(_0x28ee32);
        });
      }
    });
  } else {
    _0x486eff("Please mention an image");
  }
});
const a32_0x2d46e7 = {
  "nomCom": "hidetag",
  "categorie": "Group",
  "reaction": '🎤',
  "desc": "tag all members in a group but hidden"
};
a32_0x405994(a32_0x2d46e7, async (_0x2b08fc, _0x39d5e1, _0x4ad0a7) => {
  const {
    repondre: _0x2bc968,
    msgRepondu: _0x1ffe43,
    verifGroupe: _0x57470f,
    arg: _0x195db7,
    verifAdmin: _0x4c2484,
    superUser: _0x51d4a2
  } = _0x4ad0a7;
  if (!_0x57470f) {
    _0x2bc968("This command is only allowed in groups.");
  }
  ;
  if (_0x4c2484 || _0x51d4a2) {
    let _0x1fe0f1 = await _0x39d5e1.groupMetadata(_0x2b08fc);
    let _0xbec7f6 = [];
    for (const _0xcc263 of _0x1fe0f1.participants) {
      _0xbec7f6.push(_0xcc263.id);
    }
    if (_0x1ffe43) {
      console.log(_0x1ffe43);
      let _0xadf2a2;
      if (_0x1ffe43.imageMessage) {
        let _0x432cfd = await _0x39d5e1.downloadAndSaveMediaMessage(_0x1ffe43.imageMessage);
        const _0x340206 = {
          url: _0x432cfd
        };
        const _0xb87824 = {
          "image": _0x340206,
          "caption": _0x1ffe43.imageMessage.caption,
          "mentions": _0xbec7f6
        };
        _0xadf2a2 = _0xb87824;
      } else {
        if (_0x1ffe43.videoMessage) {
          let _0x6d5756 = await _0x39d5e1.downloadAndSaveMediaMessage(_0x1ffe43.videoMessage);
          const _0x365113 = {
            url: _0x6d5756
          };
          const _0x4edbae = {
            "video": _0x365113,
            "caption": _0x1ffe43.videoMessage.caption,
            "mentions": _0xbec7f6
          };
          _0xadf2a2 = _0x4edbae;
        } else {
          if (_0x1ffe43.audioMessage) {
            let _0x139c31 = await _0x39d5e1.downloadAndSaveMediaMessage(_0x1ffe43.audioMessage);
            const _0x1bc2d7 = {
              url: _0x139c31
            };
            const _0xaecede = {
              "audio": _0x1bc2d7,
              "mimetype": "audio/mp4",
              "mentions": _0xbec7f6
            };
            _0xadf2a2 = _0xaecede;
          } else {
            if (_0x1ffe43.stickerMessage) {
              let _0x22a1e3 = await _0x39d5e1.downloadAndSaveMediaMessage(_0x1ffe43.stickerMessage);
              const _0x37b07e = {
                "pack": "Zokou-tag",
                "type": a32_0x5c165b.CROPPED,
                "categories": ['🤩', '🎉'],
                id: "12345",
                "quality": 0x46,
                "background": "transparent"
              };
              let _0x57efe0 = new a32_0x47fa4b(_0x22a1e3, _0x37b07e);
              const _0x526d80 = await _0x57efe0.toBuffer();
              const _0x69b4af = {
                "sticker": _0x526d80,
                "mentions": _0xbec7f6
              };
              _0xadf2a2 = _0x69b4af;
            } else {
              const _0x1ae239 = {
                "text": _0x1ffe43.conversation,
                "mentions": _0xbec7f6
              };
              _0xadf2a2 = _0x1ae239;
            }
          }
        }
      }
      _0x39d5e1.sendMessage(_0x2b08fc, _0xadf2a2);
    } else {
      if (!_0x195db7 || !_0x195db7[0x0]) {
        _0x2bc968("Enter the text to announce or mention the message to announce");
        ;
        return;
      }
      ;
      _0x39d5e1.sendMessage(_0x2b08fc, {
        'text': _0x195db7.join(" "),
        'mentions': _0xbec7f6
      });
    }
  } else {
    _0x2bc968("Command reserved for administrators.");
  }
});
const a32_0x42016a = {
  "nomCom": "apk",
  "reaction": '✨',
  "categorie": "Search",
  "desc": "download applications from aptoid"
};
a32_0x405994(a32_0x42016a, async (_0x48c8f1, _0x5b31c3, _0x4b20d1) => {
  const {
    repondre: _0x2890b3,
    arg: _0x2debe8,
    ms: _0x1cf092
  } = _0x4b20d1;
  try {
    const _0x31ce40 = _0x2debe8.join(" ");
    if (!_0x31ce40) {
      return _0x2890b3("*Enter the name of the application to search for*");
    }
    const _0x467264 = await a32_0x55d592(_0x31ce40);
    if (_0x467264.length === 0x0) {
      return _0x2890b3("*can't find application, please enter another name*");
    }
    const _0x59093f = await a32_0x497b68(_0x467264[0x0].id);
    const _0x3e6887 = parseInt(_0x59093f.size);
    if (_0x3e6887 > 0x12c) {
      return _0x2890b3("The file exceeds 300 MB, unable to download.");
    }
    const _0x35cdd6 = _0x59093f.dllink;
    const _0x234814 = "『 *Hans-Md App* 』\n\n*Name :* " + _0x59093f.name + "\n*Id :* " + _0x59093f["package"] + "\n*Last Update :* " + _0x59093f.lastup + "\n*Size :* " + _0x59093f.size + "\n";
    const _0x14cecd = (_0x59093f?.["name"] || "Downloader") + ".apk";
    const _0x41dd92 = {
      responseType: "stream"
    };
    const _0x16f8d8 = await a32_0x4334c4.get(_0x35cdd6, _0x41dd92);
    const _0x1abd73 = a32_0x1be539.createWriteStream(_0x14cecd);
    _0x16f8d8.data.pipe(_0x1abd73);
    await new Promise((_0xeee1f5, _0x5f4deb) => {
      _0x1abd73.on("finish", _0xeee1f5);
      _0x1abd73.on("error", _0x5f4deb);
    });
    const _0x554f4d = {
      'document': a32_0x1be539.readFileSync(_0x14cecd),
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x14cecd
    };
    const _0x51280b = {
      url: _0x59093f.icon
    };
    const _0x2b8659 = {
      "image": _0x51280b,
      "caption": _0x234814
    };
    const _0x2d30a7 = {
      "quoted": _0x1cf092
    };
    _0x5b31c3.sendMessage(_0x48c8f1, _0x2b8659, _0x2d30a7);
    const _0x107e3d = {
      "quoted": _0x1cf092
    };
    _0x5b31c3.sendMessage(_0x48c8f1, _0x554f4d, _0x107e3d);
    a32_0x1be539.unlinkSync(_0x14cecd);
  } catch (_0x513c6f) {
    console.error("Erreur lors du traitement de la commande apk:", _0x513c6f);
    _0x2890b3("*Error during apk command processing*");
  }
});
const a32_0x4f1f68 = require("../bdd/cron");
const {
  dbCache: a32_0x32a66d
} = require("../cache");
const a32_0x261d33 = {
  "nomCom": "automute",
  "categorie": "Group",
  "desc": "active group closing every day at a time",
  "alias": ["amute"]
};
a32_0x405994(a32_0x261d33, async (_0x41190b, _0x4bf17a, _0x3d3a2a) => {
  const {
    arg: _0x51c098,
    repondre: _0x2165ee,
    verifAdmin: _0x5ec97f
  } = _0x3d3a2a;
  if (!_0x5ec97f) {
    _0x2165ee("You are not an administrator of the group");
    return;
  }
  group_cron = await a32_0x4f1f68.getCronById(_0x41190b);
  if (!_0x51c098 || _0x51c098.length == 0x0) {
    let _0x41ffa7;
    if (group_cron == null || group_cron.mute_at == null) {
      _0x41ffa7 = "No time set for automatic mute";
    } else {
      _0x41ffa7 = "The group will be muted at " + group_cron.mute_at.split(':')[0x0] + " " + group_cron.mute_at.split(':')[0x1];
    }
    let _0x4ab77d = "* *State:* " + _0x41ffa7 + "\n        * *Instructions:* To activate automatic mute, add the minute and hour after the command separated by ':'\n        Example automute 9:30\n        * To delete the automatic mute, use the command *automute del*";
    _0x2165ee(_0x4ab77d);
    return;
  } else {
    let _0x19a218 = _0x51c098.join(" ");
    if (_0x19a218.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x2165ee("No cronometrage is active");
      } else {
        await a32_0x4f1f68.delCron(_0x41190b);
        _0x2165ee("The automatic mute has been removed; restart to apply changes");
        a32_0x1f8f17("pm2 restart all");
      }
    } else if (_0x19a218.includes(':')) {
      await a32_0x4f1f68.addCron(_0x41190b, "mute_at", _0x19a218);
      _0x2165ee("Setting up automatic mute for " + _0x19a218 + " ; restart to apply changes");
      a32_0x1f8f17("pm2 restart all");
    } else {
      _0x2165ee("Please enter a valid time with hour and minute separated by :");
    }
  }
});
const a32_0x4ac7e2 = {
  "nomCom": "autounmute",
  "categorie": "Group",
  "desc": "active group opening every day at a time",
  "alias": ["anmute"]
};
a32_0x405994(a32_0x4ac7e2, async (_0x1fc44a, _0x1ae2f2, _0xf83b7a) => {
  const {
    arg: _0x185094,
    repondre: _0x2aa79f,
    verifAdmin: _0x248419
  } = _0xf83b7a;
  if (!_0x248419) {
    _0x2aa79f("You are not an administrator of the group");
    return;
  }
  group_cron = await a32_0x4f1f68.getCronById(_0x1fc44a);
  if (!_0x185094 || _0x185094.length == 0x0) {
    let _0x272f1c;
    if (group_cron == null || group_cron.unmute_at == null) {
      _0x272f1c = "No time set for autounmute";
    } else {
      _0x272f1c = "The group will be un-muted at " + group_cron.unmute_at.split(':')[0x0] + "H " + group_cron.unmute_at.split(':')[0x1];
    }
    let _0x4f7167 = "* *State:* " + _0x272f1c + "\n      * *Instructions:* To activate autounmute, add the minute and hour after the command separated by ':'\n      Example autounmute 7:30\n      * To delete autounmute, use the command *autounmute del*";
    _0x2aa79f(_0x4f7167);
    return;
  } else {
    let _0x40c1ce = _0x185094.join(" ");
    if (_0x40c1ce.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x2aa79f("No cronometrage has been activated");
      } else {
        await a32_0x4f1f68.delCron(_0x1fc44a);
        _0x2aa79f("The autounmute has been removed; restart to apply the changes");
        a32_0x1f8f17("pm2 restart all");
      }
    } else if (_0x40c1ce.includes(':')) {
      await a32_0x4f1f68.addCron(_0x1fc44a, "unmute_at", _0x40c1ce);
      _0x2aa79f("Setting up autounmute for " + _0x40c1ce + "; restart to apply the changes");
      a32_0x1f8f17("pm2 restart all");
    } else {
      _0x2aa79f("Please enter a valid time with hour and minute separated by :");
    }
  }
});
const a32_0x258c81 = {
  "nomCom": "fkick",
  "categorie": "Group",
  "desc": "remove all members from a group with number start by given country code"
};
a32_0x405994(a32_0x258c81, async (_0x57e5e4, _0x2c1fbd, _0x1d1857) => {
  const {
    arg: _0x13c780,
    repondre: _0x41ea37,
    verifAdmin: _0x3753d4,
    superUser: _0x6559b7,
    verifZokouAdmin: _0x341d08
  } = _0x1d1857;
  if (_0x3753d4 || _0x6559b7) {
    if (!_0x341d08) {
      _0x41ea37("You need administrative rights to perform this command");
      return;
    }
    if (!_0x13c780 || _0x13c780.length == 0x0) {
      _0x41ea37("Please enter the country code whose members will be removed");
      return;
    }
    let _0x392e97 = await _0x2c1fbd.groupMetadata(_0x57e5e4);
    let _0xed42d6 = _0x392e97.participants;
    for (let _0x2775f8 = 0x0; _0x2775f8 < _0xed42d6.length; _0x2775f8++) {
      if (_0xed42d6[_0x2775f8].id.startsWith(_0x13c780[0x0]) && _0xed42d6[_0x2775f8].admin === null) {
        await _0x2c1fbd.groupParticipantsUpdate(_0x57e5e4, [_0xed42d6[_0x2775f8].id], "remove");
      }
    }
  } else {
    _0x41ea37("Sorry, you are not an administrator of the group");
  }
});
const a32_0x17e311 = {
  "nomCom": "nsfw",
  "categorie": "Group",
  "desc": "enable or disable nsfw(adult-content) content in a group"
};
a32_0x405994(a32_0x17e311, async (_0x4ceff6, _0x1b8aeb, _0x419d57) => {
  const {
    arg: _0x474331,
    repondre: _0x50c216,
    verifAdmin: _0x618048
  } = _0x419d57;
  if (!_0x618048) {
    _0x50c216("Sorry, you cannot enable NSFW content without being an administrator of the group");
    return;
  }
  let _0x5dec95 = require("../bdd/hentai");
  let _0x40584d = await _0x5dec95.checkFromHentaiList(_0x4ceff6);
  if (_0x474331[0x0] == 'on') {
    if (_0x40584d) {
      _0x50c216("NSFW content is already active for this group");
      return;
    }
    ;
    await _0x5dec95.addToHentaiList(_0x4ceff6);
    _0x50c216("NSFW content is now active for this group");
  } else {
    if (_0x474331[0x0] == "off") {
      if (!_0x40584d) {
        _0x50c216("NSFW content is already disabled for this group");
        return;
      }
      ;
      await _0x5dec95.removeFromHentaiList(_0x4ceff6);
      _0x50c216("NSFW content is now disabled for this group");
    } else {
      _0x50c216("You must enter \"on\" or \"off\"");
    }
  }
});
const a32_0x497689 = {
  "nomCom": "antispam",
  "categorie": "Group",
  "desc": "active or disable antispam freature in group",
  "alias": ["antis"]
};
a32_0x405994(a32_0x497689, async (_0x4e90cb, _0x2d2896, _0x5f32a0) => {
  const {
    arg: _0x1bfe50,
    repondre: _0x14bb75,
    verifAdmin: _0x18a11e,
    superUser: _0xdb8c4e
  } = _0x5f32a0;
  if (!_0x18a11e && !_0xdb8c4e) {
    _0x14bb75("Sorry, you cannot enable or disable antispam without being an administrator of the group");
    return;
  }
  let _0x530fe4 = require("../bdd/antispam");
  let _0x528015;
  if (a32_0x32a66d.has("antispam")) {
    _0x528015 = a32_0x32a66d.get("antispam").includes(_0x4e90cb);
  } else {
    let _0x12f143 = await _0x530fe4.isGroupspam();
    _0x528015 = _0x12f143.includes(_0x4e90cb);
    a32_0x32a66d.set("antispam", _0x12f143);
  }
  if (_0x1bfe50[0x0] == 'on') {
    if (_0x528015) {
      _0x14bb75("antispam is already active for this group");
      return;
    }
    ;
    await _0x530fe4.addGroupToSpamList(_0x4e90cb);
    a32_0x32a66d.del("antispam");
    _0x14bb75("antispam now active for this group");
  } else {
    if (_0x1bfe50[0x0] == "off") {
      if (!_0x528015) {
        _0x14bb75("antispam is already disabled for this group");
        return;
      }
      ;
      await _0x530fe4.removeGroupFromSpamList(_0x4e90cb);
      a32_0x32a66d.del("antispam");
      _0x14bb75("antispam is now disabled for this group");
    } else {
      _0x14bb75("You must enter *on* or *off*");
    }
  }
});