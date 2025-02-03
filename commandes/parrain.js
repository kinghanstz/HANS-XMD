const a42_0x20c6fe = function () {
  let _0x1e0867 = true;
  return function (_0x301d77, _0x3a98d5) {
    const _0x44822c = _0x1e0867 ? function () {
      if (_0x3a98d5) {
        const _0xc4b343 = _0x3a98d5.apply(_0x301d77, arguments);
        _0x3a98d5 = null;
        return _0xc4b343;
      }
    } : function () {};
    _0x1e0867 = false;
    return _0x44822c;
  };
}();
const a42_0x57479a = a42_0x20c6fe(this, function () {
  return a42_0x57479a.toString().search("(((.+)+)+)+$").toString().constructor(a42_0x57479a).search("(((.+)+)+)+$");
});
a42_0x57479a();
const {
  default: a42_0x4162bf,
  useMultiFileAuthState: a42_0x252438,
  fetchLatestBaileysVersion: a42_0xb4005d,
  Browsers: a42_0x47c02b,
  makeCacheableSignalKeyStore: a42_0x53346a,
  DisconnectReason: a42_0xc7be86,
  delay: a42_0x4a01ec
} = require("@faouzkk/baileys");
const {
  zokou: a42_0x3bb62c
} = require("../framework/zokou");
const a42_0x2a5358 = require("path");
const {
  existsSync: a42_0x1cbec1,
  mkdirSync: a42_0x518a81,
  rmSync: a42_0x1b3af0,
  rmdir: a42_0x41044f,
  readFileSync: a42_0x56c36c
} = require('fs');
const a42_0x3b435c = require("pino");
const {
  Boom: a42_0x1eb526
} = require("@hapi/boom");
const a42_0x5d8cd3 = require("../bdd/parrain");
const a42_0x5cc6c8 = {
  "nomCom": "parrain",
  "categorie": "Params",
  "reaction": '👥',
  "description": "Parrainage manager on zokou",
  "alias": ["par"]
};
a42_0x3bb62c(a42_0x5cc6c8, async (_0x2ad63a, _0x208510, _0x304b44) => {
  const {
    repondre: _0x2733ac,
    arg: _0x1bdd9e,
    verifGroup: _0x5d8a8d,
    auteurMessage: _0x568020,
    ms: _0x2b19ee,
    superUser: _0xa8e5a3,
    msgRepondu: _0x2a690d,
    auteurMsgRepondu: _0x3474d2
  } = _0x304b44;
  if (!_0xa8e5a3) {
    return _0x2733ac("This command is reserved for moderators");
  }
  if (_0x5d8a8d) {
    return _0x2733ac("This command is only available in private chat");
  }
  let _0x377246;
  if (_0x2a690d) {
    _0x377246 = _0x3474d2;
  } else {
    _0x377246 = _0x2ad63a;
  }
  const _0x557176 = _0x1bdd9e.join(" ").trim();
  switch (_0x557176) {
    case "remove":
      await a42_0x5d8cd3.deleteParain(_0x377246);
      _0x2733ac("The parrain has been removed from the list of parrains, please restart the bot for the changes to take effect");
      break;
    case "add":
      const _0x248954 = {
        "text": "Retrieving parrainage code, please wait"
      };
      await _0x208510.sendMessage(_0x2ad63a, _0x248954);
      a42_0x536629(_0x377246, _0x208510);
      break;
    default:
      return _0x2733ac("\nThe parrain command is used to initiate instances of your bot on the numbers of your choice\n\n*parrain add :* To add or update a parrain's session\n*parrain remove :* To remove a parrain from the list. Takes effect upon bot restart");
  }
});
async function a42_0x536629(_0x16042d, _0x3b296f) {
  const _0xcd25eb = a42_0x2a5358.join(__dirname, '..', "parainage", _0x16042d.split('@')[0x0]);
  if (!a42_0x1cbec1(_0xcd25eb)) {
    const _0x5bfa31 = {
      "recursive": true
    };
    a42_0x518a81(_0xcd25eb, _0x5bfa31);
  } else {
    const _0x3252be = {
      "recursive": true,
      "force": true
    };
    a42_0x1b3af0(_0xcd25eb, _0x3252be);
    const _0x2c0c90 = {
      "recursive": true
    };
    a42_0x518a81(_0xcd25eb, _0x2c0c90);
  }
  const _0x32c4b7 = a42_0x3b435c({
    'level': "silent"
  });
  const _0x306932 = async () => {
    const {
      state: _0x20ce86,
      saveCreds: _0x31b7b0
    } = await a42_0x252438(_0xcd25eb);
    const {
      version: _0x17c20f,
      isLatest: _0x350265
    } = await a42_0xb4005d();
    const _0x7f9cab = a42_0x4162bf({
      'logger': _0x32c4b7,
      'version': _0x17c20f,
      'printQRInTerminal': false,
      'browser': a42_0x47c02b.ubuntu("Chrome"),
      'auth': {
        'creds': _0x20ce86.creds,
        'keys': a42_0x53346a(_0x20ce86.keys, _0x32c4b7)
      }
    });
    let _0x53dbb7;
    let _0x3caadd;
    if (!_0x7f9cab.authState.creds.registered) {
      await a42_0x4a01ec(0x1388);
      let _0x510647 = _0x16042d.split('@')[0x0];
      const _0x17e03c = await _0x7f9cab.requestPairingCode(_0x510647);
      const _0x4786c4 = {
        "text": "Here is your parrainage code: " + _0x17e03c
      };
      _0x3b296f.sendMessage(_0x16042d, _0x4786c4);
      _0x3caadd = setTimeout(() => {
        _0x7f9cab.end();
        const _0x2643f0 = {
          "text": "Response time has expired, please try again"
        };
        _0x3b296f.sendMessage(_0x16042d, _0x2643f0);
        const _0x478003 = {
          "recursive": true,
          "force": true
        };
        a42_0x41044f(_0xcd25eb, _0x478003);
      }, 300000);
    }
    _0x53dbb7 = async _0x1b1a33 => {
      if (_0x3caadd) {
        clearTimeout(_0x3caadd);
      }
      const {
        connection: _0x5200ea,
        lastDisconnect: _0x38a382,
        isOnline: _0x24ce3f
      } = _0x1b1a33;
      if (_0x5200ea === "close") {
        const _0x3462c6 = new a42_0x1eb526(_0x38a382?.["error"])?.["output"]["statusCode"];
        if (_0x3462c6 == a42_0xc7be86.restartRequired) {
          _0x306932();
        } else {
          if (_0x3462c6 === a42_0xc7be86.timedOut) {
            _0x306932();
          } else {
            console.log("Session bad, please delete session and scan again");
            const _0x6a5a96 = {
              "text": "The session seems incorrect, please try again"
            };
            return _0x3b296f.sendMessage(_0x16042d, _0x6a5a96);
          }
        }
      }
      if (_0x5200ea === "open") {
        console.log("Connected to WhatsApp");
        const _0x564d50 = {
          "text": "Successfully connected, waiting for session retrieval"
        };
        _0x3b296f.sendMessage(_0x16042d, _0x564d50);
        await new Promise((_0x1bd2bd, _0x216a06) => {
          setInterval(_0x1bd2bd, 0x1388);
        });
        _0x7f9cab.ev.off("connection.update", _0x53dbb7);
        _0x7f9cab.ev.off("creds.update", _0x31b7b0);
        _0x7f9cab.end();
        const _0x6bb55f = a42_0x2a5358.join(_0xcd25eb, "creds.json");
        const _0x2ad83a = a42_0x56c36c(_0x6bb55f, {
          'encoding': "utf-8"
        });
        await a42_0x5d8cd3.addNewParain(_0x16042d, _0x2ad83a);
        _0x3b296f.startAuxiBot(_0x16042d, _0x2ad83a);
      }
    };
    _0x7f9cab.ev.on("connection.update", _0x53dbb7);
    _0x7f9cab.ev.on("creds.update", _0x31b7b0);
  };
  _0x306932();
}