import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import Navbar from '@/components/Navbar'
import { Main } from '@/components/Main'
import Footer from '@/components/Footer'
import Animated from '@/components/Animated'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>h3c70r</title>
                <meta name="description" content="Hector's personal website" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="block">
                <Main />
                <Animated />
                <Footer />
            </div>
        </>
    )
}
