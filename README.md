# Backend For Emotion-Detection project

To view `frontend` code switch to the `frontend` branch

Project Link :- [Emotion-Detection](https://emotion-detection-sage.vercel.app/)


Frontend code can be found [here](https://github.com/pratyushtiwary/Emotion-Detection/tree/frontend)

Packages used :-
- Flask,
- DeepFace,
- Werkzeug

to run download the above packages and open cmd/terminal in the folder and run `pip install -r requirements.txt`

then run `python app.py`

This will start a server locally on `localhost:3000`

## Routes
There is only one route, the `detect` route

### Detect Route
It returns a JSON string with success or error key and a msg key inside of the respective keys.


Method :- `POST`,

Params :- `["resp","file"]`,

Content-Type (for making request) :- `multipart/form-data`,

Content-Type (for response) :- `application/json`
