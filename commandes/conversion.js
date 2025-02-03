const a26_0x532c40 = function () {
  let _0x58d367 = true;
  return function (_0x40adab, _0x1694e2) {
    const _0xb91ac0 = _0x58d367 ? function () {
      if (_0x1694e2) {
        const _0x457bda = _0x1694e2.apply(_0x40adab, arguments);
        _0x1694e2 = null;
        return _0x457bda;
      }
    } : function () {};
    _0x58d367 = false;
    return _0xb91ac0;
  };
}();
const a26_0x4f0dd1 = a26_0x532c40(this, function () {
  return a26_0x4f0dd1.toString().search("(((.+)+)+)+$").toString().constructor(a26_0x4f0dd1).search("(((.+)+)+)+$");
});
a26_0x4f0dd1();
const {
  Sticker: a26_0x4fce38,
  createSticker: a26_0x3f0319,
  StickerTypes: a26_0x5c6e0c
} = require("wa-sticker-formatter");
const {
  zokou: a26_0x33f144
} = require("../framework/zokou");
const a26_0x146889 = require("../framework/traduction");
const {
  downloadMediaMessage: a26_0x37e31a,
  downloadContentFromMessage: a26_0x563b62
} = require("@faouzkk/baileys");
const a26_0x71e3a1 = require("fs-extra");
const a26_0x1d8e78 = require("axios");
const a26_0x5c653a = require("form-data");
const {
  exec: a26_0x3e67bb
} = require("child_process");
const {
  uploadToCatbox: a26_0x28f1ce
} = require("../framework/mesfonctions");
async function a26_0x161c42(_0x4c2ad5) {
  if (!a26_0x71e3a1.existsSync(_0x4c2ad5)) {
    throw new Error("Fichier non existant");
  }
  try {
    const _0x2f1f0e = new a26_0x5c653a();
    _0x2f1f0e.append("file", a26_0x71e3a1.createReadStream(_0x4c2ad5));
    const {
      data: _0x4a74d2
    } = await a26_0x1d8e78.post("https://telegra.ph/upload", _0x2f1f0e, {
      'headers': {
        ..._0x2f1f0e.getHeaders()
      }
    });
    if (_0x4a74d2 && _0x4a74d2[0x0] && _0x4a74d2[0x0].src) {
      return "https://telegra.ph" + _0x4a74d2[0x0].src;
    } else {
      throw new Error("Erreur lors de la récupération du lien de la vidéo");
    }
  } catch (_0x424b38) {
    throw new Error(String(_0x424b38));
  }
}
const a26_0x32267b = {
  "nomCom": "sticker",
  "categorie": "Conversion",
  "reaction": "👨🏿‍💻",
  "desc": "convert image or video into sticker in full size",
  "alias": ['s']
};
a26_0x33f144(a26_0x32267b, async (_0x332434, _0x5d5c3b, _0x29a81f) => {
  let {
    ms: _0x54a060,
    mtype: _0x279ae5,
    arg: _0x3ed1c8,
    repondre: _0x4d71a5,
    nomAuteurMessage: _0x7b3c7e
  } = _0x29a81f;
  var _0x2c25c2 = JSON.stringify(_0x54a060.message);
  var _0x1e08e3 = _0x279ae5 === "extendedTextMessage" && _0x2c25c2.includes("imageMessage");
  var _0x56e89c = _0x279ae5 === "extendedTextMessage" && _0x2c25c2.includes("videoMessage");
  const _0x576054 = '' + Math.floor(Math.random() * 0x2710) + ".webp";
  if (_0x279ae5 === "imageMessage" || _0x1e08e3) {
    let _0x4ebd5c;
    if (_0x54a060.message.imageMessage) {
      _0x4ebd5c = _0x54a060.message.imageMessage;
    } else {
      _0x4ebd5c = _0x54a060.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
    }
    const _0x48723a = await a26_0x563b62(_0x4ebd5c, "image");
    let _0x1f6c02 = Buffer.from([]);
    for await (const _0x5de421 of _0x48723a) {
      _0x1f6c02 = Buffer.concat([_0x1f6c02, _0x5de421]);
    }
    sticker = new a26_0x4fce38(_0x1f6c02, {
      'pack': "Zokou-Md",
      'author': _0x7b3c7e,
      'type': _0x3ed1c8.includes("crop") || _0x3ed1c8.includes('c') ? a26_0x5c6e0c.CROPPED : a26_0x5c6e0c.FULL,
      'quality': 0x64
    });
  } else {
    if (_0x279ae5 === "videoMessage" || _0x56e89c) {
      let _0x3d148d;
      if (_0x54a060.message.videoMessage) {
        _0x3d148d = _0x54a060.message.videoMessage;
      } else {
        _0x3d148d = _0x54a060.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage;
      }
      const _0x2c223b = await a26_0x563b62(_0x3d148d, "video");
      let _0x3e109a = Buffer.from([]);
      for await (const _0x1d8269 of _0x2c223b) {
        _0x3e109a = Buffer.concat([_0x3e109a, _0x1d8269]);
      }
      sticker = new a26_0x4fce38(_0x3e109a, {
        'pack': "Zokou-Md",
        'author': _0x7b3c7e,
        'type': _0x3ed1c8.includes('-r') || _0x3ed1c8.includes('-c') ? a26_0x5c6e0c.CROPPED : a26_0x5c6e0c.FULL,
        'quality': 0x28
      });
    } else {
      _0x4d71a5("Please mention an image or video!");
      return;
    }
  }
  await sticker.toFile(_0x576054);
  const _0x4ef6d2 = {
    "quoted": _0x54a060
  };
  await _0x5d5c3b.sendMessage(_0x332434, {
    'sticker': a26_0x71e3a1.readFileSync(_0x576054)
  }, _0x4ef6d2);
  try {
    a26_0x71e3a1.unlinkSync(_0x576054);
  } catch (_0x312e12) {
    console.log(_0x312e12);
  }
});
const a26_0x25e442 = {
  "nomCom": "scrop",
  "categorie": "Conversion",
  "reaction": "👨🏿‍💻",
  "desc": "convert image or video into sticker in cropped size",
  "alias": ['sc']
};
a26_0x33f144(a26_0x25e442, async (_0x2b7492, _0x1d7069, _0x363490) => {
  const {
    ms: _0x2e3d48,
    msgRepondu: _0xc5702c,
    arg: _0x242850,
    repondre: _0x5d7900,
    nomAuteurMessage: _0x105570
  } = _0x363490;
  if (!_0xc5702c) {
    _0x5d7900("make sure to mention the media");
    return;
  }
  ;
  if (!_0x242850[0x0]) {
    pack = _0x105570;
  } else {
    pack = _0x242850.join(" ");
  }
  ;
  if (_0xc5702c.imageMessage) {
    mediamsg = _0xc5702c.imageMessage;
  } else {
    if (_0xc5702c.videoMessage) {
      mediamsg = _0xc5702c.videoMessage;
    } else {
      if (_0xc5702c.stickerMessage) {
        mediamsg = _0xc5702c.stickerMessage;
      } else {
        _0x5d7900("Uh media please");
        return;
      }
    }
  }
  ;
  var _0x194cfa = await _0x1d7069.downloadAndSaveMediaMessage(mediamsg);
  const _0x2f8ed3 = {
    "pack": pack,
    "type": a26_0x5c6e0c.CROPPED,
    "categories": ['🤩', '🎉'],
    id: "12345",
    "quality": 0x46,
    "background": "transparent"
  };
  let _0x23d15b = new a26_0x4fce38(_0x194cfa, _0x2f8ed3);
  const _0x59945c = await _0x23d15b.toBuffer();
  const _0x5a5631 = {
    sticker: _0x59945c
  };
  const _0x6c79ea = {
    "quoted": _0x2e3d48
  };
  _0x1d7069.sendMessage(_0x2b7492, _0x5a5631, _0x6c79ea);
});
const a26_0x58e1b3 = {
  "nomCom": "take",
  "categorie": "Conversion",
  "reaction": "👨🏿‍💻",
  "desc": "change sticker packname or author name",
  "alias": ["steal"]
};
a26_0x33f144(a26_0x58e1b3, async (_0x359209, _0x583084, _0x472c40) => {
  const {
    ms: _0xa551a1,
    msgRepondu: _0x5424d6,
    arg: _0x312d21,
    repondre: _0x38be0f,
    nomAuteurMessage: _0x123da0
  } = _0x472c40;
  if (!_0x5424d6) {
    _0x38be0f("make sure to mention the media");
    return;
  }
  ;
  if (!_0x312d21[0x0]) {
    pack = _0x123da0;
  } else {
    pack = _0x312d21.join(" ");
  }
  ;
  if (_0x5424d6.imageMessage) {
    mediamsg = _0x5424d6.imageMessage;
  } else {
    if (_0x5424d6.videoMessage) {
      mediamsg = _0x5424d6.videoMessage;
    } else {
      if (_0x5424d6.stickerMessage) {
        mediamsg = _0x5424d6.stickerMessage;
      } else {
        _0x38be0f("Uh a media please");
        return;
      }
    }
  }
  ;
  var _0x41fafd = await _0x583084.downloadAndSaveMediaMessage(mediamsg);
  const _0x4bd67f = {
    "pack": pack,
    "type": a26_0x5c6e0c.FULL,
    "categories": ['🤩', '🎉'],
    id: "12345",
    "quality": 0x46,
    "background": "transparent"
  };
  let _0x466e5c = new a26_0x4fce38(_0x41fafd, _0x4bd67f);
  const _0x2e2b56 = await _0x466e5c.toBuffer();
  const _0x2292a7 = {
    sticker: _0x2e2b56
  };
  const _0x1fcfd2 = {
    "quoted": _0xa551a1
  };
  _0x583084.sendMessage(_0x359209, _0x2292a7, _0x1fcfd2);
});
const a26_0x2c355f = {
  "nomCom": "write",
  "categorie": "Conversion",
  "reaction": "👨🏿‍💻",
  "desc": "Write any text under image and return sticker",
  "alias": ['sw']
};
a26_0x33f144(a26_0x2c355f, async (_0x27c80e, _0x178cf2, _0x5553db) => {
  const {
    ms: _0x39b9a1,
    msgRepondu: _0x486d48,
    arg: _0xa2e88f,
    repondre: _0x3dcbdc,
    nomAuteurMessage: _0x443e31
  } = _0x5553db;
  if (!_0x486d48) {
    _0x3dcbdc("Please mention an image");
    return;
  }
  if (!_0x486d48.imageMessage) {
    _0x3dcbdc("The command only works with images");
    return;
  }
  ;
  text = _0xa2e88f.join(" ");
  if (!text || text === null) {
    _0x3dcbdc("Make sure to insert text");
    return;
  }
  ;
  const _0x3a0a64 = _0x486d48.imageMessage;
  const _0x34fd0c = await _0x178cf2.downloadAndSaveMediaMessage(_0x3a0a64);
  const _0x43189e = new a26_0x5c653a();
  _0x43189e.append("image", a26_0x71e3a1.createReadStream(_0x34fd0c));
  const _0x4bb920 = {
    'Authorization': "Client-ID b40a1820d63cd4e",
    ..._0x43189e.getHeaders()
  };
  const _0x55b812 = {
    "method": "post",
    "maxBodyLength": Infinity,
    "url": "https://api.imgur.com/3/image",
    "headers": _0x4bb920,
    "data": _0x43189e
  };
  try {
    const _0x1c2711 = await a26_0x1d8e78(_0x55b812);
    const _0x2826f5 = _0x1c2711.data.data.link;
    console.log(_0x2826f5);
    const _0x1a4dfc = "https://api.memegen.link/images/custom/-/" + text + ".png?background=" + _0x2826f5;
    const _0x3b57a4 = {
      "pack": _0x443e31,
      "author": "Zokou-Md",
      "type": a26_0x5c6e0c.FULL,
      "categories": ['🤩', '🎉'],
      id: "12345",
      "quality": 0x46,
      "background": "transparent"
    };
    const _0xe9a376 = new a26_0x4fce38(_0x1a4dfc, _0x3b57a4);
    const _0x55eff8 = await _0xe9a376.toBuffer();
    const _0x30cd7e = {
      sticker: _0x55eff8
    };
    const _0x1b86d6 = {
      "quoted": _0x39b9a1
    };
    _0x178cf2.sendMessage(_0x27c80e, _0x30cd7e, _0x1b86d6);
  } catch (_0x2c30b4) {
    console.error("Error uploading to Imgur :", _0x2c30b4);
    _0x3dcbdc("An error occurred while creating the meme.");
  }
});
const a26_0x4c02da = {
  "nomCom": "photo",
  "categorie": "Conversion",
  "reaction": "👨🏿‍💻",
  "desc": "get image from sticker"
};
a26_0x33f144(a26_0x4c02da, async (_0x4c798c, _0x4782a1, _0x1df939) => {
  const {
    ms: _0x2d9e30,
    msgRepondu: _0x11b31e,
    arg: _0x14371e,
    repondre: _0x516589,
    nomAuteurMessage: _0x28a061
  } = _0x1df939;
  if (!_0x11b31e) {
    _0x516589("make sure to mention the media");
    return;
  }
  ;
  if (!_0x11b31e.stickerMessage) {
    _0x516589("Um mention a non-animated sticker");
    return;
  }
  ;
  let _0x1b52ea = await _0x4782a1.downloadAndSaveMediaMessage(_0x11b31e.stickerMessage);
  let _0x1edcb3 = await ('' + Math.floor(Math.random() * 0x2710) + ".png");
  a26_0x3e67bb("ffmpeg -i " + _0x1b52ea + " " + _0x1edcb3, _0xdbfdb6 => {
    a26_0x71e3a1.unlinkSync(_0x1b52ea);
    if (_0xdbfdb6) {
      const _0x254327 = {
        text: "A non-animated sticker please"
      };
      const _0x1373a3 = {
        "quoted": _0x2d9e30
      };
      _0x4782a1.sendMessage(_0x4c798c, _0x254327, _0x1373a3);
      return;
    }
    let _0x1757c1 = a26_0x71e3a1.readFileSync(_0x1edcb3);
    const _0x327463 = {
      image: _0x1757c1
    };
    const _0x523797 = {
      "quoted": _0x2d9e30
    };
    _0x4782a1.sendMessage(_0x4c798c, _0x327463, _0x523797);
    a26_0x71e3a1.unlinkSync(_0x1edcb3);
  });
});
const a26_0x204f99 = {
  "nomCom": "trt",
  "categorie": "Conversion",
  "reaction": "👨🏿‍💻",
  "desc": "translate any text"
};
a26_0x33f144(a26_0x204f99, async (_0xf42adb, _0x5a8698, _0x13bd9f) => {
  const {
    msgRepondu: _0x5ca682,
    repondre: _0x2293f9,
    arg: _0x1dfdf7
  } = _0x13bd9f;
  if (_0x5ca682) {
    try {
      if (!_0x1dfdf7 || !_0x1dfdf7[0x0]) {
        _0x2293f9("(eg : trt en)");
        return;
      }
      const _0xb63542 = {
        'to': _0x1dfdf7[0x0]
      };
      let _0x21e665 = await a26_0x146889(_0x5ca682.conversation, _0xb63542);
      _0x2293f9(_0x21e665);
    } catch (_0x350803) {
      _0x2293f9("Mention a texte Message");
    }
  } else {
    _0x2293f9("Mention a texte Message");
  }
});
const a26_0x937c91 = {
  "nomCom": "url",
  "categorie": "Conversion",
  "reaction": "👨🏿‍💻",
  "desc": "convert image or video into sticker"
};
a26_0x33f144(a26_0x937c91, async (_0x2ddaab, _0x93b753, _0x598dae) => {
  const {
    msgRepondu: _0xdb93b1,
    repondre: _0x453e0a
  } = _0x598dae;
  if (!_0xdb93b1) {
    _0x453e0a("mention a image or video");
    return;
  }
  let _0x40cc9f;
  if (_0xdb93b1.videoMessage) {
    _0x40cc9f = await _0x93b753.downloadAndSaveMediaMessage(_0xdb93b1.videoMessage);
  } else {
    if (_0xdb93b1.imageMessage) {
      _0x40cc9f = await _0x93b753.downloadAndSaveMediaMessage(_0xdb93b1.imageMessage);
    } else {
      if (_0xdb93b1.audioMessage) {
        _0x40cc9f = await _0x93b753.downloadAndSaveMediaMessage(_0xdb93b1.audioMessage);
      } else {
        _0x453e0a("mention a image or video");
        return;
      }
    }
  }
  try {
    const _0x4cd931 = await a26_0x28f1ce(_0x40cc9f);
    _0x453e0a(_0x4cd931);
  } catch (_0x27527e) {
    console.error("Erreur lors de la création du lien Telegraph :", _0x27527e);
    _0x453e0a("Opps error");
  } finally {
    a26_0x71e3a1.unlinkSync(_0x40cc9f);
  }
});