from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/process', methods=['POST'])
def process():
    data = request.json  # Express sends JSON via Axios
    name = data.get('username')
    
    # Simple processing logic
    result = {"message": f"Hello {name}, Dockerized Flask received your data!"}
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)