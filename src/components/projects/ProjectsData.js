import web3pandas1 from '../../assets/web3pandas/web3-1.png';
import web3pandas2 from '../../assets/web3pandas/web3-2.png';
import web3pandas3 from '../../assets/web3pandas/web3-3.png';
import bonanza1 from '../../assets/bonanza/bonanza-1.png';
import bonanza2 from '../../assets/bonanza/bonanza-2.png';
import bonanza3 from '../../assets/bonanza/bonanza-3.png';
import personcare1 from '../../assets/personcare/personcare-1.png';
import personcare2 from '../../assets/personcare/personcare-2.png';
import personcare3 from '../../assets/personcare/personcare-3.png';
import personcare4 from '../../assets/personcare/personcare-4.png';
import staffity1 from '../../assets/staffity/staffity-1.png';
import staffity2 from '../../assets/staffity/staffity-2.png';
import warbls2 from '../../assets/warbls/warbls-2.png';
import warbls3 from '../../assets/warbls/warbls-3.png';
import warbls4 from '../../assets/warbls/warbls-4.png';

export const data = [
  {
    name: 'Bonanza',
    images: [bonanza1, bonanza2, bonanza3],
    image2: bonanza1,
    technologies: ' Ruby on Rails / Bloggity / MySQL',
    category: ['RoR'],
    github: '#',
    deployed: 'https://www.bonanza.com/',
    description:
      'Bonanza is US based E commerce platform that is an online marketplace that connects shoppers and sellers from all over the world.',
    month_created: 'November 2022',
    role: 'Full Stack RoR',
  },
  {
    name: 'Person Care',
    images: [personcare1, personcare2, personcare3, personcare4],
    image2: personcare1,
    technologies: ' Ruby on Rails / SASS / jQuery',
    category: ['RoR', '| ', 'jQuery', '| ', 'SASS'],
    github: '#',
    deployed: 'https://person.care/',
    description:
      'Person Care a online health care platform desgined to provide health care services to the patients. It contains features like booking an appointment with the doctor, video call with the doctor, online payment, patient dashboard, doctor dashboard, admin dashboard, patient profile, doctor profile, patient medical history, Build in Ruby on rails and hosted on Aws services.',
    month_created: 'Feburary 2021',
    role: 'Full Stack',
  },
  {
    name: 'Warbls',
    images: [warbls2, warbls3, warbls4],
    image2: 'https://cdn-images-1.medium.com/max/1600/0*uWq2EZFrUEX0qUhZ',
    technologies: ' React / Nodejs / Redux',
    category: ['React', '| ', 'Redux', '| ', 'NodeJS'],
    github: 'https://github.com/faheemsajjad65/warbls',
    deployed: 'https://warbls.com/',
    description:
      'Travel guiding web app that contain sections like blogs,tour packages and tour best offers. All data is hooked up with NoSQL database MongoDB. APIS are designed with GraphQL and Apollo client is used as a GraphQL client for ReactJS. No UI library is used throughout just the pure CSS. For Carousel purposes, Libraries like react slick, swipeJS and react reposive carousel are given preferences. For blogs, GraphQL subscription has been used to provide real-time features for user added comments on individual blogs.Backend (NodeJS)is hosted on heorku and ReactJS is hosted with netlify.',
    month_created: 'October 2021',
    role: 'Full Stack',
  },
  {
    name: 'Staffity',
    images: [staffity1, staffity2],
    image2: staffity1,
    technologies: ' Ruby on Rails / SASS / jQuery',
    category: ['RoR', '| ', 'SASS', '| ', 'Bootstrap'],
    github: '#',
    deployed: 'https://staffity.io/',
    description:
      'A Company Product by the name of Staffity, that allows tech companies that have access to that platform to track employment record of employees.',
    month_created: 'Augest 2022',
    role: 'Full Stack RoR',
  },

  {
    name: 'Web3Pandas',
    images: [web3pandas1, web3pandas2, web3pandas3],
    image2: web3pandas1,
    technologies: 'Ruby on Rails 7 / Rest API /  JS',
    category: ['RoR', '| ', 'Stimulus JS', '| ', 'SASS'],
    github: '#',
    deployed: 'https://web3pandas.com/',
    description:
      'Web3Pandas is a platform that allows user to provide their own ideas and see their ideas come to life. Built in Ruby on Rails 7, Stimulus JS, SASS, hotwire and hosted on AWS.',
    month_created: 'March 2023',
    role: 'Full Stack',
  },
];
