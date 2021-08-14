
# Frontend For Emotion-Detection project

Project Link :- [Emotion-Detection](https://emotion-detection-sage.vercel.app/)


Backend code can be found [here](https://github.com/pratyushtiwary/edbe)

## Components

### Snackbar

Usage :-

```jsx
import snackbar from "../components/Snackbar";
import { useEffect } from "react"

export default function myComponent(props){

	useEffect(()=>{
		snackbar.show("Hey!")
	},[props]);

	return (...)
}

```
Props :-

- [void] `snackbar.create()` :- will append an empty snackbar div container to the body,
- [void] `snackbar.show(msg)` :- show snackbar,
- [void] `snackbar.hide()` :- hide snackbar,
- [bool] `snackbar.autoHide` :- if true autohides the snackbar after sometime,
- [int] `snackbar.outTime` :- milliseconds after which snackbar will hide if `snackbar.autoHide` is set to `true`


### Button

Usage :-

```jsx
import Button from "../components/Button";

export default function myComponents(props){
	return (
		...
		<Button>My Button</Button>
		...
	)
}
```
Props :-
- [str] `className`,
- [function]  `onClick`,
- [jsx]  `children`

### Loader

Usage :-

```jsx
import Loader from "../components/Loader";
import { useEffect } from "react";
export default function myComponent(props){
	useEffect(()=>{
		Loader.show("Some loading msg...")
	},[props]);
	return ()
}

```

Props :-
- [void] `Loader.show(msg)`,
- [void] `Loader.hide()`

### Recaptcha

Usage :-

```jsx
import recap from "../components/Recaptcha";
import { useEffect } from "react";

export default function myComponent(props){

	useEffect(()=>{
		recap.recaptcha.show();
		recap.recaptcha.onError = ()=>{
			alert("Error");
		}
		recap.recaptcha.onVerified = (resp)=>{
			alert(resp);
		}
	},[props])

	return (
		...
		<recap.Recaptcha siteKey={"YOUR_SITE_KEY"}/>
		...
	)
}

```

Props :-

For recap.Recaptcha :-
- [str] `siteKey`

For recap.recaptcha :-
- [void] `recap.recaptcha.show()`,
- [void] `recap.recaptcha.hide()`,
- [void] `recap.recaptcha.onError` :- this function will be called when either recaptcha gets `expired` or in time of some `error` regarding recaptcha
- [void] `recap.recaptcha.onVerified` :- this function will be called when recaptcha is solved

### Uploader

Usage :-
```jsx
import Uploader from "../components/Uploader";

export default function myComponents(props){
	return (
		<div>
			<Uploader 
				onUpload={callSomeUploadFunc}
				maxSize={5}
				accept = "image/*"
			/>
		</div>
	)
}
```
Props :-
- [void] `onUpload`,
- [int] `maxSize` :- the max size of file which can be uploaded,
- [str] `accept`


#### Note :- I've not mentioned about `Emotions` component as it is hard-coded and won't be of much use for any other projects

Credits :- Emojis taken from [Here](http://emoji.streamlineicons.com/)