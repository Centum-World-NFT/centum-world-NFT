import { BookMarkIcon, CollectionIcon, ImageIcon, WalletIcon } from "./icons";

const createNFT = [
  {
    icon: <WalletIcon />,
    title: "Set Up Your Wallet",
    description:
      "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
  },
  {
    icon: <CollectionIcon />,
    title: "Create Your COllection",
    description:
      "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection.",
  },
  {
    icon: <ImageIcon />,
    title: "Add Your NFTs",
    description:
      "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <BookMarkIcon />,
    title: "List Them For Sale",
    description:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
  },
];

export default createNFT;

export const accordionQuestion = [
  {
    id: 1,
    question: "WHAT IS NFT ?",
    answer:
      "An NFT, or non-fungible token, is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, such as artwork, music, videos, or virtual real estate, on a blockchain.",
  },
  {
    id: 2,
    question: "HOW TO BUY AN NFT ?",
    answer: `Buying NFT'S need a  cryptocurrency wallet to store and manage your crypto funds.Some options include , CENTUMO WALLET, and TRUST WALLET 
    
    Required  NFT marketplace to browse and purchase from. . Check the listed price in BNB(Binance),CENTUMO TOKEN , as well as any gas fees required to mint the NFT. Once you confirm the transaction in your wallet, the NFT will be transferred to your CENTUMO NFT marketplace account.
    `,
  },
  {
    id: 3,
    question: "WHAT ARE AN NFT DROPS ?",
    answer:
      "NFT drops are one of the most common ways to acquire non-fungible tokens. An NFT drop refers to a release of new NFTs for sale by a creator or collection.",
  },
  {
    id: 4,
    question: "HOW TO SELL AN NFT USING CENTUMO NFT MARKETPLACE ?",
    answer:
      "Selling an NFT on CENTUMO NFT MARKETPLACE is a straightforward process. CENTUMO NFT is one of the largest marketplaces for buying and selling NFTs, so it can be a great place to list your NFTs.",
  },
  {
    id: 5,
    question: "WHAT IS A CRYPTO WALLET ?",
    answer:
      "A crypto wallet is a digital wallet that is used to store, send, and receive cryptocurrencies. It is essentially a software program that securely stores private and public keys which are used to perform transactions on the blockchain network. Crypto wallets can be either hot or cold, depending on whether they are connected to the internet or not.",
  },
  {
    id: 6,
    question: "WHAT IS NFT DIGITAL ART ?",
    answer:
      "NFT digital art is a form of digital art that is represented as a non-fungible token (NFT) on a blockchain network. NFTs are unique digital assets that are secured by blockchain technology.",
  },
];

export const UpArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#fff"
    className="h-[30px] w-[30px] inline-block"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 15l7-7 7 7"
    />
  </svg>
);
export const DownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#fff"
    className="h-[30px] w-[30px] inline-block"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
