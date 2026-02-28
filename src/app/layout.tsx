import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Nav from "@/src/components/nav";
import Footer from "@/src/components/footer";

export const metadata: Metadata = {
  title: "Hirelyn - Webflow HTML website template",
  description: "Hirelyn is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
  generator: "Webflow",
  openGraph: {
    title: "Hirelyn  - Webflow HTML website template",
    description: "Hirelyn is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
    images: ["https://cdn.prod.website-files.com/6862f95675e0a213ed870f1c/68e7e0c11919be405306ed20_Ophen%20Graph.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirelyn  - Webflow HTML website template",
    description: "Hirelyn is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes.",
    images: ["https://cdn.prod.website-files.com/6862f95675e0a213ed870f1c/68e7e0c11919be405306ed20_Ophen%20Graph.webp"],
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png",
    apple: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-wf-domain="hirelyn.webflow.io" data-wf-page="69023d38b3dfba39822f9303"
    data-wf-site="69023d38b3dfba39822f9315" lang="en"
    className="w-mod-js w-mod-ix wf-anton-n3-active wf-anton-n4-active wf-anton-n5-active wf-anton-n6-active wf-anton-n7-active wf-inter-n3-active wf-inter-n4-active wf-inter-n5-active wf-inter-n6-active wf-inter-n7-active wf-roboto-n3-active wf-roboto-n4-active wf-roboto-n5-active wf-roboto-n6-active wf-roboto-n7-active wf-active w-mod-ix3">
      <head>
        <link href="https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/css/hirelyn.webflow.shared.c8b7733fa.css"
          rel="stylesheet" type="text/css"
          integrity="sha384-yLdzP6AxyIxTVA+/+Fx3t9oMWgxKAi4NbkEG7w9mnpotm6SlL8QbpL9YVGwNYGyM" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Anton:300,400,500,600,700%7CInter:300,400,500,600,700%7CRoboto:300,400,500,600,700"
          media="all" />
      </head>
      <body>
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <Script id="webfont-loader" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["Anton:300,400,500,600,700", "Inter:300,400,500,600,700", "Roboto:300,400,500,600,700"] } });`}
        </Script>
        <Script id="webflow-touch-detect" strategy="beforeInteractive">
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </Script>
        <div className="page-wrapper">
          <Nav />
          <main className="main-wrapper">
            {children}
          </main>
          <Footer />
        </div>
        <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69023d38b3dfba39822f9315"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/js/webflow.schunk.36b8fb49256177c8.js"
          integrity="sha384-4abIlA5/v7XaW1HMXKBgnUuhnjBYJ/Z9C1OSg4OhmVw9O3QeHJ/qJqFBERCDPv7G"
          crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/js/webflow.28c23920.95eea3652bfdda92.js"
          integrity="sha384-HoQHoPqMjYTeV5vs+E2JtRNb5boPFVlMM8+hq+RLOM0U/P7WJoFpkl8cjpjG+pZE"
          crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.14.2/ScrollTrigger.min.js" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.14.2/SplitText.min.js" />
      </body>
    </html>
  );
}
