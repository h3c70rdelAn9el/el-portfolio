import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin></link> */}
            {/* <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
                rel="stylesheet"></link> */}

            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Source+Code+Pro&display=swap"
                rel="stylesheet"></link>
            {/* <link
                href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
                rel="stylesheet"></link> */}
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
