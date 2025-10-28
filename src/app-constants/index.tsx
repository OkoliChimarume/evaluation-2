import Stock from "./../assets/images/stock.webp";
import RealEstate from "./../assets/images/real-estate.webp";
import Goal from "./../assets/images/goal.webp";
import Coin from "./../assets/images/coin.webp";
import SanniImg from "../assets/images/user1.webp";
import LayoImg from "../assets/images/user2.webp";
import HenryImg from "../assets/images/user3.webp";
import Eke from "../assets/images/eke.webp";
import Sherrif from "../assets/images/sherrif.webp";
import Damilare from "../assets/images/damilare.webp";
import LinkedIn from "../assets/icons/linkedin.svg";
import Twitter from "../assets/icons/twitter.svg";
import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import YouTube from "../assets/icons/youtube.svg";

export const offers = [
  {
    id: 1,
    title: "We bring the world’s best companies to you. ",
    description:
      "The Rise stock portfolio is a selection of stocks of the world’s most profitable companies, curated by experts to deliver great long term returns.",
    btn: "Create a stock plan now ",
    image: Stock,
    bg: "bg-teal-4",
  },
  {
    id: 2,
    title: "We offer diverse investment options. ",
    description:
      "Our real estate offering is a portfolio of rental properties in the US that provide steady monthly returns, price appreciation and capital gains. Your investments are more stable and protect you from market declines. ",
    btn: "Create a real estate plan now  ",
    image: RealEstate,
    bg: "bg-purple",
  },
  {
    id: 3,
    title: "There’s something for everyone.",
    description:
      "Looking for stable and safe returns? Our fixed-income portfolio delivers consistent returns annually and is perfect for low-risk investors",
    btn: "Create a fixed-income plan now ",
    image: Goal,
    bg: "bg-indigo",
  },
  {
    id: 1,
    title: "We bring the world’s best companies to you. ",
    description:
      " Rise gives you the ability to choose a financial goal, whether tuition, a wedding, travel or retirement and put money away regularly toward them. ",
    btn: "Explore our goal based plans",
    image: Coin,
    bg: "bg-orange",
  },
];
export const riseUsers = [
  { id: 1, name: "Sanni", src: SanniImg },
  { id: 2, name: "Layo", src: LayoImg },
  { id: 3, name: "Henry", src: HenryImg },
];
export const experts = [
  {
    name: "Eke Urum",
    title: "Founder & CEO",
    src: Eke,
  },
  {
    name: "Sheriff Adeoti",
    title: "Finance Lead",
    src: Sherrif,
  },
  {
    name: "Damilare Akinlotan",
    title: "Finance",
    src: Damilare,
  },
];


export const footerSocialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/rise-vest',
    icon: LinkedIn,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/risevest',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/rise.vest',
    icon: Instagram,
  },

  {
    name: 'Facebook',
    href: 'https://facebook.com/RisevestGroup',
    icon: Facebook,
  },
  {
    name: 'Youtube',
    href: 'https://youtube.com/c/RiseCapital',
    icon: YouTube,
  },
]
