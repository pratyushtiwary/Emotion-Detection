from flask import Flask,request,url_for
import msg
from detect import detect
from urllib.parse import urlencode
from urllib.request import urlopen
import json
from werkzeug.utils import secure_filename
import os


app = Flask(__name__)


app.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024    # 5 Mb limit
app.config['EXTENSIONS'] = ['jpeg','png','jpg']
uploads_dir = "file"

@app.route("/detect",methods=["GET","POST"])
def hi():
	if request.method=="POST":
		resp = request.form["resp"] # get the grecaptcha response
		recap_url = "https://www.google.com/recaptcha/api/siteverify"
		secret_key = "6LcaOPkbAAAAALlH-yxP7wHM58KrzcNXJz4aazH5"
		data = urlencode({
			"secret": secret_key,
			"response": resp
		})
		req =  urlopen(recap_url, data.encode('utf-8')) # verify grecaptcha response
		ss = json.loads(req.read()) # read the data returned
		s = ss["success"] # get the "success" key from the json returned
		if(s): # check whether grecaptcha response is correct or not
			if "file" not in request.files:
				# check if there is not file
				return msg.error("No file found!")

			file = request.files['file'] # get the file uploaded by the user
			type = file.content_type.split("/")
			if(type[1] in app.config['EXTENSIONS']): # check whether the filetype is supported
				path = os.path.join(uploads_dir, secure_filename(file.filename)) # join path, this path is where we'll save our file
				file.save(path) # save file
				e = detect(path) # detect emotion and delete file
				if(e): # check if face and emotion is detected
					return msg.success({
						"emotion": e
					})
				else: # if no face is detected throw error
					return msg.error("No face detected")
			else:
				return msg.error("Invalid file type!")
		return msg.error("Invalid Request")

@app.after_request
def after_request(resp):
	resp.headers.add('Access-Control-Allow-Origin','*')
	resp.headers.add('Access-Control-Allow-Headers','*')
	resp.headers.add('Access-Control-Allow-Methods','*')
	return resp

if __name__ == "__main__":
	app.run()