import Head from "next/head";
import {META_COLOR, SITE_DESCRIPTION, SITE_NAME} from "../../../utils/info";
import MainHeader from "../../header";
import ContactBubble from "../../ContactBubble";
import Footer from "../../Footer";

export default function MainLayout({children, seo = {}}) {
    return (
        <>
            <Head>
                <title>{SITE_NAME}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content={META_COLOR}/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Baskerville:wght@700&display=swap"
                    rel="stylesheet"/>
                {/*<link*/}
                {/*    rel="preload"*/}
                {/*    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Baskerville:wght@700&display=swap"*/}
                {/*    as="style"/>*/}
                <link rel="stylesheet" onLoad="this.onload=null;this.removeAttribute('media');"
                      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Baskerville:wght@700&display=swap"/>

                <link rel="preconnect" href="https://d1nrrr6y3ujrjz.cloudfront.net" crossOrigin="true"/>
                <link rel="dns-prefetch" href="https://d1nrrr6y3ujrjz.cloudfront.net"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin={"rue"}/>
                <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin={"true"}/>
                <link rel="dns-prefetch" href="https://fonts.gstatic.com/"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <meta name={"description"} content={seo.description || SITE_DESCRIPTION}/>
                <noscript>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Libre+Baskerville:wght@700&display=swap"
                        rel="stylesheet"/>
                </noscript>
            </Head>
            <MainHeader/>
            <main className="w-full">
                {children}
            </main>
            <ContactBubble/>
            <Footer/>
        </>
    )
}