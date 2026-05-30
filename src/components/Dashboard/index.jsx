import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Home from "../Home";
import Employees from "../Employees";

const Dashboard = ({ userName, media, setMedia }) => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      <Header userName={userName} />

      <div className="dashboard">
        <Sidebar setActivePage={setActivePage} />

        <div className="main-content">
          {activePage === "home" && (
            <Home
              userName={userName}
              media={media}
              setMedia={setMedia}
            />
          )}

          {activePage === "employees" && (
            <Employees media={media} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;