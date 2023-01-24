import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                <h2 id="projects">Projects</h2>
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quod.
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quod.
                                </p>
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quod.
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quod.
                                </p>
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quod.
                                </p>
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quod.
                                </p>
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, quod.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects
