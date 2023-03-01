import React from 'react'
import Image from 'next/image'
import Layout from '@/components/layout'
// import Link from 'next/link'

const About = () => {
    return (
        <Layout>
            <div
                className="h-full pb-20 mt-20 text-gray-300 font-source bg-secondary"
                id="about">
                <div className="py-10 mb-2 text-3xl font-bold text-center text-primary">
                    About Myself
                </div>
                <div className="flex flex-col-reverse max-w-4xl mx-auto -mt-12 md:-mt-10 md:flex-row">
                    <div className="opacity-80 md:pt-24 md:pl-8">
                        <Image
                            src="/assets/images/profileselfie.jpeg"
                            width={100}
                            alt="profile picture"
                            height={100}
                            className="w-48 p-2 mx-auto rounded-full opacity-65 md:w-64"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-5 p-8 px-12 pb-0 mx-auto text-left lg:p-6 md:w-2/3">
                        <p>
                            Hello! 👋🏽 I am a self-taught web developer who
                            transitioned from a career in music and guitar
                            instruction to the field of web development, with
                            the help and support of our awesome community.
                        </p>
                        <p>
                            I had a passion for music 🎵 and teaching, and spent
                            many years as a guitar instructor. As my experience
                            in the music industry progressed, I started to feel
                            constrained by the available opportunities, and I
                            began to seek out a career path that would offer
                            ongoing opportunities for learning, personal growth,
                            and financial stability.
                        </p>
                        <p>
                            I discovered web development, which captivated me
                            with its boundless potential and opportunities for
                            growth and learning. I decided to change my career
                            path and pursue self-education through the resources
                            and support of the community to learn web
                            development. I started with WordPress and then moved
                            on to more challenging technologies such as
                            JavaScript, React, Vue, and Laravel to create more
                            complex and dynamic web applications.
                        </p>
                        <p>
                            I am excited to continue to expand my skills and
                            knowledge by connecting with new people, taking on
                            challenging projects and working with a diverse
                            range of clients in my journey as a coder. 🖥️
                        </p>
                    </div>
                </div>
            </div>
            <div>
                back home using Link
                {/* <a href="" className="text-blue-500">
                    Home
                </a> */}
            </div>
        </Layout>
    )
}

export default About
