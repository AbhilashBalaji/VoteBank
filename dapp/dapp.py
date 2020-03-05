from flask import Flask, render_template, send_from_directory
app = Flask(__name__)

@app.route('/vote')
def vote():
   return render_template('vote.html')

@app.route('/addParty')
def addParty():
   return render_template('addParty.html')

@app.route('/addHash')
def addHash():
   return render_template('addHash.html')

@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

if __name__ == '__main__':
   app.run(debug=True)