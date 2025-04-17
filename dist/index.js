#!/usr/bin/env node 
import inquirer from 'inquirer';
import chalk from 'chalk';
import gradient from 'gradient-string';
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
    console.clear();
    console.log(gradient.atlas(`
  ╔════════════════════════════════════════╗
  ║         ANIKETH DEB CLI RESUME        ║
  ╚════════════════════════════════════════╝
  `));
    const { section } = await inquirer.prompt([
        {
            type: 'list',
            name: 'section',
            message: chalk.yellow("👉 What would you like to view?"),
            choices: [...Object.keys(sections), 'Exit'],
        },
    ]);
    if (section === 'Exit') {
        console.log(chalk.greenBright('\n👋 Bye! Stay legendary.'));
        return;
    }
    console.clear();
    console.log(sections[section]);
    const { again } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'again',
            message: chalk.cyan('✨ View another section?'),
        },
    ]);
    if (again) {
        main();
    }
    else {
        console.log(chalk.greenBright('\n👋 Later, hacker.'));
    }
}
main();
