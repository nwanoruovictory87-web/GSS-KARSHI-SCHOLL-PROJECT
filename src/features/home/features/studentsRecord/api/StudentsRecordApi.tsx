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
          console.log(result);
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
