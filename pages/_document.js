import ModalRoot from '@/components/ModalRoot'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Source+Code+Pro&display=swap"
                rel="stylesheet"></link>
            <body className="overflow-x-hidden">
                <Main />
                <NextScript />
                {/* <ModalRoot /> */}
                <div id="modal"></div>
            </body>
        </Html>
    )
}
