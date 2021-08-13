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
		const cont = recapElem.current;
		let widgetId;
		if(window.grecaptcha){
			window.grecaptcha.ready(()=>{
				function done(){
					recaptcha.hide();
					recaptcha.onVerified && recaptcha.onVerified();
					window.grecaptcha.reset();
				}
				function eError(){
					window.grecaptcha.reset();
				}
				function error(){
					eError();
				}
				window.grecaptcha.render(cont,{
					"sitekey": "6LcaOPkbAAAAAENOCJCxrlSXoh5b8MWvEyZxh0NX",
					"callback": done,
					"expired-callback": eError,
					"error-callback": error
				});
			})
		}
	},[])

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