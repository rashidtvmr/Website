import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import {ServerStyleSheet} from "styled-components";

export default class MyDocument extends Document {


    // Server Side Rendering related context handling
    static async getInitialProps(ctx: DocumentContext) {
        // This is so that styled components to work with server side rendering
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            console.log("_document", {initialProps});
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
