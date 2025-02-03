const a50_0x5108c = function () {
  let _0x3fe2ec = true;
  return function (_0x5cfe13, _0x2895a7) {
    const _0x50b83b = _0x3fe2ec ? function () {
      if (_0x2895a7) {
        const _0x5eba8d = _0x2895a7.apply(_0x5cfe13, arguments);
        _0x2895a7 = null;
        return _0x5eba8d;
      }
    } : function () {};
    _0x3fe2ec = false;
    return _0x50b83b;
  };
}();
const a50_0x1674aa = a50_0x5108c(this, function () {
  return a50_0x1674aa.toString().search("(((.+)+)+)+$").toString().constructor(a50_0x1674aa).search("(((.+)+)+)+$");
});
a50_0x1674aa();
const a50_0x167318 = require("axios");
const {
  Sticker: a50_0x2b977b,
  StickerTypes: a50_0x4f1b53
} = require("wa-sticker-formatter");
const {
  zokou: a50_0x23acae
} = require("../framework/zokou");
const a50_0x435bec = {
  "nomCom": "stickersearch",
  "categorie": "Search",
  "reaction": '🍁',
  "desc": "search sticker on tenor gif",
  "alias": ["ssearch"]
};
a50_0x23acae(a50_0x435bec, async (_0xc42aa6, _0x2a6da6, _0x3bc70a) => {
  const {
    repondre: _0x24eb16,
    ms: _0x4e9112,
    arg: _0x2a7bf3,
    nomAuteurMessage: _0x2194ad
  } = _0x3bc70a;
  if (!_0x2a7bf3[0x0]) {
    _0x24eb16("where is the request ? !");
    return;
  }
  const _0x4daee0 = _0x2a7bf3.join(" ");
  try {
    for (i = 0x0; i < 0x5; i++) {
      const _0x3e22f6 = await a50_0x167318.get("https://tenor.googleapis.com/v2/search?q=" + _0x4daee0 + "&key=" + "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c" + "&client_key=my_project&limit=8&media_filter=gif");
      const _0x1b93ea = _0x3e22f6.data.results[i].media_formats.gif.url;
      const _0xaf1e3f = {
        "pack": _0x2194ad,
        "author": "Zokou-MD",
        "type": a50_0x4f1b53.FULL,
        "categories": ['🤩', '🎉'],
        id: "12345",
        "quality": 0x3c,
        "background": "transparent"
      };
      const _0x483ba4 = new a50_0x2b977b(_0x1b93ea, _0xaf1e3f);
      const _0xc0ab4 = await _0x483ba4.toBuffer();
      const _0x564a83 = {
        sticker: _0xc0ab4
      };
      const _0x2d4ff5 = {
        "quoted": _0x4e9112
      };
      _0x2a6da6.sendMessage(_0xc42aa6, _0x564a83, _0x2d4ff5);
    }
  } catch (_0x1865f6) {
    console.error("Erreur lors de la recherche de stickers :", _0x1865f6);
    _0x24eb16("Erreur lors de la recherche de stickers.");
  }
});