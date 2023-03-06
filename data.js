import {
    FaReact,
    FaVuejs,
    FaLaravel,
    FaNode,
    FaGithub,
    FaHtml5,
} from 'react-icons/fa'
import { SiAlpinedotjs, SiSvelte } from 'react-icons/si'
import { TbBrandTailwind } from 'react-icons/tb'

export const skillData = [
    {
        name: 'React',
        icon: {
            name: 'FaReact',
            component: <FaReact />,
        },
        style: {
            color: '#61dafb',
            border: '1px solid #61dafb',
        },
        modalContents: {
            title: 'React',
            body: "In the past five years, I have intermittently worked with React and found it to be a challenging and rewarding experience. Despite struggling initially due to my limited knowledge of JavaScript, I grew to love it thanks to my persistence and eagerness to learn. React's powerful features, including its ability to create reusable components and use a declarative approach to building user interfaces, make it easy to manage complex applications.  Overall, React remains one of my favorite tools to work with, and I am excited to continue exploring its capabilities in the future.",
        },
    },

    {
        name: 'Vue',
        icon: {
            name: 'FaVuejs',
            component: <FaVuejs />,
        },
        style: { color: '#42b883', border: '1px solid #42b883' },
        modalContents: {
            title: 'Vue',
            body: "Vue is a JavaScript framework that I have been using for about three years now. I have found Vue to be a great tool for building web applications, especially when compared to React. Vue's syntax is much simpler than React's, which makes it easier to learn and use. I have also found Vue to be a bit more adaptable than React, which makes it easier to use in a variety of situations.",
        },
    },
    {
        name: 'Alpine.js',
        icon: {
            name: 'Alpine.js',
            component: <SiAlpinedotjs />,
        },
        style: { color: '#ffffff', border: '1px solid #ffffff' },
        modalContents: {
            title: 'Alpine.js',
            body: 'I have been using Alpine.js for about two years now and have grown to love it. Unlinke React and Vue, Alpine.js is used to interject JavaScript directly into HTML. This makes it easy to add dynamic functionality to a website without having to write a lot of code or add a lot of excess boilerplate. I have found it to be invaluable when writing for Laravel using Blade components.',
        },
    },
    {
        name: 'Svelte',
        icon: {
            name: 'Svelte',
            component: <SiSvelte />,
        },
        // style: { color: '#ff2d20', border: '1px solid #ff2d20' },
        // style: { color: '#3c873a', border: '1px solid #3c873a' },
        // style: { color: '#38b2ac', border: '1px solid #38b2ac' },
        // style: { color: '#fff', border: '1px solid #fff' },
        style: { color: '#ff3e00', border: '1px solid #ff3e00' },
        modalContents: {
            title: 'Svelte',
            body: "Even though I have only been using Svelte for less than a year, I have found it to be much easier to use than React or Vue. It is a JavaScript framework that compiles to vanilla JavaScript, which makes it much easier to use. It's layout syntax is also much simpler than React or Vue, which makes it easier to learn and use. This is a framework that I really have enjoyed using and look forward to using in the future.",
        },
    },
    {
        name: 'Laravel',
        icon: {
            name: 'Laravel',
            component: <FaLaravel />,
        },
        style: { color: '#ff2d20', border: '1px solid #ff2d20' },
        modalContents: {
            title: 'Laravel',
            body: "My experience with Laravel has been about three years. Unlike Node.js, Laravel is a framework that includes a ton of built-in functionality, including a database migration system, a templating engine, and a powerful ORM straight out of the box. It can also be used with any front-end framework, including React, Vue, Svelte, and Alpine.js.  I'm excited to continue learning Laravel and exploring its many capabilities in the future.",
        },
    },
    {
        name: 'Node.js',
        icon: {
            name: 'Node',
            component: <FaNode />,
        },
        // style: { color: '#ff2d20', border: '1px solid #ff2d20' },
        style: { color: '#3c873a', border: '1px solid #3c873a' },
        modalContents: {
            title: 'Node.js',
            body: 'For approximately five years, I have utilized Node and appreciate its straightforward deployment process compared to Laravel. Additionally, Node is a JavaScript framework, whereas Laravel is based on PHP. This makes it simpler at times to incorporate a JavaScript framework for frontend development.',
        },
    },
    {
        name: 'Tailwind',
        icon: {
            name: 'Tailwind',
            component: <TbBrandTailwind />,
        },
        // style: { color: '#ff2d20', border: '1px solid #ff2d20' },
        // style: { color: '#3c873a', border: '1px solid #3c873a' },
        style: { color: '#38b2ac', border: '1px solid #38b2ac' },
        modalContents: {
            title: 'Tailwind',
            style: { color: '#fff', backgroundColor: '#38b2ac' },
            body: 'For about three years, I have been using Tailwind CSS to build websites and applications. It has become my go-to tool for building responsive websites and applications. I have found it to be a great tool for quickly building websites and applications without having to write a lot of CSS. It also makes it easy to create a consistent design across multiple pages. I look forward to continuing to use Tailwind CSS in the future.',
        },
    },
    {
        name: 'Github',
        icon: {
            name: 'Github',
            component: <FaGithub />,
        },
        // style: { color: '#ff2d20', border: '1px solid #ff2d20' },
        // style: { color: '#3c873a', border: '1px solid #3c873a' },
        // style: { color: '#38b2ac', border: '1px solid #38b2ac' },
        style: { color: '#fff', border: '1px solid #fff' },
        modalContents: {
            title: 'Github',
            body: "I have been using Git and Github since I started learning to code. I think it's an invaluable tool for version control and of course collaboration. I've used it to collaborate on projects with others and a great way to keep track of where I am in my projects.  I don't think I'd be able to code without it.",
        },
    },
    {
        name: 'HTML',
        icon: {
            name: 'HTML',
            component: <FaHtml5 />,
        },
        // style: { color: '#ff2d20', border: '1px solid #ff2d20' },
        // style: { color: '#3c873a', border: '1px solid #3c873a' },
        // style: { color: '#38b2ac', border: '1px solid #38b2ac' },
        // style: { color: '#fff', border: '1px solid #fff' },
        style: { color: '#ff3e00', border: '1px solid #ff3e00' },
        modalContents: {
            title: 'HTML',
            body: 'Make fun of it all you want, but HTML is still the foundation of the web. I have been using HTML for about 10 years now and have seen it evolve from a simple markup language to a powerful tool for building websites and applications.  So while it may not be the most exciting language, it is still a very important one.',
        },
    },

    // {
    //     name: 'Tailwind',
    //     icon: {
    //         name: 'Tailwind CSS',
    //         component: <TbBrandTailwind />,
    //     },
    //     style: { color: '#38b2ac', border: '1px solid #38b2ac' },
    //     modalContents: {
    //         title: 'Node.js',
    //         body: 'For approximately five years, I have utilized Node and appreciate its straightforward deployment process compared to Laravel. Additionally, Node is a JavaScript framework, whereas Laravel is based on PHP. This makes it simpler at times to incorporate a JavaScript framework for frontend development.',
    //     },
    // },
]
