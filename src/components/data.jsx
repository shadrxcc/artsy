import search from "../assets/searchicon.svg";
import cart from "../assets/carticon.svg";
import { v4 as uuid } from "uuid";
import boolean from "../assets/boolean-egyptian.svg";
import feature2 from "../assets/Featured-product-2.svg";
import feature3 from "../assets/Featured-product-3.svg";
// import notification from '../assets/notificationicon.svg'

var idn = uuid();

export const navlink = [
  {
    id: idn,
    link: "Home",
  },
  {
    id: idn,
    link: "Marketplace",
  },
  {
    id: idn,
    link: "Auction",
  },
  {
    id: idn,
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
    id: idn,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    image: boolean,
    title: "Boolean Egyptian",
  },

  {
    id: idn,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    image: feature2,
    title: "Are We There Yet?",
  },

  {
    id: idn,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    image: feature3,
    title: "Oloibiri 1997",
  },
];

//auction https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/auction.json
// carusel https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/carousel.json
// drop https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/drops.json
// products https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json
