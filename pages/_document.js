import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        {/* <title>Деньги в кредит онлайн микрозаймы на карту по Казахстану</title> */}
            <meta name="description"
              content="«NASH Company» – единственная в Казахстане инновационная ЮРТЕХ компания, которая специализируется в области решения практически любых юридических задач." />
            {/* <meta name="yandex-verification" content="a9d4b76bb5e15aa6" />
            <meta name="yandex-verification" content="a9d4b76bb5e15aa6" /> */}
            <link rel="apple-touch-icon" href="/logo.png" />
            <link rel="shortcut icon" href="/logo.png"/>

        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
