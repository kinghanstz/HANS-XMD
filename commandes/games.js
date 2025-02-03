const a30_0xde25c6 = function () {
  let _0x37db3a = true;
  return function (_0x1b7c32, _0x334ef8) {
    const _0x2fa7ce = _0x37db3a ? function () {
      if (_0x334ef8) {
        const _0x57c85c = _0x334ef8.apply(_0x1b7c32, arguments);
        _0x334ef8 = null;
        return _0x57c85c;
      }
    } : function () {};
    _0x37db3a = false;
    return _0x2fa7ce;
  };
}();
const a30_0x347574 = a30_0xde25c6(this, function () {
  return a30_0x347574.toString().search("(((.+)+)+)+$").toString().constructor(a30_0x347574).search("(((.+)+)+)+$");
});
a30_0x347574();
const {
  zokou: a30_0x30a33
} = require("../framework/zokou");
const a30_0x19e45a = require("axios");
const a30_0xf13fba = require("../framework/traduction");
const {
  wcgCache: a30_0xc58ba4
} = require("../cache");
const a30_0x325f96 = {
  "nomCom": "chifumi",
  "categorie": "Games",
  "reaction": '📺',
  "desc": "play to rock papaer scissors with your friends",
  "alias": ["cfm"]
};
a30_0x30a33(a30_0x325f96, async (_0x54b9c8, _0x188a69, _0x22ed42) => {
  const {
    repondre: _0x418763,
    ms: _0x338890,
    auteurMessage: _0x455a39,
    auteurMsgRepondu: _0x4ce0cd,
    msgRepondu: _0x4ed059,
    arg: _0x33ec53,
    idBot: _0x2ad03c
  } = _0x22ed42;
  if (_0x4ed059) {
    _0x188a69.sendMessage(_0x54b9c8, {
      'text': '@' + _0x455a39.split('@')[0x0] + " invites @" + _0x4ce0cd.split('@')[0x0] + " to play the rock-paper-scissors game;\n        To accept the challenge, type yes",
      'mentions': [_0x455a39, _0x4ce0cd]
    });
    try {
      const _0x29931b = {
        "sender": _0x4ce0cd,
        "chatJid": _0x54b9c8,
        "timeout": 0x7530
      };
      const _0x47f63e = await _0x188a69.awaitForMessage(_0x29931b);
      console.log(_0x47f63e);
      if (_0x47f63e.message.conversation.toLowerCase() === "yes" || _0x47f63e.message.extendedTextMessage.text.toLowerCase() === "yes") {
        let _0x529b08 = "*player 1 :* @" + _0x4ce0cd.split('@')[0x0] + "\n*player 2 :* @" + _0x455a39.split('@')[0x0] + "\n\n*Rules:* The game will start soon; you have a maximum of 1 minute each to make a choice in our private chat;";
        const _0x38e155 = {
          "text": _0x529b08,
          "mentions": [_0x455a39, _0x4ce0cd]
        };
        _0x188a69.sendMessage(_0x54b9c8, _0x38e155);
        let _0x5a63ee = [_0x455a39, _0x4ce0cd];
        let _0x1e5a03 = [];
        try {
          for (const _0x4b07f9 of _0x5a63ee) {
            _0x188a69.sendMessage(_0x54b9c8, {
              'text': '@' + _0x4b07f9.split('@')[0x0] + " Please go to this chat to make a choice\n         https://wa.me/" + _0x2ad03c.split('@')[0x0] + " ",
              'mentions': [_0x4b07f9]
            });
            const _0x2fd1d9 = {
              "text": "You have 3 choices;\n\n      rock\n      paper\n      scissors\n   \n   Please send your choice"
            };
            _0x188a69.sendMessage(_0x4b07f9, _0x2fd1d9);
            const _0x31c1bd = {
              "sender": _0x4b07f9,
              "chatJid": _0x4b07f9,
              "timeout": 0x7530
            };
            const _0x3c4a2a = await _0x188a69.awaitForMessage(_0x31c1bd);
            console.log("voici le message de " + _0x4b07f9);
            console.log(_0x3c4a2a);
            _0x1e5a03.push(_0x3c4a2a.message.extendedTextMessage.text.toLowerCase());
          }
          console.log(_0x1e5a03);
          const _0x3e5046 = ["rock", "paper", "scissors"];
          const _0x42e724 = _0x1e5a03[0x0];
          const _0x57014e = _0x1e5a03[0x1];
          if (!_0x3e5046.includes(_0x42e724) || !_0x3e5046.includes(_0x57014e)) {
            _0x188a69.sendMessage(_0x54b9c8, {
              'text': "*joueur 1 :* @" + _0x4ce0cd.split('@')[0x0] + "\n*joueur 2 :* @" + _0x455a39.split('@')[0x0] + "\n\n*resultat :* l'un ou les deux choix ne sont pas valides.",
              'mentions': [_0x455a39, _0x4ce0cd]
            });
          } else {
            if (_0x42e724 === _0x57014e) {
              _0x188a69.sendMessage(_0x54b9c8, {
                'text': "*joueur 1 :* @" + _0x4ce0cd.split('@')[0x0] + " a choisi(e) *" + _0x57014e + "* \n*joueur 2 :* @" + _0x455a39.split('@')[0x0] + " a choisi(e) *" + _0x42e724 + "*\n\nresultat : il y'a donc match nul",
                'mentions': [_0x455a39, _0x4ce0cd]
              });
            } else {
              if (_0x42e724 === "rock" && _0x57014e === "scissors" || _0x42e724 === "paper" && _0x57014e === "rock" || _0x42e724 === "scissors" && _0x57014e === "paper") {
                _0x188a69.sendMessage(_0x54b9c8, {
                  'text': "*player 1 :* @" + _0x4ce0cd.split('@')[0x0] + " choose *" + _0x57014e + "* \n*player 2 :* @" + _0x455a39.split('@')[0x0] + " choose *" + _0x42e724 + "*\n\n*result :* @" + _0x455a39.split('@')[0x0] + " win ",
                  'mentions': [_0x455a39, _0x4ce0cd]
                });
              } else {
                _0x188a69.sendMessage(_0x54b9c8, {
                  'text': "*player 1 :* @" + _0x4ce0cd.split('@')[0x0] + " choose *" + _0x57014e + "* \n*player 2 :* @" + _0x455a39.split('@')[0x0] + " choose) *" + _0x42e724 + "*\n\n*result :* @" + _0x4ce0cd.split('@')[0x0] + " win ",
                  'mentions': [_0x455a39, _0x4ce0cd]
                });
              }
            }
          }
        } catch (_0x105dcd) {
          if (_0x105dcd.message === "Timeout") {
            _0x188a69.sendMessage(_0x54b9c8, {
              'text': "*player 1 :* @" + _0x4ce0cd.split('@')[0x0] + "\n*player 2 :* @" + _0x455a39.split('@')[0x0] + "\n\n*result :* Our players took too long to decide;\nTherefore, the game is canceled\n",
              'mentions': [_0x455a39, _0x4ce0cd]
            });
          } else {
            console.error(_0x105dcd);
          }
        }
      } else {
        _0x418763("invitation refused");
      }
    } catch (_0x32ee06) {
      if (_0x32ee06.message === "Timeout") {
        _0x188a69.sendMessage(_0x54b9c8, {
          'text': '@' + _0x4ce0cd.split('@')[0x0] + " took too long to respond to the invitation from\n                @" + _0x455a39.split('@')[0x0] + " ;\nTherefore, the game is canceled",
          'mentions': [_0x455a39, _0x4ce0cd]
        });
      } else {
        console.error(_0x32ee06);
      }
    }
  } else {
    _0x418763("Chifumi  is an rock-paper-scissors games ; you need a friend too play , mention his/her message when sending chifumi to invite him/her");
  }
});
const a30_0x20028c = {
  "nomCom": "quizz",
  "categorie": "Games",
  "reaction": "👨🏿‍💻"
};
a30_0x30a33(a30_0x20028c, async (_0x182e90, _0x1de424, _0x5f5322) => {
  const {
    repondre: _0x255f84,
    auteurMessage: _0x52c934
  } = _0x5f5322;
  try {
    let _0x5836ff = await a30_0x19e45a.get("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1&difficulty=facile");
    const _0x103601 = {
      'to': 'en'
    };
    const _0x21635c = {
      'to': 'en'
    };
    let _0x1b92a7 = "     Zokou-Quizz-Games\n\n*Category :* " + (await a30_0xf13fba(_0x5836ff.data.quizzes[0x0].category, _0x103601)) + "\n*Question :* " + (await a30_0xf13fba(_0x5836ff.data.quizzes[0x0].question, _0x21635c)) + "\n\n*Answers :*\n";
    let _0x1a635d = [];
    for (const _0xf1dd13 of _0x5836ff.data.quizzes[0x0].badAnswers) {
      _0x1a635d.push(_0xf1dd13);
    }
    ;
    _0x1a635d.push(_0x5836ff.data.quizzes[0x0].answer);
    async function _0x2225b0(_0x465c5d) {
      const _0x540e6a = _0x465c5d.slice();
      for (let _0x3b46a2 = _0x540e6a.length - 0x1; _0x3b46a2 > 0x0; _0x3b46a2--) {
        const _0x12d279 = Math.floor(Math.random() * (_0x3b46a2 + 0x1));
        [_0x540e6a[_0x3b46a2], _0x540e6a[_0x12d279]] = [_0x540e6a[_0x12d279], _0x540e6a[_0x3b46a2]];
      }
      return _0x540e6a;
    }
    ;
    let _0x3eda3f = await _0x2225b0(_0x1a635d);
    for (let _0x49a01a = 0x0; _0x49a01a < _0x3eda3f.length; _0x49a01a++) {
      _0x1b92a7 += '*' + (_0x49a01a + 0x1) + " :* " + _0x3eda3f[_0x49a01a] + "\n";
    }
    _0x1b92a7 += "\nSend the number off right answers";
    _0x255f84(_0x1b92a7);
    const _0x1ca7b8 = {
      "sender": _0x52c934,
      "chatJid": _0x182e90,
      "timeout": 0x3a98
    };
    let _0x3ed3f2 = await _0x1de424.awaitForMessage(_0x1ca7b8);
    let _0x521663;
    try {
      _0x521663 = _0x3ed3f2.message.extendedTextMessage.text;
    } catch {
      _0x521663 = _0x3ed3f2.message.conversation;
    }
    ;
    if (_0x3eda3f[_0x521663 - 0x1] == _0x5836ff.data.quizzes[0x0].answer) {
      _0x255f84("Great , good answer ;");
    } else {
      _0x255f84("bad answer");
    }
  } catch (_0x55abd0) {
    console.log(_0x55abd0);
  }
});
const a30_0x160af6 = {
  "nomCom": "wcg",
  "categorie": "Games",
  "reaction": '🎮',
  "desc": "Play a game of World Chains Game, a word game"
};
a30_0x30a33(a30_0x160af6, async (_0x5137cb, _0x5032d8, _0x4e980f) => {
  const {
    repondre: _0x491e92,
    ms: _0x19d1e0,
    arg: _0x1e7bcc,
    auteurMessage: _0x2d9494
  } = _0x4e980f;
  if (a30_0xc58ba4.has(_0x5137cb)) {
    return _0x491e92("A game is already in progress in this chat.");
  }
  a30_0xc58ba4.set(_0x5137cb, _0x2d9494);
  const _0x2adbaf = {
    "text": "🌟 Initializing WCG (Word Chains Game) ... 🌟\n⏳ To join the game, please send *ready* (without any prefix) in the chat.\n🚀 The game starts in 60 seconds! 🎉"
  };
  _0x5032d8.sendMessage(_0x5137cb, _0x2adbaf);
  let _0x2345d8 = [];
  let _0x33b6c5 = false;
  let _0x394214;
  new Promise((_0x4660f1, _0x57be52) => {
    let _0x490ce5 = 0x3c;
    _0x394214 = setInterval(() => {
      _0x490ce5 -= 0xf;
      if (_0x490ce5 == 0x0) {
        _0x33b6c5 = true;
        _0x4660f1();
      } else {
        const _0x128771 = {
          "text": "🚀 The game starts in " + _0x490ce5 + " seconds! 🎉\n Send *ready* to join the game."
        };
        _0x5032d8.sendMessage(_0x5137cb, _0x128771);
      }
    }, 0x3a98);
  }).then(() => {
    clearInterval(_0x394214);
    _0x5032d8.ev.off("messages.upsert", _0x58cee2);
    a30_0xc58ba4.del(_0x5137cb);
    const _0x3b4dbc = {
      text: "No participants for the WCG game, the game is canceled."
    };
    if (_0x2345d8.length == 0x0) {
      return _0x5032d8.sendMessage(_0x5137cb, _0x3b4dbc);
    }
    _0x5032d8.sendMessage(_0x5137cb, {
      'text': "🎉 The game starts with the following participants:\n" + _0x2345d8.map(_0x163aaf => '@' + _0x163aaf.split('@')[0x0]).join("\n") + " 🚀",
      'mentions': _0x2345d8
    });
    _0x5032d8.StartWcgGame(_0x5137cb, _0x2345d8);
  });
  let _0x58cee2 = async _0x4d722d => {
    let {
      type: _0x1628bc,
      messages: _0x3746e0
    } = _0x4d722d;
    if (_0x1628bc == "notify") {
      let _0x5bcc3f = _0x3746e0[0x0];
      let _0x1a8d02 = _0x5bcc3f.key.remoteJid;
      let _0x85c28 = _0x1a8d02.endsWith("@g.us");
      let _0x3eaa43 = _0x1a8d02 == "status@broadcast";
      let _0x22b791 = _0x5bcc3f.key.fromMe ? _0x5032d8.user.id.replace(/:.*@/g, '@') : _0x85c28 || _0x3eaa43 ? _0x5bcc3f.key.participant.replace(/:.*@/g, '@') : _0x1a8d02;
      let _0x1a5d25 = _0x5bcc3f.message?.["conversation"]["trim"]()["toLowerCase"]() || _0x5bcc3f.message?.["extendedTextMessage"]?.["text"]["trim"]()["toLowerCase"]();
      if (!_0x1a5d25) {
        return;
      }
      if (_0x1a5d25 == "ready" && !_0x2345d8.includes(_0x22b791) && _0x33b6c5 == false && _0x1a8d02 == _0x5137cb) {
        console.log("A new player joined WCG");
        _0x2345d8.push(_0x22b791);
        console.log(_0x2345d8);
        _0x5032d8.sendMessage(_0x5137cb, {
          'text': '@' + _0x22b791.split('@')[0x0] + " has joined the game",
          'mentions': [_0x22b791]
        });
      }
    }
  };
  _0x5032d8.ev.on("messages.upsert", _0x58cee2);
});