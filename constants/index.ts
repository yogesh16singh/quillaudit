/**
 * Bunch of constants which can be changed here and it will directly get reflected.
 * @imp { Could have used links but i don't had any. }
 */

export const NAVBAR_ITEMS = [
  { name: "services", icon: true },
  { name: "pricing", icon: false },
  { name: "out audits", icon: false },
  { name: "tools", icon: true },
  { name: "resources", icon: true },
  { name: "refer-earn-secure", icon: false },
];

// MAIN CONTENTS.
export const MAIN_DESCRIPTION_HEADING =
  "See how QuillAudits is a trusted partner in 1000+ Audit stories";
export const MAIN_DESCRIPTION_INTRO =
  "Carpe Diem Pension, on Pulse blockchain, redefines retirement with a self-managed, inclusive, globally portable fund. Unique for its token burn mechanism, it ensures a sustainable 4.32% inflation payout. With $143.11k and 41.06% of CDP already burned, it serves 35 users globally.";

// SUB CONTENTS 1.
export const SUB_HEADING_1 =
  "CarpeDiem Pension's Flexible, Blockchain-Enabled Future";
export const SUB_HEADING_1_CONTENT =
  "CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.";
export const SUB_HEADING_1_IMAGE = "/assets/images/blockchain-1.png";

// SUB  CONTENT 2.
export const SUB_HEADING_2 =
  "CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting";
export const SUB_HEADING_2_CONTENT =
  "CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.";
export const SUB_HEADING_2_IMAGE = "/assets/images/blockchain-2.png";

//SUB CONTENT 3.
export const SUB_HEADING_3 = "QuillAudits' Strategic Approach to CDP Security Audits"
export const SUB_HEADING_3_CONTENT = "We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution."

//SUB CONTENT 4.
export const SUB_HEADING_4 = "Comprehensive Audit Discoveries and Remediation Strategies"
export const SUB_HEADING_4_CONTENT = "Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :"

// POINTS.
export const CONTENT_POINTS = [
    {
        heading: "Information gathering:",
        lists: [
            {
                list: {
                    main: "Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.",
                    isSub: false,
                    sublist: []
                }
            },
            {
                list: {
                    main: "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
                    isSub: false,
                    sublist: []
                }
            },
            {
                list: {
                    main: "Discussed client concerns and specific areas of focus for the audit.",
                    isSub: false,
                    sublist: []
                }
            }
        ]
    },
    {
        heading: "Manual Code Review:",
        lists: [
            {
                list: {
                    main: "Conducted a line-by-line review of the smart contract code, focusing on:",
                    isSub: true,
                    sublist: [
                        { title: "Vulnerability identification:", description: "Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues, etc" },
                        { title: "Login flaws:", description: "Identifying inconsistencies or unintended behaviors in the code logic." },
                        { title: "Tokennomics correctness:", description: "Verifying if the code accurately implements the intended economic model and token distribution mechanisms." },
                        { title: "Solidity best practices:", description: "Compliance with secure coding standards and adherence to established guidelines." }
                    ]
                },
            }
        ]
    },
    {
        heading: "Functional Testing:",
        lists: [
            {
                list: {
                    main: null,
                    isSub: true,
                    sublist: [
                        { title: null, description: "Developed and executed a comprehensive set of test cases covering various user interactions and edge cases." },
                        { title: null, description: "Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits." },
                        { title: null, description: "Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors)." },
                        { title: null, description: "Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally." },
                    ]
                }
            },
        ]
    },
    {
        heading: "Automated Testing:",
        lists: [
            {
                list: {
                    main: "Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.",
                    isSub: false,
                    sublist: []
                },
            },
            {
                list: {
                    main: "Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.",
                    isSub: false,
                    sublist: []
                },
            },
            {
                list: {
                    main: "Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.",
                    isSub: false,
                    sublist: []
                },
            },
        ]
    },
    {
        heading: "Reporting & Remediation:",
        lists: [
            {
                list: {
                    main: "Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.",
                    isSub: false,
                    sublist: []
                },
            },
            {
                list: {
                    main: "Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.",
                    isSub: false,
                    sublist: []
                },
            },
            {
                list: {
                    main: "Collaborated with the CDP team to prioritize and address the identified issues.",
                    isSub: false,
                    sublist: []
                },
            },
            {
                list: {
                    main: "Conducted additional verification testing after vulnerability fixes were implemented.",
                    isSub: false,
                    sublist: []
                },
            },
        ]
    }
];

export const PROCESS_ITEMS = [
    { heading: "Unauthorized Claim/Compound:", content: "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time." },
    { heading: "Precision Loss in mintCDP():", content: "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function." },
    { heading: "Multiplication Accuracy:", content: "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations." },
    { heading: "Incorrect Share Allocation:", content: "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources." },
    { heading: "Logic Error in Referral Handling:", content: "A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system" },
    { heading: "Referral Exploitation:", content: "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity." },
]

export const REMEDIATION_ITEMS = [
    { item: "Implementation of reentrancy protection mechanisms." },
    { item: "Accurate handling of decimal values using established libraries or best practices." },
    { item: "Revised calculations with proper scaling factors" },
    { item: "Fixing logic errors to ensure deposits and waiting periods are enforced." },
    { item: "Addressing referral system vulnerabilities to prevent abuse." },
]

export const SERVICES_ITEMS = [
    { name: "Ethereum Audit" },
    { name: "Polygon Audit" },
    { name: "BSC Audit" },
    { name: "Solana Audit" },
    { name: "NEAR Audit" },
    { name: "Algorand Audit" },
    { name: "Tezos Audit" },
    { name: "Hyperledger Fabric Audit" },
    { name: "L1 Audit" },
    { name: "Polkadot Audit" },
    { name: "Wallet Audit" },
    { name: "ZkSync Audit" },
    { name: "Starknet Audit" },
]

export const ECOSYSTEM_ITEMS = [
    { name: "QuillAI" },
    { name: "QuillCheck" },
    { name: "QuillShield" },
    { name: "QuillAcademy" },
    { name: "QuillMonitor" },
    { name: "Web3Suggest" },
    { name: "Explore All Tools" },
]

export const OTHER_SERVICES = [
    { name: "Red Teaming" },
    { name: "dApp Pentesting" },
    { name: "DeFi Diligence" },
    { name: "NFT Due Diligence" },
    { name: "Rug Pull Due Diligence" },
    { name: "Security Consultation" },
    { name: "Blockchain Forensics" },
    { name: "KYC (Know Your Customer)" },
]

export const QUICK_LINKS = [
    { name: "Pricing" },
    { name: "Audit Process" },
    { name: "Our Audits" },
    { name: "Testimonials" },
    { name: "Security Synopsis" },
    { name: "Blog" },
    { name: "Clients" },
    { name: "Careers" },
]

export const PROGRAMMES = [
    { name: "Refer-Earn-Secure" },
    { name: "WAGSI Grants" },
    { name: "Ambassador Program" },
    { name: "Partnership Program" },
]