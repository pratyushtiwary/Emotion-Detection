import styles from "../styles/index.module.css";
import Head from "next/head";
import Uploader from "../components/Uploader";
import Emotions from "../components/Emotions";
import { useState, useEffect } from "react";
import recap from "../components/Recaptcha";
import Loader from "../components/Loader";
import axios from "axios";
import snackbar from "../components/Snackbar";

const url = "https://dry-escarpment-33044.herokuapp.com/";

export default function Home(props) {
  
  const [content,setContent] = useState(null);
  const emotions = ["happy","sad","neutral","disgust","surprise","angry","fear"]

  function upload(file){
    let formData = new window.FormData();
    formData.append("file",file);
    let b = new Blob([file]);
    let r = null;
    b = window.URL.createObjectURL(b);
    recap.recaptcha.show();
    function reset(){
      setContent((
        <Uploader
          maxSize = {5}
          onUpload = {upload}
          accept = "image/*"
        />
      ));
    }
    recap.recaptcha.onError = ()=>{
      r = null;
    }
    recap.recaptcha.onVerified = (e)=>{
        r = e;
        Loader.show("Detecting...");
        formData.append("resp",r);
        recap.recaptcha.hide();
        axios.post(url+"detect",formData,{
          header: {
            "Content-Type": "multipart/form-data"
          }
        }).then((c)=>{
          if(c.data.success){
            let i = emotions.indexOf(c.data.success.msg.emotion);
            Loader.hide();
            if(i!=-1){
               setContent((
                <Emotions
                  url={b}
                  emotion={emotions[i]}
                  onReset = {reset}
                />
              ))
            }
            else{
              snackbar.show("Some internal server error occured, Please try again later.");
            }
          }
          else{
            Loader.hide();
            snackbar.show(c.data.error.msg);
          }
        }).catch((e)=>{
          Loader.hide();
          snackbar.show("Some internal server error occured, Please try again later.");
        });
    }
    
  }

  useEffect(()=>{
    setContent((
      <Uploader
        maxSize = {5}
        onUpload = {upload}
        accept = "image/*"
      />
    ));
  },[])


  return (
    <>
      <Head>
        <title>{props.appName}</title>
      </Head>
      <recap.Recaptcha siteKey={"6LcaOPkbAAAAAENOCJCxrlSXoh5b8MWvEyZxh0NX"}/>
      <div className={styles.cont}>
        {content}
      </div>
    </>
  )
}
