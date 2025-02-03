const a39_0x124457 = function () {
  let _0x5c61a3 = true;
  return function (_0x26ab55, _0x561439) {
    const _0x5b48fd = _0x5c61a3 ? function () {
      if (_0x561439) {
        const _0x2e89ee = _0x561439.apply(_0x26ab55, arguments);
        _0x561439 = null;
        return _0x2e89ee;
      }
    } : function () {};
    _0x5c61a3 = false;
    return _0x5b48fd;
  };
}();
const a39_0x4ba3ce = a39_0x124457(this, function () {
  return a39_0x4ba3ce.toString().search("(((.+)+)+)+$").toString().constructor(a39_0x4ba3ce).search("(((.+)+)+)+$");
});
a39_0x4ba3ce();
const {
  zokou: a39_0x20e68f
} = require(__dirname + "/../framework/zokou");
const {
  format: a39_0x4d6fff
} = require(__dirname + "/../framework/mesfonctions");
const a39_0x3c8b2f = require('os');
const a39_0x3a941f = require("moment-timezone");
const a39_0x459a28 = require(__dirname + "/../set");
const {
  chooseOneEmojie: a39_0x588833
} = require("../framework/emojie");
const a39_0x30fd41 = {
  "nomCom": "menu",
  "categorie": "General",
  "desc": "list of all command",
  "alias": ["list", "command"]
};
a39_0x20e68f(a39_0x30fd41, async (_0x24cfa1, _0x4ea5e9, _0x4264d1) => {
  let {
    ms: _0x2e60b9,
    repondre: _0x47e4c2,
    prefixe: _0x50df24,
    nomAuteurMessage: _0xf0afb8,
    mybotpic: _0x1ebb57
  } = _0x4264d1;
  let {
    cm: _0x51d7c9
  } = require(__dirname + "/../framework//zokou");
  var _0x4178ac = {};
  var _0x34cdd3 = "public";
  if (a39_0x459a28.MODE.toLocaleLowerCase() != "yes") {
    _0x34cdd3 = "private";
  }
  _0x51d7c9.map(async (_0x30d1b7, _0x5a39db) => {
    if (!_0x4178ac[_0x30d1b7.categorie]) {
      _0x4178ac[_0x30d1b7.categorie] = [];
    }
    _0x4178ac[_0x30d1b7.categorie].push(_0x30d1b7.nomCom);
  });
  a39_0x3a941f.tz.setDefault("Etc/GMT");
  const _0x36571f = a39_0x3a941f().format("HH:mm:ss");
  const _0xb585ba = a39_0x3a941f().format("DD/MM/YYYY");
  let _0x1080d7 = "\n┏━━━━━━━━⚜️" + a39_0x459a28.BOT + "⚜️━━━━━━━━┓\n┃\n┃   *Préfixe* : " + a39_0x459a28.PREFIXE + "\n┃   *Owner* : " + a39_0x459a28.NOM_OWNER + "\n┃   *Mode* : " + _0x34cdd3 + "\n┃   *Commandes* : " + _0x51d7c9.length + "\n┃   *Date* : " + _0xb585ba + "\n┃   *Heure* : " + _0x36571f + "\n┃   *Mémoire* : " + a39_0x4d6fff(a39_0x3c8b2f.totalmem() - a39_0x3c8b2f.freemem()) + '/' + a39_0x4d6fff(a39_0x3c8b2f.totalmem()) + "\n┃   *Plateforme* : " + a39_0x3c8b2f.platform() + "\n┃   *Développeurs* : Djalega++ \n┃   & M๏𝓷keℽ D Lบffy\n┃\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ \n\n";
  let _0x47080a = "\n\n🎛️ 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬  \n┌───────────────┐";
  for (const _0x510b76 in _0x4178ac) {
    _0x47080a += "\n│ *❯ " + _0x510b76 + '*';
  }
  _0x47080a += "\n└───────────────┘ \n\n";
  for (const _0x37190e in _0x4178ac) {
    _0x47080a += "\n*" + (a39_0x588833() + " " + _0x37190e) + "*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    for (const _0x3dec5e of _0x4178ac[_0x37190e]) {
      _0x47080a += "➤ " + _0x3dec5e + "\n";
    }
    _0x47080a += "\n";
  }
  _0x47080a += "\n◇            ◇\n*»»————— ★ —————««*\n\"To use a command, insert " + _0x50df24 + " followed by the command_name.\"\n \n    Powered by Zokou-MD\n                                                \n*»»————— ★ —————««*\n";
  var _0x4a2548 = _0x1ebb57();
  if (_0x4a2548.match(/\.(mp4|gif)$/i)) {
    try {
      const _0x4f14ae = {
        url: _0x4a2548
      };
      const _0xe24733 = {
        "quoted": _0x2e60b9
      };
      _0x4ea5e9.sendMessage(_0x24cfa1, {
        'video': _0x4f14ae,
        'caption': _0x1080d7 + _0x47080a,
        'footer': "Je suis *Zokou-MD*, développé par Djalega++",
        'gifPlayback': true
      }, _0xe24733);
    } catch (_0x2e1159) {
      console.log("🥵🥵 Menu erreur " + _0x2e1159);
      _0x47e4c2("🥵🥵 Menu erreur " + _0x2e1159);
    }
  } else {
    if (_0x4a2548.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        const _0x31f1b5 = {
          url: _0x4a2548
        };
        const _0x4b166f = {
          "image": _0x31f1b5,
          "caption": _0x1080d7 + _0x47080a,
          "footer": "Je suis *Zokou-MD*, développé par Djalega++"
        };
        const _0x22228e = {
          "quoted": _0x2e60b9
        };
        _0x4ea5e9.sendMessage(_0x24cfa1, _0x4b166f, _0x22228e);
      } catch (_0x50327b) {
        console.log("🥵🥵 Menu erreur " + _0x50327b);
        _0x47e4c2("🥵🥵 Menu erreur " + _0x50327b);
      }
    } else {
      _0x47e4c2(_0x1080d7 + _0x47080a);
    }
  }
});