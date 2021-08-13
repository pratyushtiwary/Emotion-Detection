import styles from "../styles/index.module.css";
import Head from "next/head";
import Uploader from "../components/Uploader";
import Emotions from "../components/Emotions";
import { useState, useEffect } from "react";
import recap from "../components/Recaptcha";
import Loader from "../components/Loader";


export default function Home(props) {
  
  const [content,setContent] = useState(null);
  const emotions = ["happy","sad","netural","disgust","surprised","angry"]

  function upload(file){
    let b = new Blob([file]);
    b = window.URL.createObjectURL(b);
    let index = Math.floor((Math.random() * emotions.length) % emotions.length);
    recap.recaptcha.show();
    function reset(){
      setContent((
        <Uploader
          maxSize = {5}
          onUpload = {upload}
        />
      ));
    }
    recap.recaptcha.onVerified = ()=>{
        recap.recaptcha.hide();
        Loader.show("Detecting...");
        setTimeout(()=>{
          Loader.hide();
          setContent((
            <Emotions
              url={b}
              emotion={emotions[index]}
              onReset = {reset}
            />
          ))
        },3000);
    }
    
  }

  useEffect(()=>{
    setContent((
      <Uploader
        maxSize = {5}
        onUpload = {upload}
      />
    ));
  },[])


  return (
    <>
      <Head>
        <title>{props.appName}</title>
      </Head>
      <recap.Recaptcha/>
      <div className={styles.cont}>
        {content}
      </div>
    </>
  )
}
