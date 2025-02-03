const a73_0x4b9704 = function () {
  let _0x5ea3c6 = true;
  return function (_0x30baa3, _0x478008) {
    const _0x4cbad5 = _0x5ea3c6 ? function () {
      if (_0x478008) {
        const _0x4d3cdd = _0x478008.apply(_0x30baa3, arguments);
        _0x478008 = null;
        return _0x4d3cdd;
      }
    } : function () {};
    _0x5ea3c6 = false;
    return _0x4cbad5;
  };
}();
const a73_0x58cfb3 = a73_0x4b9704(this, function () {
  return a73_0x58cfb3.toString().search("(((.+)+)+)+$").toString().constructor(a73_0x58cfb3).search("(((.+)+)+)+$");
});
a73_0x58cfb3();
const a73_0x57fdc8 = require("fs-extra");
const a73_0x1b5d7b = {
  path: __dirname + "/set.env"
};
if (a73_0x57fdc8.existsSync("set.env")) {
  require("dotenv").config(a73_0x1b5d7b);
}
const a73_0x1d8959 = {
  "session": process.env.SESSION_ID || "hans",
  "PREFIXE": process.env.PREFIX || '.',
  "OWNER_NAME": process.env.OWNER_NAME || "Hans-Md",
  "NUMERO_OWNER": process.env.NUMERO_OWNER || "HansTz",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS || 'no',
  "AUTO_DOWNLOAD_STATUS": process.env.AUTO_DOWNLOAD_STATUS || 'no',
  "BOT": process.env.BOT_NAME || "Hans_MD",
  "URL": process.env.BOT_MENU_LINKS || "https://files.catbox.moe/4bvh1g.jpg",
  "MODE": process.env.PUBLIC_MODE || 'no',
  "PM_PERMIT": process.env.PM_PERMIT || 'no',
  "HEROKU_APP_NAME": process.env.HEROKU_APP_NAME || null,
  "HEROKU_APY_KEY": process.env.HEROKU_APY_KEY || null,
  "WARN_COUNT": process.env.WARN_COUNT || '3',
  "ETAT": process.env.PRESENCE || '',
  DP: process.env.STARTING_BOT_MESSAGE || "yes",
  "CHATBOT": process.env.PM_CHATBOT || 'no',
  "HEROKU": process.env.HEROKU || "yes",
  "ANTI_VV": process.env.ANTI_VIEW_ONCE || 'no',
  "ANTI_CMD_SPAM": process.env.ANTI_COMMAND_SPAM || 'no',
  "ANTI_DELETE_MESSAGE": process.env.ANTI_DELETE_MESSAGE || "yes",
  "AUTO_REACT_MESSAGE": process.env.AUTO_REACT_MESSAGE || 'no'
};
module.exports = a73_0x1d8959;
let a73_0x2192b7 = require.resolve(__filename);
a73_0x57fdc8.watchFile(a73_0x2192b7, () => {
  a73_0x57fdc8.unwatchFile(a73_0x2192b7);
  console.log("mise à jour " + __filename);
  delete require.cache[a73_0x2192b7];
  require(a73_0x2192b7);
});