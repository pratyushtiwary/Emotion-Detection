import styles from "../styles/credits.module.css"
import Head from "next/head";

export default function Credits(props){
	const creators = [
		"Anurag", "Pratyush", "Rakshita", "Shiv", "Sowmen"
	]
	const creatorsLink = [
		"https://github.com/anuragpandey-18/", "https://github.com/pratyushtiwary/",
		"https://github.com/RakshitaBhole11/", "https://github.com/shivgithub1860/",
		"https://github.com/Nemwos/"
	]
	const done = [];
	return (
		<>
			<Head>
				<title>Credits - {props.appName}</title>
			</Head>
			<div className={styles.cont}>
				Created by :-
				<ul className={styles.credits}>
					{
						creators.map((e,i)=>{
							return (
								<li key={i}><a href={creatorsLink[i]} target="_blank" rel="noreferrer">{e}</a></li>
							)
						})
					}
				</ul>
			</div>
		</>
	)
}