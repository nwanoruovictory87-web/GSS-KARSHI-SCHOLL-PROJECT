interface StudentsDataInfo {
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
}
interface StudentsData {
  _id: string;
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
  trackingID: string;
  image: null;
  studentYear: string;
  createdAt: Date;
  __v: number;
}
const server = import.meta.env.VITE_BACKEND_URL;
export function getNewTrackingId(): Promise<{
  ok: boolean;
  message: string;
  ID: string;
}> {
  return new Promise((resolve, reject) => {
    const getTrackingId = fetch(`${server}/students/get/new/trackingID`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //
    getTrackingId
      .then((res) => {
        const respond = res.json();
        respond.then((result) => {
          //console.log(result);
          if (!result.ok) {
            reject(result);
          } else {
            resolve(result);
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
    //
  });
}
//
export function createNewStudentsData({
  studentData,
}: {
  studentData: StudentsDataInfo;
}): Promise<{
  message: string;
  ok: boolean;
}> {
  return new Promise((resolve, reject) => {
    const postStudentsData = fetch(`${server}/students/add/new/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
    postStudentsData
      .then((responds) => {
        responds
          .json()
          .then((data) => {
            if (data.ok) {
              resolve(data);
            } else {
              reject(data);
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
export function getStudentsRecords(): Promise<{
  ok: boolean;
  message: string;
  records: StudentsData[];
}> {
  return new Promise((resolve, reject) => {
    const getRecords = fetch(`${server}/students/all/students/records`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getRecords
      .then((responds) => {
        responds.json().then((data) => {
          if (data.ok) {
            const res: {
              ok: boolean;
              message: string;
              records: StudentsData[];
            } = data;
            resolve(res);
          } else {
            reject(data);
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
