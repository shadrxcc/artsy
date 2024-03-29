import search from "../assets/searchicon.svg";
import searchmenu from "../assets/search-icon.svg";
import cart from "../assets/cart.svg";
import { v4 as uuid } from "uuid";
import boolean from "../assets/lady-sleep-1.png";
import feature2 from "../assets/egyptian-desktop.png";
import feature3 from "../assets/mummy-desktop.png";
import monalisa from "../assets/monalisa-desktop.png";
// import notification from '../assets/notificationicon.svg'
import creatorone from "../assets/top-creator.svg";
import creatortwo from "../assets/top-creator-2.svg";
import creatorthree from "../assets/top-creator-3.svg";
import philo from "../assets/philomena.svg";
import egypt from "../assets/boolean-egypt.svg";
import blanc from "../assets/blanc.svg";
import ellipsia from "../assets/elypsia.svg";
import lawmakers from "../assets/lawmakers.svg";
import veil from "../assets/veil.svg";
import alternate from "../assets/alternating.svg";
import rose from "../assets/rosemary.svg";
import beverly from "../assets/beverly.svg";
import road from "../assets/road.svg";

import philodeet from "../assets/philomena-details.svg";
import egyptdeet from "../assets/boolean-egypt-details.svg";
import blancdeet from "../assets/blanc-details.svg";
import ellipsiadeet from "../assets/elypsia-details.svg";
import lawmakersdeet from "../assets/lawmakers-details.svg";
import veildeet from "../assets/veil-details.svg";
import alternatedeet from "../assets/alternating-details.svg";
import rosedeet from "../assets/rosemary-details.svg";
import beverlydeet from "../assets/beverly-details.svg";
import bougie from '../assets/bougie.svg'
import bougiedeets from '../assets/bougiedeets.svg'
import circa from '../assets/circa59.svg'
import circadeets from '../assets/circadeets.svg'
import lost from '../assets/lost.svg'
import lostdeets from '../assets/lostdeets.svg'
import oloibiri from '../assets/oloibiri.svg'
import oloibirideets from '../assets/oloibirideets.svg'
import sassy from '../assets/sassy.svg'
import sassydeets from '../assets/sassydeets.svg'
import arewethere from '../assets/arewethere.svg'
import arewetheredeets from '../assets/arewetheredeets.svg'

export const navlink = [
  {
    id: 1,
    link: "Home",
    nav: "/",
  },
  {
    id: 2,
    link: "Marketplace",
    nav: "/market",
  },
  {
    id: 3,
    link: "Auction",
    nav: "/auction",
  },
  {
    id: 4,
    link: "Drop",
    nav: "/drop",
  },
];

export const icons = [
  {
    icon: searchmenu,
    width: "2em",
  },
  {
    icon: cart,
    width: "1.4em",
  },
  // {
  //     icon: notification
  // }
];

export const featureddata = [
  {
    id: 1,
    desc: "Unveil Ancient Egypt's Secrets: The Boolean Egyptian Artifact. Decode the past, explore the enigma, and journey through time. Are you ready?",
    image: boolean,
    title: "Boolean Egyptian",
  },

  {
    id: 2,
    desc: "Step into the timeless realm of the Pharaohs with the Egyptian Mummies Artifact. This extraordinary relic unveils the mysteries and rituals surrounding the ancient practice of mummification.",
    image: feature2,
    title: "Are We There Yet?",
  },

  {
    id: 3,
    desc: "Step into the captivating story of Nigeria's oil industry with the Oloibiri 1997 Artifact. This remarkable relic captures the essence of a pivotal moment in the nation's history.",
    image: feature3,
    title: "Oloibiri 1997",
  },
];

const UpcomingData = [
  {
    id: "01",
    url: monalisa,
    title: "MONALISA REDEFINED IN STYLE.",
    date: "Starts : 08:00 GTS . Monday ",
    desc: "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
  },
  {
    id: "02",
    url: monalisa,
    title: "MONALISA REDEFINED IN STYLE.",
    date: "Starts : 10:45 GTS . Wednesday ",
    desc: "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
  },
  {
    id: "03",
    url: monalisa,
    title: "MONALISA REDEFINED IN STYLE.",
    date: "Starts : 09:00 GTS . Thursday ",
    desc: "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
  },
  {
    id: "04",
    url: monalisa,
    title: "MONALISA REDEFINED IN STYLE.",
    date: "Starts : 12:00 GTS . Saturday ",
    desc: "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
  },
];

export default UpcomingData;

export const topcreators = [
  {
    id: 1,
    img: creatorone,
  },

  {
    id: 2,
    img: creatortwo,
  },

  {
    id: 3,
    img: creatorthree,
  },
];

export const productsdata = [
  {
    id: 1,
    name: "PHILOMENA ‘22",
    price: 3.9,
    creator: "Lisa Frank",
    img: philo,
    detailsimg: philodeet,
    type: "Optics",
    madeIn: "Italy",
    views: 121,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },
  {
    id: 2,
    name: "BOOLEAN EGYPTIAN",
    price: 150.0,
    creator: "Lola Oge",
    img: egypt,
    featuredimg: boolean,
    detailsimg: egyptdeet,
    type: "Fashion",
    madeIn: "Egypt",
    views: 730,
    description:
      "Unveil Ancient Egypt's Secrets: The Boolean Egyptian Artifact. Decode the past, explore the enigma, and journey through time. Are you ready?",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: true,
  },
  {
    id: 3,
    name: "BLANC",
    price: 39.0,
    creator: "Shawn Brights",
    img: blanc,
    detailsimg: blancdeet,
    type: "Fashion",
    madeIn: "Austria",
    views: 340,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },
  {
    id: 4,
    name: "ELLIPSIA",
    price: 234.0,
    creator: "Ali Dawa",
    img: ellipsia,
    detailsimg: ellipsiadeet,
    type: "Optics",
    madeIn: "Egypt",
    views: 11,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },
  {
    id: 5,
    name: "THE LAWMAKERS ",
    price: 212.0,
    creator: "Ali Dawa",
    img: lawmakers,
    detailsimg: lawmakersdeet,
    type: "Editorials",
    madeIn: "Italy",
    views: 21,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },
  {
    id: 6,
    name: "VEIL",
    price: 64.0,
    img: veil,
    type: "Fashion",
    detailsimg: veil,
    madeIn: "Nigeria",
    views: 59,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },

  {
    id: 7,
    name: "ALTERNATING",
    price: 64.0,
    img: alternate,
    type: "Optics",
    detailsimg: alternatedeet,
    madeIn: "Nigeria",
    views: 59,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },

  {
    id: 8,
    name: "ROSEMARY ‘22",
    price: 64.0,
    img: rose,
    type: "Fashion",
    detailsimg: rosedeet,
    madeIn: "Nigeria",
    views: 59,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },

  {
    id: 9,
    name: "BEVERLY",
    price: 64.0,
    img: beverly,
    type: "Nature",
    detailsimg: beverlydeet,
    madeIn: "Nigeria",
    views: 59,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },

  {
    id: 10,
    name: "ROAD TO EGYPT",
    price: 64.0,
    img: road,
    type: "Art & Museum",
    detailsimg: beverlydeet,
    madeIn: "Nigeria",
    views: 59,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },

  {
    id: 11,
    description:
      "Step into the timeless realm of the Pharaohs with the Egyptian Mummies Artifact. This extraordinary relic unveils the mysteries and rituals surrounding the ancient practice of mummification.",
    featuredimg: feature2,
    img: arewethere,
    detailsimg: arewetheredeets,
    creator: 'Tijani Siht',
    name: "Are We There Yet?",
    price: 70,
    type: "Art & Museum",
    madeIn: "Egypt",
    views: 59,
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: true,
  },

  {
    id: 12,
    description: "Step into the captivating story of Nigeria's oil industry with the Oloibiri 1997 Artifact. This remarkable relic captures the essence of a pivotal moment in the nation's history.",
    featuredimg: feature3,
    name: "Oloibiri 1997",
    img: oloibiri,
    detailsimg: oloibirideets,
    price: 70,
    type: "Art & Museum",
    madeIn: "Nigeria",
    views: 59,
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: true,
  },

  {
    id: 13,
    name: "Sassy",
    price: 44.0,
    img: sassy,
    type: "Photography",
    detailsimg: sassydeets,
    madeIn: "Nigeria",
    views: 90,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },

  {
    id: 14,
    name: "Bougie",
    price: 65.0,
    img: bougie,
    type: "Fashion",
    detailsimg: bougiedeets,
    madeIn: "Nigeria",
    views: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },

  {
    id: 15,
    name: "Lost",
    price: 45.0,
    img: lost,
    type: "Photography",
    detailsimg: lostdeets,
    madeIn: "Nigeria",
    views: 60,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },

  {
    id: 16,
    name: "Circa '95",
    price: 50.0,
    img: circa,
    type: "Photography",
    detailsimg: circadeets,
    madeIn: "Nigeria",
    views: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    listing:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    status:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo expedita esse odit labore consequuntur tenetur.",
    feautured: false,
  },
];
