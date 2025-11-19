let count = 1;
let message = [
  "Figma",
  "Concept Of Web Design",
  "Flex, Grid",
  "Bootstrap, TailwindCSS, Ant Design, Shadcn UI",
  "BEM Method, SASS, Materialize",
  "Animation (GSAP, Framer Motion)",
  "Git, Github, Vercel, Netlify, Render",
  "JavaScript",
  "Basic To Advanced JavaScript",
  "Concept Of ECMAScript (ES6 & Beyond)",
  "DOM Manipulation",
  "Asynchronous Programming",
  "React",
  "React Router",
  "React Hooks",
  "Redux, Context API",
  "Firebase",
  "Firebase Authentication",
  "NodeJS",
  "Express JS",
  "MongoDB",
  "Template Engine",
  "Rest API",
  "JWT",
  "Testing",
  "Next JS",
  "TypeScript",
  "Socket.IO",
  "GraphQL",
  "React Native (App Development)",
  "Fiverr, Upwork"
];

let timer= setInterval( function(){
    console.log(count + " " + message[count-1])
    count++

    if(count>31){
        clearInterval(timer)
        console.log("countdown finished")
    }
}, 1000

)