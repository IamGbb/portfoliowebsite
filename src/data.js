import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub, FaGitAlt, FaReact } from 'react-icons/fa'
import notejs from './images/1.svg'
import restaurant from './images/2.svg'
import cocktails from './images/3.svg'
import bmi from './images/4.svg'
import trivia from './images/5.svg'
import colors from './images/6.svg'
import simon from './images/7.svg'
import creative from "./images/Creative.json";
import learner from "./images/Learner.json";
import teamplayer from "./images/TeamPlayer.json";
import {VscSymbolStructure, VscBrowser} from 'react-icons/vsc'
import {BsCart2, BsCodeSlash} from 'react-icons/bs'


export const links = [
  {
    id: 1,
    url: 'projects',
    text: 'Projects',
  },
  {
    id: 2,
    url: 'about',
    text: 'About',
  },
  {
    id: 3,
    url: 'footer',
    text: 'Talk to me',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/IGBBB',
    class: "icon-button facebook",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://github.com/IamGbb',
    class: "icon-button github",
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/gilad-ben-bassat-45b43186',
    class: "icon-button linkedin",
    icon: <FaLinkedin />,
  },
]

export const projects = [
{
  id: 1,
  name: 'Note',
  image: notejs,
  description: 'e-commerce music shop. Backend & Frontend, including user registration, payment with paypal, admin permissions and dashboard.',
  technologies: 'NodeJs, Express, JWT, React, MongoDB, CSS, React Bootstrap, Redux, Axios',
  linkWeb: 'https://notejsmusicshop.herokuapp.com/',
  linkGit:'https://github.com/IamGbb/NoteJs'
},
{
  id: 2,
  name: 'Trivia',
  image: trivia,
  description: 'React based quiz. the quizzes are fetched from an external API. The app counts right and wrong answers and gives a final score at the end.',
  technologies: 'React, CSS, Context API, lottie, Axios',
  linkWeb: 'https://whatdoyouknow.netlify.app/',
  linkGit:'https://github.com/IamGbb/TriviaQuiz'
},
{
  id: 3,
  name: 'WikiCocktails',
  image: cocktails,
  description: 'A cocktail dictionary. The data is fetched from an external api. I added search functionality to browse through the cocktails',
  technologies: 'React, CSS, Context API, lottie',
  linkWeb: 'https://wikicocktail.netlify.app/cocktail/13501/',
  linkGit:'https://github.com/IamGbb/WikiCocktail'
},
{
  id: 4,
  name: 'BMI Calculator',
  image: bmi,
  description: 'An HTML based BMI calculator with interactive lottie animation that responds to the results.',
  technologies: 'HTML, CSS, JavaScript, Lottie',
  linkWeb: 'https://iamgbb.github.io/BMI-calculator/',
  linkGit:'https://github.com/IamGbb/BMI-calculator'
},
{
  id: 5,
  name: 'Color Picker',
  image: colors,
  description: "A color generator made with react and values.js. the user can search a color and it's shades, and copy the color's number to his clipboard",
  technologies: 'React, CSS, values.js, react-color',
  linkWeb: 'https://chooseacolor.netlify.app/',
  linkGit:'https://github.com/IamGbb/react-color-picker'
},
{
  id: 6,
  name: 'Simon game',
  image: simon,
  description: "An HTML based 'Simon's Game', where the user needs to follow the pattern given to him by a random function.",
  technologies: 'HTML, CSS, JavaScript, jQuery',
  linkWeb: 'https://iamgbb.github.io/Simon-Game/',
  linkGit:'https://github.com/IamGbb/Simon-Game'
},
{
  id: 7,
  name: 'Restaurant Menu',
  image: restaurant,
  description: 'A react based restaurant menu. The items in the UI can be filtered by category',
  technologies: 'React, CSS',
  linkWeb: 'https://menuwithfilters.netlify.app/',
  linkGit:'https://github.com/IamGbb/restaurantMenu'
},
]

export const skills = [
  {
    id: 1,
    image: learner,
    title: 'Auto-Didact',
    description: "Learning is my hobby. Whatever I'm doing, I always try to think ahead and prevent problems. I constantly learn, practice and improve."
  },
    {
      id: 2,
    image: teamplayer,
    title: 'Team Player',
    description: "I'm a nice guy and a fun coworker. It's either that or I'm terribly lacking self-awareness. But I believe it's the first one."
  },
    {
    id: 3,
    image: creative,
    title: 'Creative',
    description: "I was a copywriter for a short while, and a motion designer for a few years. I'm also an amateur musician, so yeah, one can say I'm a creative guy."
  }
]

export const courses = [
  {
    id: 1,
    icon: <VscBrowser/>,
    name: 'Full-stack web development',
    link: "https://www.kernelios.com/",
    organization: 'kerneliOS'
  },
  {
    id: 2,
    icon: <BsCodeSlash/>,
    name: 'The Complete 2022 Web Development Bootcamp',
    link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    organization: 'udemy'
  },
  {
    id: 3,
    icon: <BsCart2/>,
    name: 'MERN eCommerce From Scratch',
    link: 'https://www.udemy.com/course/mern-ecommerce/',
    organization: 'udemy'
  },
  {
    id: 4,
    icon: <FaReact/>,
    name: 'React Tutorial and Projects Course',
    link: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
    organization: 'udemy'
  },
  {
    id: 5,
    icon: <FaGitAlt/>,
    name: 'Learn Git by Doing',
    link: 'https://www.udemy.com/course/learn-git-by-doing-a-step-by-step-guide-to-version-control/',
    organization: 'udemy'
  },
  {
    id: 6,
    icon: <VscSymbolStructure/>,
    name: 'Data Structures + Algorithms',
    link: 'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/',
    organization: 'udemy'
  }
]