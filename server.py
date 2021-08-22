# import packages

from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/order', methods=['GET', 'POST'])
def post_order():
    if request.method == 'POST': # successful post
        order = jsonify(request.form)
        return order
    else:
        error = jsonify({'status': 404})
        return error # failed post
    
   

if __name__ == '__main__':
    app.run(debug=True)