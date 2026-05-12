from dbFunctions import *
from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

#openingWinrate API Route

@app.route("/openingWinrate")
def openingWinrate():
    data = getDataFromTable("opening_winrate")
    return data

