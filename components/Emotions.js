import styles from "../styles/components/emotions.module.css";
import Button from "./Button";


export default function Emotions(props){

	return (
	  <>
        <div className={styles.imageCont}>
          <div className={styles.emoji}>
            <img
              height = "100"
              src = {"/emojis/"+props.emotion+".SVG"}
            />
          </div>
          <img 
           className={styles.image}
           src={props.url}
          />
        </div>
        <span className={styles.eTxt}>Emotion is :-</span>
        <span className={styles.emotion+" "+styles[props.emotion]}>{props.emotion}</span>
        <Button className={styles.reset} onClick={props.onReset}>Reset</Button>
      </>
	)
}