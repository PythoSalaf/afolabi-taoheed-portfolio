import { LuMail } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { FaUser, FaUsers, FaVault } from "react-icons/fa6";
import { FiBriefcase } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDocker,
  FaWrench,
  FaGraduationCap,
  FaShoppingCart,
  FaChartLine,
  FaComments,
  FaCoins,
  FaImages,
  FaVoteYea,
  FaFilm,
  FaHome,
  FaWallet,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiGraphql,
  SiEthers,
  SiWeb3Dotjs,
  SiSolidity,
  SiIpfs,
  SiWalletconnect,
  SiVercel,
  SiNetlify,
  SiJest,
  SiStorybook,
  SiPostman,
  SiNotion,
  SiRust,
} from "react-icons/si";

import {
  TbApi,
  TbBrandVscode,
  TbTerminal2,
  TbPlugConnected,
  TbCloud,
  TbDatabase,
} from "react-icons/tb";

import {
  LuBraces,
  LuWallet,
  LuHardDrive,
  LuScrollText,
  LuGitBranch,
  LuFlaskConical,
  LuBookOpen,
  LuSend,
  LuCode,
} from "react-icons/lu";

import { HiOutlineCode } from "react-icons/hi";

export const PROFILE = {
  name: "Afolabi Taoheed",
  role: "Frontend Engineer · Web2 & Web3",
  initials: "AT",
  location: "Lagos, Nigeria · Open to Remote",
  email: "alfaheed1010@gmail.com",
  github: "https://github.com/", // ← add your GitHub username
  linkedin: "https://linkedin.com/in/",
  bio: "Frontend engineer focused on building high-performance, scalable interfaces across Web2 and Web3. I specialize in React-based architectures, design systems, and data-driven dashboards delivering clean, maintainable code and pixel-precise UI. From SaaS platforms to blockchain dApps, I turn complex ideas into fast, intuitive user experiences.",
};

export const STATS = [
  { label: "Projects Built", value: "40+" },
  { label: "Years Experience", value: "3+" },
  { label: "Web3 dApps Shipped", value: "08" },
  { label: "Performance Gains", value: "65%" },
];

export const SKILLS = {
  "Web2 Frontend": [
    { name: "React / Next.js", category: "Framework", icon: FaReact },
    { name: "TypeScript", category: "Language", icon: SiTypescript },
    { name: "JavaScript (ES6+)", category: "Language", icon: LuBraces },
    { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
    { name: "SASS / SCSS", category: "Styling", icon: SiSass },
    { name: "GraphQL", category: "API", icon: SiGraphql },
    { name: "REST APIs", category: "API", icon: TbApi },
    { name: "React Query", category: "Library", icon: TbDatabase },
    { name: "HTML5 / CSS3", category: "Markup", icon: HiOutlineCode },
  ],

  "Web3 / Blockchain": [
    { name: "Ethers.js", category: "Library", icon: SiEthers },
    { name: "Wagmi / Viem", category: "Library", icon: TbPlugConnected },
    { name: "Web3.js", category: "Library", icon: SiWeb3Dotjs },
    { name: "RainbowKit", category: "Wallet UI", icon: LuWallet },
    { name: "ConnectKit", category: "Wallet UI", icon: LuWallet },
    { name: "Solidity", category: "Language", icon: SiSolidity },
    { name: "Rust", category: "Language", icon: SiRust },
    { name: "IPFS / Pinata", category: "Storage", icon: LuHardDrive },
    { name: "The Graph", category: "Indexing", icon: SiGraphql },
    { name: "WalletConnect", category: "Protocol", icon: SiWalletconnect },
    { name: "Smart Contract ABIs", category: "Tooling", icon: LuScrollText },
  ],

  "Tools & DevOps": [
    { name: "Git / GitHub", category: "Versioning", icon: LuGitBranch },
    { name: "Figma", category: "Design", icon: FaFigma },
    { name: "VS Code", category: "Editor", icon: TbBrandVscode },
    { name: "Vercel / Netlify", category: "Hosting", icon: TbCloud },
    { name: "Docker (basics)", category: "Containers", icon: FaDocker },
    { name: "Jest / Testing", category: "Testing", icon: LuFlaskConical },
    { name: "Storybook", category: "Tooling", icon: LuBookOpen },
    { name: "Postman", category: "API", icon: LuSend },
    { name: "Linux / CLI", category: "System", icon: TbTerminal2 },
    { name: "Notion", category: "Productivity", icon: SiNotion },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    type: "web3",
    title: "PAC Dash",
    desc: "Real-time DeFi analytics dashboard for on-chain performance tracking, portfolio monitoring, and protocol analytics.",
    tags: ["React", "JavaScript", "Tailwind", "REST API", "Redux"],
    icon: FaChartLine,
    liveUrl: "https://pac-dash.vercel.app/",
    githubUrl: "",
  },

  {
    id: 2,
    type: "web2",
    title: "Hagrosphere",
    desc: "Agritech platform for connecting stakeholders in the agricultural ecosystem with digital tools and resource access.",
    tags: ["React", "JavaScript", "Tailwind", "API"],
    icon: FaShoppingCart,
    liveUrl: "https://hagrosphere.vercel.app/",
    githubUrl: "",
  },

  {
    id: 3,
    type: "web3",
    title: "Tipex",
    desc: "Smart wallet and transaction interface for managing crypto assets, transfers, and blockchain interactions.",
    tags: ["React", "Web3", "Ethers.js", "Tailwind"],
    icon: FaWallet,
    liveUrl: "https://tipex.vercel.app/",
    githubUrl: "",
  },

  {
    id: 4,
    type: "web3",
    title: "ArbiVision — Arbitrum Analytics",
    desc: "Real-time dashboard for monitoring DeFi performance, analyzing Arbitrum protocols, and visualizing live on-chain activity.",
    tags: ["React", "Redux", "Tailwind", "REST API"],
    icon: FaComments,
    liveUrl: "https://arbivision.vercel.app/",
    githubUrl: "",
  },

  {
    id: 5,
    type: "web2",
    title: "Movies Webs",
    desc: "Movie discovery application featuring trending films, categories, search, and detailed media exploration.",
    tags: ["React", "JavaScript", "TMDB API", "Tailwind"],
    icon: FaFilm,
    liveUrl: "https://movies-webs.vercel.app/",
    githubUrl: "",
  },

  {
    id: 6,
    type: "web3",
    title: "HyperHaus",
    desc: "Social trading guild platform where users form guilds, coordinate strategies, share trading rewards, and participate in collective long-term incentive systems, including benefits for non-traders.",
    tags: ["React", "JavaScript", "Tailwind", "Web3"],
    icon: FaUsers,
    liveUrl: "https://hyperhuss.vercel.app/",
    githubUrl: "",
  },

  {
    id: 7,
    type: "web3",
    title: "Bit Vault",
    desc: "Bitcoin yield vault platform on Starknet enabling users earn sustainable BTC yield through automated DeFi strategies, built around ERC-4626 vault standards with analytics, APY tracking, and audited contract flows.",
    tags: ["React", "Starknet", "DeFi", "ERC-4626", "Tailwind"],
    icon: FaVault,
    liveUrl: "https://bit-vault-eta.vercel.app/",
    githubUrl: "",
  },
  {
    id: 8,
    type: "web3",
    title: "Mint Canvas",
    desc: "Digital marketplace for discovering, creating, collecting, and selling NFT assets, featuring crypto collectibles exploration and non-fungible token trading flows.",
    tags: ["React", "Web3", "NFT", "Tailwind", "TypeScript", "Marketplace UI"],
    icon: FaImages,
    liveUrl: "https://mint-canvas.vercel.app/",
    githubUrl: "",
  },
];

export const EXPERIENCE = [
  {
    role: "Frontend & Web3 Developer",
    company: "Expansion Cyber Technologies",
    duration: "May 2024 — 2026",
    location: "Remote",
    bullets: [
      "Developed and deployed production-ready user-facing dApp interfaces using React.js and Tailwind CSS.",
      "Integrated smart contracts with Ethers.js for secure blockchain interactions.",
      "Optimized frontend performance and reduced load times by 65%.",
      "Collaborated with smart contract engineers to deliver reliable decentralized workflows.",
    ],
    tags: ["React.js", "Tailwind CSS", "Ethers.js", "Redux Toolkit"],
  },

  {
    role: "Frontend Engineer",
    company: "Psychinsight",
    duration: "Jun 2023 — Oct 2023",
    location: "Lagos, Nigeria",
    bullets: [
      "Built a responsive benefit administration platform with user-friendly interfaces.",
      "Strengthened API security and improved data protection by 95%.",
      "Developed scalable frontend components using React, Redux, and Tailwind CSS.",
    ],
    tags: ["React.js", "Redux", "Tailwind CSS"],
  },

  {
    role: "Frontend & Web3 Developer",
    company: "PAC Dash",
    duration: "2026",
    location: "Hackathon Project",
    bullets: [
      "Built a real-time DeFi analytics dashboard for on-chain performance and portfolio monitoring.",
      "Integrated REST APIs to surface live blockchain analytics.",
      "Developed reusable dashboard components with React, Redux, and Tailwind CSS.",
      "Implemented data-driven interfaces for protocol metrics and transaction insights.",
    ],
    tags: ["React", "JavaScript", "Redux", "Tailwind CSS", "REST API"],
  },

  {
    role: "Frontend Developer",
    company: "Hagrosphere",
    duration: "2026",
    location: "Product Project",
    bullets: [
      "Developed frontend interfaces for an agritech resource platform.",
      "Built scalable and responsive user interfaces using React and Tailwind.",
      "Integrated API-driven features to support product workflows.",
      "Created reusable components and improved user experience.",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
  },
];

export const CERTS = [
  {
    name: "Software Development",
    issuer: "AltSchool Africa",
    date: "2024",
  },
  {
    name: "Three Million Technical Talents — Cohort 1",
    issuer: "Federal Government of Nigeria",
    date: "2024",
  },
  {
    name: "Blockchain Development",
    issuer: "Cyber Ocean Institute",
    date: "2024",
  },
  {
    name: "Solidity, Hardhat & dApp Development",
    issuer: "Udemy",
    date: "2024",
  },
];

export const POSTS = [
  {
    title: "Type-safe contract calls with Viem",
    category: "Web3",
    read: "6 min",
    excerpt: "How I replaced ethers.js across a 40k-LOC codebase.",
  },
  {
    title: "Designing for wallet UX",
    category: "Web3",
    read: "4 min",
    excerpt:
      "Patterns that keep users from rage-quitting at signature prompts.",
  },
  {
    title: "React Query patterns I keep reaching for",
    category: "Web2",
    read: "5 min",
    excerpt: "Mutations, optimistic UI, and the dreaded cache invalidation.",
  },
  {
    title: "Breaking into Web3 as a frontend dev",
    category: "Career",
    read: "7 min",
    excerpt: "What actually mattered when I made the jump.",
  },
];

export const NAV = [
  { id: "/", label: "Overview", icon: MdHome },
  { id: "about", label: "About Me", icon: FaUser },
  { id: "skills", label: "Skills & Stack", icon: FaWrench },
  { id: "projects", label: "Projects", icon: FiBriefcase },
  { id: "experience", label: "Experience", icon: AiOutlineBarChart },
  { id: "education", label: "Education", icon: FaGraduationCap },
  // { id: "blog", label: "Blog", icon: ImBlogger },
  { id: "contact", label: "Contact", icon: LuMail },
];
