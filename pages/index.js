import styles from "../styles/index.module.css";
import Head from "next/head";
import Uploader from "../components/Uploader";
import Emotions from "../components/Emotions";
import { useState, useEffect } from "react";

export default function Home(props) {
  
  const [content,setContent] = useState(null);
  const emotions = ["happy","sad","netural","disgust","surprised","angry"]

  function upload(file){
    let b = new Blob([file]);
    b = window.URL.createObjectURL(b);
    let index = Math.floor((Math.random() * emotions.length) % emotions.length);
    function reset(){
      setContent((
        <Uploader
          maxSize = {5}
          onUpload = {upload}
        />
      ));
    }
    setContent((
      <Emotions
        url={b}
        emotion={emotions[index]}
        onReset = {reset}
      />
    ))
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
      <div className={styles.cont}>
        {content}
      </div>
    </>
  )
}
