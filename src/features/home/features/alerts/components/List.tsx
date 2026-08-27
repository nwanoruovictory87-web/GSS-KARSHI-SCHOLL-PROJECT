import { useState, useEffect } from "react";
import StudentsAlertInfo from "./StudentsAlertInfo";
import { SocketApi } from "../../../../../storage/Socket";
import alertAlerm from "/assets/alertAlerm.mp3";
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
  trackingState: number;
  watchInfo: {
    batteryPercent: string;
    watchTime: string;
    watchDate: Date;
  };
  locationInfo: {
    locationAccuracy: number;
    lastTransmistedDate: string;
    lastThreeKnownLocation: any[];
  };
}
function List() {
  const socketApi = SocketApi();
  const { socket } = socketApi;
  const [alertList, setAlertList] = useState<TrackingData[] | []>([]);
  useEffect(() => {
    const alerm = new Audio(alertAlerm);
    for (let i = 0; i < alertList.length; i++) {
      if (alertList[i].trackingState === 3) {
        alerm.play();
        return;
      }
    }
  }, [alertList]);
  //send get alertList requst ping
  useEffect(() => {
    if (!socket) return;
    //call send getAlertList every 30s
    const getAlertListTimer = setInterval(() => {
      socket.emit("get-students-alert");
    }, 3000); // every 10s
    socket.emit("get-students-alert");
    //clean up
    return () => {
      clearInterval(getAlertListTimer);
    };
  }, []);
  //listen on students alert list
  useEffect(() => {
    if (!socket) return;
    const receiveAlertFunc = (list: TrackingData[] | []) => {
      console.log(list);
      setAlertList(list);
    };
    socket.on("all-students-alert", receiveAlertFunc);
    //clean up
    return () => {
      socket.off("all-students-alert", receiveAlertFunc);
    };
  }, []);
  return (
    <div className=" w-full h-full overflow-y-scroll pb-12 ">
      {/** */}
      <div className="w-full flex flex-col  border-r border-r-body-color border-l border-l-body-coborder-r-body-color ">
        {alertList.length != 0 ? (
          alertList.map((data) => {
            return (
              <StudentsAlertInfo
                image={data.image}
                firstName={data.firstName}
                middleName={data.middleName}
                lastName={data.lastName}
                trackingID={data.trackingID}
                house={data.house}
                lastTransmistedDate={data.locationInfo.lastTransmistedDate}
                trackingState={data.trackingState}
                watchTime={data.watchInfo.watchTime}
                key={data.trackingID}
              />
            );
          })
        ) : (
          <div className="w-full h-full flex justify-center items-center mt-[12%]">
            <div className="text-center">
              <i className="fa fa-book text-[130px] text-body-color"></i>
              <h5 className="font-sans text-[25px] mt-1 font-medium text-body-color">
                No Reords Found
              </h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default List;
