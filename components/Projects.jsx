import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                <h2 id="projects" className="py-4 text-3xl text-center">
                    Projects
                </h2>
                <section className="p-2 mx-8">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {/* personal site */}
                        <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src="/assets/images/personal-site.png"
                                        width="300"
                                        height="200"
                                        className="mx-auto rounded-md"
                                    />
                                </div>
                                <h3 className="mt-2 text-lg font-semibold">
                                    Personal Site
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Personal site built with Next.js and
                                    Tailwind CSS. Utilized React Hooks and
                                    Next.js API routes and deployed to Netlify.
                                </p>
                            </div>
                        </div>

                        {/* animation */}
                        <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src="/assets/images/animation.png"
                                        width="300"
                                        height="200"
                                        className="mx-auto rounded-md"
                                    />
                                </div>
                                <h3 className="mt-2 text-lg font-semibold">
                                    Animation.com
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Worked with a team in the development of an
                                    NFT website built with Laravel, AlpineJS,
                                    and Tailwind CSS. Utilized Laravel Jetstream
                                    for authentication and Vue Router for
                                    navigation.
                                </p>
                                <button className="text-gray-200">
                                    <a
                                        href="https://animation.com"
                                        target="_blank">
                                        Site
                                    </a>
                                </button>
                            </div>
                        </div>

                        {/* pineapple */}
                        <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src="/assets/images/pineapple.png"
                                        width="300"
                                        height="200"
                                        className="mx-auto rounded-md"
                                    />
                                </div>
                                <h3 className="mt-2 text-lg font-semibold">
                                    Pineapplesupport.org
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Developed and designed web application for
                                    therapists built with Laravel.
                                </p>
                            </div>
                        </div>

                        {/* art-gallery */}
                        <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src="/assets/images/art-gallery.png"
                                        width="300"
                                        height="200"
                                        className="mx-auto rounded-md"
                                    />
                                </div>
                                <h3 className="mt-2 text-lg font-semibold">
                                    Art Gallery
                                </h3>
                                <p className="text-xs font-regular">
                                    Personal Project
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Personal project to display an art gallery.
                                    Built with Vue, Tailwind, Nuxt, and deployed
                                    to Netlify.
                                </p>
                                <button className="text-gray-200">
                                    <a
                                        href="https://happy-pike-3b7015.netlify.app/"
                                        target="_blank">
                                        Demo
                                    </a>
                                </button>
                            </div>
                        </div>

                        {/* Musician */}

                        <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src="/assets/images/musician.png"
                                        width="300"
                                        height="200"
                                        className="mx-auto rounded-md"
                                    />
                                </div>
                                <h3 className="mt-2 text-lg font-semibold">
                                    Musician
                                </h3>
                                <p className="text-xs font-regular">
                                    Personal Project
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Project for Musician utilzing Gridsome, Vue,
                                    and deployed to Netlify.
                                </p>
                                <button className="text-gray-200">
                                    <a
                                        href="https://h3c70r-gridsome-mus-site.netlify.app/"
                                        target="_blank">
                                        Demo
                                    </a>
                                </button>
                            </div>
                        </div>

                        {/* art-store */}
                        <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src="/assets/images/art-store.png"
                                        width="300"
                                        height="200"
                                        className="mx-auto rounded-md"
                                    />
                                </div>
                                <h3 className="mt-2 text-lg font-semibold">
                                    Art Store
                                </h3>
                                <p className="text-xs font-regular">
                                    Personal Project
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Personal project to display an art store.
                                    Built with React, Gatsby, and utilized
                                    Bootstrap and deployed to Netlify.
                                </p>
                                <button className="text-gray-200">
                                    <a
                                        href="https://loving-elion-114567.netlify.app/"
                                        target="_blank">
                                        Demo
                                    </a>
                                </button>
                            </div>
                        </div>

                        {/* github */}
                        <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center">
                                <div className="">
                                    <Image
                                        src="/assets/images/github.png"
                                        width="300"
                                        height="200"
                                        className="mx-auto rounded-md"
                                    />
                                </div>
                                <h3 className="mt-2 text-lg font-semibold">
                                    My Github
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Check out my personal Github.
                                </p>
                                <button className="text-sm text-gray-200">
                                    <a
                                        href="https://github.com/h3c70rdelan9el"
                                        target="_blank">
                                        Github
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects
