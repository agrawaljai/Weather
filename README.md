# Weather Website

A weather website built using React that automatically generates weather icons, temperature, location, and timezone of the user's location. Users can also search for the weather of a particular location by providing the location in the input field. The project features a beautiful UI created with HTML and CSS.

## Snaps

![Screenshot 2024-07-05 015506](https://github.com/agrawaljai/Weather/assets/153916803/4e179a05-1f89-4942-bed1-c4cc13a90b53)
![Screenshot 2024-07-05 015531](https://github.com/agrawaljai/Weather/assets/153916803/f759515c-0ec2-4963-83f3-6028629c8cfb)

## Features

- **Automatic Weather Updates**: Displays weather information including icon, temperature, location, and timezone based on the user's current location.
- **Search Functionality**: Allows users to search for weather information for any specific location.
- **Responsive Design**: Beautiful and responsive UI created with HTML and CSS.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **HTML**: Markup language for creating the structure of the web page.
- **CSS**: Stylesheet language for designing the look and feel of the web page.
- **WeatherAPI**: API used to fetch weather data.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/weather-website.git

2. **Navigate to the project directory**:
   ```sh
   cd weather-website

3. **Install dependencies**:
   ```sh
   npm install

4. **Get your WeatherAPI key**:

    Sign up at WeatherAPI to get your API key.
    Create a .env file in the root of the project and add your API key:

    ```sh

        REACT_APP_WEATHER_API_KEY=your_api_key_here

## Usage

1.**Start the development server**:
    ```sh
    
      npm start
      Open your browser and go to http://localhost:3000.

## Project Structure

  src/ - Contains the source code of the React application.
  components/ - Reusable React components.
  App.js - Main component that renders the app.
  index.js - Entry point of the application.
  public/ - Contains the public assets of the project.
  .env - Environment variables file for storing API keys and other sensitive information.
  package.json - Contains project metadata and dependencies.

## Contributing

Contributions are welcome! If you have any ideas or suggestions, feel free to open an issue or submit a pull request.

## Acknowledgements

- WeatherAPI for providing the weather data.
- React for the powerful UI library.
- Create-React-App for the boilerplate.
