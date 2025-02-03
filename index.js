const a71_0x308028 = function () {
  let _0x48c2bd = true;
  return function (_0x2725eb, _0x1c7837) {
    const _0x2bb71f = _0x48c2bd ? function () {
      if (_0x1c7837) {
        const _0x2d1b09 = _0x1c7837.apply(_0x2725eb, arguments);
        _0x1c7837 = null;
        return _0x2d1b09;
      }
    } : function () {};
    _0x48c2bd = false;
    return _0x2bb71f;
  };
}();
const a71_0x13afc3 = a71_0x308028(this, function () {
  return a71_0x13afc3.toString().search("(((.+)+)+)+$").toString().constructor(a71_0x13afc3).search("(((.+)+)+)+$");
});
a71_0x13afc3();
const {
  makeWASocket: a71_0x3d084f,
  fetchLatestBaileysVersion: a71_0x220ef3,
  useMultiFileAuthState: a71_0xdf1f66,
  makeCacheableSignalKeyStore: a71_0x359612,
  DisconnectReason: a71_0x312121,
  getContentType: a71_0x46e663,
  jidDecode: a71_0x4f76aa,
  delay: a71_0x545a65,
  downloadMediaMessage: a71_0x2f34bc,
  downloadContentFromMessage: a71_0x186b58,
  makeInSQLiteStore: a71_0x10dde5
} = require("@faouzkk/baileys");
const {
  Boom: a71_0x1439df
} = require("@hapi/boom");
const {
  default: a71_0x5faf21
} = require("pino");
const a71_0x3190fa = require("./set");
const a71_0x4f2422 = require("fs-extra");
let a71_0x294b31 = require("./framework/zokou");
const {
  reagir: a71_0x42321e
} = require("./framework/app");
let a71_0x5020f7 = require("path");
const a71_0xeb986 = require("file-type");
const {
  Sticker: a71_0x2a49e4,
  StickerTypes: a71_0x39ab6f
} = require("wa-sticker-formatter");
const {
  checkIfInstalledPlugin: a71_0x36e5a3
} = require("./framework/mesfonctions");
var a71_0x44f613 = a71_0x3190fa.session.replace(/Hans-MD-WHATSAPP-BOT;;;=>/g, '');
const a71_0x47fb3d = require("node-cache");
const a71_0xa65c3f = require("node-cron");
const a71_0x4d2ebb = a71_0x3190fa.PREFIXE;
const {
  verifierEtatJid: a71_0x46b903,
  recupererActionJid: a71_0x1e52ad
} = require("./bdd/antilien");
const {
  atbverifierEtatJid: a71_0x9939cb,
  atbrecupererActionJid: a71_0x5ee922
} = require("./bdd/antibot");
const {
  isUserBanned: a71_0x461c22,
  addUserToBanList: a71_0x567f20,
  removeUserFromBanList: a71_0x4c3902
} = require("./bdd/banUser");
const {
  addGroupToBanList: a71_0x10c07f,
  isGroupBanned: a71_0x36433a,
  removeGroupFromBanList: a71_0x5b8891
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin: a71_0x7fd68e,
  addGroupToOnlyAdminList: a71_0x27a59d,
  removeGroupFromOnlyAdminList: a71_0x237775
} = require("./bdd/onlyAdmin");
const {
  recupevents: a71_0xc5481c
} = require("./bdd/welcome");
const {
  isGroupspam: a71_0x448a93
} = require("./bdd/antispam");
const {
  dbCache: a71_0xf5bd45,
  wcgCache: a71_0x5ee299
} = require("./cache");
const a71_0xa2513 = require("./bdd/plugin");
const {
  ajouterOuMettreAJourUserData: a71_0x49c407
} = require("./bdd/level");
const a71_0x5c98f7 = require("./bdd/mention");
const {
  getCron: a71_0xb01206
} = require("./bdd/cron");
const {
  randomInt: a71_0x390080
} = require("crypto");
const {
  default: a71_0x5a4326
} = require("axios");
const {
  chooseOneEmojie: a71_0x4665a8
} = require("./framework/emojie");
const {
  getParainList: a71_0x43fe01
} = require("./bdd/parrain");
const a71_0x2b72f8 = require("./bdd/afk");
async function a71_0x3de1e7() {
  try {
    if (!a71_0x4f2422.existsSync(__dirname + "/auth/creds.json") && a71_0x44f613 != "zokk") {
      console.log("connexion en cour ...");
      a71_0x4f2422.writeFileSync(__dirname + "/auth/creds.json", atob(a71_0x44f613), "utf8");
    } else {
      if (a71_0x4f2422.existsSync(__dirname + "/auth/creds.json") && a71_0x44f613 != "zokk") {
        a71_0x4f2422.writeFileSync(__dirname + "/auth/creds.json", atob(a71_0x44f613), "utf8");
      }
    }
  } catch (_0x16535c) {
    console.log("Session Invalide " + _0x16535c);
    return;
  }
}
a71_0x3de1e7();
const a71_0x4ff638 = {
  level: "silent"
};
const a71_0x56a940 = a71_0x5faf21(a71_0x4ff638);
const a71_0x4b7ebb = {
  "stdTTL": 0x14,
  "checkperiod": 0x78
};
const a71_0xd348d7 = new a71_0x47fb3d(a71_0x4b7ebb);
const a71_0x5d8863 = {
  "stdTTL": 0x1770,
  "checkperiod": 0x1388
};
const a71_0x37f8df = new a71_0x47fb3d(a71_0x5d8863);
const a71_0x3a3fb6 = {
  "stdTTL": 0x3c,
  "checkperiod": 0x3c
};
const a71_0xb8b537 = new a71_0x47fb3d(a71_0x3a3fb6);
async function a71_0x47c8c6(_0x27ae64 = null, _0x50be10 = null) {
  let _0x42db9f;
  let _0x228e48;
  if (!_0x27ae64 && !_0x50be10) {
    _0x228e48 = await a71_0xdf1f66("./auth");
    _0x42db9f = await a71_0x10dde5('1', "./store.db", a71_0x5faf21({
      'level': "silent"
    }));
  } else {
    const _0x32fb4a = a71_0x5020f7.join(__dirname, "parainage", _0x27ae64.split('@')[0x0]);
    const _0x113702 = a71_0x5020f7.join(_0x32fb4a, "creds.json");
    if (!a71_0x4f2422.existsSync(_0x113702)) {
      const _0x322ea5 = {
        "recursive": true
      };
      a71_0x4f2422.mkdirSync(_0x32fb4a, _0x322ea5);
      a71_0x4f2422.writeFileSync(_0x113702, _0x50be10, "utf8");
    }
    _0x228e48 = await a71_0xdf1f66(_0x32fb4a);
    const _0x34e030 = {
      "level": "silent"
    };
    _0x42db9f = await a71_0x10dde5(_0x27ae64.split('@')[0x0], "./store.db", a71_0x5faf21(_0x34e030));
  }
  const {
    state: _0x7a91e5,
    saveCreds: _0x34e903
  } = _0x228e48;
  const {
    version: _0x2e9776,
    isLatest: _0x1ea137
  } = await a71_0x220ef3();
  const _0x24751c = _0x42db9f;
  const _0x2958a9 = a71_0x3d084f({
    'version': _0x2e9776,
    'logger': a71_0x56a940,
    'browser': ["Hans-Md", "safari", "1.0.0"],
    'emitOwnEvents': true,
    'syncFullHistory': true,
    'printQRInTerminal': true,
    'markOnlineOnConnect': false,
    'msgRetryCounterCache': a71_0xd348d7,
    'receivedPendingNotifications': true,
    'generateHighQualityLinkPreview': true,
    'auth': {
      'creds': _0x7a91e5.creds,
      'keys': a71_0x359612(_0x7a91e5.keys, a71_0x56a940)
    },
    'keepAliveIntervalMs': 0x7530,
    'getMessage': async _0x54160c => {
      if (_0x24751c) {
        const _0x3956f7 = await _0x24751c.loadMessage(_0x54160c.remoteJid, _0x54160c.id);
        return _0x3956f7?.["message"] || undefined;
      }
    }
  });
  _0x24751c?.["bind"](_0x2958a9.ev, _0x2958a9);
  const _0x496ed7 = {
    "stdTTL": 0x78,
    "checkperiod": 0xf0
  };
  const _0x1e5a39 = new a71_0x47fb3d(_0x496ed7);
  let _0x1f8023 = a71_0x3190fa.URL;
  if (_0x1f8023.startsWith("http")) {
    a71_0x3190fa.ARRAY_LIENS = _0x1f8023.split(',');
  } else {
    let _0x29b9fa = (await a71_0x5a4326.get("https://raw.githubusercontent.com/Luffy2ndAccount/zokou-themes/refs/heads/main/themes.json", {
      'responseType': "json"
    })).data;
    a71_0x3190fa.THEMES_KEYS = Object.keys(_0x29b9fa);
    if (a71_0x3190fa.THEMES_KEYS.includes(_0x1f8023.toUpperCase())) {
      a71_0x3190fa.ARRAY_LIENS = _0x29b9fa[_0x1f8023.toUpperCase()];
    } else {
      a71_0x3190fa.ARRAY_LIENS = _0x29b9fa.LUFFY;
    }
  }
  _0x2958a9.ev.on("messages.upsert", async _0x4d1e22 => {
    const {
      messages: _0x3bea0e
    } = _0x4d1e22;
    const _0x297df3 = _0x3bea0e[0x0];
    if (!_0x297df3.message) {
      return;
    }
    const _0x127f9a = _0x518add => {
      if (!_0x518add) {
        return _0x518add;
      }
      if (/:\d+@/gi.test(_0x518add)) {
        let _0x57f467 = a71_0x4f76aa(_0x518add) || {};
        return _0x57f467.user && _0x57f467.server && _0x57f467.user + '@' + _0x57f467.server || _0x518add;
      } else {
        return _0x518add;
      }
    };
    var _0x1c594d = a71_0x46e663(_0x297df3.message);
    var _0x1ec275 = _0x1c594d == "conversation" ? _0x297df3.message.conversation : _0x1c594d == "imageMessage" ? _0x297df3.message.imageMessage?.["caption"] : _0x1c594d == "videoMessage" ? _0x297df3.message.videoMessage?.["caption"] : _0x1c594d == "extendedTextMessage" ? _0x297df3.message?.["extendedTextMessage"]?.["text"] : _0x1c594d == "documentMessage" ? _0x297df3.message.documentMessage?.["caption"] : _0x1c594d == "buttonsResponseMessage" ? _0x297df3.message.buttonsResponseMessage?.["selectedButtonId"] : _0x1c594d == "listResponseMessage" ? _0x297df3.message?.["listResponseMessage"]["singleSelectReply"]["selectedRowId"] : _0x1c594d == "messageContextInfo" ? _0x297df3.message?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x297df3.message?.["listResponseMessage"]["singleSelectReply"]["selectedRowId"] || _0x297df3.test : '';
    var _0x281bd0 = _0x297df3.key.remoteJid;
    var _0x50e22f = _0x127f9a(_0x2958a9.user.id);
    var _0x4f20f6 = _0x50e22f.split('@')[0x0];
    const _0xe6639 = _0x281bd0?.["endsWith"]("@g.us");
    var _0x5cdd43 = null;
    if (_0xe6639) {
      if (a71_0x37f8df.has(_0x281bd0)) {
        _0x5cdd43 = a71_0x37f8df.get(_0x281bd0);
      } else {
        metadata = await _0x2958a9.groupMetadata(_0x281bd0);
        _0x5cdd43 = metadata;
        a71_0x37f8df.set(_0x281bd0, metadata);
      }
    }
    var _0x3bfffe = _0xe6639 ? _0x5cdd43.subject : null;
    var _0x2cdbfb = _0x297df3.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"];
    var _0x3ec5b0 = _0x127f9a(_0x297df3.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
    var _0x3e5aff = _0xe6639 ? _0x297df3.key.participant ? _0x297df3.key.participant : _0x297df3.participant : _0x281bd0;
    if (_0x297df3.key.fromMe) {
      _0x3e5aff = _0x50e22f;
    }
    var _0x51ccbd = _0xe6639 ? _0x297df3.key.participant : null;
    const {
      getAllSudoNumbers: _0x298b88
    } = require("./bdd/sudo");
    const _0x1911d6 = _0x297df3.pushName;
    let _0x2c8a49;
    if (a71_0xf5bd45.has("sudo")) {
      console.log("fetching from cache");
      _0x2c8a49 = a71_0xf5bd45.get("sudo");
    } else {
      console.log("fetching from database");
      _0x2c8a49 = await _0x298b88();
      a71_0xf5bd45.set("sudo", _0x2c8a49);
    }
    const _0x3f9635 = [_0x4f20f6, "255756530143", "22543343357", "255760774888", "‪255756530143", "255756530143", a71_0x3190fa.NUMERO_OWNER].map(_0x5eae84 => _0x5eae84.replace(/[^0-9]/g) + "@s.whatsapp.net");
    const _0x5e5abe = [..._0x2c8a49, ..._0x3f9635];
    const _0x33fbc8 = _0x5e5abe.includes(_0x3e5aff);
    var _0x2c2f85 = ["255756530143", "22543343357", "255760774888", "‪255756530143", "255756530143"].map(_0x176ade => _0x176ade.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x3e5aff);
    function _0x1f242f(_0x25e40f) {
      const _0x473bbb = {
        text: _0x25e40f
      };
      const _0x9d4154 = {
        "quoted": _0x297df3
      };
      _0x2958a9.sendMessage(_0x281bd0, _0x473bbb, _0x9d4154);
    }
    console.log("\t [][]...{Hans-Md}...[][]");
    console.log("=========== Nouveau message ===========");
    if (_0xe6639) {
      console.log("message provenant du groupe : " + _0x3bfffe);
    }
    console.log("message envoyé par : [" + _0x1911d6 + " : " + _0x3e5aff.split("@s.whatsapp.net")[0x0] + " ]");
    console.log("type de message : " + _0x1c594d);
    console.log("------ contenu du message ------");
    console.log(_0x1ec275);
    function _0x4faf79(_0x242faf) {
      let _0x379ac5 = [];
      for (_0x4d1e22 of _0x242faf) {
        if (_0x4d1e22.admin == null) {
          continue;
        }
        _0x379ac5.push(_0x4d1e22.id);
      }
      return _0x379ac5;
    }
    const _0x1ea1dc = _0xe6639 ? await _0x5cdd43.participants : '';
    let _0x543a94 = _0xe6639 ? _0x4faf79(_0x1ea1dc) : '';
    const _0x37cd66 = _0xe6639 ? _0x543a94.includes(_0x3e5aff) : false;
    var _0x181ecf = _0xe6639 ? _0x543a94.includes(_0x50e22f) : false;
    var _0x1ecfb6 = a71_0x3190fa.ETAT;
    if (_0x1ecfb6 == 0x1) {
      await _0x2958a9.sendPresenceUpdate("available", _0x281bd0);
    } else {
      if (_0x1ecfb6 == 0x2) {
        await _0x2958a9.sendPresenceUpdate("composing", _0x281bd0);
      } else {
        if (_0x1ecfb6 == 0x3) {
          await _0x2958a9.sendPresenceUpdate("recording", _0x281bd0);
        } else {}
      }
    }
    let _0x542875 = _0x1ec275 ? _0x1ec275.trim().split(/ +/).slice(0x1) : null;
    function _0x421aa5(_0x15a01b) {
      return [..._0x15a01b].map(_0x32a44c => _0x32a44c.codePointAt(0x0).toString(0x10)).join('-');
    }
    let _0x4e5946 = _0x1ec275 ? _0x1ec275.startsWith(a71_0x4d2ebb) || _0x421aa5(_0x1ec275).startsWith(_0x421aa5(a71_0x4d2ebb)) : false;
    let _0x306d89 = _0x4e5946 ? _0x1ec275.replace(a71_0x4d2ebb, '').trim().split(/ +/).shift().toLowerCase() : false;
    function _0x10ce46() {
      const _0xfd231f = Math.floor(Math.random() * a71_0x3190fa.ARRAY_LIENS.length);
      const _0x301bc4 = a71_0x3190fa.ARRAY_LIENS[_0xfd231f];
      return _0x301bc4;
    }
    const _0x5df9c5 = {
      "superUser": _0x33fbc8,
      "dev": _0x2c2f85,
      "verifGroupe": _0xe6639,
      "mbre": _0x1ea1dc,
      "membreGroupe": _0x51ccbd,
      "verifAdmin": _0x37cd66,
      "infosGroupe": _0x5cdd43,
      "nomGroupe": _0x3bfffe,
      "auteurMessage": _0x3e5aff,
      "nomAuteurMessage": _0x1911d6,
      "idBot": _0x50e22f,
      "verifZokouAdmin": _0x181ecf,
      "prefixe": a71_0x4d2ebb,
      "arg": _0x542875,
      "repondre": _0x1f242f,
      "mtype": _0x1c594d,
      "groupeAdmin": _0x4faf79,
      "msgRepondu": _0x2cdbfb,
      "auteurMsgRepondu": _0x3ec5b0,
      ms: _0x297df3,
      "mybotpic": _0x10ce46
    };
    if (_0x1ec275?.["length"] >= 0xbb8 && !_0x33fbc8) {
      console.log("Virtex potentiel detecte");
      try {
        if (_0xe6639) {} else {
          await _0x2958a9.updateBlockStatus(_0x27ae64, "block")["catch"]();
          let _0x1805b7 = "AntiVirus--protection";
          for (let _0x4ec57b = 0x0; _0x4ec57b < 0x1f4; _0x4ec57b++) {
            _0x1805b7 += "\n";
          }
          _0x1805b7 += "This Message is a Protection from a virus send by this user";
          const _0x27df70 = {
            "text": _0x1805b7
          };
          _0x2958a9.sendMessage(_0x281bd0, _0x27df70);
        }
      } catch (_0x2b6a6f) {
        console.log(_0x2b6a6f);
      }
    }
    async function _0x555b20() {
      if (_0x3e5aff.endsWith("s.whatsapp.net")) {
        try {
          await a71_0x49c407(_0x3e5aff);
        } catch (_0x2d88bc) {
          console.error(_0x2d88bc);
        }
      }
    }
    _0x555b20()["catch"](_0x4cd22d => console.error(_0x4cd22d));
    async function _0x7d2e0e() {
      if (_0x1c594d === "conversation" || _0x1c594d === "extendedTextMessage" || _0x1c594d === "imageMessage" || _0x1c594d === "videoMessage" || _0x1c594d === "stickerMessage" || _0x1c594d === "documentMessage" || _0x1c594d === "audioMessage") {
        if (a71_0x3190fa.AUTO_REACT_MESSAGE.toLowerCase() === "yes" && _0x281bd0 !== "120363158701337904@g.us" && !_0x297df3.key.fromMe && !_0x4e5946) {
          a71_0x42321e(_0x281bd0, _0x2958a9, _0x297df3, a71_0x4665a8());
        }
      }
    }
    _0x7d2e0e()["catch"](_0x37ff24 => console.error(_0x37ff24));
    async function _0x378f43() {
      if (_0x297df3.message?.["stickerMessage"]) {
        const _0x15b378 = require("./bdd/stickcmd");
        let _0x2a8ef5 = _0x297df3.message.stickerMessage.mediaKey.join(',');
        let _0x910801 = await _0x15b378.inStickCmd(_0x2a8ef5);
        if (_0x910801) {
          let _0x5c0e2f = a71_0x4d2ebb + (await _0x15b378.getCmdById(_0x2a8ef5));
          let _0x3b5d79 = _0x5c0e2f ? _0x5c0e2f.trim().split(/ +/).slice(0x1) : null;
          let _0x523beb = _0x5c0e2f ? _0x5c0e2f.startsWith(a71_0x4d2ebb) || _0x421aa5(_0x5c0e2f).startsWith(_0x421aa5(a71_0x4d2ebb)) : false;
          let _0x3e4c2a = _0x523beb ? _0x5c0e2f.replace(a71_0x4d2ebb, '').trim().split(/ +/).shift().toLowerCase() : false;
          let _0x525509 = _0x297df3.message.stickerMessage?.["contextInfo"]?.["quotedMessage"];
          let _0x48e4f4 = _0x127f9a(_0x297df3.message?.["stickerMessage"]?.["contextInfo"]?.["participant"]);
          _0x1ec275 = _0x5c0e2f;
          _0x542875 = _0x3b5d79;
          _0x4e5946 = _0x523beb;
          _0x306d89 = _0x3e4c2a;
          _0x2cdbfb = _0x525509;
          _0x3ec5b0 = _0x48e4f4;
        }
        ;
      }
    }
    async function _0x3186ca() {
      try {
        await _0x378f43();
      } catch (_0x474083) {
        console.log(_0x474083);
      }
      if (_0x4e5946) {
        const _0x258a96 = a71_0x294b31.cm.find(_0x49ab70 => _0x49ab70.nomCom === _0x306d89 || _0x49ab70.alias.includes(_0x306d89));
        if (_0x258a96) {
          let _0x2240c6;
          if (a71_0xf5bd45.has("bangroup")) {
            _0x2240c6 = a71_0xf5bd45.get("bangroup").includes(_0x281bd0);
          } else {
            let _0x857f90 = await a71_0x36433a();
            _0x2240c6 = _0x857f90.includes(_0x281bd0);
            a71_0xf5bd45.set("bangroup", _0x857f90);
          }
          let _0x3c75a0;
          if (a71_0xf5bd45.has("onlyadmin")) {
            _0x3c75a0 = a71_0xf5bd45.get("onlyadmin").includes(_0x281bd0);
          } else {
            let _0xdc42b7 = await a71_0x7fd68e();
            _0x3c75a0 = _0xdc42b7.includes(_0x281bd0);
            a71_0xf5bd45.set("onlyadmin", _0xdc42b7);
          }
          let _0x570bc8;
          if (a71_0xf5bd45.has("banuser")) {
            _0x570bc8 = a71_0xf5bd45.get("banuser").includes(_0x3e5aff);
          } else {
            let _0x2885b3 = await a71_0x461c22();
            _0x570bc8 = _0x2885b3.includes(_0x3e5aff);
            a71_0xf5bd45.set("banuser", _0x2885b3);
          }
          if (a71_0x3190fa.MODE.toLocaleLowerCase() != "yes" && !_0x33fbc8) {
            console.log("bot is not public");
          } else {
            if (!_0x2c2f85 && _0x281bd0 == "120363158701337904@g.us") {
              console.log("refused");
            } else {
              if (!_0x33fbc8 && _0x281bd0 === _0x3e5aff && a71_0x3190fa.PM_PERMIT === "yes") {
                console.log("pm permit on");
              } else {
                if (_0xe6639 && !_0x33fbc8 && _0x2240c6) {
                  console.log("Banned group");
                } else {
                  if ((!_0x33fbc8 || !_0x37cd66) && _0xe6639 && _0x3c75a0) {
                    console.log("Permission denided");
                  } else {
                    if (!_0x33fbc8 && _0x570bc8) {
                      _0x1f242f("You are banned from bot commands");
                    } else {
                      if (!_0x33fbc8 && a71_0x3190fa.ANTI_CMD_SPAM.toLowerCase() == "yes" && a71_0xb8b537.has(_0x3e5aff)) {
                        _0x1f242f("You are on cooldown, please wait " + Math.round((a71_0xb8b537.getTtl(_0x3e5aff) - Date.now()) / 0x3e8) + " seconds before using the bot again");
                      } else {
                        if (!_0x33fbc8 && a71_0x3190fa.ANTI_CMD_SPAM.toLowerCase() == "yes") {
                          a71_0xb8b537.set(_0x3e5aff, true);
                        }
                        try {
                          a71_0x42321e(_0x281bd0, _0x2958a9, _0x297df3, _0x258a96.reaction);
                          if (_0x258a96.categorie == "Params" && _0x27ae64 && _0x50be10) {
                            return _0x1f242f("this command is not allowed to pairing bot");
                          }
                          _0x258a96.fonction(_0x281bd0, _0x2958a9, _0x5df9c5);
                        } catch (_0x3542e5) {
                          console.log("😡😡 " + _0x3542e5);
                          const _0x348f4b = {
                            text: "😡😡 " + _0x3542e5
                          };
                          const _0x124cbc = {
                            "quoted": _0x297df3
                          };
                          _0x2958a9.sendMessage(_0x281bd0, _0x348f4b, _0x124cbc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ;
    _0x3186ca()["catch"](_0x1082a => console.log(_0x1082a));
    async function _0x1e9477() {
      if (_0x297df3.key && _0x297df3.key.remoteJid === "status@broadcast" && a71_0x3190fa.AUTO_READ_STATUS.toLocaleLowerCase() === "yes") {
        await _0x2958a9.readMessages([_0x297df3.key])["catch"](_0x5abcf5 => console.log(_0x5abcf5));
      }
      if (_0x297df3.key && _0x297df3.key.remoteJid === "status@broadcast" && a71_0x3190fa.AUTO_DOWNLOAD_STATUS.toLocaleLowerCase() === "yes") {
        try {
          if (_0x297df3.message.extendedTextMessage) {
            var _0x3cf6bf = _0x297df3.message.extendedTextMessage.text;
            const _0x37dcc2 = {
              text: _0x3cf6bf
            };
            const _0x2dede7 = {
              "quoted": _0x297df3
            };
            await _0x2958a9.sendMessage(_0x50e22f, _0x37dcc2, _0x2dede7);
          } else {
            if (_0x297df3.message.imageMessage) {
              var _0x4cda2a = _0x297df3.message.imageMessage.caption;
              var _0x196b61 = await _0x2958a9.downloadAndSaveMediaMessage(_0x297df3.message.imageMessage);
              const _0x4c39d6 = {
                url: _0x196b61
              };
              const _0x581626 = {
                "image": _0x4c39d6,
                "caption": _0x4cda2a
              };
              const _0x3da5e8 = {
                "quoted": _0x297df3
              };
              await _0x2958a9.sendMessage(_0x50e22f, _0x581626, _0x3da5e8);
            } else {
              if (_0x297df3.message.videoMessage) {
                var _0x4cda2a = _0x297df3.message.videoMessage.caption;
                var _0x3bcf41 = await _0x2958a9.downloadAndSaveMediaMessage(_0x297df3.message.videoMessage);
                const _0x5c0062 = {
                  url: _0x3bcf41
                };
                const _0x167f93 = {
                  "video": _0x5c0062,
                  "caption": _0x4cda2a
                };
                const _0x152c20 = {
                  "quoted": _0x297df3
                };
                await _0x2958a9.sendMessage(_0x50e22f, _0x167f93, _0x152c20);
              } else {
                if (_0x297df3.message.audioMessage) {
                  var _0x2d8151 = await _0x2958a9.downloadAndSaveMediaMessage(_0x297df3.message.audioMessage);
                  const _0x273508 = {
                    url: _0x2d8151
                  };
                  const _0x31f67c = {
                    "audio": _0x273508,
                    "mimetype": "audio/mp4"
                  };
                  const _0x275443 = {
                    "quoted": _0x297df3
                  };
                  await _0x2958a9.sendMessage(_0x50e22f, _0x31f67c, _0x275443);
                }
              }
            }
          }
        } catch (_0x5d6f56) {
          console.error(_0x5d6f56);
        }
      }
    }
    _0x1e9477()["catch"](_0x1045a7 => console.log(_0x1045a7));
    async function _0x4ec91e() {
      if ((_0x1ec275.toLowerCase().includes("https://") || _0x1ec275.toLowerCase().includes("http://")) && _0xe6639) {
        console.log("lien detecté");
        const _0x5c44bc = await a71_0x46b903(_0x281bd0);
        if (_0x5c44bc) {
          if (!_0x181ecf) {
            _0x1f242f("link detected, I need administrator rights to delete");
          } else {
            if (_0x33fbc8 || _0x37cd66) {
              console.log("autority send link");
            } else {
              const _0x960670 = {
                "remoteJid": _0x281bd0,
                "fromMe": false,
                id: _0x297df3.key.id,
                "participant": _0x3e5aff
              };
              var _0x45250a = "link detected, \n";
              var _0x82c301 = await a71_0x1e52ad(_0x281bd0);
              if (_0x82c301 === "remove") {
                const _0x29f3cc = {
                  "pack": "Zoou-Md",
                  "author": a71_0x3190fa.NOM_OWNER,
                  "type": a71_0x39ab6f.FULL,
                  "categories": ['🤩', '🎉'],
                  id: "12345",
                  "quality": 0x32,
                  "background": "#000000"
                };
                var _0x2f891f = new a71_0x2a49e4("https://raw.githubusercontent.com/mrhanstz/HANS-MD/main/media/remover.gif", _0x29f3cc);
                await _0x2f891f.toFile("st1.webp");
                _0x45250a += "message deleted \n @" + _0x3e5aff.split('@')[0x0] + " removed from group.";
                const _0x15df9f = {
                  "quoted": _0x297df3
                };
                await _0x2958a9.sendMessage(_0x281bd0, {
                  'sticker': a71_0x4f2422.readFileSync("st1.webp")
                }, _0x15df9f);
                0x0;
                baileys_1.delay(0x320);
                const _0x354aab = {
                  "text": _0x45250a,
                  "mentions": [_0x3e5aff]
                };
                const _0x5a7a04 = {
                  "quoted": _0x297df3
                };
                await _0x2958a9.sendMessage(_0x281bd0, _0x354aab, _0x5a7a04);
                try {
                  await _0x2958a9.groupParticipantsUpdate(_0x281bd0, [_0x3e5aff], "remove");
                } catch (_0x4d3ab1) {
                  console.log("antiien " + _0x4d3ab1);
                }
                const _0x104227 = {
                  "delete": _0x960670
                };
                await _0x2958a9.sendMessage(_0x281bd0, _0x104227);
                await a71_0x4f2422.unlink("st1.webp");
              } else {
                if (_0x82c301 === "delete") {
                  _0x45250a += "message deleted \n @" + _0x3e5aff.split('@')[0x0] + " Please avoid sending links.";
                  const _0x7fd38f = {
                    "text": _0x45250a,
                    "mentions": [_0x3e5aff]
                  };
                  const _0xeb0999 = {
                    "quoted": _0x297df3
                  };
                  await _0x2958a9.sendMessage(_0x281bd0, _0x7fd38f, _0xeb0999);
                  const _0x9f5b36 = {
                    "delete": _0x960670
                  };
                  await _0x2958a9.sendMessage(_0x281bd0, _0x9f5b36);
                } else {
                  if (_0x82c301 === "warn") {
                    const {
                      getWarnCountByJID: _0x49cead,
                      ajouterUtilisateurAvecWarnCount: _0x444aec
                    } = require("./bdd/warn");
                    let _0x4fa77b = await _0x49cead(_0x3e5aff);
                    let _0x27e288 = a71_0x3190fa.WARN_COUNT;
                    if (_0x4fa77b >= _0x27e288) {
                      const _0x479c52 = {
                        "pack": "Hans-Md",
                        "author": a71_0x3190fa.NOM_OWNER,
                        "type": a71_0x39ab6f.FULL,
                        "categories": ['🤩', '🎉'],
                        id: "12345",
                        "quality": 0x32,
                        "background": "#000000"
                      };
                      var _0x2f891f = new a71_0x2a49e4("https://raw.githubusercontent.com/mrhanstz/HANS-MD/main/media/remover.gif", _0x479c52);
                      await _0x2f891f.toFile("st1.webp");
                      const _0x28d494 = {
                        "quoted": _0x297df3
                      };
                      await _0x2958a9.sendMessage(_0x281bd0, {
                        'sticker': a71_0x4f2422.readFileSync("st1.webp")
                      }, _0x28d494);
                      const _0x3c3796 = {
                        "text": "Link detected; you have reached the maximum number of warnings therefore you will be removed from the group",
                        "mentions": [_0x3e5aff]
                      };
                      const _0x12197d = {
                        "quoted": _0x297df3
                      };
                      await _0x2958a9.sendMessage(_0x281bd0, _0x3c3796, _0x12197d);
                      await _0x2958a9.groupParticipantsUpdate(_0x281bd0, [_0x3e5aff], "remove");
                      const _0x4e705f = {
                        "delete": _0x960670
                      };
                      await _0x2958a9.sendMessage(_0x281bd0, _0x4e705f);
                      await a71_0x4f2422.unlink("st1.webp");
                    } else {
                      var _0xab8ade = _0x27e288 - (_0x4fa77b + 0x1);
                      var _0x33a5dd = _0xab8ade != 0x0 ? "Link detected;\npass " + _0xab8ade + " warning(s) again and you will be kicked out of the group" : "Lien detecté ;\nLink detected ;\n Next time will be the right one";
                      await _0x444aec(_0x3e5aff);
                      const _0x427c41 = {
                        "text": _0x33a5dd,
                        "mentions": [_0x3e5aff]
                      };
                      const _0x4bdf30 = {
                        "quoted": _0x297df3
                      };
                      await _0x2958a9.sendMessage(_0x281bd0, _0x427c41, _0x4bdf30);
                      const _0x30b693 = {
                        "delete": _0x960670
                      };
                      await _0x2958a9.sendMessage(_0x281bd0, _0x30b693);
                    }
                  }
                }
              }
            }
          }
        }
        ;
      }
    }
    _0x4ec91e()["catch"](_0x17f0cc => console.log(_0x17f0cc));
    async function _0x573244() {
      const _0x1765b1 = _0x297df3.key?.['id']?.["startsWith"]("BAES");
      const _0x30cbe7 = _0x297df3.key?.['id']?.["startsWith"]("BAE5");
      const _0x1cd397 = _0x297df3.key?.['id']?.["startsWith"]("3EB0");
      if (_0x1765b1 || _0x30cbe7 || _0x1cd397) {
        const _0x396b23 = await a71_0x9939cb(_0x281bd0);
        if (_0x396b23) {
          if (_0x1c594d === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
          } else {
            if (_0x37cd66 || _0x3e5aff === _0x50e22f || _0x33fbc8) {
              console.log("je fais rien");
            } else {
              if (!_0x181ecf) {
                _0x1f242f("J'ai besoin des droits d'administrations pour agire");
              } else {
                const _0x33d3c0 = {
                  "remoteJid": _0x281bd0,
                  "fromMe": false,
                  id: _0x297df3.key.id,
                  "participant": _0x3e5aff
                };
                var _0x580c6a = "bot détecté, \n";
                var _0x195512 = await a71_0x5ee922(_0x281bd0);
                if (_0x195512 === "remove") {
                  try {
                    const _0x59fe1a = {
                      "pack": "Hans-Md",
                      "author": a71_0x3190fa.NOM_OWNER,
                      "type": a71_0x39ab6f.FULL,
                      "categories": ['🤩', '🎉'],
                      id: "12345",
                      "quality": 0x32,
                      "background": "#000000"
                    };
                    var _0x5a1592 = new a71_0x2a49e4("https://raw.githubusercontent.com/mrhanstz/HANS-MD/main/media/remover.gif", _0x59fe1a);
                    await _0x5a1592.toFile("st1.webp");
                    _0x580c6a += "deleted message \n @" + _0x3e5aff.split('@')[0x0] + " removed from the group.";
                    const _0x374ccb = {
                      "quoted": _0x297df3
                    };
                    await _0x2958a9.sendMessage(_0x281bd0, {
                      'sticker': a71_0x4f2422.readFileSync("st1.webp")
                    }, _0x374ccb);
                    0x0;
                    baileys_1.delay(0x320);
                    const _0x57c2ca = {
                      "text": _0x580c6a,
                      "mentions": [_0x3e5aff]
                    };
                    const _0xb6f7ec = {
                      "quoted": _0x297df3
                    };
                    await _0x2958a9.sendMessage(_0x281bd0, _0x57c2ca, _0xb6f7ec);
                    await _0x2958a9.groupParticipantsUpdate(_0x281bd0, [_0x3e5aff], "remove");
                    const _0x5233ef = {
                      "delete": _0x33d3c0
                    };
                    await _0x2958a9.sendMessage(_0x281bd0, _0x5233ef);
                    await a71_0x4f2422.unlink("st1.webp");
                  } catch (_0x555516) {
                    console.log("antibot " + _0x555516);
                  }
                } else {
                  if (_0x195512 === "delete") {
                    _0x580c6a += "deleted message \n @" + _0x3e5aff.split('@')[0x0] + " please avoid using bots.";
                    const _0x1c5655 = {
                      "text": _0x580c6a,
                      "mentions": [_0x3e5aff]
                    };
                    const _0x2709a4 = {
                      "quoted": _0x297df3
                    };
                    await _0x2958a9.sendMessage(_0x281bd0, _0x1c5655, _0x2709a4);
                    const _0x12e08e = {
                      "delete": _0x33d3c0
                    };
                    await _0x2958a9.sendMessage(_0x281bd0, _0x12e08e);
                  } else {
                    if (_0x195512 === "warn") {
                      const {
                        getWarnCountByJID: _0xa69503,
                        ajouterUtilisateurAvecWarnCount: _0x13ffc7
                      } = require("./bdd/warn");
                      let _0x91a725 = await _0xa69503(_0x3e5aff);
                      let _0x4741df = a71_0x3190fa.WARN_COUNT;
                      if (_0x91a725 >= _0x4741df) {
                        const _0x5fc478 = {
                          "pack": "Hans-Md",
                          "author": a71_0x3190fa.NOM_OWNER,
                          "type": a71_0x39ab6f.FULL,
                          "categories": ['🤩', '🎉'],
                          id: "12345",
                          "quality": 0x32,
                          "background": "#000000"
                        };
                        var _0x5a1592 = new a71_0x2a49e4("https://raw.githubusercontent.com/mrhanstz/HANS-MD/main/media/remover.gif", _0x5fc478);
                        await _0x5a1592.toFile("st1.webp");
                        const _0x5ef372 = {
                          "quoted": _0x297df3
                        };
                        await _0x2958a9.sendMessage(_0x281bd0, {
                          'sticker': a71_0x4f2422.readFileSync("st1.webp")
                        }, _0x5ef372);
                        const _0x3d5626 = {
                          "text": "bot detected; you have reached the maximum number of warnings therefore you will be removed from the group",
                          "mentions": [_0x3e5aff]
                        };
                        const _0x19617f = {
                          "quoted": _0x297df3
                        };
                        await _0x2958a9.sendMessage(_0x281bd0, _0x3d5626, _0x19617f);
                        await _0x2958a9.groupParticipantsUpdate(_0x281bd0, [_0x3e5aff], "remove");
                        const _0x4899e7 = {
                          "delete": _0x33d3c0
                        };
                        await _0x2958a9.sendMessage(_0x281bd0, _0x4899e7);
                        await a71_0x4f2422.unlink("st1.webp");
                      } else {
                        var _0x3d3650 = _0x4741df - (_0x91a725 + 0x1);
                        var _0x50bdf6 = _0x3d3650 != 0x0 ? "bot detected;\n pass another " + _0x3d3650 + " warning(s) and you will be kicked out of the group" : "bot detected;\n The next one will be the right one";
                        await _0x13ffc7(_0x3e5aff);
                        const _0x273400 = {
                          "text": _0x50bdf6,
                          "mentions": [_0x3e5aff]
                        };
                        const _0x5c13e3 = {
                          "quoted": _0x297df3
                        };
                        await _0x2958a9.sendMessage(_0x281bd0, _0x273400, _0x5c13e3);
                        const _0x40ae34 = {
                          "delete": _0x33d3c0
                        };
                        await _0x2958a9.sendMessage(_0x281bd0, _0x40ae34);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        ;
      }
    }
    _0x573244()["catch"](_0x4cc828 => console.log(_0x4cc828));
    async function _0x459080() {
      const _0x66daf = require("./bdd/afk");
      let _0x5194d1 = await _0x66daf.getAfkById(0x1);
      if (_0x5194d1?.["etat"] == 'on' && _0x297df3.key?.["fromMe"]) {
        const _0x49834a = _0x297df3.key?.['id']?.["startsWith"]("BAES") && _0x297df3.key?.['id']?.["length"] === 0x10;
        const _0x183d4e = _0x297df3.key?.['id']?.["startsWith"]("BAE5") && _0x297df3.key?.['id']?.["length"] === 0x10;
        const _0x35fa1f = _0x297df3.key?.['id']?.["startsWith"]("3EB0") && _0x297df3.key?.['id']?.["length"] >= 0xc;
        if (!_0x49834a && !_0x183d4e && !_0x35fa1f) {
          console.log("desactivation de l'afk");
          if (_0x1ec275.toLocaleLowerCase() == "noafk") {
            await _0x66daf.changeAfkState(0x1, "off");
            _0x1f242f("Afk deactivate!");
          } else {
            _0x1f242f("Send *noafk* if you want to disable afk");
          }
        }
      }
    }
    _0x459080()["catch"](_0xfd30f0 => console.log(_0xfd30f0));
    if (_0x297df3.message[_0x1c594d]?.["contextInfo"]?.["mentionedJid"]?.["includes"](_0x50e22f) && _0xe6639) {
      console.log("Je suis mentionner");
      if (afkSettings?.["etat"] == 'on') {
        const _0xc36992 = _0x297df3.key?.['id']?.["startsWith"]("BAES") && _0x297df3.key?.['id']?.["length"] === 0x10;
        const _0x4a9f3e = _0x297df3.key?.['id']?.["startsWith"]("BAE5") && _0x297df3.key?.['id']?.["length"] === 0x10;
        const _0x3321bf = _0x297df3.key?.['id']?.["startsWith"]("3EB0") && _0x297df3.key?.['id']?.["length"] >= 0xc;
        if (_0xc36992 || _0x4a9f3e || _0x3321bf) {
          console.log("Message de bot");
        } else {
          if (_0x297df3.key?.["fromMe"]) {
            console.log("Message venant de moi");
          } else {
            if (afkSettings.lien == "no url") {
              _0x1f242f(afkSettings.message);
            } else {
              const _0x51a24c = {
                url: afkSettings.lien
              };
              const _0xbf21cb = {
                "image": _0x51a24c,
                "caption": afkSettings.message
              };
              const _0x356e12 = {
                "caption": _0x297df3
              };
              _0x2958a9.sendMessage(_0x281bd0, _0xbf21cb, _0x356e12);
            }
          }
        }
      } else {
        if (_0x281bd0 !== "120363158701337904@g.us" && _0x3e5aff !== _0x50e22f) {
          let _0x8b2bdd = await a71_0x5c98f7.recupererToutesLesValeurs();
          let _0x383928 = _0x8b2bdd[0x0];
          if (_0x383928.status === "non") {
            console.log("mention pas actifs");
          } else {
            let _0x17d351;
            if (_0x383928.type.toLocaleLowerCase() === "image") {
              const _0x614ae7 = {
                url: _0x383928.url
              };
              const _0x31e3df = {
                "image": _0x614ae7,
                "caption": _0x383928.message
              };
              _0x17d351 = _0x31e3df;
            } else {
              if (_0x383928.type.toLocaleLowerCase() === "video") {
                const _0xbe7998 = {
                  url: _0x383928.url
                };
                const _0xa68a4a = {
                  "video": _0xbe7998,
                  "caption": _0x383928.message
                };
                _0x17d351 = _0xa68a4a;
              } else {
                if (_0x383928.type.toLocaleLowerCase() === "sticker") {
                  const _0x1ef5e1 = {
                    "pack": a71_0x3190fa.NOM_OWNER,
                    "type": a71_0x39ab6f.FULL,
                    "categories": ['🤩', '🎉'],
                    id: "12345",
                    "quality": 0x46,
                    "background": "transparent"
                  };
                  let _0x4cb200 = new a71_0x2a49e4(_0x383928.url, _0x1ef5e1);
                  const _0x2c3eba = await _0x4cb200.toBuffer();
                  const _0x5d90ed = {
                    "sticker": _0x2c3eba
                  };
                  _0x17d351 = _0x5d90ed;
                } else {
                  if (_0x383928.type.toLocaleLowerCase() === "audio") {
                    const _0x2404fc = {
                      url: _0x383928.url
                    };
                    const _0x4b0dbe = {
                      "audio": _0x2404fc,
                      "mimetype": "audio/mp4"
                    };
                    _0x17d351 = _0x4b0dbe;
                  }
                }
              }
            }
            if (_0x17d351) {
              const _0x27094a = {
                "quoted": _0x297df3
              };
              _0x2958a9.sendMessage(_0x281bd0, _0x17d351, _0x27094a)["catch"](_0x22c5d3 => console.error(_0x22c5d3));
            }
          }
        }
        ;
      }
    }
    async function _0x198563() {
      if (_0x281bd0.endsWith("@s.whatsapp.net") && _0x3e5aff != _0x50e22f) {
        const _0x364980 = await a71_0x2b72f8.getAfkById(0x1);
        if (_0x364980?.["etat"] == 'on') {
          if (_0x364980.lien == "no url") {
            _0x1f242f(_0x364980.message);
          } else {
            const _0xbeea92 = {
              url: _0x364980.lien
            };
            const _0x5e7b8d = {
              "image": _0xbeea92,
              "caption": _0x364980.message
            };
            const _0x484961 = {
              "caption": _0x297df3
            };
            _0x2958a9.sendMessage(_0x281bd0, _0x5e7b8d, _0x484961);
          }
        } else {
          if (a71_0x3190fa.CHATBOT === "oui") {
            if (_0x4e5946) {
              const _0x3f1ff7 = require("./framework/traduction");
              const _0x48cbc5 = {
                'to': 'en'
              };
              let _0x5af2ed = await _0x3f1ff7(_0x1ec275, _0x48cbc5);
              fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x5af2ed).then(_0x7d9846 => _0x7d9846.json()).then(_0x2ff2cb => {
                const _0x3d1e1e = _0x2ff2cb.cnt;
                _0x1f242f(_0x3d1e1e);
              })["catch"](_0x1667e9 => {
                console.error("Erreur lors de la requête à BrainShop :", _0x1667e9);
              });
            }
          }
        }
      }
    }
    _0x198563()["catch"](_0x2d20de => console.error(_0x2d20de));
    async function _0x5f47df() {
      if (_0x297df3.message?.["protocolMessage"]?.["type"] == 0x0) {
        console.warn("Un message a ete supprimer");
        if (a71_0x3190fa.ANTI_DELETE_MESSAGE.toLowerCase() == "yes" && !_0x297df3.key.fromMe) {
          new Promise((_0xa1d184, _0x2e8a3c) => setTimeout(_0xa1d184, 0x3e8)).then(async () => {
            const _0x47cf7b = await _0x24751c.loadMessage(_0x281bd0, _0x297df3.message.protocolMessage.key.id);
            if (_0x47cf7b?.["message"]) {
              const _0x5cfe5e = {
                "forward": _0x47cf7b,
                "contextInfo": {}
              };
              _0x5cfe5e.contextInfo.externalAdReply = {};
              _0x5cfe5e.contextInfo.externalAdReply.title = "Message supprimer";
              _0x5cfe5e.contextInfo.externalAdReply.body = "Message supprimer par :" + _0x47cf7b.pushName;
              _0x5cfe5e.contextInfo.externalAdReply.thumbnailUrl = "./media/deleted-message.jpg";
              _0x5cfe5e.contextInfo.externalAdReply.mediaType = 0x1;
              _0x5cfe5e.contextInfo.externalAdReply.renderLargerThumbnail = true;
              const _0x395986 = {
                "quoted": _0x297df3
              };
              _0x2958a9.sendMessage(_0x50e22f, _0x5cfe5e, _0x395986);
            }
          });
        }
      }
    }
    _0x5f47df()["catch"](_0x1bb928 => console.error(_0x1bb928));
    async function _0x599e82() {
      if (_0x297df3.message?.["viewOnceMessage"] || _0x297df3.message?.["viewOnceMessageV2"] || _0x297df3.message?.["viewOnceMessageV2Extension"]) {
        if (a71_0x3190fa.ANTI_VV.toLowerCase() == "yes" && !_0x297df3.key.fromMe) {
          let _0x1bac1f = _0x297df3.message[_0x1c594d];
          if (_0x1bac1f.message.imageMessage) {
            var _0x11d0b7 = await _0x2958a9.downloadAndSaveMediaMessage(_0x1bac1f.message.imageMessage);
            var _0x737f96 = _0x1bac1f.message.imageMessage.caption;
            const _0x499adc = {
              url: _0x11d0b7
            };
            const _0x649373 = {
              "image": _0x499adc,
              "caption": _0x737f96
            };
            const _0x189e36 = {
              "quoted": _0x297df3
            };
            await _0x2958a9.sendMessage(_0x50e22f, _0x649373, _0x189e36);
          } else {
            if (_0x1bac1f.message.videoMessage) {
              var _0x138a9b = await _0x2958a9.downloadAndSaveMediaMessage(_0x1bac1f.message.videoMessage);
              var _0x737f96 = _0x1bac1f.message.videoMessage.caption;
              const _0x2f8231 = {
                url: _0x138a9b
              };
              const _0x3886ab = {
                "video": _0x2f8231,
                "caption": _0x737f96
              };
              const _0x1966ca = {
                "quoted": _0x297df3
              };
              await _0x2958a9.sendMessage(_0x50e22f, _0x3886ab, _0x1966ca);
            } else {
              if (_0x1bac1f.message.audioMessage) {
                var _0x25d69c = await _0x2958a9.downloadAndSaveMediaMessage(_0x1bac1f.message.audioMessage);
                const _0x47ff32 = {
                  url: _0x25d69c
                };
                const _0x12a110 = {
                  "audio": _0x47ff32,
                  "mymetype": "audio/mp4"
                };
                const _0x5921de = {
                  "quoted": _0x297df3,
                  "ptt": false
                };
                await _0x2958a9.sendMessage(_0x50e22f, _0x12a110, _0x5921de);
              }
            }
          }
        }
      }
    }
    ;
    _0x599e82()["catch"](_0x15c823 => console.error(_0x15c823));
    async function _0x1c031a() {
      if (_0x297df3.message?.["imageMessage"] || _0x297df3.message?.["audioMessage"] || _0x297df3.message?.["videoMessage"] || _0x297df3.message?.["stickerMessage"] || _0x297df3.message?.["documentMessage"]) {
        let _0x196520;
        if (a71_0xf5bd45.has("antispam")) {
          _0x196520 = a71_0xf5bd45.get("antispam").includes(_0x281bd0);
        } else {
          let _0x404bad = await a71_0x448a93();
          _0x196520 = _0x404bad.includes(_0x281bd0);
          a71_0xf5bd45.set("antispam", _0x404bad);
        }
        if (_0xe6639 && _0x196520 && !_0x33fbc8 && !_0x37cd66) {
          console.warn("------------------Media------sent--------------------");
          let _0x7c227 = _0x1e5a39.get(_0x3e5aff + '_' + _0x281bd0);
          if (_0x7c227) {
            if (_0x7c227.length >= 0x4) {
              _0x7c227.push(_0x297df3.key);
              _0x7c227.forEach(_0x297b7b => {
                const _0x44ad7c = {
                  "delete": _0x297b7b
                };
                _0x2958a9.sendMessage(_0x281bd0, _0x44ad7c);
              });
              _0x2958a9.groupParticipantsUpdate(_0x281bd0, [_0x3e5aff], "remove").then(_0x1fd713 => {
                _0x2958a9.sendMessage(_0x281bd0, {
                  'text': '@' + _0x3e5aff.split('@')[0x0] + " removed because of spaming in group",
                  'mentions': [_0x3e5aff]
                });
              })["catch"](_0x3ad8f6 => console.log(_0x3ad8f6));
            } else {
              _0x7c227.push(_0x297df3.key);
              _0x1e5a39.set(_0x3e5aff + '_' + _0x281bd0, _0x7c227, 0x78);
            }
          } else {
            _0x1e5a39.set(_0x3e5aff + '_' + _0x281bd0, [_0x297df3.key]);
          }
        }
      }
    }
    ;
    _0x1c031a()["catch"](_0x179554 => console.log(_0x179554));
  });
  _0x2958a9.ev.on("group-participants.update", async _0x2bc7e1 => {
    const _0x345939 = _0x1858a0 => {
      if (!_0x1858a0) {
        return _0x1858a0;
      }
      if (/:\d+@/gi.test(_0x1858a0)) {
        0x0;
        let _0x1daf39 = baileys_1.jidDecode(_0x1858a0) || {};
        return _0x1daf39.user && _0x1daf39.server && _0x1daf39.user + '@' + _0x1daf39.server || _0x1858a0;
      } else {
        return _0x1858a0;
      }
    };
    console.log(_0x2bc7e1);
    try {
      const _0x5995ca = await _0x2958a9.groupMetadata(_0x2bc7e1.id);
      a71_0x37f8df.set(_0x2bc7e1.id, _0x5995ca);
      if (_0x2bc7e1.action == "add") {
        const _0x43ab03 = await a71_0xc5481c(_0x2bc7e1.id, "welcome");
        if (!_0x43ab03.active) {
          return console.log("welcome non actif");
        }
        if (_0x43ab03.text.includes("&author")) {
          if (_0x5995ca.owner) {
            _0x2bc7e1.participants[0x0] = _0x5995ca.owner;
          }
        }
        let _0x257846 = _0x43ab03.text.replace("&name", '@' + _0x2bc7e1.participants[0x0].split('@')[0x0]).replace("&gname", _0x5995ca.subject).replace("&gdesc", _0x5995ca.desc).replace("&count", _0x5995ca.participants.length).replace("&author", _0x5995ca.owner ? '@' + _0x5995ca.owner.split('@')[0x0] : "inconnue");
        let _0x2f88bc = null;
        if (_0x257846.includes("&pp")) {
          try {
            _0x2f88bc = await _0x2958a9.profilePictureUrl(_0x2bc7e1.participants[0x0], "image");
          } catch {
            _0x2f88bc = "https://files.catbox.moe/4bvh1g.jpg";
          } finally {
            _0x257846 = _0x257846.replace("&pp", '');
          }
        }
        if (_0x257846.includes("&gpp")) {
          if (_0x2f88bc === null) {
            try {
              _0x2f88bc = await _0x2958a9.profilePictureUrl(_0x2bc7e1.id, "image");
            } catch {
              _0x2f88bc = "https://files.catbox.moe/4bvh1g.jpg";
            }
          }
          _0x257846 = _0x257846.replace("&gpp", '');
        }
        if (!_0x2f88bc) {
          words = _0x257846.split(" ");
          for (let _0x364437 = 0x0; _0x364437 < words.length; _0x364437++) {
            if (words[_0x364437].startsWith("http")) {
              _0x2f88bc = words[_0x364437];
              words.splice(_0x364437, 0x1);
              break;
            }
          }
        }
        if (!_0x2f88bc) {
          _0x2f88bc = "https://files.catbox.moe/4bvh1g.jpg";
        }
        const _0x660c66 = {
          "url": _0x2f88bc
        };
        _0x2958a9.sendMessage(_0x2bc7e1.id, {
          'image': _0x660c66,
          'caption': _0x257846,
          'mentions': _0x2bc7e1.participants
        });
      } else {
        if (_0x2bc7e1.action == "remove") {
          const _0x65ba30 = await a71_0xc5481c(_0x2bc7e1.id, "goodbye");
          if (!_0x65ba30.active) {
            return console.log("goodbye non actif");
          }
          if (_0x65ba30.text.includes("&author")) {
            if (_0x5995ca.owner) {
              _0x2bc7e1.participants[0x0] = _0x5995ca.owner;
            }
          }
          let _0xadf1e6 = _0x65ba30.text.replace("&name", '@' + _0x2bc7e1.participants[0x0].split('@')[0x0]).replace("&gname", _0x5995ca.subject).replace("&gdesc", _0x5995ca.desc).replace("&count", _0x5995ca.participants.length).replace("&author", _0x5995ca.owner ? '@' + _0x5995ca.owner.split('@')[0x0] : "inconnue");
          let _0x20ff32 = null;
          if (_0xadf1e6.includes("&pp")) {
            try {
              _0x20ff32 = await _0x2958a9.profilePictureUrl(_0x2bc7e1.participants[0x0], "image");
            } catch {
              _0x20ff32 = "https://files.catbox.moe/4bvh1g.jpg";
            } finally {
              _0xadf1e6 = _0xadf1e6.replace("&pp", '');
            }
          }
          if (_0xadf1e6.includes("&gpp")) {
            if (_0x20ff32 === null) {
              try {
                _0x20ff32 = await _0x2958a9.profilePictureUrl(_0x2bc7e1.id, "image");
              } catch {
                _0x20ff32 = "https://files.catbox.moe/4bvh1g.jpg";
              }
            }
            _0xadf1e6 = _0xadf1e6.replace("&gpp", '');
          }
          if (!_0x20ff32) {
            words = _0xadf1e6.split(" ");
            for (let _0x19485d = 0x0; _0x19485d < words.length; _0x19485d++) {
              if (words[_0x19485d].startsWith("http")) {
                _0x20ff32 = words[_0x19485d];
                words.splice(_0x19485d, 0x1);
                break;
              }
            }
          }
          if (!_0x20ff32) {
            _0x20ff32 = "https://files.catbox.moe/4bvh1g.jpg";
          }
          const _0x1d6927 = {
            "url": _0x20ff32
          };
          _0x2958a9.sendMessage(_0x2bc7e1.id, {
            'image': _0x1d6927,
            'caption': _0xadf1e6,
            'mentions': _0x2bc7e1.participants
          });
        } else {
          if (_0x2bc7e1.action == "promote" && (await a71_0xc5481c(_0x2bc7e1.id, "antipromote")) == 'on') {
            if (_0x2bc7e1.author == _0x5995ca.owner || _0x2bc7e1.author == a71_0x3190fa.NUMERO_OWNER + "@s.whatsapp.net" || _0x2bc7e1.author == _0x345939(_0x2958a9.user.id) || _0x2bc7e1.author == _0x2bc7e1.participants[0x0]) {
              console.log("Cas de superUser je fais rien");
              return;
            }
            ;
            await _0x2958a9.groupParticipantsUpdate(_0x2bc7e1.id, [_0x2bc7e1.author, _0x2bc7e1.participants[0x0]], "demote");
            _0x2958a9.sendMessage(_0x2bc7e1.id, {
              'text': '@' + _0x2bc7e1.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x2bc7e1.author.split('@')[0x0] + " and @" + _0x2bc7e1.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
              'mentions': [_0x2bc7e1.author, _0x2bc7e1.participants[0x0]]
            });
          } else {
            if (_0x2bc7e1.action == "demote" && (await a71_0xc5481c(_0x2bc7e1.id, "antidemote")) == 'on') {
              if (_0x2bc7e1.author == _0x5995ca.owner || _0x2bc7e1.author == a71_0x3190fa.NUMERO_OWNER + "@s.whatsapp.net" || _0x2bc7e1.author == _0x345939(_0x2958a9.user.id) || _0x2bc7e1.author == _0x2bc7e1.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x2958a9.groupParticipantsUpdate(_0x2bc7e1.id, [_0x2bc7e1.author], "demote");
              await _0x2958a9.groupParticipantsUpdate(_0x2bc7e1.id, [_0x2bc7e1.participants[0x0]], "promote");
              _0x2958a9.sendMessage(_0x2bc7e1.id, {
                'text': '@' + _0x2bc7e1.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x2bc7e1.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                'mentions': [_0x2bc7e1.author, _0x2bc7e1.participants[0x0]]
              });
            }
          }
        }
      }
    } catch (_0x57414c) {
      console.error(_0x57414c);
    }
  });
  _0x2958a9.ev.on("group.update", async _0x18ae4a => {
    a71_0x37f8df.set(_0x18ae4a.id, _0x18ae4a);
  });
  _0x2958a9.ev.on("connection.update", async _0x4624aa => {
    const {
      connection: _0x1c4058,
      lastDisconnect: _0xa1366b
    } = _0x4624aa;
    if (_0x1c4058 == "connecting") {
      console.log("connection en cours...");
    } else {
      if (_0x1c4058 == "close") {
        let _0xbd4ea1 = new a71_0x1439df(_0xa1366b?.["error"])?.["output"]["statusCode"];
        if (_0xbd4ea1 == a71_0x312121.connectionClosed) {
          console.log("Connexion fermee , reconnexion en cours");
          if (_0x27ae64 && _0x50be10) {
            a71_0x47c8c6(_0x27ae64, _0x50be10);
          } else {
            a71_0x47c8c6();
          }
        } else {
          if (_0xbd4ea1 == a71_0x312121.badSession) {
            console.log("La session id est erronee,  veillez la remplacer");
            if (_0x27ae64 && _0x50be10) {
              a71_0x47c8c6(_0x27ae64, _0x50be10);
            } else {
              a71_0x47c8c6();
            }
          } else {
            if (_0xbd4ea1 === a71_0x312121.connectionReplaced) {
              console.log("connexion réplacée ,,, une session est déjà ouverte veuillez la fermer svp !!!");
              if (_0x27ae64 && _0x50be10) {
                a71_0x47c8c6(_0x27ae64, _0x50be10);
              } else {
                a71_0x47c8c6();
              }
            } else {
              if (_0xbd4ea1 === a71_0x312121.loggedOut) {
                console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                if (_0x27ae64 && _0x50be10) {
                  a71_0x47c8c6(_0x27ae64, _0x50be10);
                } else {
                  a71_0x47c8c6();
                }
              } else {
                if (_0xbd4ea1 === a71_0x312121.restartRequired) {
                  console.log("redémarrage en cours ▶️");
                  if (_0x27ae64 && _0x50be10) {
                    a71_0x47c8c6(_0x27ae64, _0x50be10);
                  } else {
                    a71_0x47c8c6();
                  }
                } else {
                  if (_0xbd4ea1 === a71_0x312121.connectionLost) {
                    console.log("connexion au serveur perdue 😞 ,,, reconnexion en cours ... ");
                    if (_0x27ae64 && _0x50be10) {
                      a71_0x47c8c6(_0x27ae64, _0x50be10);
                    } else {
                      a71_0x47c8c6();
                    }
                  } else {
                    console.log("Raison de deconnection inattendue ; redemarrage du server");
                    const {
                      exec: _0x45b82c
                    } = require("child_process");
                    _0x45b82c("pm2 restart all");
                  }
                }
              }
            }
          }
        }
      } else {
        if (_0x1c4058 == "open") {
          console.log("✅ connexion reussie! ☺️");
          await a71_0x545a65(0x1f4);
          let _0x1c9fe4 = await a71_0xa2513.pluginList();
          console.log(_0x1c9fe4);
          if (_0x1c9fe4.length > 0x0) {
            console.log("Chargement des plugins");
            let _0x1eefad = [];
            for (const _0x3fc5cb of _0x1c9fe4) {
              if (_0x3fc5cb.name !== null && _0x3fc5cb.url !== null) {
                try {
                  let _0xa9c1c3 = await fetch(_0x3fc5cb.url);
                  let _0x37f4cd = await _0xa9c1c3.text();
                  _0x1eefad.push(..._0x41a1dc(_0x37f4cd));
                } catch (_0x20757a) {
                  console.error("Erreur lors de la récupération du plugin " + _0x3fc5cb.name + ':', _0x20757a);
                }
              }
            }
            _0x1eefad = await a71_0x36e5a3(_0x1eefad);
            console.log("Liste des dependances a installer : ", _0x1eefad);
            try {
              if (_0x1eefad.length > 0x0) {
                console.log("Les plugins suivants nécessitent des dépendances : " + _0x1eefad.join(", "));
                const _0x1f08cf = {
                  "text": "The plugins required some dependancies so we proceding to installation... please wait"
                };
                _0x2958a9.sendMessage(_0x2958a9.user.id, _0x1f08cf)["catch"](_0x522ebb => console.log(_0x522ebb));
                const {
                  exec: _0x4e6cc4
                } = require("child_process");
                await new Promise((_0xad9e31, _0x28f629) => {
                  _0x4e6cc4("npm install  " + _0x1eefad.join(" ") + " --save", (_0x29ae55, _0x13a44, _0x6c2b91) => {
                    if (_0x29ae55) {
                      _0x28f629(_0x29ae55);
                    } else {
                      const _0x39fb7a = {
                        "text": "dependancies are installed successfully"
                      };
                      _0x2958a9.sendMessage(_0x2958a9.user.id, _0x39fb7a)["catch"](_0x9c42fc => console.log(_0x9c42fc));
                      _0xad9e31(_0x13a44);
                    }
                  });
                });
              }
            } catch (_0x3643cc) {
              console.log("Erreur lors de l'installation des dépendances : " + _0x3643cc);
            }
            for (const _0x4e3d15 of _0x1c9fe4) {
              if ((_0x4e3d15.name !== null || _0x4e3d15.url !== null) && !a71_0x4f2422.existsSync(__dirname + "/commandes/" + _0x4e3d15.name + ".js")) {
                try {
                  let _0x1e4f7c = await fetch(_0x4e3d15.url);
                  let _0x2cdcc2 = await _0x1e4f7c.text();
                  a71_0x4f2422.createWriteStream(__dirname + "/commandes/" + _0x4e3d15.name + ".js").end(_0x2cdcc2);
                } catch (_0x192e6d) {
                  console.log(_0x192e6d);
                }
              }
            }
            console.log("Chargement des plugins terminé ✅");
            const _0x32700d = {
              "text": "All plugins are installed successfully"
            };
            _0x2958a9.sendMessage(_0x2958a9.user.id, _0x32700d)["catch"](_0x109f51 => console.log(_0x109f51));
            await a71_0x545a65(0x3e8);
          }
          a71_0x4f2422.readdirSync(__dirname + "/commandes").forEach(_0xb706aa => {
            if (a71_0x5020f7.extname(_0xb706aa).toLowerCase() == ".js") {
              try {
                require(__dirname + "/commandes/" + _0xb706aa);
                console.log(_0xb706aa + " installé ✔️");
              } catch (_0x4f5395) {
                console.log(_0xb706aa + " n'a pas pu être chargé pour les raisons suivantes : " + _0x4f5395);
                console.error(_0x4f5395);
              }
              a71_0x545a65(0x12c);
            }
          });
          await a71_0x545a65(0x2bc);
          var _0x139686;
          if (a71_0x3190fa.MODE.toLowerCase() === "yes") {
            _0x139686 = "public";
          } else if (a71_0x3190fa.MODE.toLowerCase() === 'no') {
            _0x139686 = "private";
          } else {
            _0x139686 = "undefined";
          }
          console.log("chargement des commandes terminé ✅");
          await _0x290548();
          if (a71_0x3190fa.DP.toLowerCase() === "yes") {
            let _0x176ef8 = "╔════◇\n║ 『HANS-𝐌𝐃』\n║    Prefix : [ " + a71_0x4d2ebb + " ]\n║    Mode :" + _0x139686 + "\n║    Commandes length: " + a71_0x294b31.cm.length + "︎\n╚══════════════════╝\n  \n╔═════◇\n『𝗯𝘆 HansTz』\n\n*Rappels :*\nNew Freature :\n You can now share your bot with your friends by the command parrain\n\nDon't forget to install plugins to get more features\n\n" + (a71_0x3190fa.THEMES_KEYS && a71_0x3190fa.THEMES_KEYS.length > 0x0 ? "* Available Themes  :* " + a71_0x3190fa.THEMES_KEYS.join(", ") + "\n" : '') + "\n\n";
            const _0x5d6fa8 = {
              "text": _0x176ef8
            };
            await _0x2958a9.sendMessage(_0x2958a9.user.id, _0x5d6fa8);
          }
          if (!_0x27ae64 && !_0x50be10) {
            try {
              const _0x41c688 = await a71_0x43fe01();
              if (_0x41c688.length > 0x0) {
                for (const _0x47d54c of _0x41c688) {
                  _0x2958a9.startAuxiBot(_0x47d54c.jid, _0x47d54c.session_id);
                }
                const _0x1c38d6 = {
                  "text": "Les auxiBots sont connecter"
                };
                _0x2958a9.sendMessage(_0x2958a9.user.id, _0x1c38d6);
              }
            } catch (_0xfba2dc) {
              const _0x5c41ea = {
                "text": "auxiBots non chargés ❌"
              };
              _0x2958a9.sendMessage(_0x2958a9.user.id, _0x5c41ea);
            }
          }
        }
      }
    }
  });
  _0x2958a9.ev.on("creds.update", _0x34e903);
  _0x2958a9.downloadAndSaveMediaMessage = async (_0x55053f, _0x56f564 = '' + a71_0x390080(0xf4240), _0x2068ab = true) => {
    let _0x2cf172 = _0x55053f.msg ? _0x55053f.msg : _0x55053f;
    let _0x516ee9 = (_0x55053f.msg || _0x55053f).mimetype || '';
    let _0x50545c = _0x55053f.mtype ? _0x55053f.mtype.replace(/Message/gi, '') : _0x516ee9.split('/')[0x0];
    const _0x105d53 = await a71_0x186b58(_0x2cf172, _0x50545c);
    let _0x1be7d0 = Buffer.from([]);
    for await (const _0x4e4b1d of _0x105d53) {
      _0x1be7d0 = Buffer.concat([_0x1be7d0, _0x4e4b1d]);
    }
    let _0x11314b = await a71_0xeb986.fromBuffer(_0x1be7d0);
    let _0x568bcf = './' + _0x56f564 + '.' + _0x11314b.ext;
    await a71_0x4f2422.writeFileSync(_0x568bcf, _0x1be7d0);
    return _0x568bcf;
  };
  _0x2958a9.awaitForMessage = async (_0x26026c = {}) => {
    return new Promise((_0x4058f5, _0x2023e9) => {
      if (typeof _0x26026c !== "object") {
        _0x2023e9(new Error("Options must be an object"));
      }
      if (_0x26026c.sender && typeof _0x26026c.sender !== "string") {
        _0x2023e9(new Error("Sender must be a string"));
      }
      if (typeof _0x26026c.chatJid !== "string") {
        _0x2023e9(new Error("ChatJid must be a string"));
      }
      if (_0x26026c.timeout && typeof _0x26026c.timeout !== "number") {
        _0x2023e9(new Error("Timeout must be a number"));
      }
      if (_0x26026c.filter && typeof _0x26026c.filter !== "function") {
        _0x2023e9(new Error("Filter must be a function"));
      }
      const _0x362707 = _0x26026c?.["timeout"] || undefined;
      const _0x143a0d = _0x26026c?.["filter"] || (() => true);
      let _0x37844d = undefined;
      let _0x172984 = _0x5e88f9 => {
        let {
          type: _0x33357b,
          messages: _0x2dfca6
        } = _0x5e88f9;
        if (_0x33357b == "notify") {
          for (let _0x3e70d3 of _0x2dfca6) {
            const _0x44f441 = _0x3e70d3.key.fromMe;
            const _0x4cc991 = _0x3e70d3.key.remoteJid;
            const _0x30cbfe = _0x4cc991.endsWith("@g.us");
            const _0x5171e4 = _0x4cc991 == "status@broadcast";
            const _0x261124 = _0x44f441 ? _0x2958a9.user.id.replace(/:.*@/g, '@') : _0x30cbfe || _0x5171e4 ? _0x3e70d3.key.participant.replace(/:.*@/g, '@') : _0x4cc991;
            let _0x1a5266 = _0x26026c.sender ? _0x261124 == _0x26026c.sender : true;
            if (_0x1a5266 && _0x4cc991 == _0x26026c.chatJid && _0x143a0d(_0x3e70d3)) {
              _0x2958a9.ev.off("messages.upsert", _0x172984);
              clearTimeout(_0x37844d);
              _0x4058f5(_0x3e70d3);
            }
          }
        }
      };
      _0x2958a9.ev.on("messages.upsert", _0x172984);
      if (_0x362707) {
        _0x37844d = setTimeout(() => {
          _0x2958a9.ev.off("messages.upsert", _0x172984);
          _0x2023e9(new Error("Timeout"));
        }, _0x362707);
      }
    });
  };
  async function _0x290548() {
    let _0x3e885c = await a71_0xb01206();
    console.log(_0x3e885c);
    if (_0x3e885c.length > 0x0) {
      for (let _0x1ab11f = 0x0; _0x1ab11f < _0x3e885c.length; _0x1ab11f++) {
        if (_0x3e885c[_0x1ab11f].mute_at != null) {
          let _0x3ae573 = _0x3e885c[_0x1ab11f].mute_at.split(':');
          console.log("etablissement d'un automute pour " + _0x3e885c[_0x1ab11f].group_id + " a " + _0x3ae573[0x0] + " H " + _0x3ae573[0x1]);
          const _0x155881 = {
            "timezone": "Africa/Abidjan"
          };
          a71_0xa65c3f.schedule(_0x3ae573[0x1] + " " + _0x3ae573[0x0] + " * * *", async () => {
            try {
              await _0x2958a9.groupSettingUpdate(_0x3e885c[_0x1ab11f].group_id, "announcement");
              const _0x46b37e = {
                url: "./media/chrono.jpg"
              };
              const _0x37d329 = {
                "image": _0x46b37e,
                "caption": "Tic Tac, the exciting discussions are coming to an end. Thank you for your active participation; now, it's time to close the group for today."
              };
              _0x2958a9.sendMessage(_0x3e885c[_0x1ab11f].group_id, _0x37d329);
            } catch (_0x195be0) {
              console.log(_0x195be0);
            }
          }, _0x155881);
        }
        if (_0x3e885c[_0x1ab11f].unmute_at != null) {
          let _0x56c348 = _0x3e885c[_0x1ab11f].unmute_at.split(':');
          console.log("etablissement d'un autounmute pour " + _0x56c348[0x0] + " H " + _0x56c348[0x1] + " ");
          a71_0xa65c3f.schedule(_0x56c348[0x1] + " " + _0x56c348[0x0] + " * * *", async () => {
            try {
              await _0x2958a9.groupSettingUpdate(_0x3e885c[_0x1ab11f].group_id, "not_announcement");
              const _0x589d63 = {
                url: "./media/chrono.jpg"
              };
              const _0x3e7d87 = {
                "image": _0x589d63,
                "caption": "Time to open the doors of our new group! Welcome everyone to this exciting community where we share and learn together."
              };
              _0x2958a9.sendMessage(_0x3e885c[_0x1ab11f].group_id, _0x3e7d87);
            } catch (_0x52774a) {
              console.log(_0x52774a);
            }
          }, {
            'timezone': "Africa/Abidjan"
          });
        }
      }
    } else {
      console.log("Les crons n'ont pas été activés");
    }
    return;
  }
  function _0x41a1dc(_0x3ff2f9) {
    let _0x5ec239 = /require\(['"]([^'"]+)['"]\)/g;
    let _0x1e0a6e = _0x3ff2f9.match(_0x5ec239);
    let _0x496872 = [];
    if (_0x1e0a6e) {
      _0x1e0a6e.forEach(_0x28df29 => {
        let _0x47ffa2 = _0x28df29.replace("require(", '').replace(')', '').replace(/['"]/g, '');
        if (!_0x47ffa2.startsWith('./') && !_0x47ffa2.startsWith("../")) {
          _0x496872.push(_0x47ffa2);
        }
      });
    }
    return _0x496872;
  }
  _0x2958a9.StartWcgGame = async (_0x213c9a, _0x5afc71) => {
    let _0x7da899 = [];
    _0x5afc71.map(_0x11446f => {
      const _0x221e64 = {
        "jid": _0x11446f,
        "score": 0x0
      };
      _0x7da899.push(_0x221e64);
    });
    let _0x1000ba = 0x3;
    const _0x3365a2 = await a71_0x5a4326.get("https://raw.githubusercontent.com/chrplr/openlexicon/refs/heads/master/datasets-info/Liste-de-mots-francais-Gutenberg/liste.de.mots.francais.frgut.txt");
    let _0x44f113 = _0x3365a2.data;
    let _0x43893f = "ETAOINSHRDLCUMWF".split('');
    _0x44f113 = new Set(_0x44f113.split("\n").map(_0x56b596 => _0x56b596.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '')));
    BannedWord = [];
    async function _0x1d7ef1(_0x141a3b) {
      let _0x3734a6 = _0x5afc71[_0x141a3b];
      let _0xea838 = _0x5afc71[_0x141a3b + 0x1 == _0x5afc71.length ? 0x0 : _0x141a3b + 0x1];
      let _0x5c3714 = _0x43893f[Math.floor(Math.random() * _0x43893f.length)];
      let _0x4866eb;
      _0x1000ba = _0x1000ba > 0xa ? 0xa : _0x1000ba;
      _0x2958a9.sendMessage(_0x213c9a, {
        'text': "🎮 Current player: @" + _0x3734a6.split('@')[0x0] + "\n    📜 Instruction: Find a word that starts with the letter **" + _0x5c3714 + "** and has at least **" + _0x1000ba + "** letters.\n    ⏳ You have 15 seconds to respond!\n    \n    🔜 @" + _0xea838.split('@')[0x0] + " get ready for the next round...",
        'mentions': [_0x3734a6, _0xea838]
      });
      let _0x52af23 = async _0x1994a1 => {
        let {
          messages: _0x39d1b6,
          type: _0x6b1925
        } = _0x1994a1;
        if (_0x6b1925 != "notify") {
          return;
        }
        let _0x5c41fe = _0x39d1b6[0x0];
        let _0xb554c5 = _0x5c41fe.key.remoteJid;
        let _0x4498fa = _0xb554c5.endsWith("@g.us");
        let _0x27edee = _0xb554c5 == "status@broadcast";
        let _0x1dd424 = _0x5c41fe.key.fromMe ? _0x2958a9.user.id.replace(/:.*@/g, '@') : _0x4498fa || _0x27edee ? _0x5c41fe.key.participant.replace(/:.*@/g, '@') : _0xb554c5;
        let _0x3de06 = _0x5c41fe.message?.["conversation"]["trim"]()["toLowerCase"]() || _0x5c41fe.message?.["extendedTextMessage"]?.["text"]["trim"]()["toLowerCase"]();
        if (typeof _0x3de06 != "string") {
          return;
        }
        if (_0x1dd424 == _0x3734a6 && _0xb554c5 == _0x213c9a) {
          if (_0x3de06.normalize("NFD").replace(/[\u0300-\u036f]/g, '').startsWith(_0x5c3714.toLowerCase())) {
            if (_0x3de06.length >= _0x1000ba) {
              if (_0x44f113.has(_0x3de06.normalize("NFD").replace(/[\u0300-\u036f]/g, ''))) {
                if (BannedWord.includes(_0x3de06)) {
                  return _0x2958a9.sendMessage(_0x213c9a, {
                    'text': '@' + _0x1dd424.split('@')[0x0] + " This word has already been used.",
                    'mentions': [_0x1dd424]
                  });
                }
                _0x2958a9.ev.off("messages.upsert", _0x52af23);
                clearInterval(_0x4866eb);
                _0x7da899.map(_0x5baa27 => {
                  if (_0x5baa27.jid == _0x3734a6) {
                    _0x5baa27.score += 0x1;
                  }
                });
                const _0x2c68cc = {
                  "quoted": _0x5c41fe
                };
                _0x2958a9.sendMessage(_0x213c9a, {
                  'text': '@' + _0x1dd424.split('@')[0x0] + " Congratulations! You found a word that fits perfectly.",
                  'mentions': [_0x1dd424]
                }, _0x2c68cc);
                BannedWord.push(_0x3de06);
                if (_0x5afc71.indexOf(_0xea838) == 0x0) {
                  _0x1000ba++;
                }
                await a71_0x545a65(0x3e8);
                _0x1d7ef1(_0x5afc71.indexOf(_0xea838));
              } else {
                const _0x324a1d = {
                  "quoted": _0x5c41fe
                };
                _0x2958a9.sendMessage(_0x213c9a, {
                  'text': '@' + _0x1dd424.split('@')[0x0] + " 🤔 Are you sure your word exists? It's not in my records. 📜",
                  'mentions': [_0x1dd424]
                }, _0x324a1d);
              }
            } else {
              const _0x7df6be = {
                "quoted": _0x5c41fe
              };
              _0x2958a9.sendMessage(_0x213c9a, {
                'text': '@' + _0x1dd424.split('@')[0x0] + " ⚠️ Please follow the instructions! Your word must have at least **" + _0x1000ba + "** letters. ✍️",
                'mentions': [_0x1dd424]
              }, _0x7df6be);
            }
          } else {
            const _0x446cb1 = {
              "quoted": _0x5c41fe
            };
            _0x2958a9.sendMessage(_0x213c9a, {
              'text': '@' + _0x1dd424.split('@')[0x0] + " ⚠️ Please follow the instructions! Your word must start with the letter **" + _0x5c3714 + "**. 🔤",
              'mentions': [_0x1dd424]
            }, _0x446cb1);
          }
        }
      };
      new Promise((_0x2b8819, _0x39ab29) => {
        _0x4866eb = setTimeout(() => {
          _0x2b8819();
        }, 0x3a98);
      }).then(async () => {
        _0x2958a9.ev.off("messages.upsert", _0x52af23);
        _0x2958a9.sendMessage(_0x213c9a, {
          'text': '@' + _0x3734a6.split('@')[0x0] + " ⏳ You took too long to respond. You are eliminated. 🚫",
          'mentions': [_0x3734a6]
        });
        if (_0x5afc71.indexOf(_0xea838) == 0x0) {
          _0x1000ba++;
        }
        _0x5afc71.splice(_0x5afc71.indexOf(_0x3734a6), 0x1);
        if (_0x5afc71.length > 0x0) {
          await a71_0x545a65(0x3e8);
          _0x1d7ef1(_0x5afc71.indexOf(_0xea838));
        } else {
          a71_0x5ee299.del(_0x213c9a);
          _0x7da899 = _0x7da899.sort((_0x5e7466, _0x218519) => _0x218519.score - _0x5e7466.score);
          let _0x3ab479 = "🎉 Game Over! 🎉";
          if (_0x7da899.length > 0x3) {
            _0x3ab479 += "\nThe top 3 players will receive extra XP points (500xp, 300xp, 100xp respectively).";
            _0x3ab479 += "\nHere are your respective scores:";
            for (let _0x46cc78 = 0x0; _0x46cc78 < _0x7da899.length; _0x46cc78++) {
              let _0x1b620c = _0x7da899[_0x46cc78];
              if (_0x46cc78 <= 0x2) {
                let _0xead2a8 = ['🥇', '🥈', '🥉'];
                _0x3ab479 += "\n\n" + _0xead2a8[_0x46cc78] + " @" + _0x1b620c.jid.split('@')[0x0] + " : " + _0x1b620c.score + " points";
              } else {
                _0x3ab479 += "\n\n@" + _0x1b620c.jid.split('@')[0x0] + " : " + _0x1b620c.score + " points";
              }
            }
          } else {
            _0x3ab479 += "\nHere are your respective scores:";
            _0x3ab479 += _0x7da899.map(_0x3834a1 => "\n\n@" + _0x3834a1.jid.split('@')[0x0] + " : " + _0x3834a1.score + " points\n").join('');
          }
          _0x2958a9.sendMessage(_0x213c9a, {
            'text': _0x3ab479,
            'mentions': [..._0x7da899.map(_0x2aaa7e => _0x2aaa7e.jid)]
          });
          if (_0x7da899.length >= 0x3) {
            for (let _0xaef9ff = 0x0; _0xaef9ff < 0x3; _0xaef9ff++) {
              let _0x5c44ad = [0x1f4, 0x12c, 0x64];
              try {
                await a71_0x49c407(_0x7da899[_0xaef9ff].jid, _0x5c44ad[_0xaef9ff]);
              } catch (_0x455467) {
                console.log(_0x455467);
              }
            }
          }
        }
      })["catch"](_0x45d0b1 => {
        console.log(_0x45d0b1);
      });
      _0x2958a9.ev.on("messages.upsert", _0x52af23);
    }
    await a71_0x545a65(0x3e8);
    _0x1d7ef1(0x0);
  };
  _0x2958a9.startAuxiBot = a71_0x47c8c6;
}
a71_0x47c8c6();