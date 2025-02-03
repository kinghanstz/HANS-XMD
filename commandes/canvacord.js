const {
  zokou: a25_0x4d28e1
} = require("../framework/zokou");
const a25_0x16daca = require("canvacord");
const {
  uploadToCatbox: a25_0x22c404
} = require("../framework/mesfonctions");
const {
  unlink: a25_0x3e4555,
  unlinkSync: a25_0x40cefb
} = require('fs');
function a25_0x5da0ab(_0x3ee45a, _0x50b559) {
  const _0x576090 = function () {
    let _0x222590 = true;
    return function (_0x44842e, _0x3fe2b1) {
      const _0x56b3cb = _0x222590 ? function () {
        if (_0x3fe2b1) {
          const _0x48ff9b = _0x3fe2b1.apply(_0x44842e, arguments);
          _0x3fe2b1 = null;
          return _0x48ff9b;
        }
      } : function () {};
      _0x222590 = false;
      return _0x56b3cb;
    };
  }();
  const _0x59691c = _0x576090(this, function () {
    return _0x59691c.toString().search("(((.+)+)+)+$").toString().constructor(_0x59691c).search("(((.+)+)+)+$");
  });
  _0x59691c();
  a25_0x4d28e1({
    'nomCom': _0x3ee45a,
    'categorie': "Image-Edit",
    'reaction': '🎉',
    'desc': "image editor"
  }, async (_0x55f229, _0x2dad1e, _0x434f3b) => {
    const {
      ms: _0x5e3ec0,
      msgRepondu: _0x4e4ad1,
      auteurMsgRepondu: _0x24263b
    } = _0x434f3b;
    try {
      let _0x54c481;
      if (_0x4e4ad1) {
        if (_0x4e4ad1.imageMessage) {
          const _0x4506e6 = await _0x2dad1e.downloadAndSaveMediaMessage(_0x4e4ad1.imageMessage);
          _0x54c481 = await a25_0x22c404(_0x4506e6);
          a25_0x40cefb(_0x4506e6);
        } else {
          _0x54c481 = await _0x2dad1e.profilePictureUrl(_0x24263b, "image");
        }
      } else {
        _0x54c481 = "https://i.pinimg.com/564x/84/09/12/840912dd744e6662ab211b8070b5d84c.jpg";
      }
      const _0x159b86 = await _0x50b559(_0x54c481);
      const _0x4fd586 = {
        image: _0x159b86
      };
      const _0x160015 = {
        "quoted": _0x5e3ec0
      };
      await _0x2dad1e.sendMessage(_0x55f229, _0x4fd586, _0x160015);
    } catch (_0xd92ef8) {
      console.error("Error when ordering \"" + _0x3ee45a + "\":", _0xd92ef8);
    }
  });
}
a25_0x5da0ab("shit", a25_0x16daca.Canvacord.shit);
a25_0x5da0ab("wasted", a25_0x16daca.Canvacord.wasted);
a25_0x5da0ab("wanted", a25_0x16daca.Canvacord.wanted);
a25_0x5da0ab("trigger", a25_0x16daca.Canvacord.trigger);
a25_0x5da0ab("trash", a25_0x16daca.Canvacord.trash);
a25_0x5da0ab("rip", a25_0x16daca.Canvacord.rip);
a25_0x5da0ab("sepia", a25_0x16daca.Canvacord.sepia);
a25_0x5da0ab("rainbow", a25_0x16daca.Canvacord.rainbow);
a25_0x5da0ab("hitler", a25_0x16daca.Canvacord.hitler);
a25_0x5da0ab("invert", a25_0x16daca.Canvacord.invert);
a25_0x5da0ab("jail", a25_0x16daca.Canvacord.jail);
a25_0x5da0ab("affect", a25_0x16daca.Canvacord.affect);
a25_0x5da0ab("beautiful", a25_0x16daca.Canvacord.beautiful);
a25_0x5da0ab("blur", a25_0x16daca.Canvacord.blur);
a25_0x5da0ab("circle", a25_0x16daca.Canvacord.circle);
a25_0x5da0ab("facepalm", a25_0x16daca.Canvacord.facepalm);
a25_0x5da0ab("greyscale", a25_0x16daca.Canvacord.greyscale);
a25_0x5da0ab("joke", a25_0x16daca.Canvacord.jokeOverHead);