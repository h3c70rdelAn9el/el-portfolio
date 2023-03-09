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
            body: "I've worked with React on and off for five years, finding it both challenging and rewarding. Despite early struggles due to my limited JavaScript knowledge, I grew to love it for its powerful features, including creating reusable components and using a declarative approach to building user interfaces. The extensive library of tools and packages, as well as the supportive community, make it easy to build virtually anything. React is one of my favorite tools to work with, and I'm eager to continue exploring its capabilities.",
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
            body: "Vue is a JavaScript framework that I have been using for about three years now. I have found it to be a great tool for building web applications, especially when compared to React. Vue's syntax is much simpler than React's, which makes it easier to learn and use. I have also found Vue to be a bit more adaptable than React, which makes it easier to use in a variety of situations.",
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
            body: 'I have been using Alpine.js for about two years now and have grown to love it. Unlinke React and Vue, Alpine.js is used to interject JavaScript directly into HTML. This makes it easy to add dynamic functionality to a website without having to write a lot of excess code or add a lot of excess boilerplate. I have found it to be invaluable when writing for Laravel using Blade components.',
        },
    },
    {
        name: 'Svelte',
        icon: {
            name: 'Svelte',
            component: <SiSvelte />,
        },
        style: { color: '#ff3e00', border: '1px solid #ff3e00' },
        modalContents: {
            title: 'Svelte',
            body: "Even though I have only been using Svelte for less than a year, I have found it to be much easier to use than React or Vue. It is a JavaScript framework that compiles to vanilla JavaScript, which makes it much easier to use. It's layout syntax is also much simpler than React or Vue, which makes it easier to learn and use. This is a framework that I really have enjoyed using and look forward to continue builing apps with it.",
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
            body: "My experience with Laravel has been about three years. Unlike Node.js, Laravel is a framework that includes a ton of built-in functionality, including a database migration system, a templating engine, and a powerful ORM straight out of the box. It can also be used with any front-end framework, including React, Vue, Svelte, or Alpine.js.  I'm excited to continue learning Laravel and exploring building web applications with its many capabilities.",
        },
    },
    {
        name: 'Node.js',
        icon: {
            name: 'Node',
            component: <FaNode />,
        },
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
        style: { color: '#38b2ac', border: '1px solid #38b2ac' },
        modalContents: {
            title: 'Tailwind',
            style: { color: '#fff', backgroundColor: '#38b2ac' },
            body: 'I have been relying on Tailwind CSS for the past three years to develop both websites and applications. Its utility-first approach has proven invaluable in constructing responsive web pages and interfaces with speed and ease, without the need for extensive custom CSS. Not only that, but Tailwind CSS also easily facilitates the creation of a cohesive design across various pages, making it a preferred tool of mine. I am excited to continue utilizing Tailwind CSS for my upcoming projects.',
        },
    },
    {
        name: 'Github',
        icon: {
            name: 'Github',
            component: <FaGithub />,
        },
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
        style: { color: '#ff3e00', border: '1px solid #ff3e00' },
        modalContents: {
            title: 'HTML',
            body: 'Make fun of it all you want, but HTML is still the foundation of the web. I have been using HTML for about 10 years now and have seen it evolve from a simple markup language to a powerful tool for building websites and applications.  So while it may not be the most exciting language, it is still a very important one.',
        },
    },
]

export const projects = [
    {
        name: 'Personal Site',
        excerpt: 'Personal site built with Next.js and Tailwind CSS.',
        description:
            "This is my personal site.  It's built with React, Next, and Tailwind.  It utilizes standard React hooks and the ease of Next.js for routing.  It also utilizes Tailwind CSS for styling.  I have incorporated stylish CSS animations that make the floating keys on the homepage appear more visually appealing.  The multiple modals were a neat trick I picked up from Kent C. Dodds, as a way to easily utilize them anywere on the app.  I built this site to demonstrate my ability to build a full-stack application from scratch.  I used Netlify's ease of use to deploy",
        image: {
            src: '/assets/images/personal-site.png',
            alt: 'Personal Site',
            width: '300px',
            height: '200px',
        },
    },
    {
        name: 'Animation.com',
        excerpt: 'NFT marketplace built with Laravel, Tailwind, and Alpine.js.',
        description:
            "This is a project I had great pleasure in being a part of.  It's an NFT marketplace built with Laravel, Tailwind, and Alpine.js.  I was responsible for the frontend development of the site from the designers design.  I utilized Tailwind CSS to build the site's responsive design.  I also utilized Alpine.js to build the site's frontend functionality.",
        image: {
            name: 'Animation.com',
            src: '/assets/images/animation.png',
            alt: 'Animation.com',
            width: '300px',
            height: '200px',
        },
    },
    {
        name: 'Pineapple Support',
        excerpt:
            'App for a counseling company built with Laravel, Tailwind, and Alpine.js.',
        description:
            "This is an app that I developed an app for a counseling company, using Laravel, Tailwind, and Alpine.js. To achieve a responsive design, I utilized Tailwind CSS. For frontend functionality, I utilized Alpine.js. Additionally, To facilitate secure login and session management for therapists and their clients, I made use of Laravel's built-in user authentication and database setup features. The app allows therapists to log in and add sessions for their clients. ",
        image: {
            name: 'Pineapple Support',
            src: '/assets/images/pineapple.png',
            alt: 'Pineapple Support',
            width: '300px',
            height: '200px',
        },
    },
    {
        name: 'Art Gallery',
        excerpt: 'Art gallery website built with Vue, Nuxt, and Tailwind.',
        description:
            'I created a project for a client that showcases an art gallery/store using Vue, Tailwind, Nuxt, and Contentful as its CMS. The website boasts a clean and straightforward design that is fully responsive to any device.  This site also includes a carousel on homepage.',
        image: {
            name: 'Art Gallery',
            src: '/assets/images/art-gallery.png',
            alt: 'Art Gallery',
            width: '300px',
            height: '200px',
        },
    },
    {
        name: 'Musician Portfolio',
        excerpt:
            'Portfolio website for a musician built with Vue, Tailwind, and Contentful.',
        description:
            "I created a captivating project for a musician's portfolio, utilizing Vue, Tailwind, and Contentful as the CMS. The website boasts a fully responsive design, ensuring seamless user experience across all devices. Visitors can appreciate the musician's talents without hindrance, accessing the website from any device. I am proud to have helped my client achieve their vision through this project.",
        image: {
            name: 'Musician Portfolio',
            src: '/assets/images/musician.png',
            alt: 'Musician Portfolio',
            width: '300px',
            height: '200px',
        },
    },
    {
        name: 'Art Store',
        excerpt:
            'Art store website built with React, Bootstrap, Gatsby, and Contentful.',
        description:
            'For a client, I developed a website that exhibits an art gallery/store using React, Bootstrap, Gatsby, and Contentful as the CMS. This site also demonstrates my proficiency in Bootstrap, Gatsby, and Snipcart.',
        image: {
            name: 'Art Store',
            src: '/assets/images/art-store.png',
            alt: 'Art Store',
            width: '300px',
            height: '200px',
        },
    },
    {
        name: 'My Github',
        excerpt: 'My Github profile.',
        description:
            "This is my Github.  I have been using Git since I started my coding journey.  It's a great tool for version control and collaboration.  I have used it to collaborate on projects with others and a great way to keep track of where I am in my projects.",
        image: {
            name: 'My Github',
            src: '/assets/images/github.png',
            alt: 'My Github',
            width: '300px',
            height: '200px',
        },
    },
]
