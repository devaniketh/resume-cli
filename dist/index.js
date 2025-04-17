#!/usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const sections = {
    Education: `
🎓 Education
• SRM Institute of Science and Technology (2023–2027)
  B.Tech in CSE (AI/ML) – 8.0 CGPA
• St. Anthony’s Higher Secondary School, Shillong (2021–2023)
  Class XII – 70%
  `,
    Experience: `
💼 Experience
• DevKit – Full-Stack Developer (Jan 2025 – Present)
  – Integrated Grok & OpenRouter APIs
  – Built OCR support & redesigned LLM UI

• LayerEdge – Frontend Dev (Jan 2025 – Feb 2025)
  – Built UI for Bitcoin-ZK platform
  `,
    Projects: `
🚀 Projects
• Zk-ReUseIt – ZK resale platform using Reclaim SDKs & Polygon zkEVM
• SecureInsure – Smart contract-based insurance app
• Defy-Locker – IPFS-based decentralized document locker
• Solana YieldFarm – SPL staking & reward DApp on Solana
  `,
    Skills: `
🛠️ Technical Skills
Languages: TypeScript, JavaScript, C, C++, Python, Solidity
Web: HTML, CSS, React, Next.js, Node.js, Express, MongoDB, PostgreSQL
Blockchain: Ethereum, Solana, ZKP, Smart Contracts, Anchor, Web3.js
Cloud: Docker, AWS
  `,
    Leadership: `
👥 Position of Responsibility
• Tech Lead @ TPHxSRMIST – Built website & mentored hackathon participants
• Blockchain Club @ SRM – Project contributor & mentor
  `
};
async function main() {
    const { section } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'section',
            message: '👋 What would you like to view from Aniketh\'s resume?',
            choices: Object.keys(sections).concat('Exit'),
        },
    ]);
    if (section === 'Exit') {
        console.log('👋 Bye!');
        return;
    }
    console.clear();
    console.log(sections[section]);
    await inquirer_1.default.prompt([
        {
            type: 'confirm',
            name: 'again',
            message: 'Want to check another section?',
        },
    ]).then((res) => {
        if (res.again)
            main();
        else
            console.log('👋 Bye!');
    });
}
main();
