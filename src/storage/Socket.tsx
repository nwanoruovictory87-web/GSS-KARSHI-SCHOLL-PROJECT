import { createContext, useContext, useRef, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
interface GpsPosition {
  latitude: number;
  longitude: number;
  trackingID: string;
}
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
interface ListenEvents {
  "all-students-location": (list: GpsPosition[] | []) => void;
  "all-students-alert": (alertsRecord: TrackingData[] | []) => void;
}
interface EmitEvents {
  "get-students-location": () => void;
  "get-students-alert": () => void;
}
type AppSocket = Socket<ListenEvents, EmitEvents>;
interface SocketInstanceApi {
  socket: AppSocket | null;
  conectSocket: () => void;
  disconnectSocket: () => void;
}
const SocketInstance = createContext<SocketInstanceApi>({
  socket: null,
  conectSocket: () => {},
  disconnectSocket: () => {},
});
export function SocketProvider({ children }: { children: React.ReactNode }) {
  const server = import.meta.env.VITE_BACKEND_URL;
  const socketRef = useRef<AppSocket | null>(null);
  const [isSocketConnected, setIsSocketConnected] = useState<boolean>(false);
  //
  function conectSocket(): void {
    console.log(socketRef);
    const newSocket = io(server, {
      autoConnect: true,
    });
    socketRef.current = newSocket;
    if (!socketRef.current || isSocketConnected) return;
    socketRef.current.connect();
    console.log("socket conected");
    setIsSocketConnected(true);
  }
  function disconnectSocket(): void {
    if (!socketRef.current || !isSocketConnected) return;
    socketRef.current.disconnect();
    console.log("socket disconected");
    setIsSocketConnected(false);
    console.log(socketRef);
  }
  //clean up
  useEffect(() => {
    return () => {
      if (socketRef.current) {
        console.log("clean up socket");
        socketRef.current.disconnect();
      }
    };
  }, []);
  useEffect(() => {
    conectSocket();
  }, []);
  console.log(server);
  return (
    <SocketInstance.Provider
      value={{
        socket: socketRef.current,
        conectSocket,
        disconnectSocket,
      }}
    >
      {children}
    </SocketInstance.Provider>
  );
}
export const SocketApi = () => useContext(SocketInstance);
