#!/usr/bin/env node 
import inquirer from 'inquirer';
import chalk from 'chalk';
import gradient from 'gradient-string';
import qrcode from 'qrcode-terminal';
const sections = {
    Education: `
${chalk.bold('🎓 Education')}
• ${chalk.cyan('SRM Institute of Science and Technology')} (2023–2027)
  B.Tech in CSE (AI/ML) – ${chalk.yellow('8.0 CGPA')}
• St. Anthony’s Higher Secondary School, Shillong (2021–2023)
  Class XII – ${chalk.yellow('70%')}
  `,
    Experience: `
${chalk.bold('💼 Experience')}
• ${chalk.green('DevKit')} – Full-Stack Developer (${chalk.dim('Jan 2025 – Present')})
  – Integrated Grok & OpenRouter APIs
  – Built OCR support & redesigned LLM UI

• ${chalk.green('LayerEdge')} – Frontend Dev (${chalk.dim('Jan 2025 – Feb 2025')})
  – Built UI for Bitcoin-ZK platform
  `,
    Projects: `
${chalk.bold('🚀 Projects')}
• Zk-ReUseIt – ZK resale platform using Reclaim SDKs & Polygon zkEVM
• SecureInsure – Smart contract-based insurance app
• Defy-Locker – IPFS-based decentralized document locker
• Solana YieldFarm – SPL staking & reward DApp on Solana
  `,
    Skills: `
${chalk.bold('🛠️ Technical Skills')}
Languages: ${chalk.magentaBright('TypeScript, JavaScript, C, C++, Python, Solidity')}
Web: ${chalk.magentaBright('React, Next.js, Node.js, Express, MongoDB, PostgreSQL')}
Blockchain: ${chalk.magentaBright('Ethereum, Solana, ZKP, Smart Contracts, Anchor')}
Cloud: ${chalk.magentaBright('Docker, AWS')}
  `,
    Leadership: `
${chalk.bold('👥 Leadership')}
• ${chalk.blue('Tech Lead @ TPHxSRMIST')} – Built website & mentored hackathon participants
• ${chalk.blue('Blockchain Club @ SRM')} – Project contributor & mentor
  `
};
async function main() {
    const args = process.argv.slice(2);
    // If --full flag is passed
    if (args.includes('--full')) {
        console.clear();
        console.log(gradient.retro(`
  ╔═══════════════════════════════════════════════╗
  ║          🚀 ANIKETH DEB CLI RESUME           ║
  ╚═══════════════════════════════════════════════╝
  `));
        console.log(chalk.bold.cyanBright('🌐 Portfolio: https://aniketh-deb.vercel.app\n'));
        qrcode.generate('https://aniketh-deb.vercel.app', { small: true });
        // Print all sections
        for (const [title, content] of Object.entries(sections)) {
            console.log(gradient.fruit(`\n🧠 ${title}:\n`));
            console.log(content);
            console.log(chalk.gray('\n----------------------------------------------\n'));
        }
        console.log(chalk.greenBright('\n👋 Thanks for checking me out!'));
        return;
    }
    // Regular interactive flow
    console.clear();
    console.log(gradient.retro(`
  ╔═══════════════════════════════════════════════╗
  ║          🚀 ANIKETH DEB CLI RESUME           ║
  ╚═══════════════════════════════════════════════╝
  `));
    console.log(chalk.bold.cyanBright('🌐 Portfolio: https://aniketh-deb.vercel.app\n'));
    qrcode.generate('https://aniketh-deb.vercel.app', { small: true });
    while (true) {
        const { section } = await inquirer.prompt([
            {
                type: 'list',
                name: 'section',
                message: chalk.yellow("👉 What would you like to view?"),
                choices: [...Object.keys(sections), 'Exit'],
            },
        ]);
        if (section === 'Exit') {
            console.log(chalk.greenBright('\n👋 Later, hacker. Stay legendary.'));
            break;
        }
        console.clear();
        console.log(gradient.fruit(`\n🧠 ${section}:\n`));
        console.log(sections[section]);
        console.log(chalk.gray('\n----------------------------------------------\n'));
    }
}
main();
