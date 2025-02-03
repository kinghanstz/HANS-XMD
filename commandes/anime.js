const a23_0x1f33c5 = function () {
  let _0x4050e9 = true;
  return function (_0x567bba, _0x16730e) {
    const _0x2eef02 = _0x4050e9 ? function () {
      if (_0x16730e) {
        const _0x563f2c = _0x16730e.apply(_0x567bba, arguments);
        _0x16730e = null;
        return _0x563f2c;
      }
    } : function () {};
    _0x4050e9 = false;
    return _0x2eef02;
  };
}();
const a23_0x1ad089 = a23_0x1f33c5(this, function () {
  return a23_0x1ad089.toString().search("(((.+)+)+)+$").toString().constructor(a23_0x1ad089).search("(((.+)+)+)+$");
});
a23_0x1ad089();
const a23_0x744ce0 = require("axios");
const {
  zokou: a23_0x52b650
} = require("../framework/zokou");
const {
  Sticker: a23_0x2087eb,
  StickerTypes: a23_0x122153
} = require("wa-sticker-formatter");
const a23_0x42f0cb = {
  "nomCom": "ranime",
  "categorie": "Fun",
  "reaction": '📺',
  "desc": "get a random anime informations"
};
a23_0x52b650(a23_0x42f0cb, async (_0x8acfe, _0x45c0dc, _0x426b01) => {
  const {
    repondre: _0x1a2ba8,
    ms: _0x4dd0ef
  } = _0x426b01;
  try {
    const _0x4f9e51 = await a23_0x744ce0.get("https://api.jikan.moe/v4/random/anime");
    const _0x2f974d = _0x4f9e51.data.data;
    const _0x3a46a2 = _0x2f974d.title;
    const _0x525129 = _0x2f974d.synopsis;
    const _0x183b7b = _0x2f974d.images.jpg.image_url;
    const _0x2fba8d = _0x2f974d.episodes;
    const _0x12d65a = _0x2f974d.status;
    const _0x47df97 = "📺 Titre: " + _0x3a46a2 + "\n🎬 Épisodes: " + _0x2fba8d + "\n📡 Statut: " + _0x12d65a + "\n📝 Synopsis: " + _0x525129 + "\n🔗 URL: " + _0x2f974d.url;
    const _0x3772ab = {
      url: _0x183b7b
    };
    const _0x4e0dbf = {
      "image": _0x3772ab,
      "caption": _0x47df97
    };
    const _0x85e0c0 = {
      "quoted": _0x4dd0ef
    };
    _0x45c0dc.sendMessage(_0x8acfe, _0x4e0dbf, _0x85e0c0);
  } catch (_0x1f936a) {
    console.error("Error retrieving data from JSON :", _0x1f936a);
    _0x1a2ba8("Error retrieving data from JSON.");
  }
});
const a23_0x4df5a0 = {
  "nomCom": "google",
  "categorie": "Search",
  "desc": "search information on google"
};
a23_0x52b650(a23_0x4df5a0, async (_0x5ccbf3, _0x21b38f, _0x4e2924) => {
  const {
    arg: _0x4dcf79,
    repondre: _0x7629d1
  } = _0x4e2924;
  if (!_0x4dcf79[0x0] || _0x4dcf79 === '') {
    _0x7629d1("Give me a query.\n*Example: .google What is a bot.*");
    return;
  }
  const _0xe9edf = require("google-it");
  try {
    const _0x5c5818 = await _0xe9edf({
      'query': _0x4dcf79.join(" ")
    });
    let _0xe232f0 = "Google search for : " + _0x4dcf79 + "\n\n";
    for (let _0x49e185 of _0x5c5818) {
      _0xe232f0 += "➣ Title : " + _0x49e185.title + "\n";
      _0xe232f0 += "➣ Description : " + _0x49e185.snippet + "\n";
      _0xe232f0 += "➣ Link : " + _0x49e185.link + "\n\n────────────────────────\n\n";
    }
    _0x7629d1(_0xe232f0);
  } catch (_0x195061) {
    _0x7629d1("An error occurred during Google search.");
  }
});
const a23_0x156fbc = {
  "nomCom": "imdb",
  "categorie": "Search",
  "desc": "search movies on Imbd"
};
a23_0x52b650(a23_0x156fbc, async (_0x372dbe, _0x453ab7, _0x4e01d7) => {
  const {
    arg: _0x482065,
    repondre: _0x17ff4c,
    ms: _0x962d4e
  } = _0x4e01d7;
  if (!_0x482065[0x0] || _0x482065 === '') {
    _0x17ff4c("give the name of a series or film.");
    return;
  }
  try {
    const _0x1a0b3e = await a23_0x744ce0.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x482065 + "&plot=full");
    const _0x3fbb36 = _0x1a0b3e.data;
    let _0xf1679 = "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n";
    _0xf1679 += " ``` 𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n";
    _0xf1679 += "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
    _0xf1679 += "🎬Title    : " + _0x3fbb36.Title + "\n";
    _0xf1679 += "📅year      : " + _0x3fbb36.Year + "\n";
    _0xf1679 += "⭐Assessment : " + _0x3fbb36.Rated + "\n";
    _0xf1679 += "📆Release    : " + _0x3fbb36.Released + "\n";
    _0xf1679 += "⏳Runtime     : " + _0x3fbb36.Runtime + "\n";
    _0xf1679 += "🌀Genre      : " + _0x3fbb36.Genre + "\n";
    _0xf1679 += "👨🏻‍💻Director : " + _0x3fbb36.Director + "\n";
    _0xf1679 += "✍writers : " + _0x3fbb36.Writer + "\n";
    _0xf1679 += "👨actors  : " + _0x3fbb36.Actors + "\n";
    _0xf1679 += "📃Synopsis  : " + _0x3fbb36.Plot + "\n";
    _0xf1679 += "🌐Language  : " + _0x3fbb36.Language + "\n";
    _0xf1679 += "🌍Contry      : " + _0x3fbb36.Country + "\n";
    _0xf1679 += "🎖️Awards : " + _0x3fbb36.Awards + "\n";
    _0xf1679 += "📦BoxOffice : " + _0x3fbb36.BoxOffice + "\n";
    _0xf1679 += "🏙️Production : " + _0x3fbb36.Production + "\n";
    _0xf1679 += "🌟score : " + _0x3fbb36.imdbRating + "\n";
    _0xf1679 += "❎imdbVotes : " + _0x3fbb36.imdbVotes + '';
    const _0x3db7ab = {
      url: _0x3fbb36.Poster
    };
    const _0x144a80 = {
      "image": _0x3db7ab,
      "caption": _0xf1679
    };
    const _0x5678e6 = {
      "quoted": _0x962d4e
    };
    _0x453ab7.sendMessage(_0x372dbe, _0x144a80, _0x5678e6);
  } catch (_0x2058cd) {
    _0x17ff4c("An error occurred while searching IMDb.");
  }
});
const a23_0x17725f = {
  "nomCom": "emomix",
  "categorie": "Conversion",
  "desc": "mix two emojis",
  "alias": ["emix"]
};
a23_0x52b650(a23_0x17725f, async (_0x4f2328, _0x29ff5c, _0x47a697) => {
  const {
    arg: _0x32a03c,
    repondre: _0x30c9c1,
    ms: _0x106f76,
    nomAuteurMessage: _0x324631
  } = _0x47a697;
  if (!_0x32a03c[0x0] || _0x32a03c.length !== 0x1) {
    _0x30c9c1("Incorrect use. Example: .emojimix 😀;🥰");
    return;
  }
  const _0x4f14be = _0x32a03c.join(" ").split(';');
  if (_0x4f14be.length !== 0x2) {
    _0x30c9c1("Please specify two emojis using a ';' as a separator.");
    return;
  }
  const _0x2c8703 = _0x4f14be[0x0].trim();
  const _0x3e5773 = _0x4f14be[0x1].trim();
  try {
    const _0xc74787 = require("axios");
    const _0x369512 = await _0xc74787.get("https://levanter.onrender.com/emix?q=" + _0x2c8703 + _0x3e5773);
    if (_0x369512.data.status === true) {
      const _0x4412c6 = {
        "pack": _0x324631,
        "type": a23_0x122153.CROPPED,
        "categories": ['🤩', '🎉'],
        id: "12345",
        "quality": 0x46,
        "background": "transparent"
      };
      let _0x5bab84 = new a23_0x2087eb(_0x369512.data.result, _0x4412c6);
      const _0x2f26e7 = await _0x5bab84.toBuffer();
      const _0x552fb4 = {
        sticker: _0x2f26e7
      };
      const _0x5bc796 = {
        "quoted": _0x106f76
      };
      _0x29ff5c.sendMessage(_0x4f2328, _0x552fb4, _0x5bc796);
    } else {
      _0x30c9c1("Unable to create emoji mix.");
    }
  } catch (_0x337868) {
    _0x30c9c1("An error occurred while creating the emoji mix." + _0x337868);
  }
});