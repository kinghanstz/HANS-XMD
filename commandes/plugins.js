const a43_0x3eac51 = function () {
  let _0x535a08 = true;
  return function (_0x287ac6, _0x1bc3d1) {
    const _0x131de0 = _0x535a08 ? function () {
      if (_0x1bc3d1) {
        const _0x21cd69 = _0x1bc3d1.apply(_0x287ac6, arguments);
        _0x1bc3d1 = null;
        return _0x21cd69;
      }
    } : function () {};
    _0x535a08 = false;
    return _0x131de0;
  };
}();
const a43_0x2afd34 = a43_0x3eac51(this, function () {
  return a43_0x2afd34.toString().search("(((.+)+)+)+$").toString().constructor(a43_0x2afd34).search("(((.+)+)+)+$");
});
a43_0x2afd34();
const {
  zokou: a43_0x28fcd7
} = require("../framework/zokou");
const a43_0x44f77f = require("node:fs");
const {
  exec: a43_0x43a776
} = require("child_process");
const a43_0x18ce59 = require("../bdd/plugin");
const {
  checkIfInstalledPlugin: a43_0x44ba03
} = require("../framework/mesfonctions");
const a43_0x4e3899 = {
  "nomCom": "plugin",
  "categorie": "Mods",
  "desc": "Manage (add or remove) plugins",
  "alias": ['pg']
};
a43_0x28fcd7(a43_0x4e3899, async (_0x194ea1, _0x4669fb, _0x1a97e3) => {
  const {
    repondre: _0x3dab1b,
    arg: _0x42e22e,
    ms: _0x393ae8,
    prefixe: _0x230807
  } = _0x1a97e3;
  if (!_0x42e22e[0x0] || _0x42e22e.join('') === '') {
    _0x3dab1b("Here is an example:\n-" + _0x230807 + "plugin install <url> : to install plugins\n-" + _0x230807 + "plugin install --all : to install all plugins\n-" + _0x230807 + "plugin remove <name> : to remove plugins\n-" + _0x230807 + "plugin remove --all : to remove all plugins\n-" + _0x230807 + "plugin list : to display the list of installed plugins\n-" + _0x230807 + "plugin all : to display the complete list of plugins");
  } else {
    switch (_0x42e22e[0x0].toLowerCase()) {
      case "install":
        if (_0x42e22e[0x1].startsWith("https://gist.githubusercontent.com")) {
          const _0x3a9d89 = _0x42e22e[0x1];
          let _0x2aa077 = await installPlugin(_0x3a9d89);
          if (_0x2aa077) {
            _0x3dab1b("The plugin has been installed, please restart the bot or install other plugins before restarting if you have more to install. " + _0x230807 + "reboot");
          }
        } else {
          if (_0x42e22e[0x1] === "--all") {
            let _0x5d1440 = await (await fetch("https://raw.githubusercontent.com/Luffy2ndAccount/Zokou-MD-plugins/refs/heads/master/plugins.json")).json();
            let _0x344121 = await a43_0x18ce59.pluginList();
            let _0x44bfd3 = [];
            for (const _0x38f12b of _0x5d1440.pluginsVE) {
              if (!_0x344121.find(_0x27eaff => _0x27eaff.url === _0x38f12b.url)) {
                _0x44bfd3.push(_0x38f12b);
              }
            }
            if (_0x44bfd3.length > 0x0) {
              for (const _0x22c081 of _0x44bfd3) {
                await installPlugin(_0x22c081.url).then(_0x46b77a => {
                  _0x3dab1b("Plugin " + _0x22c081.name + " has been installed");
                })["catch"](_0x519ddc => {
                  _0x3dab1b("Error during the installation of the plugin " + _0x22c081.name);
                });
              }
              _0x3dab1b("All plugins have been installed, please restart the bot. " + _0x230807 + "reboot");
            } else {
              _0x3dab1b("All plugins are already installed");
            }
          } else {
            _0x3dab1b("Please insert a valid raw link from gist.github.com or use plugin install --all to install all");
          }
        }
        break;
      case "remove":
        if (_0x42e22e[0x1] && _0x42e22e[0x1].trim() !== '') {
          if (_0x42e22e[0x1] == "--all") {
            const _0x3d58ab = await a43_0x18ce59.pluginList();
            if (_0x3d58ab.length > 0x0) {
              for (const _0x4d444e of _0x3d58ab) {
                await a43_0x18ce59.delPlugin(_0x4d444e.name).then(_0x30e50b => {
                  a43_0x44f77f.rmSync("./commandes/" + _0x4d444e.name + ".js");
                  _0x3dab1b("The plugin " + _0x4d444e.name + " has been removed");
                });
              }
              _0x3dab1b("All plugins have been removed. You can now restart the bot. " + _0x230807 + "reboot");
            } else {
              _0x3dab1b("You don't have any installed plugins");
            }
          } else {
            await a43_0x18ce59.delPlugin(_0x42e22e[0x1]).then(_0x5aed7b => {
              a43_0x44f77f.rmSync("./commandes/" + _0x42e22e[0x1] + ".js");
              _0x3dab1b("The plugin " + _0x42e22e[0x1] + " has been removed. You can now restart the bot or remove others if needed. " + _0x230807 + "reboot");
            });
          }
        }
        break;
      case "list":
        const _0x21049a = await a43_0x18ce59.pluginList();
        console.log(_0x21049a);
        if (_0x21049a.length > 0x0) {
          let _0x4ebe68 = '';
          _0x21049a.forEach(_0x20616d => {
            _0x4ebe68 += "\n*name:* " + _0x20616d.name + "\n*Link:* " + _0x20616d.url + "\n";
          });
          _0x3dab1b(_0x4ebe68);
        } else {
          _0x3dab1b("You don't have any installed plugins");
        }
        break;
      case "all":
        let _0x34d38b = await (await fetch("https://raw.githubusercontent.com/Luffy2ndAccount/Zokou-MD-plugins/refs/heads/master/plugins.json")).json();
        let _0x268a66 = await a43_0x18ce59.pluginList();
        let _0xef9d3 = [];
        for (const _0x411b33 of _0x34d38b.pluginsVE) {
          if (!_0x268a66.find(_0x41f165 => _0x41f165.url === _0x411b33.url)) {
            _0xef9d3.push(_0x411b33);
          }
        }
        let _0x11049d = '';
        _0x11049d += "**List of uninstalled plugins:**\n";
        for (const _0x2044f4 of _0xef9d3) {
          _0x11049d += "\n*name:* " + _0x2044f4.name + "\n*Description:* " + _0x2044f4.desc + "\n*Link:* " + _0x2044f4.url + "\n";
        }
        _0x11049d += "\n\n**List of installed plugins:**\n";
        for (const _0x5226e3 of _0x268a66) {
          _0x11049d += "\n*name:* " + _0x5226e3.name + "\n*Link:* " + _0x5226e3.url + "\n";
        }
        _0x3dab1b(_0x11049d);
        break;
      default:
        _0x3dab1b("Here is an example:\n-" + _0x230807 + "plugin install <url> : to install plugins\n-" + _0x230807 + "plugin install --all : to install all plugins\n-" + _0x230807 + "plugin remove <name> : to remove plugins\n-" + _0x230807 + "plugin remove --all : to remove all plugins\n-" + _0x230807 + "plugin list : to display the list of installed plugins\n-" + _0x230807 + "plugin all : to display the complete list of plugins");
    }
  }
});
installPlugin = async _0x3b1f8b => {
  const _0x1a3993 = await fetch(_0x3b1f8b);
  const _0x3295ca = await _0x1a3993.text();
  let _0x26502f = /require\(['"]([^'"]+)['"]\)/g;
  let _0x36117c = _0x3295ca.match(_0x26502f);
  let _0x351a65 = [];
  if (_0x36117c) {
    _0x36117c.forEach(_0x2f9e29 => {
      const _0x2e1c26 = _0x2f9e29.replace("require(", '').replace(')', '').replace(/['"]/g, '');
      if (!_0x2e1c26.startsWith('.')) {
        _0x351a65.push(_0x2e1c26);
      }
    });
  }
  _0x351a65 = await a43_0x44ba03(_0x351a65);
  console.log("Modules to install : ", _0x351a65);
  if (_0x351a65.length > 0x0) {
    console.log("Modules to install : ", _0x351a65);
    await new Promise((_0x1244a3, _0x23d26c) => {
      a43_0x43a776("npm i " + _0x351a65.join(" ") + " --save", (_0x1bf110, _0x2de5a3, _0x15516f) => {
        if (_0x1bf110) {
          console.error("exec error: " + _0x1bf110);
          _0x23d26c(_0x1bf110);
        }
        console.log("stdout: " + _0x2de5a3);
        console.error("stderr: " + _0x15516f);
        _0x1244a3(_0x2de5a3);
      });
    });
  }
  const _0x5392b8 = _0x3b1f8b.replace("https://gist.githubusercontent.com/", '').split('/')[0x4];
  a43_0x44f77f.createWriteStream("./commandes/" + _0x5392b8).end(_0x3295ca);
  console.log("Plugin installed successfully");
  await a43_0x18ce59.Addplugin(_0x5392b8.replace(".js", ''), _0x3b1f8b);
  return true;
};