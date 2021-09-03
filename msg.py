import json

def success(msg):
	res = {
		"success": {
			"msg": msg
		}
	}
	return json.dumps(res)

def error(msg):
	res = {
		"error": {
			"msg": msg
		}
	}
	return json.dumps(res)