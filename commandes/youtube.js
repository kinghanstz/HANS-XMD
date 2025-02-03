const a57_0x4fabbb = function () {
  let _0x22f5b7 = true;
  return function (_0xcd91c6, _0x326d86) {
    const _0x5389ca = _0x22f5b7 ? function () {
      if (_0x326d86) {
        const _0x1a8354 = _0x326d86.apply(_0xcd91c6, arguments);
        _0x326d86 = null;
        return _0x1a8354;
      }
    } : function () {};
    _0x22f5b7 = false;
    return _0x5389ca;
  };
}();
const a57_0x4321bb = a57_0x4fabbb(this, function () {
  return a57_0x4321bb.toString().search("(((.+)+)+)+$").toString().constructor(a57_0x4321bb).search("(((.+)+)+)+$");
});
a57_0x4321bb();
const {
  zokou: a57_0x48d811
} = require("../framework/zokou");
const a57_0x4712d3 = require("yt-search");
const a57_0x5ca1d8 = require('fs');
const {
  getAudioFromUrl: a57_0x210abb,
  getVideoFromUrl: a57_0x504b89
} = require("../framework/ytdl-core");
const a57_0x15c31f = {
  "nomCom": "song",
  "categorie": "Search",
  "reaction": '💿',
  "desc": "Search and download YouTube songs"
};
a57_0x48d811(a57_0x15c31f, async (_0x31f4e4, _0x1bfa23, _0x1adb26) => {
  const {
    ms: _0x4170f6,
    repondre: _0x2e4289,
    arg: _0x3fe106
  } = _0x1adb26;
  if (!_0x3fe106[0x0]) {
    _0x2e4289("Please enter a search term.");
    return;
  }
  let _0x400162;
  try {
    let _0x3e4890 = _0x3fe106.join(" ");
    const _0x3ab658 = await a57_0x4712d3(_0x3e4890);
    const _0x151102 = _0x3ab658.videos;
    if (_0x151102 && _0x151102.length > 0x0 && _0x151102[0x0]) {
      const _0x31c48f = {
        url: _0x151102[0x0].thumbnail
      };
      const _0x3e4f79 = {
        "image": _0x31c48f,
        "caption": "\n*Song title :* _" + _0x151102[0x0].title + "_\n\n*Duration :* _" + _0x151102[0x0].timestamp + "_\n\n*Link :* _" + _0x151102[0x0].url + "_\n\n\n_*Downloading...*_\n\n"
      };
      const _0x19c5f4 = {
        "quoted": _0x4170f6
      };
      _0x1bfa23.sendMessage(_0x31f4e4, _0x3e4f79, _0x19c5f4);
      _0x400162 = await a57_0x210abb(_0x151102[0x0].url);
      const _0x37ee52 = {
        url: _0x400162
      };
      const _0x171950 = {
        "audio": _0x37ee52,
        "mimetype": "audio/mpeg"
      };
      const _0x47395c = {
        "ptt": false,
        "quoted": _0x4170f6
      };
      await _0x1bfa23.sendMessage(_0x31f4e4, _0x171950, _0x47395c);
    } else {
      _0x2e4289("No audio found.");
    }
  } catch (_0xc8949b) {
    console.error("Error during video search or download:", _0xc8949b);
    _0x2e4289("An error occurred during the search or download.");
  } finally {
    if (a57_0x5ca1d8.existsSync(_0x400162)) {
      a57_0x5ca1d8.unlinkSync(_0x400162);
    }
  }
});
const a57_0x1ff0b2 = {
  "nomCom": "video",
  "categorie": "Search",
  "reaction": '🎥',
  "desc": "Search and download YouTube videos"
};
a57_0x48d811(a57_0x1ff0b2, async (_0x106693, _0x1f042d, _0x591148) => {
  const {
    arg: _0x3576e8,
    ms: _0x450efb,
    repondre: _0x114051
  } = _0x591148;
  if (!_0x3576e8[0x0]) {
    _0x114051("Please enter a search term.");
    return;
  }
  const _0x4c8081 = _0x3576e8.join(" ");
  let _0x57ff8f;
  try {
    const _0x5dde34 = await a57_0x4712d3(_0x4c8081);
    const _0x356c95 = _0x5dde34.videos;
    if (_0x356c95 && _0x356c95.length > 0x0 && _0x356c95[0x0]) {
      const _0x1fed03 = _0x356c95[0x0];
      const _0x49995f = {
        url: _0x356c95[0x0].thumbnail
      };
      const _0x5a33f5 = {
        "image": _0x49995f,
        "caption": "*Video title :* _" + _0x1fed03.title + "_\n*Duration :* _" + _0x1fed03.timestamp + "_\n*Link :* _" + _0x1fed03.url + "_\n_*Downloading...*_\n\n"
      };
      const _0x5592d6 = {
        "quoted": _0x450efb
      };
      _0x1f042d.sendMessage(_0x106693, _0x5a33f5, _0x5592d6);
      _0x57ff8f = await a57_0x504b89(_0x1fed03.url);
      const _0x3d5ddd = {
        url: _0x57ff8f
      };
      const _0x58e2ee = {
        "video": _0x3d5ddd,
        "caption": "*Zokou-Md",
        "gifPlayback": false
      };
      const _0x5bebb4 = {
        "quoted": _0x450efb
      };
      await _0x1f042d.sendMessage(_0x106693, _0x58e2ee, _0x5bebb4);
    } else {
      _0x114051("No video found.");
    }
  } catch (_0x237b55) {
    console.error("Error during video search or download:", _0x237b55);
    _0x114051("An error occurred during the search or download.");
  } finally {
    if (a57_0x5ca1d8.existsSync(_0x57ff8f)) {
      a57_0x5ca1d8.unlinkSync(_0x57ff8f);
    }
  }
});