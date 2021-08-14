import { useEffect, createRef, useState } from "react";
import styles from "../styles/components/recaptcha.module.css";


const recaptcha = {};

recaptcha.show = function(){
	if(document.querySelector("."+styles.recapCont)){
		document.querySelector("."+styles.recapCont).classList.add(styles.show);		
	}
}

recaptcha.hide = function(){
	if(document.querySelector("."+styles.recapCont)){
		document.querySelector("."+styles.recapCont).classList.remove(styles.show);		
	}
}

function Recaptcha(props){
	const{error,setError} = useState(null);
	let recapElem = createRef();

	useEffect(()=>{
		let s = document.createElement("script");
		s.src = "https://www.google.com/recaptcha/api.js";
		document.body.append(s);
		const cont = recapElem.current;
		let widgetId;
		s.onload = ()=>{
			if(window.grecaptcha){
				window.grecaptcha.ready(()=>{
					function done(e){
						recaptcha.hide();
						recaptcha.onVerified && recaptcha.onVerified(e);
						window.grecaptcha.reset();
					}
					function eError(){
						recaptcha.onError && recaptcha.onError();
						window.grecaptcha.reset();
					}
					function error(){
						recaptcha.onError && recaptcha.onError();
						eError();
					}
					window.grecaptcha.render(cont,{
						"sitekey": props.siteKey,
						"callback": done,
						"expired-callback": eError,
						"error-callback": error
					});
				})
			}
		}

		s.onerror = ()=>{
			alert("Error loading recaptcha, reloading...");
			window.location.reload();
		}
		
	},[props.siteKey])

	return (
		<div className={styles.recapCont}>
			<div className={styles.recapContent}>
				<div className={styles.recaptcha} ref={recapElem}></div>
				<span className={styles.error}>{error}</span>
			</div>
		</div>
	)
}

const main = {
	"Recaptcha":Recaptcha,
	"recaptcha":recaptcha
}

export default main;