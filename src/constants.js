// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxtookitLogo from './assets/tech_logo/redux toolkit.webp'
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import framermotionlogo from './assets/tech_logo/framermotion.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import exp1logo from './assets/experience_logo/exp1.webp';

// Education Section Logo's
import aceLogo from './assets/education_logo/ace_logo.png';
import gpaLogo from './assets/education_logo/gpa_logo.webp';
import sdsLogo from './assets/education_logo/sds_logo.png';

// Project Section Logo's
import project1Logo from './assets/work_logo/project1.png';
import project2Logo from './assets/work_logo/project2.png';
import project3Logo from './assets/work_logo/project3.png';
import project4Logo from './assets/work_logo/project4.png';
import project5Logo from './assets/work_logo/project5.png';
import project6Logo from './assets/work_logo/project6.png';
import project7Logo from './assets/work_logo/project7.png';
import project8Logo from './assets/work_logo/project8.png';
import project9Logo from './assets/work_logo/project9.png';
import project10Logo from './assets/work_logo/project10.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux Toolkit', logo: reduxtookitLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Framer Motion', logo:framermotionlogo}
    ],
  },
  // {
  //   title: 'Backend',
  //   skills: [
  //     { name: 'Springboot', logo: springbootLogo },
  //     { name: 'Node JS', logo: nodejsLogo },
  //     { name: 'Express JS', logo: expressjsLogo },
  //     { name: 'MySQL', logo: mysqlLogo },
  //     { name: 'MongoDB', logo: mongodbLogo },
  //     { name: 'Firebase', logo: firebaseLogo },
  //     { name: 'PostgreSQL', logo: postgreLogo },
  //   ],
  // },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: exp1logo,
      role: "Web Development (Training)",
      company: "Solitaire Infosystems Pvt. Ltd.",
      date: "July 2024 - Sept 2024",
      desc: "Completed a 45-day Web Development Training Program focused on building core skills in HTML, CSS, JavaScript, and Bootstrap. Gained hands-on experience in creating responsive web pages, designing user-friendly interfaces, and implementing interactive features. This training laid the foundation for frontend development and strengthened understanding of modern web design practices.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: aceLogo,
      school: "Ambala College of Engineering and Applied Research, Ambala",
      date: "Aug 2022 - June 2025",
      grade: "8.28 SGPA",
      desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Ambala College of Engineering and Applied Research. During my time at the college, I built a solid foundation in programming, software development, and core computer science concepts. I studied subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in technical workshops and events, which helped enhance my practical knowledge and skills. My experience at Ambala College has played a crucial role in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech ",
    },
    {
      id: 1,
      img: gpaLogo,
      school: "Government Polytechnic, Ambala",
      date: "Aug 2019 - July 2022",
      grade: "72%",
      desc: "I completed my Diploma in Automobile Engineering from Government Polytechnic, Ambala City During my studies I gained hands-on experience with vehicle engines and mechanical systems I learned how different automobile parts function and how each contributes to overall performance The program emphasized practical learning including real-world diagnostics and maintenance This experience deepened my interest in automotive technology and mechanical engineering."
,
      degree: "Diploma ( Automobile Engineering)",
    },
    {
      id: 2,
      img: sdsLogo,
      school: "SD.Public School Nagla Jattan, Ambala",
      date: "Apr 2018 - March 2019",
      grade: "71%",
      desc: "I completed my class 10 education from  SD Public School, Nagla Jattan, under the HBSE board, where I studied Science, Mathematics, Computer Science, and Physical Education.",
      degree: "HBSE (X) – Science, Mathematics, Computer Science.",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Movie-WebApplication",
      description:
        "A dynamic and user-friendly Movie Web Application built with React.js, designed to let users explore the latest films and shows. Simply search for any movie title, and the app fetches detailed information including trailers, ratings, release dates, and descriptions using the TMDB API. With a clean UI and smooth user experience, it's the perfect tool for movie lovers to discover and stay updated with trending entertainment.",
      image: project1Logo,
      tags: ["React JS", "Tailwind CSS", "API", "Redux Toolkit"],
      github: "https://github.com/Himanshu6408/Movie-WebApplication-",
      webapp: "https://movie-web-application-dtlk.vercel.app/",
    },
    {
      id: 1,
      title: "E-commerce Website for Computer Components",
      description:
        "Responsive E-commerce Website for Computer Components Built using HTML and CSS with a clean and organized layout. Fully responsive design for smooth viewing on all devices.",
      image: project2Logo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Himanshu6408/pc-parts-website",
      webapp: "https://pc-parts-website.vercel.app/",
    },
    {
      id: 2,
      title: "Refokus-Clone-Website",
      description:
        "Refokus Website Clone Developed using React.js, Tailwind CSS, and Framer Motion. Replicates the modern design and fluid animations of Refokus. Demonstrates expertise in frontend development and UI animation.",
      image: project3Logo,
      tags: ["React JS",  "Tailwind CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/Himanshu6408/Refokus-Clone-Website/tree/main",
      webapp: "https://refokus-clone-website.vercel.app/",
    },
    {
      id: 3,
      title: "GSAP Landing Page Animation",
      description:
        "A visually engaging and responsive landing page built using HTML, CSS, and JavaScript. The project utilizes GSAP (GreenSock Animation Platform) to deliver smooth scroll-based and timeline animations. Designed with attention to UI/UX, it showcases interactive transitions and motion effects across devices.",
      image: project4Logo,
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      github: "https://github.com/Himanshu6408/GSAP-Project",
      webapp: "https://gsap-project-sooty.vercel.app/",
    },
    {
      id: 4,
      title: "Random User Profile Generator",
      description:
        "A dynamic web application built using HTML, Tailwind CSS, and JavaScript that fetches and displays random user profiles via an external API. It presents user information such as name, email, location, and profile picture, making it a useful project for understanding API integration.",
      image: project5Logo,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "API"],
      github: "https://github.com/Himanshu6408/RandomUser-API/tree/main",
      webapp: "https://random-user-api-ten.vercel.app/",
    },
    {
      id: 5,
      title: "3D Spinning UI Animation Project",
      description:
        "A visually engaging 3D spinning animation built using HTML and CSS. This project demonstrates creative rotational effects ideal for showcasing products, banners, or interactive UI elements. The smooth animations and clean layout highlight how simple technologies can deliver dynamic visual appeal.",
      image: project6Logo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/Himanshu6408/Rotational-Cane",
      webapp: "https://rotational-cane.vercel.app/",
    },
    {
      id: 6,
      title: "MindTap: The Number Game",
      description:
        "A fun and interactive number game built with HTML, Tailwind CSS, and JavaScript. Users test their reflexes and number recognition skills by clicking the correct numbers within a time limit. Clean UI and smooth logic make it an engaging project for both learning and entertainment.",
      image: project7Logo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Himanshu6408/Bubble-Game/tree/main",
      webapp: "https://bubble-game-one-roan.vercel.app/",
    },
    {
      id: 7,
      title: "Obysc-Inspired Digital Agency Landing Page",
      description:
        "A visually captivating agency website clone inspired by Obysc's design. Built using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll, this project showcases smooth scroll animations, creative layouts, and modern UI interactions that mimic a real-world creative agency portfolio.",
      image: project8Logo,
      tags: ["HTML", "CSS", "JavaScript", "GSAP", " Locomotive", "ScrollTrigger"],
      github: "https://github.com/Himanshu6408/Major-Project-",
      webapp: "https://major-project-mocha-five.vercel.app/",
    },
    {
      id: 8,
      title: "Wholesale-Catalog-WebApplication",
      description:
        "A React.js-based e-commerce web application built to showcase vehicle components in a structured and professional layout. Developed using Tailwind CSS and JavaScript, the application presents categorized auto parts and accessories for wholesale buyers. It features a clean interface, and smooth user interaction, tailored for desktop use.",
      image: project9Logo,
      tags: ["React JS", "Tailwind CSS", "Javascript"],
      github: "https://github.com/Himanshu6408/Wholesale-Catalog-WebApplication",
      webapp: "https://wholesale-catalog-web-application.vercel.app/",
    },
    {
      id: 9,
      title: "Ecommerce Website",
      description:
        "A React.js-based eCommerce website designed to professionally showcase men's, women's, and electronics products. Built with Tailwind CSS and JavaScript, the platform features a clean layout optimized for desktop users. Products are well-categorized, enabling smooth navigation and easy browsing for customers. The site focuses on structured product presentation and delivers an intuitive shopping experience.",
      image: project10Logo,
      tags: ["React JS", "Tailwind CSS"],
      github: "https://github.com/Himanshu6408/React-Ecommerce-Website",
      webapp: "https://react-ecommerce-website-rouge.vercel.app/",
    },
  ];  