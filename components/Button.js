import styles from "../styles/components/Button.module.css"

export default function Button(props){

	function addAnim(e){
		const elem = e.currentTarget;
		elem.style.transform = "translate(-50%) scale(0.95)";
		setTimeout(()=>{
			elem.style.transform = "translate(-50%)";
		},250);
		props.onClick && props.onClick(e);
	}

	return (
		<button onClick={addAnim} className={styles.button+" "+props.className}>
			{props.children}
		</button>
	)
}