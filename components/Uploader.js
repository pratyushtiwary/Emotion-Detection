import Button from "../components/Button";
import snackbar from "../components/Snackbar";
import { createRef, useState, useEffect } from "react";
import styles from "../styles/components/uploader.module.css";

export default function Uploader(props){
	const input = createRef();
	const maxSize = props.maxSize * 1024 * 1024;

	useEffect(()=>{
	  snackbar.autoHide = true;
	},[])

	function fileChooser(){
	  input.current.click();
	}

	function onChange(e){
	  const elem = e.currentTarget;
	  const file = elem.files[0];
	  if(file.size > maxSize){
	    snackbar.show("File size should be less than 5 M.B.");
	  }
	  else{
	  	props.onUpload && props.onUpload(file);
	  }
	}

	return (
		<>
			<input 
	          type="file"
	          accept = "image/*"
	          className = {styles.uploadInput}
	          ref = {input}
	          onChange = {onChange}
	          multiple = {false}
	        />
	        <Button className={styles.uploadButton} onClick={fileChooser}>Upload Image</Button>
	        <span className={styles.helper}>Max File Size :- {props.maxSize} M.B.</span>
		</>
	)
}