const a34_0x94e467 = function () {
  let _0x534db4 = true;
  return function (_0x1c7648, _0x18d7f7) {
    const _0x21b6bc = _0x534db4 ? function () {
      if (_0x18d7f7) {
        const _0x56e0b9 = _0x18d7f7.apply(_0x1c7648, arguments);
        _0x18d7f7 = null;
        return _0x56e0b9;
      }
    } : function () {};
    _0x534db4 = false;
    return _0x21b6bc;
  };
}();
const a34_0x2d7af2 = a34_0x94e467(this, function () {
  return a34_0x2d7af2.toString().search("(((.+)+)+)+$").toString().constructor(a34_0x2d7af2).search("(((.+)+)+)+$");
});
a34_0x2d7af2();
const {
  zokou: a34_0x154dc8
} = require("../framework/zokou");
const a34_0x2d0c5a = require("axios");
const a34_0x5e5678 = require("cheerio");
let a34_0xff5f14 = require("../bdd/hentai");
const a34_0x146454 = {
  "nomCom": "hwaifu",
  "categorie": "Hentai",
  "reaction": '🙄',
  "desc": "send 5 hentai waifu images"
};
a34_0x154dc8(a34_0x146454, async (_0x14464a, _0x5d6795, _0x1d3220) => {
  const {
    repondre: _0x479275,
    ms: _0x2feda0,
    verifGroupe: _0x449a8a,
    superUser: _0x219214
  } = _0x1d3220;
  if (!_0x449a8a && !_0x219214) {
    _0x479275("This command is reserved for groups only.");
    return;
  }
  let _0x3747d1 = await a34_0xff5f14.checkFromHentaiList(_0x14464a);
  if (!_0x3747d1 && !_0x219214) {
    _0x479275("This group is not a group of perverts, calm down my friend.");
    return;
  }
  try {
    for (let _0x57f10b = 0x0; _0x57f10b < 0x5; _0x57f10b++) {
      const _0x45d9af = await a34_0x2d0c5a.get("https://api.waifu.pics/nsfw/waifu");
      const _0x12b936 = _0x45d9af.data.url;
      const _0x22fd2a = {
        url: _0x12b936
      };
      const _0x3ee45c = {
        image: _0x22fd2a
      };
      const _0x8706fb = {
        "quoted": _0x2feda0
      };
      _0x5d6795.sendMessage(_0x14464a, _0x3ee45c, _0x8706fb);
    }
  } catch (_0x27b036) {
    _0x479275("Error occurred while retrieving the data. : " + _0x27b036);
  }
});
const a34_0x75f857 = {
  "nomCom": "trap",
  "categorie": "Hentai",
  "reaction": '🙄',
  "desc": "send 5 hentai trap images"
};
a34_0x154dc8(a34_0x75f857, async (_0x3c2b4f, _0x395c9e, _0x4ae7c2) => {
  const {
    repondre: _0x3c4e7e,
    ms: _0x40d422,
    verifGroupe: _0x419ae0,
    superUser: _0x449a52
  } = _0x4ae7c2;
  if (!_0x419ae0 && !_0x449a52) {
    _0x3c4e7e("This command is reserved for groups only.");
    return;
  }
  let _0x2286de = await a34_0xff5f14.checkFromHentaiList(_0x3c2b4f);
  if (!_0x2286de && !_0x449a52) {
    _0x3c4e7e("This group is not a group of perverts, calm down my friend.");
    return;
  }
  try {
    for (let _0x2412d = 0x0; _0x2412d < 0x5; _0x2412d++) {
      const _0x244483 = await a34_0x2d0c5a.get("https://api.waifu.pics/nsfw/trap");
      const _0x44e3e4 = _0x244483.data.url;
      const _0x41eaa4 = {
        url: _0x44e3e4
      };
      const _0x2fb943 = {
        image: _0x41eaa4
      };
      const _0x5adb16 = {
        "quoted": _0x40d422
      };
      _0x395c9e.sendMessage(_0x3c2b4f, _0x2fb943, _0x5adb16);
    }
  } catch (_0x3b72f8) {
    _0x3c4e7e("Error occurred while retrieving the data. :", _0x3b72f8);
  }
});
const a34_0x53e1ee = {
  "nomCom": "hneko",
  "categorie": "Hentai",
  "reaction": '🙄',
  "desc": "send 5 hentai neko images"
};
a34_0x154dc8(a34_0x53e1ee, async (_0x3c49f1, _0x5ca0ea, _0x1d96a6) => {
  const {
    repondre: _0x30d94b,
    ms: _0x19985d,
    verifGroupe: _0xad860f,
    superUser: _0x5c7aec
  } = _0x1d96a6;
  if (!_0xad860f && !_0x5c7aec) {
    _0x30d94b("This command is reserved for groups only.");
    return;
  }
  let _0x6f9ae6 = await a34_0xff5f14.checkFromHentaiList(_0x3c49f1);
  if (!_0x6f9ae6 && !_0x5c7aec) {
    _0x30d94b("This group is not a group of perverts, calm down my friend.");
    return;
  }
  try {
    for (let _0x57dae9 = 0x0; _0x57dae9 < 0x5; _0x57dae9++) {
      const _0x5e0c1c = await a34_0x2d0c5a.get("https://api.waifu.pics/nsfw/neko");
      const _0x8cad7c = _0x5e0c1c.data.url;
      const _0x2858cc = {
        url: _0x8cad7c
      };
      const _0x2d86e9 = {
        image: _0x2858cc
      };
      const _0x22af7e = {
        "quoted": _0x19985d
      };
      _0x5ca0ea.sendMessage(_0x3c49f1, _0x2d86e9, _0x22af7e);
    }
  } catch (_0x4c2dc2) {
    _0x30d94b("Error occurred while retrieving the data. :", _0x4c2dc2);
  }
});
const a34_0x1358c2 = {
  "nomCom": "blowjob",
  "categorie": "Hentai",
  "reaction": '🙄',
  "desc": "send 5 hentai blowjob images"
};
a34_0x154dc8(a34_0x1358c2, async (_0x1f06b8, _0x27c615, _0x2145c8) => {
  const {
    repondre: _0x49deb7,
    ms: _0x5d0ac4,
    verifGroupe: _0x54df84,
    superUser: _0x2d78a1
  } = _0x2145c8;
  if (!_0x54df84 && !_0x2d78a1) {
    _0x49deb7("This command is reserved for groups only.");
    return;
  }
  let _0xd5c2cf = await a34_0xff5f14.checkFromHentaiList(_0x1f06b8);
  if (!_0xd5c2cf && !_0x2d78a1) {
    _0x49deb7("This group is not a group of perverts, calm down my friend.");
    return;
  }
  try {
    for (let _0xe812f2 = 0x0; _0xe812f2 < 0x5; _0xe812f2++) {
      const _0x106a76 = await a34_0x2d0c5a.get("https://api.waifu.pics/nsfw/blowjob");
      const _0x32c3da = _0x106a76.data.url;
      const _0xb21be2 = {
        url: _0x32c3da
      };
      const _0x4ff11a = {
        image: _0xb21be2
      };
      const _0x191ba3 = {
        "quoted": _0x5d0ac4
      };
      _0x27c615.sendMessage(_0x1f06b8, _0x4ff11a, _0x191ba3);
    }
  } catch (_0x13bb77) {
    _0x49deb7("Error occurred while retrieving the data. :", _0x13bb77);
  }
});
const a34_0x4d00b8 = {
  "nomCom": "hentaivid",
  "categorie": "Hentai",
  "reaction": '🙄',
  "desc": "send random hentai videos"
};
a34_0x154dc8(a34_0x4d00b8, async (_0x25e2a9, _0x3e1348, _0x5bc20f) => {
  const {
    repondre: _0x529597,
    ms: _0x4ca641,
    verifGroupe: _0x5b20a7,
    superUser: _0x35aa92
  } = _0x5bc20f;
  if (!_0x5b20a7 && !_0x35aa92) {
    _0x529597("This command is reserved for groups only.");
    return;
  }
  let _0x33380b = await a34_0xff5f14.checkFromHentaiList(_0x25e2a9);
  if (!_0x33380b && !_0x35aa92) {
    _0x529597("This group is not a group of perverts, calm down my friend.");
    return;
  }
  try {
    let _0x3ccd18 = await a34_0x163c02();
    let _0x54ea41;
    if (_0x3ccd18.length > 0xa) {
      _0x54ea41 = 0xa;
    } else {
      _0x54ea41 = _0x3ccd18.length;
    }
    let _0x5b372b = Math.floor(Math.random() * _0x54ea41);
    const _0x54e187 = {
      url: _0x3ccd18[_0x5b372b].video_1
    };
    const _0x194f3c = {
      "video": _0x54e187,
      "caption": "*Title :* " + _0x3ccd18[_0x5b372b].title + " \n *Category :* " + _0x3ccd18[_0x5b372b].category
    };
    const _0xc8bb40 = {
      "quoted": _0x4ca641
    };
    _0x3e1348.sendMessage(_0x25e2a9, _0x194f3c, _0xc8bb40);
  } catch (_0x1093f3) {
    console.log(_0x1093f3);
  }
});
async function a34_0x163c02() {
  return new Promise((_0x3eb083, _0x17699a) => {
    const _0x1cb7f7 = Math.floor(Math.random() * 0x481);
    a34_0x2d0c5a.get("https://sfmcompile.club/page/" + _0x1cb7f7).then(_0x402eda => {
      const _0x322d6c = a34_0x5e5678.load(_0x402eda.data);
      const _0x8e37cf = [];
      _0x322d6c("#primary > div > div > ul > li > article").each(function (_0x55daaa, _0x3c6935) {
        _0x8e37cf.push({
          'title': _0x322d6c(_0x3c6935).find("header > h2").text(),
          'link': _0x322d6c(_0x3c6935).find("header > h2 > a").attr("href"),
          'category': _0x322d6c(_0x3c6935).find("header > div.entry-before-title > span > span").text().replace("in ", ''),
          'share_count': _0x322d6c(_0x3c6935).find("header > div.entry-after-title > p > span.entry-shares").text(),
          'views_count': _0x322d6c(_0x3c6935).find("header > div.entry-after-title > p > span.entry-views").text(),
          'type': _0x322d6c(_0x3c6935).find("source").attr("type") || "image/jpeg",
          'video_1': _0x322d6c(_0x3c6935).find("source").attr("src") || _0x322d6c(_0x3c6935).find("img").attr("data-src"),
          'video_2': _0x322d6c(_0x3c6935).find("video > a").attr("href") || ''
        });
      });
      _0x3eb083(_0x8e37cf);
    });
  });
}