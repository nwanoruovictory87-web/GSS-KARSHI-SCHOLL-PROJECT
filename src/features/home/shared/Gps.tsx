interface GpsPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
}
export function GetGpsLocation(
  successCb: (gpsPosition: GpsPosition) => void,
  errorCb: (errorMessage: string, errorType: number) => void,
) {
  // 1. Check if the browser supports the Geolocation API
  if ("geolocation" in navigator) {
    // Configuration options for high-accuracy live tracking
    const options = {
      enableHighAccuracy: true, // Forces the device to use GPS instead of Wi-Fi/IP routing
      timeout: 5000, // Maximum time (ms) allowed to return a position
      maximumAge: 0, // Forces the browser to fetch a fresh position, not a cached one
    };

    // 2. Start watching the live position
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options,
    );
  } else {
    errorCb("Geolocation is not supported by this browser.", 500);
  }

  // Success callback triggers every time the device's location changes
  function successCallback(position: any) {
    const latitude: number = position.coords.latitude;
    const longitude: number = position.coords.longitude;
    const accuracy: number = position.coords.accuracy; // Accuracy radius in meters
    console.log(`Live Location - Lat: ${latitude}, Lon: ${longitude}`);
    console.log(`Accuracy: ${accuracy} meters`);
    const livePosition = {
      latitude: latitude,
      longitude: longitude,
      accuracy: accuracy,
    };
    successCb(livePosition);
    // Optional: Update your HTML UI elements here
  }

  // Error callback handles permission denials or hardware failures
  function errorCallback(error: any) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorCb("User denied the request for Geolocation.", 403);
        break;
      case error.POSITION_UNAVAILABLE:
        errorCb("Location information is unavailable (GPS signal lost).", 404);
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.", 401);
        break;
      default:
        errorCb(`An unknown error occurred. ${error.message}`, 500);
    }
  }
}
// 3. Optional: Stop tracking whenever you want (e.g., when a user leaves a page)
