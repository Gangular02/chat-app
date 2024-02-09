import "./App.css";
import Homepage from "./pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/ChatPage";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </ChatProvider>
  );
}

export default App;
