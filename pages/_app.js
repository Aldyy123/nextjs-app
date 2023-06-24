import "../styles/globals.css";
import Layout from "../Components/Layout";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-1M8T6WVH03"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1M8T6WVH03', {
          page_path: window.location.pathname,
          });
        `}
        </Script>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
