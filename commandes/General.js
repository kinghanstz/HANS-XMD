const a31_0x1b61e2 = function () {
  let _0x5468aa = true;
  return function (_0x371c6f, _0x240a38) {
    const _0x344d58 = _0x5468aa ? function () {
      if (_0x240a38) {
        const _0x2224d5 = _0x240a38.apply(_0x371c6f, arguments);
        _0x240a38 = null;
        return _0x2224d5;
      }
    } : function () {};
    _0x5468aa = false;
    return _0x344d58;
  };
}();
const a31_0x4bab7d = a31_0x1b61e2(this, function () {
  return a31_0x4bab7d.toString().search("(((.+)+)+)+$").toString().constructor(a31_0x4bab7d).search("(((.+)+)+)+$");
});
a31_0x4bab7d();
const {
  zokou: a31_0x80a717
} = require("../framework/zokou");
const {
  getAllSudoNumbers: a31_0x4f95cb,
  isSudoTableNotEmpty: a31_0x5b1dbd
} = require("../bdd/sudo");
const a31_0x590d22 = require("../set");
const a31_0x3bf2f5 = {
  "nomCom": "mods",
  "categorie": "General",
  "reaction": '💞',
  "desc": "get owner number",
  "alias": ["owner"]
};
a31_0x80a717(a31_0x3bf2f5, async (_0x4be248, _0x3a8f12, _0x415793) => {
  const {
    ms: _0x58cb22,
    mybotpic: _0x5babae
  } = _0x415793;
  const _0x320419 = await a31_0x5b1dbd();
  if (_0x320419) {
    let _0x163d24 = "*My Super-User*\n\n     *Owner Number\n* :\n- 🌟 @" + a31_0x590d22.NUMERO_OWNER + "\n\n------ *other sudos* -----\n";
    let _0x5dd538 = await a31_0x4f95cb();
    for (const _0x3e6711 of _0x5dd538) {
      if (_0x3e6711) {
        sudonumero = _0x3e6711.replace(/[^0-9]/g, '');
        _0x163d24 += "- 💼 @" + sudonumero + "\n";
      } else {
        return;
      }
    }
    const _0x37fe07 = a31_0x590d22.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
    const _0x15f82c = _0x5dd538.concat([_0x37fe07]);
    console.log(_0x5dd538);
    console.log(_0x15f82c);
    _0x3a8f12.sendMessage(_0x4be248, {
      'image': {
        'url': _0x5babae()
      },
      'caption': _0x163d24,
      'mentions': _0x15f82c
    });
  } else {
    const _0x1a9fb8 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + a31_0x590d22.OWNER_NAME + "\n" + "ORG:undefined;\n" + "TEL;type=CELL;type=VOICE;waid=" + a31_0x590d22.NUMERO_OWNER + ':+' + a31_0x590d22.NUMERO_OWNER + "\n" + "END:VCARD";
    const _0x21fea5 = {
      vcard: _0x1a9fb8
    };
    const _0x459694 = {
      "displayName": a31_0x590d22.OWNER_NAME,
      "contacts": [_0x21fea5]
    };
    const _0x3ade6b = {
      contacts: _0x459694
    };
    const _0x9c2d1a = {
      "quoted": _0x58cb22
    };
    _0x3a8f12.sendMessage(_0x4be248, _0x3ade6b, _0x9c2d1a);
  }
});
const a31_0x4e99f5 = {
  "nomCom": "dev",
  "categorie": "General",
  "reaction": '💞',
  "desc": "get zokou developer number"
};
a31_0x80a717(a31_0x4e99f5, async (_0x33b26e, _0x5c7141, _0x261bce) => {
  const {
    ms: _0x81eff2,
    mybotpic: _0x448c94
  } = _0x261bce;
  const _0x5a08d8 = {
    "nom": "Djalega++",
    "numero": "22559763447"
  };
  const _0xbf3088 = {
    "nom": "᚛M๏𝓷keℽ D Lบffy᚜",
    "numero": "22891733300"
  };
  const _0x5bf388 = [_0x5a08d8, _0xbf3088];
  let _0x868c2b = "👋 welcome to Zokou ! here is the dev :\n\n";
  for (const _0x1cbf44 of _0x5bf388) {
    _0x868c2b += "----------------\n• " + _0x1cbf44.nom + " : https://wa.me/" + _0x1cbf44.numero + "\n";
  }
  var _0x3be6df = _0x448c94();
  if (_0x3be6df.match(/\.(mp4|gif)$/i)) {
    try {
      const _0x131206 = {
        url: _0x3be6df
      };
      const _0x2c93a3 = {
        "video": _0x131206,
        "caption": _0x868c2b
      };
      const _0xa5b2f3 = {
        "quoted": _0x81eff2
      };
      _0x5c7141.sendMessage(_0x33b26e, _0x2c93a3, _0xa5b2f3);
    } catch (_0x569964) {
      console.log("🥵🥵 Menu erreur " + _0x569964);
      repondre("🥵🥵 Menu erreur " + _0x569964);
    }
  } else {
    if (_0x3be6df.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        const _0x4d8e0f = {
          url: _0x3be6df
        };
        const _0x2a3c79 = {
          "image": _0x4d8e0f,
          "caption": _0x868c2b
        };
        const _0x44bdf3 = {
          "quoted": _0x81eff2
        };
        _0x5c7141.sendMessage(_0x33b26e, _0x2a3c79, _0x44bdf3);
      } catch (_0x28e9bc) {
        console.log("🥵🥵 Menu erreur " + _0x28e9bc);
        repondre("🥵🥵 Menu erreur " + _0x28e9bc);
      }
    } else {
      repondre(_0x3be6df);
      repondre("link error");
    }
  }
});
const a31_0x3f6607 = {
  "nomCom": "support",
  "categorie": "General",
  "desc": ["get support group"],
  "reaction": '💞',
  "alias": ['sp']
};
a31_0x80a717(a31_0x3f6607, async (_0x488d1a, _0x33d8aa, _0x587c71) => {
  const {
    ms: _0x46d865,
    repondre: _0x42790d,
    auteurMessage: _0xeaa8ec
  } = _0x587c71;
  _0x42790d("look on pm sir ");
  const _0x375ace = {
    text: "https://chat.whatsapp.com/H6oeuhfSMtV1Orjmf2NVnl"
  };
  const _0x272941 = {
    "quoted": _0x46d865
  };
  await _0x33d8aa.sendMessage(_0xeaa8ec, _0x375ace, _0x272941);
});