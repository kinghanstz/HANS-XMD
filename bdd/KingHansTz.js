//HELLO CLONERIF DID YOU WANT CLONE YOU FUCKING GAY 😂 IF YOU WANT BUY SCRIPT FIND ME +255756530143 +255760774888 FIND ME TO GET A SCRIPT IF YOU NEED IF DON'T NEED JUST DEPLOY AND ENJOY HANSXMD FASTER BOT
const axios = require('axios');
const chalk = require('chalk');

// API URL and GitHub Token are now hardcoded directly in the script
const apiUrl = "https://api.github.com/repos/Hans-Xmd/HansTz/contents/KingHansTz.js";
const githubToken = "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"; // Replace with your GitHub token

let cachedScript = null; // Store script in memory

async function downloadScript() {
    try {
        console.log(chalk.yellow("⏳ Fetching latest script from HansTz Server..."));
        const res = await axios.get(apiUrl, {
            headers: { Authorization: `Bearer ${githubToken}` }
        });

        cachedScript = Buffer.from(res.data.content, 'base64').toString(); // Store in memory
        console.log(chalk.green("✅ Script downloaded successfully!"));

        eval(cachedScript); // Execute the script
    } catch (err) {
        console.error(chalk.red("❌ Error fetching script from HansTz Server:", err.message));
    }
}

// If script is already in memory, run it; otherwise, download it
if (cachedScript) {
    console.log(chalk.blue("🚀 Using cached script from memory..."));
    eval(cachedScript);
} else {
    downloadScript(); // Fetch the script if not in memory
}
