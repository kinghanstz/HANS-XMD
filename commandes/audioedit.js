const a24_0x10e879 = function () {
  let _0x5d93ec = true;
  return function (_0x201200, _0x42dc56) {
    const _0x3de8b4 = _0x5d93ec ? function () {
      if (_0x42dc56) {
        const _0x2ae332 = _0x42dc56.apply(_0x201200, arguments);
        _0x42dc56 = null;
        return _0x2ae332;
      }
    } : function () {};
    _0x5d93ec = false;
    return _0x3de8b4;
  };
}();
const a24_0x5b9c8f = a24_0x10e879(this, function () {
  return a24_0x5b9c8f.toString().search("(((.+)+)+)+$").toString().constructor(a24_0x5b9c8f).search("(((.+)+)+)+$");
});
a24_0x5b9c8f();
const {
  zokou: a24_0x50ac
} = require("../framework/zokou");
const a24_0x55a81a = require('fs');
const a24_0x18c8ba = require("fluent-ffmpeg");
const a24_0x2c3bab = require("@ffmpeg-installer/ffmpeg").path;
a24_0x18c8ba.setFfmpegPath(a24_0x2c3bab);
const a24_0x3298a1 = async (_0x1ad733, _0x164586, _0x56cfb8, _0x497620, _0x5789e0) => {
  const {
    ms: _0x416bcc,
    repondre: _0x5be174,
    msgRepondu: _0x34a57c
  } = _0x56cfb8;
  if (!_0x34a57c || !_0x34a57c.audioMessage) {
    return _0x5be174("please reply to an audio message");
  }
  try {
    const _0x99744a = await _0x164586.downloadAndSaveMediaMessage(_0x34a57c.audioMessage);
    const _0x111a4f = Math.random().toString(0x24).substring(0x2) + ".mp3";
    a24_0x18c8ba(_0x99744a).audioFilters(_0x5789e0).saveToFile(_0x111a4f).on("end", async () => {
      const _0x489de9 = a24_0x55a81a.readFileSync(_0x111a4f);
      const _0x401ecd = {
        "audio": _0x489de9,
        "mimetype": "audio/mpeg"
      };
      const _0x12ddb0 = {
        "quoted": _0x416bcc
      };
      await _0x164586.sendMessage(_0x1ad733, _0x401ecd, _0x12ddb0);
      a24_0x55a81a.unlinkSync(_0x99744a);
      a24_0x55a81a.unlinkSync(_0x111a4f);
    }).on("error", _0x1f14fe => {
      a24_0x55a81a.unlinkSync(_0x99744a);
      _0x5be174("Error : " + _0x1f14fe.message);
    });
  } catch (_0x3b29d3) {
    _0x5be174("Errorr : " + _0x3b29d3.message);
  }
};
const a24_0x4bab54 = {
  "name": "deep",
  "filter": "atempo=4/4,asetrate=44500*2/3"
};
const a24_0x3cdd7b = {
  "name": "bass",
  "filter": "equalizer=f=18:width_type=o:width=2:g=14"
};
const a24_0x1b7df5 = {
  "name": "reverse",
  "filter": "areverse"
};
const a24_0x59072f = {
  "name": "slow",
  "filter": "atempo=0.8,asetrate=44100"
};
const a24_0x5ea85b = {
  "name": "smooth",
  "filter": "minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'"
};
const a24_0x3789ec = {
  "name": "tempo",
  "filter": "atempo=0.9,asetrate=65100"
};
const a24_0x187645 = {
  "name": "nightcore",
  "filter": "atempo=1.07,asetrate=44100*1.20"
};
const a24_0x992e1b = [a24_0x4bab54, a24_0x3cdd7b, a24_0x1b7df5, a24_0x59072f, a24_0x5ea85b, a24_0x3789ec, a24_0x187645];
a24_0x992e1b.forEach(({
  name: _0x46ec2a,
  filter: _0x199be0
}) => {
  a24_0x50ac({
    'nomCom': _0x46ec2a,
    'categorie': "Audio-Edit"
  }, async (_0x2dcdb0, _0x5e5a8f, _0x2da9b3) => {
    await a24_0x3298a1(_0x2dcdb0, _0x5e5a8f, _0x2da9b3, {}, _0x199be0);
  });
});