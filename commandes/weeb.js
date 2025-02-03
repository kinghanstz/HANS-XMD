const a56_0x495285 = function () {
  let _0xb01c09 = true;
  return function (_0x4c0f86, _0xdd569) {
    const _0x23bef9 = _0xb01c09 ? function () {
      if (_0xdd569) {
        const _0x1b4b23 = _0xdd569.apply(_0x4c0f86, arguments);
        _0xdd569 = null;
        return _0x1b4b23;
      }
    } : function () {};
    _0xb01c09 = false;
    return _0x23bef9;
  };
}();
const a56_0x347082 = a56_0x495285(this, function () {
  return a56_0x347082.toString().search("(((.+)+)+)+$").toString().constructor(a56_0x347082).search("(((.+)+)+)+$");
});
a56_0x347082();
const a56_0x496972 = require("axios");
const {
  zokou: a56_0x1ce457
} = require("../framework/zokou");
const {
  writeFile: a56_0x2070f1
} = require("fs/promises");
const a56_0x51d14e = {
  "nomCom": "waifu",
  "categorie": "Weeb",
  "reaction": '😏',
  "desc": "send 5 waifu images"
};
a56_0x1ce457(a56_0x51d14e, async (_0x1ca5ca, _0x13d6aa, _0x1f7844) => {
  const {
    repondre: _0x549568,
    ms: _0x514c9b
  } = _0x1f7844;
  try {
    for (let _0x476f7f = 0x0; _0x476f7f < 0x5; _0x476f7f++) {
      const _0x46795c = await a56_0x496972.get("https://api.waifu.pics/sfw/waifu");
      const _0x3e757b = _0x46795c.data.url;
      const _0xee9442 = {
        url: _0x3e757b
      };
      const _0x4d9b5b = {
        image: _0xee9442
      };
      const _0x28a1ec = {
        "quoted": _0x514c9b
      };
      _0x13d6aa.sendMessage(_0x1ca5ca, _0x4d9b5b, _0x28a1ec);
    }
  } catch (_0x39e4ed) {
    _0x549568("Error occurred while retrieving the data. :", _0x39e4ed);
  }
});
const a56_0x38f733 = {
  "nomCom": "neko",
  "categorie": "Weeb",
  "reaction": '😺',
  "desc": "send 5 neko images"
};
a56_0x1ce457(a56_0x38f733, async (_0x41e1e8, _0x280ab2, _0xdf8749) => {
  const {
    repondre: _0x2aaefc,
    ms: _0x5e144b
  } = _0xdf8749;
  try {
    for (let _0x5c3074 = 0x0; _0x5c3074 < 0x5; _0x5c3074++) {
      const _0x316f9f = await a56_0x496972.get("https://api.waifu.pics/sfw/neko");
      const _0x40c019 = _0x316f9f.data.url;
      const _0x171c64 = {
        url: _0x40c019
      };
      const _0x5540b5 = {
        image: _0x171c64
      };
      const _0x392059 = {
        "quoted": _0x5e144b
      };
      _0x280ab2.sendMessage(_0x41e1e8, _0x5540b5, _0x392059);
    }
  } catch (_0x1d5937) {
    _0x2aaefc("Error occurred while retrieving the data. :", _0x1d5937);
  }
});
const a56_0x34893a = {
  "nomCom": "shinobu",
  "categorie": "Weeb",
  "reaction": '🦋',
  "desc": "send 5 shinobu images"
};
a56_0x1ce457(a56_0x34893a, async (_0xbba24d, _0x320aca, _0x326ba2) => {
  const {
    repondre: _0x11f5e6,
    ms: _0x224b08
  } = _0x326ba2;
  try {
    for (let _0x350623 = 0x0; _0x350623 < 0x5; _0x350623++) {
      const _0x531285 = await a56_0x496972.get("https://api.waifu.pics/sfw/shinobu");
      const _0x4e813a = _0x531285.data.url;
      const _0x9cd54c = {
        url: _0x4e813a
      };
      const _0x1e1d5a = {
        image: _0x9cd54c
      };
      const _0x206f38 = {
        "quoted": _0x224b08
      };
      _0x320aca.sendMessage(_0xbba24d, _0x1e1d5a, _0x206f38);
    }
  } catch (_0x3a7041) {
    _0x11f5e6("Error occurred while retrieving the data. :", _0x3a7041);
  }
});
const a56_0x1f244e = {
  "nomCom": "megumin",
  "categorie": "Weeb",
  "reaction": '💥',
  "desc": "send 5 megumin images"
};
a56_0x1ce457(a56_0x1f244e, async (_0x1e754b, _0x26706c, _0x1c8660) => {
  const {
    repondre: _0x37c654,
    ms: _0xc45953
  } = _0x1c8660;
  try {
    for (let _0x523c6d = 0x0; _0x523c6d < 0x5; _0x523c6d++) {
      const _0x3b5c3d = await a56_0x496972.get("https://api.waifu.pics/sfw/megumin");
      const _0x2ecc43 = _0x3b5c3d.data.url;
      const _0x430d3a = {
        url: _0x2ecc43
      };
      const _0x3f2368 = {
        image: _0x430d3a
      };
      const _0x1f1300 = {
        "quoted": _0xc45953
      };
      _0x26706c.sendMessage(_0x1e754b, _0x3f2368, _0x1f1300);
    }
  } catch (_0x1df673) {
    _0x37c654("Error occurred while retrieving the data. :", _0x1df673);
  }
});
const a56_0x28bfc7 = {
  "nomCom": "cosplay",
  "categorie": "Weeb",
  "reaction": '😏',
  "desc": "send 5 cosplay images"
};
a56_0x1ce457(a56_0x28bfc7, async (_0x50297f, _0x241967, _0x3f09f7) => {
  const {
    repondre: _0x30052a,
    ms: _0x56de5c
  } = _0x3f09f7;
  try {
    for (let _0x12242a = 0x0; _0x12242a < 0x5; _0x12242a++) {
      const _0xc553e7 = {
        responseType: "arraybuffer"
      };
      const _0x32922a = await a56_0x496972.get("https://fantox-cosplay-api.onrender.com/", _0xc553e7);
      const _0x4c44ce = _0x32922a.data;
      await a56_0x2070f1("./cosplay.jpg", _0x4c44ce);
      const _0xad6d2 = {
        url: "./cosplay.jpg"
      };
      const _0x4dd725 = {
        image: _0xad6d2
      };
      const _0x1cce79 = {
        "quoted": _0x56de5c
      };
      _0x241967.sendMessage(_0x50297f, _0x4dd725, _0x1cce79);
    }
  } catch (_0x2bd380) {
    _0x30052a("je reçois malheureusement une erreur : " + _0x2bd380);
  }
});
const a56_0xb4959b = {
  "nomCom": "couplepp",
  "categorie": "Weeb",
  "reaction": '💞',
  "desc": "get couple profile picture"
};
a56_0x1ce457(a56_0xb4959b, async (_0x596bcb, _0x14d470, _0x224618) => {
  const {
    repondre: _0x5bdc2f,
    ms: _0x5062bf
  } = _0x224618;
  try {
    _0x5bdc2f("she/he dont love you :)");
    const _0x1ade77 = await a56_0x496972.get("https://smiling-hosiery-bear.cyclic.app/weeb/couplepp");
    const _0x3169a7 = {
      url: _0x1ade77.data.male
    };
    const _0x10bcb8 = {
      "image": _0x3169a7,
      "caption": "For Man"
    };
    const _0x1753dc = {
      "quoted": _0x5062bf
    };
    _0x14d470.sendMessage(_0x596bcb, _0x10bcb8, _0x1753dc);
    const _0x35e6a1 = {
      url: _0x1ade77.data.female
    };
    const _0x2253ff = {
      "image": _0x35e6a1,
      "caption": "_For woman_"
    };
    const _0xedeea9 = {
      "quoted": _0x5062bf
    };
    _0x14d470.sendMessage(_0x596bcb, _0x2253ff, _0xedeea9);
  } catch (_0x4360fd) {
    _0x5bdc2f(_0x4360fd);
  }
});