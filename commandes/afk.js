const a20_0x47fd43 = function () {
  let _0x4724c1 = true;
  return function (_0x3ca420, _0x241500) {
    const _0x37b547 = _0x4724c1 ? function () {
      if (_0x241500) {
        const _0x5e8fb8 = _0x241500.apply(_0x3ca420, arguments);
        _0x241500 = null;
        return _0x5e8fb8;
      }
    } : function () {};
    _0x4724c1 = false;
    return _0x37b547;
  };
}();
const a20_0x1c2b0b = a20_0x47fd43(this, function () {
  return a20_0x1c2b0b.toString().search("(((.+)+)+)+$").toString().constructor(a20_0x1c2b0b).search("(((.+)+)+)+$");
});
a20_0x1c2b0b();
const {
  zokou: a20_0x5ae2ba
} = require("../framework/zokou");
const a20_0x111484 = require("../bdd/afk");
const a20_0x28d0ff = {
  "nomCom": "afk",
  "categorie": "Mods",
  "desc": "active a message to send when you are afk(away from keyboard)"
};
a20_0x5ae2ba(a20_0x28d0ff, async (_0x7776a1, _0x248fed, _0x55ae86) => {
  const {
    ms: _0x3ebe25,
    repondre: _0x251685,
    superUser: _0x5cd3f4,
    arg: _0x5646bb
  } = _0x55ae86;
  if (!_0x5cd3f4) {
    _0x251685("you are not allowed to use this command");
    return;
  }
  if (!_0x5646bb[0x0]) {
    let _0x12fa96 = await a20_0x111484.changeAfkState(0x1, 'on');
    if (_0x12fa96 === "not defined") {
      _0x251685("You have not updated a parameter for AFk (Away From Keyboard)\n To record an afk message please enter a message after the command then an image link (the link is optional)");
    } else {
      await a20_0x111484.changeAfkState(0x1, 'on');
      _0x251685("The AFK message has been activated");
    }
  } else {
    try {
      let _0x546b9e = [];
      let _0xd54ceb = "no url";
      _0x5646bb.forEach(_0x7e8f03 => {
        if (_0x7e8f03.endsWith(".jpg") || _0x7e8f03.endsWith(".png") || _0x7e8f03.endsWith(".jpeg")) {
          _0xd54ceb = _0x7e8f03;
        } else {
          if (_0x7e8f03 != undefined) {
            _0x546b9e.push(_0x7e8f03);
          }
        }
      });
      await a20_0x111484.addOrUpdateAfk(0x1, _0x546b9e.join(" "), _0xd54ceb);
      _0x251685("The afk has been saved, retype the afk command to activate it");
    } catch (_0x3f88ec) {
      console.log(_0x3f88ec);
      _0x251685("An error occurred while saving the afk");
    }
  }
});