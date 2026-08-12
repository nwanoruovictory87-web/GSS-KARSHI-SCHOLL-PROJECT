import Routes from "./routes/Routes";
import { SocketProvider } from "./storage/Socket";
function App() {
  return (
    <SocketProvider>
      <Routes />
    </SocketProvider>
  );
}

export default App;
