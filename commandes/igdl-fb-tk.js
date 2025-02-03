const a36_0x39d7b2 = function () {
  let _0x25ecfa = true;
  return function (_0x7db41, _0x1b7d98) {
    const _0x53117c = _0x25ecfa ? function () {
      if (_0x1b7d98) {
        const _0x4d1f42 = _0x1b7d98.apply(_0x7db41, arguments);
        _0x1b7d98 = null;
        return _0x4d1f42;
      }
    } : function () {};
    _0x25ecfa = false;
    return _0x53117c;
  };
}();
const a36_0x5c5150 = a36_0x39d7b2(this, function () {
  return a36_0x5c5150.toString().search("(((.+)+)+)+$").toString().constructor(a36_0x5c5150).search("(((.+)+)+)+$");
});
a36_0x5c5150();
const {
  zokou: a36_0x1e7454
} = require("../framework/zokou");
const a36_0x23aff9 = require('fs');
const a36_0x5b40c4 = require("@xaviabot/fb-downloader");
const {
  default: a36_0x14fc8b
} = require("axios");
const a36_0x228f13 = {
  "nomCom": "igdl",
  "categorie": "Download",
  "desc": "download instagram video"
};
a36_0x1e7454(a36_0x228f13, async (_0x1a4d2e, _0x53e5c8, _0x2e1dfb) => {
  const {
    ms: _0x393bfa,
    repondre: _0x59c5de,
    arg: _0x5a0bc0
  } = _0x2e1dfb;
  let _0x378d74 = _0x5a0bc0.join(" ");
  if (!_0x5a0bc0[0x0]) {
    _0x59c5de("Veillez insérer un lien video instagramme");
    return;
  }
  ;
  try {
    let _0x5319d = await a36_0x14fc8b("http://api.maher-zubair.tech/download/instagram?url=" + _0x378d74);
    try {
      const _0xcfbac6 = {
        url: _0x5319d.data.result[0x0].url
      };
      const _0x6d85b7 = {
        "video": _0xcfbac6,
        "caption": "ig video downloader powered by *Zokou-Md*",
        "gifPlayback": false
      };
      const _0x154be4 = {
        "quoted": _0x393bfa
      };
      _0x53e5c8.sendMessage(_0x1a4d2e, _0x6d85b7, _0x154be4);
    } catch (_0x2dab53) {
      const _0x5015ac = {
        url: _0x5319d.data.result[0x0].url
      };
      const _0x5d580b = {
        "image": _0x5015ac,
        "caption": "ig image downloader powered by *Zokou-Md*"
      };
      _0x53e5c8.sendMessage(_0x1a4d2e, _0x5d580b);
    }
  } catch (_0x3568e6) {
    _0x59c5de("erreur survenue lors du téléchargement \n " + _0x3568e6);
  }
});
const a36_0x5473fb = {
  "nomCom": "fbdl",
  "categorie": "Download",
  "reaction": "📽️",
  "desc": "download facebook video"
};
a36_0x1e7454(a36_0x5473fb, async (_0x57ce8b, _0x5d4ea7, _0x4cbd71) => {
  const {
    repondre: _0xdb8bd6,
    ms: _0x1cb515,
    arg: _0x57f613
  } = _0x4cbd71;
  if (!_0x57f613[0x0]) {
    _0xdb8bd6("Insert a public facebook video link!");
    return;
  }
  const _0x3b435e = _0x57f613.join(" ");
  try {
    a36_0x5b40c4(_0x3b435e).then(_0x146e51 => {
      let _0x18574a = "\n        titre: " + _0x146e51.title + "\n        Lien: " + _0x146e51.url + "\n      ";
      const _0x36a7ad = {
        url: _0x146e51.thumbnail
      };
      const _0x11ae3c = {
        "image": _0x36a7ad,
        "caption": _0x18574a
      };
      const _0x20fccf = {
        "quoted": _0x1cb515
      };
      _0x5d4ea7.sendMessage(_0x57ce8b, _0x11ae3c, _0x20fccf);
      const _0x36daf6 = {
        url: _0x146e51.hd
      };
      const _0xa324bf = {
        "video": _0x36daf6,
        "caption": "facebook video downloader powered by *zokou-MD*"
      };
      const _0x4e08cb = {
        "quoted": _0x1cb515
      };
      _0x5d4ea7.sendMessage(_0x57ce8b, _0xa324bf, _0x4e08cb);
    })["catch"](_0x25e06c => {
      console.log("Error:", _0x25e06c);
      _0xdb8bd6("try fbdl2 on this link");
    });
  } catch (_0x340e1f) {
    console.error("Erreur lors du téléchargement de la vidéo :", _0x340e1f);
    _0xdb8bd6("Erreur lors du téléchargement de la vidéo.", _0x340e1f);
  }
});
const a36_0x5d60e = {
  "nomCom": "tiktokvideo",
  "categorie": "Download",
  "reaction": '🎵',
  "desc": "Download a TikTok video",
  "alias": ["ttv"]
};
a36_0x1e7454(a36_0x5d60e, async (_0x558dde, _0x524085, _0x44fdf1) => {
  const {
    arg: _0x3a22ef,
    ms: _0x1a7a44,
    prefixe: _0x4bb58b,
    repondre: _0x20420b
  } = _0x44fdf1;
  if (!_0x3a22ef[0x0]) {
    _0x20420b("Here is how to use the command:\n " + _0x4bb58b + "tiktok tiktok_video_link");
    return;
  }
  const _0x3848be = _0x3a22ef.join(" ");
  try {
    let _0x31150d = await a36_0x14fc8b({
      'url': "https://test-api-apms.onrender.com/api/tiktokv2?url=" + _0x3848be + "&apikey=BrunoSobrino",
      'method': "GET",
      'responseType': "arraybuffer"
    });
    a36_0x23aff9.writeFileSync("./tiktokvideo.mp4", Buffer.from(_0x31150d.data));
    const _0x33ea59 = {
      url: "./tiktokvideo.mp4"
    };
    const _0x24fcb1 = {
      "video": _0x33ea59,
      "caption": "Here you go!",
      "gifPlayback": false
    };
    await _0x524085.sendMessage(_0x558dde, _0x24fcb1);
    console.log("Done!");
  } catch (_0x108279) {
    _0x20420b("Error downloading the video");
    console.log(_0x108279);
  } finally {
    a36_0x23aff9.unlinkSync("./tiktokvideo.mp4");
  }
});
const a36_0x548442 = {
  "nomCom": "fbdl2",
  "categorie": "Download",
  "reaction": "📽️",
  "desc": "download facebook video in low quality"
};
a36_0x1e7454(a36_0x548442, async (_0x5cee8f, _0x4360e5, _0x1bb4e1) => {
  const {
    repondre: _0x1cfda6,
    ms: _0x54b8cc,
    arg: _0x13e1ec
  } = _0x1bb4e1;
  if (!_0x13e1ec[0x0]) {
    _0x1cfda6("Insert a public facebook video link! !");
    return;
  }
  const _0x56f50f = _0x13e1ec.join(" ");
  try {
    a36_0x5b40c4(_0x56f50f).then(_0x56f22e => {
      let _0x41a0ab = "\n        titre: " + _0x56f22e.title + "\n        Lien: " + _0x56f22e.url + "\n      ";
      const _0x19d44b = {
        url: _0x56f22e.thumbnail
      };
      const _0x111945 = {
        "image": _0x19d44b,
        "caption": _0x41a0ab
      };
      const _0x35d352 = {
        "quoted": _0x54b8cc
      };
      _0x4360e5.sendMessage(_0x5cee8f, _0x111945, _0x35d352);
      const _0x30ca02 = {
        url: _0x56f22e.sd
      };
      const _0x43615c = {
        "video": _0x30ca02,
        "caption": "facebook video downloader powered by *zokou-MD*"
      };
      const _0x5af6b2 = {
        "quoted": _0x54b8cc
      };
      _0x4360e5.sendMessage(_0x5cee8f, _0x43615c, _0x5af6b2);
    })["catch"](_0x5a241a => {
      console.log("Error:", _0x5a241a);
      _0x1cfda6(_0x5a241a);
    });
  } catch (_0x2e6670) {
    console.error("Erreur lors du téléchargement de la vidéo :", _0x2e6670);
    _0x1cfda6("Erreur lors du téléchargement de la vidéo.", _0x2e6670);
  }
});