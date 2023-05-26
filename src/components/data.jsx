import search from "../assets/searchicon.svg";
import cart from "../assets/carticon.svg";
import { v4 as uuid } from "uuid";
import boolean from "../assets/lady-sleep-1.png";
import feature2 from "../assets/egyptian-desktop.png";
import feature3 from "../assets/mummy-desktop.png";
import monalisa from "../assets/monalisa-desktop.png";
// import notification from '../assets/notificationicon.svg'

var idn = uuid();

export const navlink = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "Marketplace",
  },
  {
    id: 3,
    link: "Auction",
  },
  {
    id: 4,
    link: "Drop",
  },
];

export const icons = [
  {
    icon: search,
  },
  {
    icon: cart,
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

//auction https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/auction.json
// carusel https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/carousel.json
// drop https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/drops.json
// products https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json

// export const UpcomingData = [
//   {
//     id: "01",
//     url: monalisa,
//     title: "ALTE REDEFINED IN STYLE.",
//     date: "Starts : 08:00 GTS . Monday ",
//     desc: "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
//   },
//   {
//     id: "02",
//     url: monalisa,
//     title: "AUTUMN LEAF",
//     date: "Starts : 10:45 GTS . Wednesday ",
//     desc: "The artwork captures the beauty of a single autumn leaf. The leaf is a vibrant orange, with hints of red and yellow along its edges. The use of light and shadow adds depth and dimension to the piece, highlighting the delicate veins and intricate patterns of the leaf.",
//   },
//   {
//     id: "03",
//     url: monalisa,
//     title: "YOUNG IRISH MODEL.",
//     date: "Starts : 09:00 GTS . Thursday ",
//     desc: "The artwork features a pale model, standing against a dark and moody background. The model's porcelain skin is the focus of the piece, contrasting sharply with the shadowy surroundings. The model's delicate features and slender figure are perfectly captured, adding to the ethereal and otherworldly quality of the piece.",
//   },
//   {
//     id: "04",
//     url: monalisa,
//     title: "BABY KANGAROO.",
//     date: "Starts : 12:00 GTS . Saturday ",
//     desc: "The artwork features a cute and cuddly baby kangaroo. The baby's soft, fluffy fur is captured in great detail, with its adorable face and curious eyes drawing the viewer in.",
//   },
// ];