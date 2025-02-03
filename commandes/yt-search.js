const a58_0x32f65c = function () {
  let _0x3341ca = true;
  return function (_0x217b33, _0x167faa) {
    const _0x1b108d = _0x3341ca ? function () {
      if (_0x167faa) {
        const _0x54000f = _0x167faa.apply(_0x217b33, arguments);
        _0x167faa = null;
        return _0x54000f;
      }
    } : function () {};
    _0x3341ca = false;
    return _0x1b108d;
  };
}();
const a58_0x59aed9 = a58_0x32f65c(this, function () {
  return a58_0x59aed9.toString().search("(((.+)+)+)+$").toString().constructor(a58_0x59aed9).search("(((.+)+)+)+$");
});
a58_0x59aed9();
const {
  zokou: a58_0xa10420
} = require("../framework/zokou");
const a58_0x119d5e = require("yt-search");
const a58_0x18f3c5 = require('fs');
const {
  getAudioFromUrl: a58_0x3789fe,
  getVideoFromUrl: a58_0x429ff5
} = require("../framework/ytdl-core");
const a58_0x170829 = {
  "nomCom": "yts",
  "categorie": "Search",
  "reaction": '✋',
  "desc": "Search for YouTube videos and return their links"
};
a58_0xa10420(a58_0x170829, async (_0x19e78c, _0x5bdbf2, _0xc3e77f) => {
  const {
    ms: _0x12d87e,
    repondre: _0x23c1b4,
    arg: _0x58581c
  } = _0xc3e77f;
  const _0x5c2ad4 = _0x58581c.join(" ");
  if (!_0x5c2ad4[0x0]) {
    _0x23c1b4("Please enter a search term.");
    return;
  }
  try {
    const _0x1f23ac = await a58_0x119d5e(_0x5c2ad4);
    const _0x26ff31 = _0x1f23ac.videos;
    let _0x2f5b3f = '';
    for (let _0x24b919 = 0x0; _0x24b919 < 0xa; _0x24b919++) {
      _0x2f5b3f += "----------------\nTitle: " + _0x26ff31[_0x24b919].title + "\nDuration: " + _0x26ff31[_0x24b919].timestamp + "\nLink: " + _0x26ff31[_0x24b919].url + "\n";
    }
    _0x2f5b3f += "\n======\n*Powered by Zokou-Md*";
    const _0x2c9c52 = {
      url: _0x26ff31[0x0].thumbnail
    };
    const _0x449023 = {
      "image": _0x2c9c52,
      "caption": _0x2f5b3f
    };
    const _0xad4ac8 = {
      "quoted": _0x12d87e
    };
    _0x5bdbf2.sendMessage(origineMessage, _0x449023, _0xad4ac8);
  } catch (_0x3d67b7) {
    _0x23c1b4("Error during the process");
  }
});
const a58_0x181d5c = {
  "nomCom": "ytmp4",
  "categorie": "Download",
  "reaction": '🎥',
  "desc": "Download a YouTube video in mp4 from a link"
};
a58_0xa10420(a58_0x181d5c, async (_0x30e25a, _0x1fa8f3, _0xbfce16) => {
  const {
    arg: _0x46cbe7,
    ms: _0x39e744,
    repondre: _0x31a11e
  } = _0xbfce16;
  if (!_0x46cbe7[0x0]) {
    _0x31a11e("Please enter a YouTube link.");
    return;
  }
  const _0x36a903 = _0x46cbe7.join(" ");
  let _0x486867;
  try {
    _0x486867 = await a58_0x429ff5(_0x36a903);
    const _0x44663e = {
      url: _0x486867
    };
    const _0x3bbc05 = {
      "video": _0x44663e,
      "caption": "Powered by *Zokou-Md*",
      "gifPlayback": false
    };
    const _0x596fa0 = {
      "quoted": _0x39e744
    };
    await _0x1fa8f3.sendMessage(_0x30e25a, _0x3bbc05, _0x596fa0);
  } catch (_0x495fa8) {
    console.error("Error during video search or download:", _0x495fa8);
    _0x31a11e("An error occurred during the search or download");
  } finally {
    if (a58_0x18f3c5.existsSync(_0x486867)) {
      a58_0x18f3c5.unlinkSync(_0x486867);
    }
  }
});
const a58_0x509ae9 = {
  "nomCom": "ytmp3",
  "categorie": "Download",
  "reaction": '💿',
  "desc": "Download a YouTube video in mp3 from a link"
};
a58_0xa10420(a58_0x509ae9, async (_0x2e0622, _0x40d5f9, _0x4c534d) => {
  const {
    ms: _0x4b6d95,
    repondre: _0x585d47,
    arg: _0x5e3c0d
  } = _0x4c534d;
  if (!_0x5e3c0d[0x0]) {
    _0x585d47("Please insert a YouTube link.");
    return;
  }
  let _0x2a1c5b;
  try {
    let _0x5ba446 = _0x5e3c0d.join(" ");
    _0x2a1c5b = await a58_0x3789fe(_0x5ba446);
    const _0x46f1c9 = {
      url: _0x2a1c5b
    };
    const _0x29f5d5 = {
      "audio": _0x46f1c9,
      "mimetype": "audio/mp4"
    };
    const _0x1cb92f = {
      "ptt": false,
      "quoted": _0x4b6d95
    };
    await _0x40d5f9.sendMessage(_0x2e0622, _0x29f5d5, _0x1cb92f);
  } catch (_0xb8e446) {
    console.error("Error during video search or download:", _0xb8e446);
    _0x585d47("An error occurred during the search or download.");
  } finally {
    if (a58_0x18f3c5.existsSync(_0x2a1c5b)) {
      a58_0x18f3c5.unlinkSync(_0x2a1c5b);
    }
  }
});