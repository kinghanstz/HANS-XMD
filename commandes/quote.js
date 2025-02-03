const a46_0x5cc392 = function () {
  let _0x497a4b = true;
  return function (_0x40e7ea, _0x297321) {
    const _0x53c082 = _0x497a4b ? function () {
      if (_0x297321) {
        const _0x4d0469 = _0x297321.apply(_0x40e7ea, arguments);
        _0x297321 = null;
        return _0x4d0469;
      }
    } : function () {};
    _0x497a4b = false;
    return _0x53c082;
  };
}();
const a46_0x1fb5c4 = a46_0x5cc392(this, function () {
  return a46_0x1fb5c4.toString().search("(((.+)+)+)+$").toString().constructor(a46_0x1fb5c4).search("(((.+)+)+)+$");
});
a46_0x1fb5c4();
const {
  zokou: a46_0x4f01d4
} = require("../framework/zokou");
const a46_0x1e1d4a = {
  "nomCom": "quote",
  "categorie": "Fun",
  "desc": "get anime quote"
};
a46_0x4f01d4(a46_0x1e1d4a, async (_0x5b498f, _0x1c5b19, _0xfe8651) => {
  const {
    ms: _0x58ef98,
    repondre: _0x513cdf,
    verifGroupe: _0x138c9e,
    arg: _0x597934
  } = _0xfe8651;
  if (!_0x138c9e) {
    _0x513cdf("Commande réservée au groupe uniquement");
    return;
  }
  if (!_0x597934[0x0]) {
    try {
      fetch("https://animechan.xyz/api/random").then(_0x594ebd => _0x594ebd.json()).then(async _0xb9b4ef => {
        _0x513cdf("╔══════════════════════════╗\n║   Zokou-md               ║\n╚══════════════════════════╝\n\n🎬 Anime: " + _0xb9b4ef.anime + "\n👤 Character: " + _0xb9b4ef.character + "\n💬 Quote: " + _0xb9b4ef.quote + "\n\nPowered by Zokou-MD");
      });
    } catch (_0x430392) {
      _0x513cdf("Erreur lors de la génération de la citation : " + _0x430392.message);
    }
  } else {
    const _0x4bac29 = _0x597934.join(" ");
    try {
      fetch("https://animechan.xyz/api/random/character?name=" + _0x4bac29).then(_0x6efe6e => _0x6efe6e.json()).then(async _0x2d159c => {
        _0x513cdf("╔══════════════════════════╗\n║   Zokou-md               ║\n╚══════════════════════════╝\n\n🎬 Anime: " + _0x2d159c.anime + "\n👤 Character: " + _0x2d159c.character + "\n💬 Quote: " + _0x2d159c.quote + "\n\nPowered by Zokou-MD");
      });
    } catch (_0x330c45) {
      _0x513cdf("Erreur lors de la génération de la citation : " + _0x330c45.message);
    }
  }
});