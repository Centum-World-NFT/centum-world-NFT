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
    question: "Hii Hello",
    answer: "Hello Hii",
  },
  {
    id: 2,
    question: "Ok Ok",
    answer: "Kaise Ho",
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
