export const navLinks = [
   {
      id: 1,
      name: 'Home',
      href: '#home',
      animation: 'waving',
   },
   {
      id: 2,
      name: 'About',
      href: '#about',
      animation: 'falling',
   },
   {
      id: 3,
      name: 'Works',
      href: '#work',
      animation: 'typing',
   },
   {
      id: 4,
      name: 'Contact',
      href: '#contact',
      animation: 'texting',
   },
];


export const works = [
   {
      id: 1,
      title: 'Responsive Web Design',
      subdesc: 'Comprehensive training in modern web design principles, focusing on building visually appealing and user-friendly interfaces that adapt seamlessly across various devices and screen sizes. This certification emphasizes the importance of mobile-first design and accessibility.',
      from: 'freeCodeCamp',
      pics: '/src/assets/responsive_cert.png',
      spotlight: '/src/assets/spotlight1.png',
   },
   {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      subdesc: 'An in-depth exploration of core JavaScript programming concepts, including algorithms, data structures, and problem-solving techniques. This certification equips learners with the skills necessary to write efficient code and optimize performance in real-world applications.',
      from: 'freeCodeCamp',
      pics: '/src/assets/javascript_cert.png',
      spotlight: '/src/assets/spotlight2.png',

   },
   {
      id: 3,
      title: 'Front End Development Libraries',
      subdesc: 'A thorough introduction to essential front-end libraries, including React, Bootstrap, and jQuery. This certification covers how to effectively use these libraries to build dynamic, interactive, and responsive user interfaces while following industry best practices.',
      from: 'freeCodeCamp',
      pics: '/src/assets/frontend_cert.png',
      spotlight: '/src/assets/spotlight3.png',

   }

]


export const projects = [
   {
      id: 1,
      title: 'Todo App',
      desc: 'A powerful and intuitive To Do App designed to optimize productivity and task management. Featuring a sleek and responsive interface built with React, this app allows users to seamlessly organize, track, and prioritize tasks.',
      src: '/src/video/todo.mp4',
      link: 'https://jhnlmryml.github.io/todo-app/',
      tags: [
         {
            id: 1,
            name: 'react',
            path: '/src/assets/react.svg',
         },
         {
            id: 2,
            name: 'css',
            path: '/src/assets/tailwind.svg',
         },
         {
            id: 3,
            name: 'javascript',
            path: '/src/assets/javascript.svg',
         },
      ]
   },
   {
      id: 2,
      title: 'Calculator',
      desc: 'A sleek and responsive calculator application built with React, designed to deliver fast and accurate results for essential arithmetic operations. Its user-friendly interface ensures smooth interaction, making it ideal for both quick calculations and everyday use.',
      src: '/src/video/calculator.mp4',
      link: 'https://jhnlmryml.github.io/calculator/',
      tags: [
         {
            id: 1,
            name: 'react',
            path: '/src/assets/react.svg',
         },
         {
            id: 2,
            name: 'css',
            path: '/src/assets/css3.svg',
         },
         {
            id: 3,
            name: 'javascript',
            path: '/src/assets/javascript.svg',
         },
      ]
   }

]

export const skills = [
   {
      title: "HTML",
      icon: "/src/assets/html.svg",
      level: 75,
   },
   {
      title: "CSS",
      icon: "/src/assets/css3.svg",
      level: 75,
   },
   {
      title: "JAVASCRIPT",
      icon: "/src/assets/javascript.svg",
      level: 55,
   },
   {
      title: "REACT",
      icon: "/src/assets/react.svg",
      level: 40,
   },
   {
      title: "PHP",
      icon: "/src/assets/php.svg",
      level: 40,
   },
   {
      title: "BOOTSRAP",
      icon: "/src/assets/bootstrap.svg",
      level: 40,
   },
   {
      title: "TAILWIND",
      icon: "/src/assets/tailwind.svg",
      level: 40,
   },
   {
      title: "MYSQL",
      icon: "/src/assets/mysql.svg",
      level: 30,
   },
];
