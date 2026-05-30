import { useState } from "react";
import Login from "./components/Login";
 import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("");
  const [media, setMedia] = useState("");

  return (
    
      <div>
        {userName === "" ? (
          <Login setUserName={setUserName} />
        ) : (
          <Dashboard
            userName={userName}
            media={media}
            setMedia={setMedia}
          />
        )}
      </div>
    );
};

export default App;
