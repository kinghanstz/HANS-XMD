const a21_0x56b382 = function () {
  let _0x385ee4 = true;
  return function (_0xe7b3b6, _0x252f5d) {
    const _0x3fad05 = _0x385ee4 ? function () {
      if (_0x252f5d) {
        const _0x798241 = _0x252f5d.apply(_0xe7b3b6, arguments);
        _0x252f5d = null;
        return _0x798241;
      }
    } : function () {};
    _0x385ee4 = false;
    return _0x3fad05;
  };
}();
const a21_0x325136 = a21_0x56b382(this, function () {
  return a21_0x325136.toString().search("(((.+)+)+)+$").toString().constructor(a21_0x325136).search("(((.+)+)+)+$");
});
a21_0x325136();
const {
  zokou: a21_0x371ed1
} = require("../framework/zokou");
const a21_0x28624e = require("../framework/traduction");
const {
  default: a21_0x357325
} = require("axios");
const a21_0x2c94d4 = {
  "nomCom": "bot",
  "reaction": '📡',
  "categorie": 'IA',
  "desc": "chatbot Ai , talk with him"
};
a21_0x371ed1(a21_0x2c94d4, async (_0x5f400e, _0x3f8a61, _0x210b31) => {
  const {
    repondre: _0x237ebe,
    ms: _0xa848ef,
    arg: _0x449970
  } = _0x210b31;
  if (!_0x449970 || !_0x449970[0x0]) {
    return _0x237ebe("yes I'm listening to you.");
  }
  try {
    const _0x377de0 = {
      'to': 'en'
    };
    const _0x51a328 = await a21_0x28624e(_0x449970.join(" "), _0x377de0);
    console.log(_0x51a328);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x51a328).then(_0x3b6b39 => _0x3b6b39.json()).then(_0x474a98 => {
      const _0x18f7c1 = _0x474a98.cnt;
      console.log(_0x18f7c1);
      const _0x3e9506 = {
        to: 'en'
      };
      a21_0x28624e(_0x18f7c1, _0x3e9506).then(_0x1cd415 => {
        _0x237ebe(_0x1cd415);
      })["catch"](_0x1a3be2 => {
        console.error("Error when translating into French :", _0x1a3be2);
        _0x237ebe("Error when translating into French");
      });
    })["catch"](_0x2edfc9 => {
      console.error("Error requesting BrainShop :", _0x2edfc9);
      _0x237ebe("Error requesting BrainShop");
    });
  } catch (_0x27c8eb) {
    _0x237ebe("oops an error : " + _0x27c8eb);
  }
});
const a21_0x4cf3a4 = {
  "nomCom": "dalle",
  "reaction": '📡',
  "categorie": 'IA',
  "desc": "image generator by prompt"
};
a21_0x371ed1(a21_0x4cf3a4, async (_0x1d50e0, _0x296c47, _0x2ddb4a) => {
  const {
    repondre: _0x3f01e0,
    arg: _0x2a58fd,
    ms: _0x66613d
  } = _0x2ddb4a;
  try {
    if (!_0x2a58fd || _0x2a58fd.length === 0x0) {
      return _0x3f01e0("Please enter the necessary information to generate the image.");
    }
    const _0x489c85 = _0x2a58fd.join(" ");
    const _0x21c506 = await a21_0x357325.get("http://api.maher-zubair.tech/ai/photoleap?q=" + _0x489c85);
    const _0x7c1cb4 = _0x21c506.data;
    if (_0x7c1cb4.status == 0xc8) {
      const _0x2816bd = _0x7c1cb4.result;
      const _0x494a94 = {
        url: _0x2816bd
      };
      const _0x46249d = {
        "image": _0x494a94,
        "caption": "*powered by ZOKOU-MD*"
      };
      const _0x127935 = {
        "quoted": _0x66613d
      };
      _0x296c47.sendMessage(_0x1d50e0, _0x46249d, _0x127935);
    } else {
      _0x3f01e0("Error during image generation.");
    }
  } catch (_0xb79655) {
    console.error("Erreur:", _0xb79655.message || "Une erreur s'est produite");
    _0x3f01e0("Oops, an error occurred while processing your request");
  }
});
const a21_0xf1e2a7 = {
  "nomCom": "gpt",
  "reaction": '📡',
  "categorie": 'IA',
  "desc": "Chatgpt Ai , ask him question and request"
};
a21_0x371ed1(a21_0xf1e2a7, async (_0x434f3d, _0x100843, _0x2ce210) => {
  const {
    repondre: _0x43b8d2,
    arg: _0x268ef9,
    ms: _0x4472cd
  } = _0x2ce210;
  try {
    if (!_0x268ef9 || _0x268ef9.length === 0x0) {
      return _0x43b8d2("Please ask a question.");
    }
    const _0x318a85 = _0x268ef9.join(" ");
    const _0x13add3 = await a21_0x357325.get("https://api.giftedtech.my.id/api/ai/gpt?apikey=gifted&q=" + encodeURI(_0x318a85));
    const _0x35ec16 = _0x13add3.data;
    if (_0x35ec16.status == 0xc8) {
      _0x43b8d2(_0x35ec16.result);
    } else {
      _0x43b8d2("Error during response generation.");
    }
  } catch (_0x304b99) {
    console.error("Erreur:", _0x304b99.message || "Une erreur s'est produite");
    _0x43b8d2("Oops, an error occurred while processing your request.");
  }
});