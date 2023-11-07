import Document, {Head, Html, Main, NextScript} from 'next/document';

// 如果需要对应用的head进行修改，可以通过重写Document来实现。

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="<https://fonts.googleapis.com>" />
          <link rel="preconnect" href="<https://fonts.gstatic.com>" />
          <link
            href="<https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap>"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
