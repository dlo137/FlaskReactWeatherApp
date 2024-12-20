from flask import Flask, jsonify
import requests

# Initialize the Flask application
app = Flask(__name__)

# Define the OpenWeather API key and the city name
OpenWeather_Api_Key = "3b79f0d5ac9962fba1bdfc40537607fa"
City_Name = "San Diego"

# Define the endpoint for fetching weather data
@app.route('/weather_data', methods=['GET'])
def get_weather():
    # Construct the URL for the OpenWeather API request
    Url = f"https://api.openweathermap.org/data/2.5/weather?q={City_Name}&appid={OpenWeather_Api_Key}&units=imperial"
    
    # Make the API request
    Response = requests.get(Url)
    
    # Check if the request was successful
    if Response.status_code == 200:
        # Parse the JSON response
        data = Response.json()
        
        # Extract relevant weather data
        weather_data = {
            'weather': data['weather'][0]['main'],
            'temperature': data["main"]["temp"],
            'humidity': data["main"]["humidity"],
            'wind_speed': data["wind"]["speed"]
        }
        
        # Return the weather data as a JSON response
        return jsonify(weather_data)
    else:
        # Return an error message if the API request failed
        return jsonify({'error': 'Failed to fetch weather data'}), Response.status_code
    
    # Define a simple route for the root URL
@app.route('/')
def index():
    return "Welcome to the Weather API. Use '/weatherdata' to get weather data."

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)