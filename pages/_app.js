import App,  { Container } from 'next/app';
import Page from '../components/Page';

import NextSeo from 'next-seo';
// import your default seo configuration
import SEO from '../next-seo.config';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }
        // this exposes the query to the user
        pageProps.query =  ctx.query;
        return { pageProps };
    }
    render() {
        const  { Component, pageProps } = this.props;
        return(
            <Container>
                <Page>
                    <NextSeo config={SEO} />
                    <Component {...pageProps} />
                </Page>
            </Container>
        )
    }
}

export default MyApp;