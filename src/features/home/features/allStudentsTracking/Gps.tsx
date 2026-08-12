// 1. Check if the browser supports the Geolocation API
if ("geolocation" in navigator) {
  // Configuration options for high-accuracy live tracking
  const options = {
    enableHighAccuracy: true, // Forces the device to use GPS instead of Wi-Fi/IP routing
    timeout: 5000, // Maximum time (ms) allowed to return a position
    maximumAge: 0, // Forces the browser to fetch a fresh position, not a cached one
  };

  // 2. Start watching the live position
  const watchId = navigator.geolocation.watchPosition(
    successCallback,
    errorCallback,
    options,
  );
} else {
  console.error("Geolocation is not supported by this browser.");
}

// Success callback triggers every time the device's location changes
function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy; // Accuracy radius in meters

  console.log(`Live Location - Lat: ${latitude}, Lon: ${longitude}`);
  console.log(`Accuracy: ${accuracy} meters`);

  // Optional: Update your HTML UI elements here
}

// Error callback handles permission denials or hardware failures
function errorCallback(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.error("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.error("Location information is unavailable (GPS signal lost).");
      break;
    case error.TIMEOUT:
      console.error("The request to get user location timed out.");
      break;
    default:
      console.error("An unknown error occurred.", error.message);
  }
}

// 3. Optional: Stop tracking whenever you want (e.g., when a user leaves a page)
// navigator.geolocation.clearWatch(watchId);
