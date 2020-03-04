from flask import Flask, render_template, send_from_directory
app = Flask(__name__)

@app.route('/')
def hello_world():
   return render_template('hello.html')

@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

if __name__ == '__main__':
   app.run(debug=True)