import styles from "../styles/components/snackbar.module.css";

const snackbar = {};

snackbar.create = ()=>{
	let s = document.querySelector("."+styles.snackbar);

	if(!s){
		s = document.createElement("div");
		s.classList.add(styles.snackbar);
		document.body.append(s);
	}
	return s;
}

snackbar.autoHide = true;
snackbar.outTime = 5000;

snackbar.show = (msg)=>{
	let s = snackbar.create();
	s.innerHTML = "";
	let m = document.createElement("div");
	m.classList.add(styles.content);
	m.innerText = msg;
	s.append(m);
	s.classList.add(styles.show);
	if(snackbar.autoHide){
		let t = setTimeout(()=>{
			snackbar.hide();
			clearTimeout(t);
		},snackbar.outTime)
	}
}

snackbar.hide = ()=>{
	let s = snackbar.create();
	s.classList.remove(styles.show);
}

export default snackbar