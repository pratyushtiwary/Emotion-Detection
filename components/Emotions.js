import styles from "../styles/components/emotions.module.css";
import Button from "../components/Button";

export default function Emotions(props){
	return (
	  <>
        <div className={styles.imageCont}>
          <div className={styles.emoji}>
            <img
              width = "100"
              height = "100"
              src = {"/emojis/"+props.emotion+".svg"}
            />
          </div>
          <img 
           className={styles.image}
           src={props.url}
          />
        </div>
        <span>Emotion is :-</span>
        <span className={styles.emotion+" "+styles[props.emotion]}>{props.emotion}</span>
        <Button className={styles.reset} onClick={props.onReset}>Reset</Button>
      </>
	)
}