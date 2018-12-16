import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    const { renderPage } = ctx;
 
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const { html, head, errorHtml, chunks } = renderPage();
    const session = ctx.req.session;
   // console.log ( 'DATATAAA> ', html, head, errorHtml, chunks  )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    //return { ...page, styleTags };
   return { ...page, styleTags, html, head, errorHtml, chunks, session };
  }
  
  render() {
    return (
      <html>
        <Head>
        {this.props.styleTags}
        <script
            id="session"
            type="application/json"
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify(this.props.session, null, 2)
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places&language=en`} />
        </body>
      </html>
    );
  }
}
