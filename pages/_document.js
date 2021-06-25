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
            <meta name="yandex-verification" content="bfc13620fcdc0420" />
            <link rel="apple-touch-icon" href="/logo.png" />
            <link rel="shortcut icon" href="/logo.png"/>

        <body>

          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.13.4/jquery.mask.min.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-0KBZK7NZF3"></script>
          <script src='/js/googlescript.js'></script>
          <script src='/js/myscript.js'></script>
          <noscript><div><img src="https://mc.yandex.ru/watch/80058913" style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument
