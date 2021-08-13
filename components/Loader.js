import styles from "../styles/components/loader.module.css";

const Loader = {};
Loader.__create = ()=>{
	let l = document.querySelector("."+styles.loaderCont);
	if(!l){
		l = document.createElement("div");
		l.classList.add(styles.loaderCont);
		document.body.append(l)
	}
	return l;
}

Loader.show = (msg="Loading...")=>{
	let l = Loader.__create();
	l.innerHTML = "";
	l.classList.add(styles.show);
	let lc = document.createElement("div");
	lc.classList.add(styles.loaderContent);
	let ld = document.createElement("div");
	ld.classList.add(styles.loader);
	let lm = document.createElement("div");
	lm.classList.add(styles.loaderMsg);
	lm.innerText = msg;
	lc.append(ld);
	lc.append(lm);
	l.append(lc);
}

Loader.hide = ()=>{
	let l = Loader.__create();
	l.classList.remove(styles.show);
}

export default Loader;