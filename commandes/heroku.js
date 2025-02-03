const {
  zokou: a35_0x264c70
} = require("../framework/zokou");
const a35_0x34fdb3 = require("../set");
const a35_0x1a20b2 = require('fs');
const a35_0x340ff9 = require("dotenv");
function a35_0xecde5b(_0x3b9774) {
  filePath = "./app.json";
  const _0x5137c7 = a35_0x1a20b2.readFileSync(filePath, "utf-8");
  const _0x286915 = JSON.parse(_0x5137c7);
  const _0x523c5f = _0x286915.env[_0x3b9774];
  if (_0x523c5f && _0x523c5f.description) {
    return _0x523c5f.description;
  } else {
    return "The environment variable description was not found.";
  }
}
const a35_0x1d0bc5 = {
  "nomCom": "setvar",
  "categorie": "Params",
  "description": "set a heroku var"
};
a35_0x264c70(a35_0x1d0bc5, async (_0x5765af, _0x259cfa, _0xe4e456) => {
  const {
    ms: _0x298fd1,
    repondre: _0x4ad2da,
    superUser: _0x5d935b,
    arg: _0x37e721
  } = _0xe4e456;
  if (!_0x5d935b) {
    _0x4ad2da("only Mods can use this commande");
    return;
  }
  ;
  if (a35_0x34fdb3.HEROKU_APP_NAME == null || a35_0x34fdb3.HEROKU_APY_KEY == null) {
    _0x4ad2da("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  if (!_0x37e721[0x0] || !_0x37e721.join('').split('=')) {
    _0x4ad2da("Bad format ; Exemple of using :\nsetvar OWNER_NAME=Fredora");
    return;
  }
  ;
  const _0x28ed6f = _0x37e721.join(" ");
  const _0xe41cc2 = require("heroku-client");
  const _0x46167c = {
    token: a35_0x34fdb3.HEROKU_APY_KEY
  };
  const _0x48e1e9 = new _0xe41cc2(_0x46167c);
  let _0xad02c0 = "/apps/" + a35_0x34fdb3.HEROKU_APP_NAME;
  await _0x48e1e9.patch(_0xad02c0 + "/config-vars", {
    'body': {
      [_0x28ed6f.split('=')[0x0]]: _0x28ed6f.split('=')[0x1]
    }
  });
  await _0x4ad2da("Heroku var changes , rebootings....");
});
const a35_0x55beb6 = {
  "nomCom": "getallvar",
  "categorie": "Params",
  "description": "get all heroku vars"
};
a35_0x264c70(a35_0x55beb6, async (_0x246d1c, _0x91c691, _0x194060) => {
  const {
    ms: _0x18ad84,
    repondre: _0x3ba03f,
    superUser: _0x5da32a,
    arg: _0x50612e
  } = _0x194060;
  if (!_0x5da32a) {
    _0x3ba03f("only mods can use this commande");
    return;
  }
  ;
  if (a35_0x34fdb3.HEROKU_APP_NAME == null || a35_0x34fdb3.HEROKU_APY_KEY == null) {
    _0x3ba03f("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  const _0x22159c = require("heroku-client");
  const _0x3b8fed = {
    token: a35_0x34fdb3.HEROKU_APY_KEY
  };
  const _0x14165e = new _0x22159c(_0x3b8fed);
  let _0x287943 = "/apps/" + a35_0x34fdb3.HEROKU_APP_NAME;
  let _0x269bc8 = await _0x14165e.get(_0x287943 + "/config-vars");
  let _0x211cfa = "*Heroku Vars list *\n\n";
  for (vr in _0x269bc8) {
    _0x211cfa += "🍁 *" + vr + "* " + "= " + _0x269bc8[vr] + "\n";
  }
  _0x3ba03f(_0x211cfa);
});
const a35_0x474ad1 = {
  "nomCom": "getvar",
  "categorie": "Params",
  "description": "get a heroku var"
};
a35_0x264c70(a35_0x474ad1, async (_0x2ca0f2, _0x48a49f, _0x30d00c) => {
  const {
    ms: _0x14fbf7,
    repondre: _0x1224ee,
    superUser: _0x1bf505,
    arg: _0x3ac395
  } = _0x30d00c;
  if (!_0x1bf505) {
    _0x1224ee("Only Mods can use this command");
    return;
  }
  ;
  if (a35_0x34fdb3.HEROKU_APP_NAME == null || a35_0x34fdb3.HEROKU_APY_KEY == null) {
    _0x1224ee("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
    return;
  }
  ;
  if (!_0x3ac395[0x0]) {
    _0x1224ee("insert the variable name in capital letter");
    return;
  }
  ;
  try {
    const _0x30c51e = require("heroku-client");
    const _0x138f4d = {
      token: a35_0x34fdb3.HEROKU_APY_KEY
    };
    const _0x22239d = new _0x30c51e(_0x138f4d);
    let _0x5e3d58 = "/apps/" + a35_0x34fdb3.HEROKU_APP_NAME;
    let _0x1a3459 = await _0x22239d.get(_0x5e3d58 + "/config-vars");
    for (vr in _0x1a3459) {
      if (_0x3ac395.join(" ") === vr) {
        return _0x1224ee(vr + "= " + _0x1a3459[vr]);
      }
    }
  } catch (_0x467c09) {
    _0x1224ee("Error" + _0x467c09);
  }
});
const a35_0x315716 = {
  "nomCom": "settings",
  "categorie": "Params",
  "description": "edit settings of the bot"
};
a35_0x264c70(a35_0x315716, async (_0x9db2e1, _0x1583e5, _0x4706d2) => {
  const {
    ms: _0x3b1816,
    repondre: _0x4d32fe,
    superUser: _0x1ff6c6,
    auteurMessage: _0x3a4f74
  } = _0x4706d2;
  if (!_0x1ff6c6) {
    _0x4d32fe("command reserved for bot owner");
    return;
  }
  ;
  const _0x1c478b = {
    "nom": "AUTO_READ_STATUS",
    "choix": ["yes", 'no']
  };
  const _0xcecfa3 = {
    "nom": "AUTO_DOWNLOAD_STATUS",
    "choix": ["yes", 'no']
  };
  const _0x27ee4b = {
    "nom": "PM_PERMIT",
    "choix": ["yes", 'no']
  };
  const _0x58f699 = {
    "nom": "PUBLIC_MODE",
    "choix": ["yes", 'no']
  };
  const _0xe15f33 = {
    "nom": "STARTING_BOT_MESSAGE",
    "choix": ["yes", 'no']
  };
  const _0x1fcef2 = {
    "nom": "ANTI_VIEW_ONCE",
    "choix": ["yes", 'no']
  };
  const _0x487b13 = {
    "nom": "PRESENCE",
    "choix": ['1', '2', '3', '4']
  };
  const _0x9e24a8 = {
    "nom": "PM_CHATBOT",
    "choix": ["yes", 'no']
  };
  const _0x1f69e9 = {
    "nom": "ANTI_COMMAND_SPAM",
    "choix": ["yes", 'no']
  };
  const _0x5d9580 = {
    "nom": "ANTI_DELETE_MESSAGE",
    "choix": ["yes", 'no']
  };
  const _0x2a0993 = {
    "nom": "AUTO_REACT_MESSAGE",
    "choix": ["yes", 'no']
  };
  let _0x4772b3 = [_0x1c478b, _0xcecfa3, _0x27ee4b, _0x58f699, _0xe15f33, _0x1fcef2, _0x487b13, _0x9e24a8, _0x1f69e9, _0x5d9580, _0x2a0993];
  function _0x1ce8ff(_0x84021b, _0x319160) {
    if (_0x84021b.nom < _0x319160.nom) {
      return -0x1;
    }
    if (_0x84021b.nom > _0x319160.nom) {
      return 0x1;
    }
    return 0x0;
  }
  _0x4772b3.sort(_0x1ce8ff);
  let _0x45da98 = "    ╭──────༺♡༻──────╮\n              Zokou-settings\n    ╰──────༺♡༻──────╯\n\n";
  for (v = 0x0; v < _0x4772b3.length; v++) {
    _0x45da98 += v + 0x1 + "- *" + _0x4772b3[v].nom + "*\n";
  }
  _0x45da98 += "\nChoose a variable by its number";
  const _0x418d93 = {
    text: _0x45da98
  };
  const _0x4a3479 = {
    quoted: _0x3b1816
  };
  let _0x49ce08 = await _0x1583e5.sendMessage(_0x9db2e1, _0x418d93, _0x4a3479);
  console.log(_0x49ce08);
  const _0x1aad38 = {
    "chatJid": _0x9db2e1,
    "sender": _0x3a4f74,
    "timeout": 0xea60,
    "filter": _0xbeefb6 => _0xbeefb6.message.extendedTextMessage && _0xbeefb6.message.extendedTextMessage.contextInfo.stanzaId == _0x49ce08.key.id && _0xbeefb6.message.extendedTextMessage.text > 0x0 && _0xbeefb6.message.extendedTextMessage.text <= _0x4772b3.length
  };
  let _0x3d4059 = await _0x1583e5.awaitForMessage(_0x1aad38);
  let _0x1e4c8c = _0x3d4059.message.extendedTextMessage.text - 0x1;
  let {
    nom: _0x1fb441,
    choix: _0xaa182b
  } = _0x4772b3[_0x1e4c8c];
  let _0x5cf779 = "    ╭──────༺♡༻──────╮\n              Zokou-settings\n    ╰──────༺♡༻──────╯\n\n";
  _0x5cf779 += "*Name* :" + _0x1fb441 + "\n";
  _0x5cf779 += "*Description* :" + a35_0xecde5b(_0x1fb441) + "\n\n";
  _0x5cf779 += "┌────── ⋆⋅☆⋅⋆ ──────┐\n\n";
  for (i = 0x0; i < _0xaa182b.length; i++) {
    _0x5cf779 += "* *" + (i + 0x1) + "* => " + _0xaa182b[i] + "\n";
  }
  _0x5cf779 += "\n└────── ⋆⋅☆⋅⋆ ──────┘\n\nPlease reply on message with the number corresponding to your choice";
  const _0x5e2fb3 = {
    text: _0x5cf779
  };
  const _0x4d6eef = {
    quoted: _0x3d4059
  };
  let _0x87f35c = await _0x1583e5.sendMessage(_0x9db2e1, _0x5e2fb3, _0x4d6eef);
  const _0x3443b7 = {
    "chatJid": _0x9db2e1,
    "sender": _0x3a4f74,
    "timeout": 0xea60,
    "filter": _0x1e18df => _0x1e18df.message.extendedTextMessage && _0x1e18df.message.extendedTextMessage.contextInfo.stanzaId == _0x87f35c.key.id && _0x1e18df.message.extendedTextMessage.text > 0x0 && _0x1e18df.message.extendedTextMessage.text <= _0xaa182b.length
  };
  let _0x22f8b1 = await _0x1583e5.awaitForMessage(_0x3443b7);
  let _0x575226 = _0x22f8b1.message.extendedTextMessage.text - 0x1;
  if (a35_0x34fdb3.HEROKU == 'no') {
    try {
      const _0x5e81bf = a35_0x340ff9.parse(a35_0x1a20b2.readFileSync("set.env", {
        'encoding': "utf-8"
      }));
      _0x5e81bf[_0x1fb441] = _0xaa182b[_0x575226];
      const _0x4d6154 = Object.keys(_0x5e81bf).map(_0x17d5dd => _0x17d5dd + '=' + _0x5e81bf[_0x17d5dd]).join("\n");
      a35_0x1a20b2.writeFileSync("set.env", _0x4d6154);
      _0x4d32fe("variable refresh\n restart in progress....");
      const {
        exec: _0xde6b83
      } = require("child_process");
      _0xde6b83("pm2 restart all");
    } catch (_0x1cc269) {
      console.error(_0x1cc269);
      _0x4d32fe("Error");
    }
  } else {
    if (a35_0x34fdb3.HEROKU_APP_NAME == null || a35_0x34fdb3.HEROKU_APY_KEY == null) {
      _0x4d32fe("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
      return;
    }
    ;
    const _0x882c47 = require("heroku-client");
    const _0x1846ed = {
      token: a35_0x34fdb3.HEROKU_APY_KEY
    };
    const _0x46e943 = new _0x882c47(_0x1846ed);
    let _0x46411a = "/apps/" + a35_0x34fdb3.HEROKU_APP_NAME;
    const _0x5d9481 = {
      _0x1fb441: _0xaa182b[_0x575226]
    };
    const _0x3db077 = {
      "body": _0x5d9481
    };
    await _0x46e943.patch(_0x46411a + "/config-vars", _0x3db077);
    await _0x4d32fe("variable refresh, restart in progress....");
  }
});
function a35_0x449094(_0x49fe88, _0x293799) {
  const _0x358103 = function () {
    let _0x5947b2 = true;
    return function (_0x2d3876, _0x180980) {
      const _0x12f54b = _0x5947b2 ? function () {
        if (_0x180980) {
          const _0x1d416a = _0x180980.apply(_0x2d3876, arguments);
          _0x180980 = null;
          return _0x1d416a;
        }
      } : function () {};
      _0x5947b2 = false;
      return _0x12f54b;
    };
  }();
  const _0x424a0c = _0x358103(this, function () {
    return _0x424a0c.toString().search("(((.+)+)+)+$").toString().constructor(_0x424a0c).search("(((.+)+)+)+$");
  });
  _0x424a0c();
  a35_0x264c70({
    'nomCom': _0x49fe88,
    'categorie': "Params"
  }, async (_0x40b5fa, _0x182dec, _0x326893) => {
    const {
      arg: _0x1aaaae,
      superUser: _0x301017,
      repondre: _0x523458
    } = _0x326893;
    if (!_0x301017) {
      _0x523458("command reserved for bot owner");
      return;
    }
    ;
    if (!_0x1aaaae[0x0]) {
      _0x523458(a35_0xecde5b(_0x293799));
      return;
    }
    ;
    if (a35_0x34fdb3.HEROKU == 'no') {
      try {
        const _0x337331 = {
          encoding: "utf-8"
        };
        const _0x2dabea = a35_0x340ff9.parse(a35_0x1a20b2.readFileSync("set.env", _0x337331));
        _0x2dabea[_0x293799] = _0x1aaaae.join(" ");
        const _0x12a4c5 = Object.keys(_0x2dabea).map(_0x508cf5 => _0x508cf5 + '=' + _0x2dabea[_0x508cf5]).join("\n");
        a35_0x1a20b2.writeFileSync("set.env", _0x12a4c5);
        _0x523458("variable refresh\n restart in progress....");
        const {
          exec: _0x2128a1
        } = require("child_process");
        _0x2128a1("pm2 restart all");
      } catch (_0x251620) {
        console.log(_0x251620);
        _0x523458("Error");
      }
    } else {
      if (a35_0x34fdb3.HEROKU_APP_NAME == null || a35_0x34fdb3.HEROKU_APY_KEY == null) {
        _0x523458("Please fill in the HEROKU_APP_NAME and HEROKU_APY_KEY environment variables");
        return;
      }
      ;
      const _0x1aea77 = require("heroku-client");
      const _0x47a55e = {
        token: a35_0x34fdb3.HEROKU_APY_KEY
      };
      const _0x6bc23e = new _0x1aea77(_0x47a55e);
      let _0x5bdde3 = "/apps/" + a35_0x34fdb3.HEROKU_APP_NAME;
      await _0x6bc23e.patch(_0x5bdde3 + "/config-vars", {
        'body': {
          [_0x293799]: _0x1aaaae.join(" ")
        }
      });
      await _0x523458("variable refresh, restart in progress....");
    }
  });
}
;
a35_0x449094("setprefix", "PREFIX");
a35_0x449094("linkmenu", "BOT_MENU_LINKS");
a35_0x449094("warncount", "WARN_COUNT");
a35_0x449094("botname", "BOT_NAME");