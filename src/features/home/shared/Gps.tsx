interface GpsPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
}
export function GetGpsLocation(): Promise<GpsPosition> {
  return new Promise((resolve, reject) => {
    // 1. Check if the browser supports the Geolocation API
    if ("geolocation" in navigator) {
      // Configuration options for high-accuracy live tracking
      const options = {
        enableHighAccuracy: true, // Forces the device to use GPS instead of Wi-Fi/IP routing
        timeout: 1000, // Maximum time (ms) allowed to return a position
        maximumAge: 0, // Forces the browser to fetch a fresh position, not a cached one
      };

      // 2. Start watching the live position
      navigator.geolocation.watchPosition(
        successCallback,
        errorCallback,
        options,
      );
    } else {
      reject(
        `Geolocation is not supported by this browser. status-code: ${500}`,
      );
    }

    // Success callback triggers every time the device's location changes
    function successCallback(position: any) {
      const latitude: number = position.coords.latitude;
      const longitude: number = position.coords.longitude;
      const accuracy: number = position.coords.accuracy; // Accuracy radius in meters
      console.log(`Live Location - Lat: ${latitude}, Lon: ${longitude}`);
      console.log(`Accuracy: ${accuracy} meters`);
      const livePosition: GpsPosition = {
        latitude: latitude,
        longitude: longitude,
        accuracy: accuracy,
      };
      resolve(livePosition);
      // Optional: Update your HTML UI elements here
    }
    // Error callback handles permission denials or hardware failures
    function errorCallback(error: any) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          reject({
            message: `User denied the request for Geolocation `,
            status: 401,
          });
          break;
        case error.POSITION_UNAVAILABLE:
          reject({
            message: `Location information is unavailable (GPS signal lost). `,
            status: 404,
          });
          break;
        case error.TIMEOUT:
          reject({
            message: `The request to get user location timed out `,
            status: 303,
          });
          break;
        default:
          reject({
            message: `An unknown error occurred. ${error.message} `,
            status: 500,
          });
      }
    }
  });
}
// 3. Optional: Stop tracking whenever you want (e.g., when a user leaves a page)
