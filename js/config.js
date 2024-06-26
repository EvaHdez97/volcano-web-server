/**
 * Configuration settings for the application.
 * Includes server details, Google Maps API key, and default map settings.
 */
const config = {
    host: "localhost", // The hostname of your server.
    webHost: "http://localhost:80/", // The web host URL.
    port: "5000", // The port number your server is listening on.
    protocol: "https://", // The protocol used (http or https).
    googleMapsApiKey: 'AIzaSyAsezSvJnJ0NExtFYR1YDbjR1wgRGPL-SU', // Your Google Maps API key.
    initCallbackName: 'initApp', // The callback function name for map initialization.
    defaultLat: 41.489910, // The default latitude for the map center.
    defaultLng: 2.043831 // The default longitude for the map center.
};

// Export the config object so it can be imported and used in other parts of the application.
export default config;
