import avatar1 from "../assets/Ellipse45.svg";
import avatar2 from "../assets/Ellipse46.svg";
import avatar3 from "../assets/Ellipse47.svg";
import avatar4 from "../assets/Ellipse48.svg";
import avatar5 from "../assets/Ellipse49.svg";
import avatar6 from "../assets/Ellipse50.svg";


const avatar = [
    {
        id: 1,
        img: avatar1,
    },

    {
        id: 2,
        img: avatar2,
    },

    {
        id: 3,
        img: avatar3,
    },

    {
        id: 4,
        img: avatar4,
    },

    {
        id: 5,
        img: avatar5,
    },

    {
        id: 6,
        img: avatar6,
    }
]

const randomavatarIndex = Math.floor(Math.random() * avatar.length)

const randomavatar = avatar[randomavatarIndex]



const commentsData = [
  {
    id: 1,
    name: "Victor Messi",
    img: avatar1,
    comment: "This is a Masterpiece",
  },
  {
    id: 2,
    name: "Madam Benson",
    img: avatar2,
    comment: "This is a Masterpiece",
  },
  { id: 3, name: "Boma Jango", img: avatar3, comment: "This is a Masterpiece" },
  {
    id: 4,
    name: "Flysnte Ell",
    img: avatar4,
    comment: "This is a Masterpiece",
  },
  {
    id: 5,
    name: "Flysnte Ell",
    img: avatar4,
    comment: "This is a Masterpiece",
  },
  {
    id: 6,
    name: "Flysnte Ell",
    img: avatar4,
    comment: "This is a Masterpiece",
  },
];

export default commentsData;
