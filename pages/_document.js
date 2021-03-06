import Document, {Html, Head, Main, NextScript} from 'next/document'
import {useRouter} from "next/router";

// import  como from 'react';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    componentDidMount = () => {
        console.log(this.props, "LOCALE");
    }


    render() {
        // const router = useRouter();

        return (
            <Html>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument