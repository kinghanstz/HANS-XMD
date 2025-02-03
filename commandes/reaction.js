const a48_0x5bdd6e = function () {
  let _0x59769e = true;
  return function (_0x52569a, _0x82e3f3) {
    const _0x561c45 = _0x59769e ? function () {
      if (_0x82e3f3) {
        const _0x5c3ab3 = _0x82e3f3.apply(_0x52569a, arguments);
        _0x82e3f3 = null;
        return _0x5c3ab3;
      }
    } : function () {};
    _0x59769e = false;
    return _0x561c45;
  };
}();
const a48_0x816640 = a48_0x5bdd6e(this, function () {
  return a48_0x816640.toString().search("(((.+)+)+)+$").toString().constructor(a48_0x816640).search("(((.+)+)+)+$");
});
a48_0x816640();
const a48_0x2b7a30 = require("fluent-ffmpeg");
const a48_0xa3a389 = require("fs-extra");
const {
  unlink: a48_0x520650
} = require('fs').promises;
const {
  zokou: a48_0x2fae01
} = require("../framework/zokou");
const a48_0x265645 = require("@ffmpeg-installer/ffmpeg").path;
const a48_0x406d97 = require("axios");
a48_0x2b7a30.setFfmpegPath(a48_0x265645);
const a48_0x2464e7 = async _0x6add37 => {
  const _0x11d2cf = '' + Math.random().toString(0x24);
  const _0x2730af = './' + _0x11d2cf + ".gif";
  const _0x5226ae = './' + _0x11d2cf + ".mp4";
  await a48_0xa3a389.writeFileSync(_0x2730af, _0x6add37);
  return new Promise((_0x28f2d4, _0x2bf818) => {
    a48_0x2b7a30(_0x2730af).outputOptions(["-movflags faststart", "-pix_fmt yuv420p", "-vf scale=trunc(iw/2)*2:trunc(ih/2)*2"]).toFormat("mp4").save(_0x5226ae).on("end", async () => {
      try {
        const _0x1e2a54 = await a48_0xa3a389.readFile(_0x5226ae);
        await Promise.all([a48_0x520650(_0x2730af), a48_0x520650(_0x5226ae)]);
        _0x28f2d4(_0x1e2a54);
      } catch (_0x1e299f) {
        _0x2bf818(_0x1e299f);
      }
    }).on("error", async _0x3d833d => {
      await Promise.allSettled([a48_0x520650(_0x2730af), a48_0x520650(_0x5226ae)]);
      _0x2bf818(_0x3d833d);
    });
  });
};
const a48_0x350c72 = (_0xc6f35d, _0x470ec2) => {
  a48_0x2fae01({
    'nomCom': _0xc6f35d,
    'categorie': "Reaction",
    'reaction': _0x470ec2,
    'desc': "send reaction gif"
  }, async (_0x4248bc, _0x4f1c02, _0x1e2607) => {
    const {
      auteurMessage: _0x4e6d65,
      auteurMsgRepondu: _0x45e91c,
      repondre: _0x46bbce,
      ms: _0xe09897,
      msgRepondu: _0x3f7e8b
    } = _0x1e2607;
    const _0xfe08c8 = "https://api.waifu.pics/sfw/" + _0xc6f35d;
    try {
      const _0x276859 = await a48_0x406d97.get(_0xfe08c8);
      const _0x1e055a = _0x276859.data.url;
      const _0x2a15b8 = {
        responseType: "arraybuffer"
      };
      const _0x22d64b = await a48_0x406d97.get(_0x1e055a, _0x2a15b8);
      const _0x1d2504 = await _0x22d64b.data;
      const _0x3d29c1 = await a48_0x2464e7(_0x1d2504);
      if (_0x3f7e8b) {
        var _0x5628c0 = " @" + _0x4e6d65.split('@')[0x0] + "  " + _0xc6f35d + " @" + _0x45e91c.split('@')[0x0];
        const _0x369371 = {
          "video": _0x3d29c1,
          "gifPlayback": true,
          "caption": _0x5628c0,
          "mentions": [_0x4e6d65, _0x45e91c]
        };
        const _0x501d06 = {
          "quoted": _0xe09897
        };
        _0x4f1c02.sendMessage(_0x4248bc, _0x369371, _0x501d06);
      } else {
        const _0x3bb8c5 = {
          'video': _0x3d29c1,
          'gifPlayback': true,
          'caption': '@' + _0x4e6d65.split('@')[0x0] + " " + _0xc6f35d + " everyone",
          'mentions': [_0x4e6d65]
        };
        const _0x22390e = {
          "quoted": _0xe09897
        };
        _0x4f1c02.sendMessage(_0x4248bc, _0x3bb8c5, _0x22390e);
      }
    } catch (_0x5ea755) {
      _0x46bbce("Error occurred while retrieving the data. :" + _0x5ea755);
      console.log(_0x5ea755);
    }
  });
};
a48_0x350c72("bully", '👊');
a48_0x350c72("cuddle", '🤗');
a48_0x350c72("cry", '😢');
a48_0x350c72("hug", '😊');
a48_0x350c72("awoo", '🐺');
a48_0x350c72("kiss", '😘');
a48_0x350c72("lick", '👅');
a48_0x350c72("pat", '👋');
a48_0x350c72("smug", '😏');
a48_0x350c72("bonk", '🔨');
a48_0x350c72("yeet", '🚀');
a48_0x350c72("blush", '😊');
a48_0x350c72("smile", '😄');
a48_0x350c72("wave", '👋');
a48_0x350c72("highfive");
a48_0x350c72("handhold");
a48_0x350c72("nom", '👅');
a48_0x350c72("bite", '🦷');
a48_0x350c72("glomp", '🤗');
a48_0x350c72("slap", '👋');
a48_0x350c72("kill", '💀');
a48_0x350c72("kick", '🦵');
a48_0x350c72("happy", '😄');
a48_0x350c72("wink", '😉');
a48_0x350c72("poke", '👉');
a48_0x350c72("dance", '💃');
a48_0x350c72("cringe", '😬');