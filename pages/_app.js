import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
  		<>
	  		<Head>
		  		<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap" rel="stylesheet"/>
	  		</Head>
		  <Component {...pageProps} appName={"Emotion Detection"} />

  		</>
	)

}

export default MyApp
