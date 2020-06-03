import os
from flask import Flask, abort, request, Response, json, send_file
from flask_cors import CORS

from api.tasks import process_image

app = Flask(__name__)
CORS(app)


CV_PATH = os.path.dirname(__file__) + "/assets/cv.pdf"

@app.route("/face", methods=["GET", "POST"])
def face():
    if request.method == 'POST':
        f = request.files.get("image")
        if not f:
            print("no image found")
            abort(400)

        file_path = f"{os.path.dirname(__file__)}/assets/{f.filename}"
        f.save(file_path)
        task = process_image.delay(file_path)
    
        return app.response_class(
                response=json.dumps({'task_id': task.task_id}),
                status=202,
                mimetype='application/json'
                )

    if request.method == 'GET':
        task_id = request.args.get("task_id")
        if not task_id:
            abort(400)

        result = process_image.AsyncResult(task_id)
        print(type(result))
        if result.ready():
            return send_file(result.result, attachment_filename="face.png")
        return Response("Job not yet finished", status=204)

@app.route("/cv", methods=["GET"])
def cv():
    return send_file(CV_PATH, attachment_filename="cv.pdf")

if __name__ == '__main__':
        app.run(debug=True, host='0.0.0.0')

