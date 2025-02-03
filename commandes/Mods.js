const a40_0x485679 = function () {
  let _0x5c69ed = true;
  return function (_0x31dfdb, _0x191c17) {
    const _0x4b42a5 = _0x5c69ed ? function () {
      if (_0x191c17) {
        const _0x5cae0 = _0x191c17.apply(_0x31dfdb, arguments);
        _0x191c17 = null;
        return _0x5cae0;
      }
    } : function () {};
    _0x5c69ed = false;
    return _0x4b42a5;
  };
}();
const a40_0x852590 = a40_0x485679(this, function () {
  return a40_0x852590.toString().search("(((.+)+)+)+$").toString().constructor(a40_0x852590).search("(((.+)+)+)+$");
});
a40_0x852590();
const {
  zokou: a40_0x332d26
} = require("../framework/zokou");
const a40_0x2b7fb8 = require("axios");
let {
  Sticker: a40_0xa5f4a7,
  createSticker: a40_0x482c24,
  StickerTypes: a40_0x2d78b6
} = require("wa-sticker-formatter");
const {
  isUserBanned: a40_0x2111ad,
  addUserToBanList: a40_0x3ab720,
  removeUserFromBanList: a40_0x676a60
} = require("../bdd/banUser");
const {
  addGroupToBanList: a40_0xed9e4f,
  isGroupBanned: a40_0x1dfe4f,
  removeGroupFromBanList: a40_0x209d26
} = require("../bdd/banGroup");
const {
  isGroupOnlyAdmin: a40_0x55a588,
  addGroupToOnlyAdminList: a40_0x546fa7,
  removeGroupFromOnlyAdminList: a40_0x58ba34
} = require("../bdd/onlyAdmin");
const {
  removeSudoNumber: a40_0x5892dc,
  addSudoNumber: a40_0x3f2a55,
  issudo: a40_0x4cb401
} = require("../bdd/sudo");
const {
  dbCache: a40_0x1b489b
} = require("../cache");
const a40_0x3b716a = _0x54bcd5 => {
  return new Promise(_0x3ac03a => {
    setTimeout(_0x3ac03a, _0x54bcd5);
  });
};
const a40_0x3fb15a = {
  "nomCom": "tgs",
  "categorie": "Mods",
  "desc": "download telegram sticker"
};
a40_0x332d26(a40_0x3fb15a, async (_0x88aea9, _0x13c294, _0x540dbc) => {
  const {
    ms: _0x5e786f,
    repondre: _0x37d61c,
    arg: _0x4203dc,
    nomAuteurMessage: _0x49ae7a,
    superUser: _0x3e32d5
  } = _0x540dbc;
  if (!_0x3e32d5) {
    _0x37d61c("Only Mods can use this command");
    return;
  }
  if (!_0x4203dc[0x0]) {
    _0x37d61c("put a telegramme stickers link ");
    return;
  }
  let _0x2d7fc6 = _0x4203dc.join(" ");
  let _0x533ee2 = _0x2d7fc6.split("/addstickers/")[0x1];
  let _0x218703 = "https://api.telegram.org/bot8120402462:AAF7IEPxY8DhRorfuXrbBmjW-CR4uu9qTz0/getStickerSet?name=" + encodeURIComponent(_0x533ee2);
  try {
    let _0x169b43 = await a40_0x2b7fb8.get(_0x218703);
    let _0x31a7c3 = null;
    if (_0x169b43.data.result.is_animated === true || _0x169b43.data.result.is_video === true) {
      _0x31a7c3 = "animated sticker";
    } else {
      _0x31a7c3 = "not animated sticker";
    }
    let _0x52fe46 = "   Zk-stickers-dl\n      \n  *Name :* " + _0x169b43.data.result.name + "\n  *Type :* " + _0x31a7c3 + " \n  *Length :* " + _0x169b43.data.result.stickers.length + "\n  \n      Downloading...";
    await _0x37d61c(_0x52fe46);
    for (let _0x3679b5 = 0x0; _0x3679b5 < _0x169b43.data.result.stickers.length; _0x3679b5++) {
      let _0x227537 = await a40_0x2b7fb8.get("https://api.telegram.org/bot8120402462:AAF7IEPxY8DhRorfuXrbBmjW-CR4uu9qTz0/getFile?file_id=" + _0x169b43.data.result.stickers[_0x3679b5].file_id);
      let _0x24c4b0 = await a40_0x2b7fb8({
        'method': "get",
        'url': "https://api.telegram.org/file/bot8120402462:AAF7IEPxY8DhRorfuXrbBmjW-CR4uu9qTz0/" + _0x227537.data.result.file_path,
        'responseType': "arraybuffer"
      });
      const _0x53c296 = {
        "pack": _0x49ae7a,
        "author": "Zokou-md",
        "type": a40_0x2d78b6.FULL,
        "categories": ['🤩', '🎉'],
        id: "12345",
        "quality": 0x32,
        "background": "#000000"
      };
      const _0x2e5017 = new a40_0xa5f4a7(_0x24c4b0.data, _0x53c296);
      const _0x24ea5f = await _0x2e5017.toBuffer();
      const _0x41a8a2 = {
        sticker: _0x24ea5f
      };
      const _0x22404a = {
        "quoted": _0x5e786f
      };
      await _0x13c294.sendMessage(_0x88aea9, _0x41a8a2, _0x22404a);
    }
  } catch (_0x437820) {
    _0x37d61c("we got an error \n", _0x437820);
  }
});
const a40_0x17aa4e = {
  "nomCom": "crew",
  "categorie": "Mods",
  "desc": "create a new group"
};
a40_0x332d26(a40_0x17aa4e, async (_0x206928, _0x25fd1e, _0x1999da) => {
  const {
    ms: _0x28b2a3,
    repondre: _0x5efa3e,
    arg: _0x1c76f9,
    auteurMessage: _0x4e9a8b,
    superUser: _0x437b29,
    auteurMsgRepondu: _0x2256cd,
    msgRepondu: _0x1e5eb1
  } = _0x1999da;
  if (!_0x437b29) {
    _0x5efa3e("only modds can use this command");
    return;
  }
  ;
  if (!_0x1c76f9[0x0]) {
    _0x5efa3e("Please enter the name of the group to create");
    return;
  }
  ;
  if (!_0x1e5eb1) {
    _0x5efa3e("Please mention a member added ");
    return;
  }
  const _0x17122a = _0x1c76f9.join(" ");
  const _0x42cd51 = await _0x25fd1e.groupCreate(_0x17122a, [_0x4e9a8b, _0x2256cd]);
  console.log("created group with id: " + _0x42cd51.gid);
  const _0x288254 = {
    "text": "Bienvenue dans " + _0x17122a
  };
  _0x25fd1e.sendMessage(_0x42cd51.id, _0x288254);
});
const a40_0x5b0c96 = {
  "nomCom": "join",
  "categorie": "Mods",
  "desc": "join a group by invite link"
};
a40_0x332d26(a40_0x5b0c96, async (_0x32c746, _0x562f59, _0x3b0e4a) => {
  const {
    arg: _0x3cdde2,
    ms: _0x33ec1e,
    repondre: _0x2507b5,
    verifGroupe: _0x4ffeb1,
    msgRepondu: _0x39799f,
    verifAdmin: _0x890ee5,
    superUser: _0x1f78a1,
    auteurMessage: _0x5bd3aa
  } = _0x3b0e4a;
  if (!_0x1f78a1) {
    _0x2507b5("command reserved for the bot owner");
    return;
  }
  let _0x1069dd = _0x3cdde2[0x0].split("https://chat.whatsapp.com/")[0x1];
  await _0x562f59.groupAcceptInvite(_0x1069dd);
  _0x2507b5("Succes")["catch"](_0x109b45 => {
    _0x2507b5("Unknown error");
  });
});
const a40_0x5afca8 = {
  "nomCom": "jid",
  "categorie": "Mods",
  "desc": "get user jid"
};
a40_0x332d26(a40_0x5afca8, async (_0x5cb9bb, _0x514578, _0x42beee) => {
  const {
    arg: _0x1f70ec,
    ms: _0x4bd2a4,
    repondre: _0x5cc767,
    verifGroupe: _0x3ad80d,
    msgRepondu: _0x3a526d,
    verifAdmin: _0x553a67,
    superUser: _0x34ec0f,
    auteurMessage: _0x4ab99a,
    auteurMsgRepondu: _0x48d8f5
  } = _0x42beee;
  if (!_0x34ec0f) {
    _0x5cc767("command reserved for the bot owner");
    return;
  }
  if (!_0x3a526d) {
    jid = _0x5cb9bb;
  } else {
    jid = _0x48d8f5;
  }
  ;
  const _0x5349fa = {
    text: jid
  };
  const _0x39c6b3 = {
    "quoted": _0x4bd2a4
  };
  _0x514578.sendMessage(_0x5cb9bb, _0x5349fa, _0x39c6b3);
});
const a40_0x5dc476 = {
  "nomCom": "block",
  "categorie": "Mods",
  "desc": "block user"
};
a40_0x332d26(a40_0x5dc476, async (_0x49b856, _0x1f123f, _0x3d8121) => {
  const {
    arg: _0x3b9964,
    ms: _0x5744ea,
    repondre: _0x2baa21,
    verifGroupe: _0x5cb054,
    msgRepondu: _0x1171c7,
    verifAdmin: _0xe0164a,
    superUser: _0xc1f744,
    auteurMessage: _0x4fd85b,
    auteurMsgRepondu: _0x89ee7
  } = _0x3d8121;
  if (!_0xc1f744) {
    _0x2baa21("command reserved for the bot owner");
    return;
  }
  if (!_0x1171c7) {
    if (_0x5cb054) {
      _0x2baa21("Be sure to mention the person to block");
      return;
    }
    ;
    jid = _0x49b856;
    await _0x1f123f.updateBlockStatus(jid, "block").then(_0x2baa21("succes"));
  } else {
    jid = _0x89ee7;
    await _0x1f123f.updateBlockStatus(jid, "block").then(_0x2baa21("succes"));
  }
  ;
});
const a40_0x443eed = {
  "nomCom": "unblock",
  "categorie": "Mods",
  "desc": "unblock user"
};
a40_0x332d26(a40_0x443eed, async (_0x1314fa, _0x484d37, _0x1dbc9b) => {
  const {
    arg: _0x10e0cf,
    ms: _0x2df5b4,
    repondre: _0x3724de,
    verifGroupe: _0x59ac29,
    msgRepondu: _0x4b25fe,
    verifAdmin: _0x230ef9,
    superUser: _0x14d03d,
    auteurMessage: _0xf58e08,
    auteurMsgRepondu: _0x8fe996
  } = _0x1dbc9b;
  if (!_0x14d03d) {
    _0x3724de("command reserved for the bot owner");
    return;
  }
  if (!_0x4b25fe) {
    if (_0x59ac29) {
      _0x3724de("Please mention the person to be unlocked");
      return;
    }
    ;
    jid = _0x1314fa;
    await _0x484d37.updateBlockStatus(jid, "unblock").then(_0x3724de("succes"));
  } else {
    jid = _0x8fe996;
    await _0x484d37.updateBlockStatus(jid, "unblock").then(_0x3724de("succes"));
  }
  ;
});
const a40_0x356d1f = {
  "nomCom": "kickall",
  "categorie": "Group",
  "reaction": '📣',
  "desc": "remove all member of group"
};
a40_0x332d26(a40_0x356d1f, async (_0x19d504, _0x4623a8, _0x129b31) => {
  const {
    auteurMessage: _0x40b7f4,
    ms: _0xb56e67,
    repondre: _0x56eb51,
    arg: _0x160514,
    verifGroupe: _0xab0e82,
    nomGroupe: _0x205898,
    infosGroupe: _0x5d2a04,
    nomAuteurMessage: _0x5d2a88,
    verifAdmin: _0x50e471,
    superUser: _0x4ba1b2,
    prefixe: _0x117bef
  } = _0x129b31;
  const _0x544822 = await _0x4623a8.groupMetadata(_0x19d504);
  if (!_0xab0e82) {
    _0x56eb51("✋🏿 ✋🏿this command is reserved for groups ❌");
    return;
  }
  if (_0x4ba1b2 || _0x40b7f4 == _0x544822.owner) {
    _0x56eb51("No_admin members will be removed from the group. You have 5 seconds to reclaim your choice by restarting the bot.");
    await a40_0x3b716a(0x1388);
    let _0x2b4862 = _0xab0e82 ? await _0x5d2a04.participants : '';
    try {
      let _0x4ca542 = _0x2b4862.filter(_0x4aeca6 => !_0x4aeca6.admin);
      for (const _0x34d7db of _0x4ca542) {
        await _0x4623a8.groupParticipantsUpdate(_0x19d504, [_0x34d7db.id], "remove");
        await a40_0x3b716a(0x1f4);
      }
    } catch (_0x1a1041) {
      _0x56eb51("I need administration rights");
    }
  } else {
    _0x56eb51("Order reserved for the group owner for security reasons");
    return;
  }
});
const a40_0x40a261 = {
  "nomCom": "ban",
  "categorie": "Mods",
  "desc": "ban user from commands"
};
a40_0x332d26(a40_0x40a261, async (_0x344ddb, _0x2ae80d, _0xae48ec) => {
  const {
    ms: _0x4c7d6f,
    arg: _0x10c4e9,
    auteurMsgRepondu: _0x56bc63,
    msgRepondu: _0x3dec74,
    repondre: _0x4fa398,
    prefixe: _0x3c441c,
    superUser: _0x3facf4
  } = _0xae48ec;
  if (!_0x3facf4) {
    _0x4fa398("This command is only allowed to the bot owner");
    return;
  }
  if (!_0x10c4e9[0x0]) {
    _0x4fa398("mention the user by typing " + _0x3c441c + "ban add/del to ban/unban the user");
    return;
  }
  ;
  if (_0x3dec74) {
    let _0x8a895b;
    if (a40_0x1b489b.has("banuser")) {
      _0x8a895b = a40_0x1b489b.get("banuser").includes(_0x56bc63);
    } else {
      let _0x372629 = await a40_0x2111ad();
      _0x8a895b = _0x372629.includes(origineMessage);
      a40_0x1b489b.set("banuser", _0x372629);
    }
    switch (_0x10c4e9.join(" ")) {
      case "add":
        if (_0x8a895b) {
          _0x4fa398("This user is already banned");
          return;
        }
        await a40_0x3ab720(_0x56bc63);
        a40_0x1b489b.del("banuser");
        _0x4fa398("user succesfully banned");
        break;
      case "del":
        if (_0x8a895b) {
          await a40_0x676a60(_0x56bc63);
          a40_0x1b489b.del("banuser");
          _0x4fa398("This user is now free.");
        } else {
          _0x4fa398("This user is not banned.");
        }
        break;
      default:
        _0x4fa398("bad option");
        break;
    }
  } else {
    _0x4fa398("reply the user message");
    return;
  }
});
const a40_0x43966d = {
  "nomCom": "bangroup",
  "categorie": "Mods",
  "desc": "ban group from commands"
};
a40_0x332d26(a40_0x43966d, async (_0x499253, _0x16b76d, _0x40a691) => {
  const {
    ms: _0x408e75,
    arg: _0x216bc5,
    auteurMsgRepondu: _0x42e6bc,
    msgRepondu: _0x406a90,
    repondre: _0x4be1b8,
    prefixe: _0x3eb3ed,
    superUser: _0x4edacd,
    verifGroupe: _0x34cfc3
  } = _0x40a691;
  if (!_0x4edacd) {
    _0x4be1b8("This command is only allowed to the bot owner");
    return;
  }
  ;
  if (!_0x34cfc3) {
    _0x4be1b8("order reservation for groups");
    return;
  }
  ;
  if (!_0x216bc5[0x0]) {
    _0x4be1b8("type " + _0x3eb3ed + "bangroup add/del to ban/unban the group");
    return;
  }
  ;
  let _0x62b795;
  if (a40_0x1b489b.has("bangroup")) {
    _0x62b795 = a40_0x1b489b.get("bangroup").includes(_0x499253);
  } else {
    let _0x32f92d = await a40_0x1dfe4f();
    _0x62b795 = _0x32f92d.includes(_0x499253);
    a40_0x1b489b.set("bangroup", _0x32f92d);
  }
  switch (_0x216bc5.join(" ")) {
    case "add":
      if (_0x62b795) {
        _0x4be1b8("This group is already banned");
        return;
      }
      await a40_0xed9e4f(_0x499253);
      a40_0x1b489b.del("bangroup");
      _0x4be1b8("This group is now banned");
      break;
    case "del":
      if (_0x62b795) {
        a40_0x209d26(_0x499253);
        a40_0x1b489b.del("bangroup");
        _0x4be1b8("This group is now free.");
      } else {
        _0x4be1b8("This group is not banned.");
      }
      break;
    default:
      _0x4be1b8("you must put add or del");
      break;
  }
});
const a40_0xa027d8 = {
  "nomCom": "onlyadmin",
  "categorie": "Group",
  "desc": "only admin can use commands"
};
a40_0x332d26(a40_0xa027d8, async (_0x468a42, _0x5ca6de, _0x10065d) => {
  const {
    ms: _0x302bd9,
    arg: _0x25ee13,
    auteurMsgRepondu: _0x1c8d1c,
    msgRepondu: _0xebc631,
    repondre: _0x1e6c41,
    prefixe: _0x1290d8,
    superUser: _0x48a944,
    verifGroupe: _0x4c9213,
    verifAdmin: _0x36c8ff
  } = _0x10065d;
  if (_0x48a944 || _0x36c8ff) {
    if (!_0x4c9213) {
      _0x1e6c41("order reservation for groups");
      return;
    }
    ;
    if (!_0x25ee13[0x0]) {
      _0x1e6c41("type " + _0x1290d8 + "onlyadmin add/del to ban/unban the group");
      return;
    }
    ;
    let _0xed9f59;
    if (a40_0x1b489b.has("onlyadmin")) {
      _0xed9f59 = a40_0x1b489b.get("onlyadmin").includes(_0x468a42);
    } else {
      let _0x40a6fc = await a40_0x55a588();
      _0xed9f59 = _0x40a6fc.includes(_0x468a42);
      a40_0x1b489b.set("onlyadmin", _0x40a6fc);
    }
    switch (_0x25ee13.join(" ")) {
      case "add":
        if (_0xed9f59) {
          _0x1e6c41("This group is already in onlyadmin mode");
          return;
        }
        await a40_0x546fa7(_0x468a42);
        a40_0x1b489b.del("onlyadmin");
        _0x1e6c41("This group is now in onlyadmin mode.");
        break;
      case "del":
        if (_0xed9f59) {
          await a40_0x58ba34(_0x468a42);
          a40_0x1b489b.del("onlyadmin");
          _0x1e6c41("This group is now free.");
        } else {
          _0x1e6c41("This group is not in onlyadmin mode.");
        }
        break;
      default:
        _0x1e6c41("bad option");
        break;
    }
  } else {
    _0x1e6c41("You are not entitled to this order");
  }
});
const a40_0x4ee39a = {
  "nomCom": "sudo",
  "categorie": "Mods",
  "desc": "add or remove a user from sudo (second owner) list"
};
a40_0x332d26(a40_0x4ee39a, async (_0x50b43c, _0x7b823, _0x3e9199) => {
  const {
    ms: _0x56e9c9,
    arg: _0x1c4e61,
    auteurMsgRepondu: _0x545a10,
    msgRepondu: _0x8f6de5,
    repondre: _0x278b31,
    prefixe: _0x45f4bd,
    superUser: _0x325e55
  } = _0x3e9199;
  if (!_0x325e55) {
    _0x278b31("This command is only allowed to the bot owner");
    return;
  }
  if (!_0x1c4e61[0x0]) {
    _0x278b31("mention the person by typing " + _0x45f4bd + "sudo add/del");
    return;
  }
  ;
  if (_0x8f6de5) {
    switch (_0x1c4e61.join(" ")) {
      case "add":
        let _0x24d1ec = await a40_0x4cb401(_0x545a10);
        if (_0x24d1ec) {
          _0x278b31("This user is already sudo");
          return;
        }
        await a40_0x3f2a55(_0x545a10);
        if (a40_0x1b489b.has("sudo")) {
          a40_0x1b489b.del("sudo");
        }
        _0x278b31("succes");
        break;
      case "del":
        let _0x135c22 = await a40_0x4cb401(_0x545a10);
        if (_0x135c22) {
          await a40_0x5892dc(_0x545a10);
          if (a40_0x1b489b.has("sudo")) {
            a40_0x1b489b.del("sudo");
          }
          _0x278b31("This user is removed in sudo list.");
        } else {
          _0x278b31("This user is not sudo.");
        }
        break;
      default:
        _0x278b31("you should put add or del");
        break;
    }
  } else {
    _0x278b31("mention the user");
    return;
  }
});
const a40_0x2d6c82 = {
  "nomCom": "save",
  "categorie": "Mods",
  "desc": "forward a message to your personnal chat"
};
a40_0x332d26(a40_0x2d6c82, async (_0x4bf4fe, _0x52bd10, _0x44d9f6) => {
  const {
    repondre: _0x35b00d,
    msgRepondu: _0x251d61,
    superUser: _0xbc75d,
    auteurMessage: _0x3731b4
  } = _0x44d9f6;
  if (_0xbc75d) {
    if (_0x251d61) {
      console.log(_0x251d61);
      let _0x233bb9;
      if (_0x251d61.imageMessage) {
        let _0x2dc929 = await _0x52bd10.downloadAndSaveMediaMessage(_0x251d61.imageMessage);
        const _0x319243 = {
          url: _0x2dc929
        };
        const _0x2cdcd8 = {
          "image": _0x319243,
          "caption": _0x251d61.imageMessage.caption
        };
        _0x233bb9 = _0x2cdcd8;
      } else {
        if (_0x251d61.videoMessage) {
          let _0xa78dda = await _0x52bd10.downloadAndSaveMediaMessage(_0x251d61.videoMessage);
          const _0x43adbb = {
            url: _0xa78dda
          };
          const _0x3708d2 = {
            "video": _0x43adbb,
            "caption": _0x251d61.videoMessage.caption
          };
          _0x233bb9 = _0x3708d2;
        } else {
          if (_0x251d61.audioMessage) {
            let _0x1ae1d4 = await _0x52bd10.downloadAndSaveMediaMessage(_0x251d61.audioMessage);
            const _0x3bbabc = {
              url: _0x1ae1d4
            };
            const _0x4aa10a = {
              "audio": _0x3bbabc,
              "mimetype": "audio/mp4"
            };
            _0x233bb9 = _0x4aa10a;
          } else {
            if (_0x251d61.stickerMessage) {
              let _0x5bbf20 = await _0x52bd10.downloadAndSaveMediaMessage(_0x251d61.stickerMessage);
              const _0x88546a = {
                "pack": "Zokou-tag",
                "type": a40_0x2d78b6.CROPPED,
                "categories": ['🤩', '🎉'],
                id: "12345",
                "quality": 0x46,
                "background": "transparent"
              };
              let _0x480f53 = new a40_0xa5f4a7(_0x5bbf20, _0x88546a);
              const _0x284117 = await _0x480f53.toBuffer();
              const _0x562bc7 = {
                "sticker": _0x284117
              };
              _0x233bb9 = _0x562bc7;
            } else {
              const _0xa901c6 = {
                "text": _0x251d61.conversation
              };
              _0x233bb9 = _0xa901c6;
            }
          }
        }
      }
      _0x52bd10.sendMessage(_0x3731b4, _0x233bb9);
    } else {
      _0x35b00d("Mention the message that you want to save");
    }
  } else {
    _0x35b00d("only mods can use this command");
  }
});
const a40_0x4ea862 = {
  "nomCom": "mention",
  "categorie": "Mods",
  "desc": "send a message when you are mentionned in group"
};
a40_0x332d26(a40_0x4ea862, async (_0x1e1155, _0x1c2a4c, _0x1f284e) => {
  const {
    ms: _0x310878,
    repondre: _0x309633,
    superUser: _0x9a884a,
    arg: _0x3f94c4
  } = _0x1f284e;
  if (!_0x9a884a) {
    _0x309633("you do not have the rights for this command");
    return;
  }
  const _0x37cfdc = require("../bdd/mention");
  let _0x4fbeb3 = await _0x37cfdc.recupererToutesLesValeurs();
  data = _0x4fbeb3[0x0];
  if (!_0x3f94c4 || _0x3f94c4.length < 0x1) {
    let _0x1a254d;
    if (_0x4fbeb3.length === 0x0) {
      _0x309633("To activate or modify the mention; follow this syntax: mention link type message\n  The different types are audio, video, image, and sticker.\n  Example: mention https://static.animecorner.me/2023/08/op2.jpg image Hi, my name is Luffy");
      return;
    }
    if (data.status == "non") {
      _0x1a254d = "Desactived";
    } else {
      _0x1a254d = "Actived";
    }
    mtype = data.type || "no data";
    url = data.url || "no data";
    let _0x32a18f = "Status: " + _0x1a254d + "\nType: " + mtype + "\nLink: " + url + "\n\n*Instructions:*\n\nTo activate or modify the mention, follow this syntax: mention link type message\nThe different types are audio, video, image, and sticker.\nExample: mention https://static.animecorner.me/2023/08/op2.jpg image Hi, my name is Luffy\n\nTo stop the mention, use mention stop";
    _0x309633(_0x32a18f);
    return;
  }
  if (_0x3f94c4.length >= 0x2) {
    if (_0x3f94c4[0x0].startsWith("http") && (_0x3f94c4[0x1] == "image" || _0x3f94c4[0x1] == "audio" || _0x3f94c4[0x1] == "video" || _0x3f94c4[0x1] == "sticker")) {
      let _0x3edf2e = [];
      for (i = 0x2; i < _0x3f94c4.length; i++) {
        _0x3edf2e.push(_0x3f94c4[i]);
      }
      let _0x37f58f = _0x3edf2e.join(" ") || '';
      await _0x37cfdc.addOrUpdateDataInMention(_0x3f94c4[0x0], _0x3f94c4[0x1], _0x37f58f);
      await _0x37cfdc.modifierStatusId1("oui").then(() => {
        _0x309633("mention updated");
      });
    } else {
      _0x309633("*Instructions:*\n          To activate or modify the mention, follow this syntax: mention link type message. The different types are audio, video, image, and sticker.");
    }
  } else {
    if (_0x3f94c4.length === 0x1 && _0x3f94c4[0x0] == "stop") {
      await _0x37cfdc.modifierStatusId1("non").then(() => {
        _0x309633(" mention stopped ");
      });
    } else {
      _0x309633("Please make sure to follow the instructions");
    }
  }
});