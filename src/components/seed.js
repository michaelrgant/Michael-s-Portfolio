import ebazonImg1 from "../images/portfolio/ebazon/Red-Hoodie-3.jpeg";
import ebazonImg2 from "../images/portfolio/ebazon/Purple-Hoodie-2.jpeg";
import thyme1 from "../images/portfolio/thyme/thyme.png";


export let projectsData = [
  {
    title: "Ebazon",
    startDate: "2021",
    description:
      "Ebazon is a fully functional e-commerce web application selling “Jackets. Ebazon features a product catalog, persistent user sessions and a cart, and also, a checkout process. I implement the backend using MongoDB and Next-JS to handle persistent user's cart sessions. I integrated users authentication using Bcrypt for users to log in and out of the web application.",
    images: [ebazonImg1, ebazonImg2],
    url: "https://ebazon-a7jjm5vcx-michaelrgant.vercel.app/",
    technologies: [
      { class: "devicon-react-original", name: "React" },
      { class: "devicon-javascript-plain", name: "JavaScript" },
      { class: "devicon-mongodb-plain", name: "MongoDb" },
      { class: "devicon-nextjs-plain", name: "NextJs" },
    ],
  },
  {
    title: "Thyme",
    startDate: "2021",
    description:
      " Thyme is a single-page application that allows multiple users to add food to a container and keep track of how much they have, who owns what, and how much they are wasting.Collaborated on a team of 3 full-stack engineers during a two and half week sprint, using agile workflow. Responsible for developing the admin page, implementing GraphQL mutations for all users' views, and designing the landing page",
    images: [thyme1, thyme1],
    url: "https://thyme-out.herokuapp.com/",
    technologies: [
      { class: "devicon-react-original", name: "React" },
      { class: "devicon-javascript-plain", name: "JavaScript" },
      { class: "devicon-postgresql-plain", name: "Postgresql" },
      { class: "devicon-heroku-original", name: "Heroku" },
      { class: "devicon-express-original", name: "Express" },
      { class: "devicon-sequelize-plain", name: "Sequlize" },
    ],
  },
];
