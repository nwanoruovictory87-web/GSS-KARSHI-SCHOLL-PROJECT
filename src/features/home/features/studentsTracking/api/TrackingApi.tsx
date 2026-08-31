interface TrackingData {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  dateOfBirth: string;
  gender: string;
  house: string;
  year: string;
  dayStudent: number;
  bordingStudent: number;
  image: null;
  trackingID: string;
  latitude: number;
  longitude: number;
  accuracy: number;
  lastTransmistedDate: string;
  trackingState: number;
  watchInfo: {
    batteryPercent: string;
    watchTime: string;
    watchDate: string;
  };
  locationInfo: {
    locationAccuracy: number;
    lastTransmistedDate: Date;
    lastThreeKnownLocation: any[];
  };
}
//
interface AiOverview {
  fullName: string;
  age: string;
  gender: string;
  schoolHouse: string;
  watchBattery: string;
  lat: number;
  lng: number;
  watchDate: string;
  watchTime: string;
  currentDate: string;
}
const server = import.meta.env.VITE_BACKEND_URL;
export function getStudentWithIDTrackingData(
  trackingID: string,
): Promise<{ ok: boolean; message: string; record: TrackingData }> {
  return new Promise((resolve, reject) => {
    const getTrackingData = fetch(
      `${server}/tracking/student/tracking/data/${trackingID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    getTrackingData
      .then((responds) => {
        responds
          .json()
          .then((data) => {
            if (data.ok) {
              resolve(data);
            } else {
              reject(data.message);
            }
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
//
export function getAiOverview({
  studentsTrackingData,
}: {
  studentsTrackingData: AiOverview;
}): Promise<{ ok: boolean; message: string; text: string }> {
  return new Promise((resolve, reject) => {
    const requst = fetch(`${server}/tracking/student/tracking/aioverview`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(studentsTrackingData),
    });
    //
    requst
      .then((res) => {
        res
          .json()
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
