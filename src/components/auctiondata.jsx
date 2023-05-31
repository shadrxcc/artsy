import auction1 from "../assets/auction-img-1.svg";
import auction2 from "../assets/auction-img-2.svg";
import auction3 from "../assets/auction-img-3.svg";
import bid1 from "../assets/bid-1.svg";
import bid2 from "../assets/bid-2.svg";

export const auctionsdata = {
  products: [
    {
      id: 1,
      url: auction1,
    },
    {
      id: 2,
      url: auction2,
    },
    {
      id: 3,
      url: auction3,
    },
  ],

  bids: [
    {
      id: 1,
      name: "Out of the box",
      creator: "Dan Murray",
      bid: {
        current: {
          eth: 0.987,
        },
        highest: {
          eth: 0.57,
        },
      },
      url: bid1,
    },
    {
      id: "ab1",
      name: "Falling apart",
      creator: "Jacob Banks",
      bid: {
        current: {
          eth: 0.99,
        },
        highest: {
          eth: 0.34,
        },
      },
      url: bid2,
    },
  ],
};
