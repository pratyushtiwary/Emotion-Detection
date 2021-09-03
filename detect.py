from deepface import DeepFace
import os

def detect(file):
	"""
		Description :- detects emotion from the filepath passed as the argument
		 and deletes the file after detection

		Params :-
			file :- 'str' path of the image file
	"""
	try:
		g = DeepFace.analyze(img_path=file,actions=["emotion"])
		emotion = g["dominant_emotion"]
		if int(g["emotion"][emotion]) < 50:
		    emotion = -1
	except:
		emotion = 0
	os.remove(file)
	return emotion