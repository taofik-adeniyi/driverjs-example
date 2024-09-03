import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import OverviewKnowledge from "./OverviewKnowledge";
import KnowledgeCard from "./KnowledgeCard";
import SwitchToSandbox from "./SwitchToSandbox";

function App() {
  useEffect(() => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: ".page-header",
          popover: { title: "Title", description: "Description" },
        },
        {
          element: ".top-nav",
          popover: { title: "Title", description: "Description" },
        },
        {
          element: ".sidebar",
          popover: { title: "Title", description: "Description" },
        },
        {
          element: ".footer",
          popover: { title: "Title", description: "Description" },
        },
      ],
    });

    driverObj.drive();
  }, []);

  const highlightFeature = (title, description, elementId) => {
    const driverObj = driver({
      popoverClass: "driverjs-theme",
    });
    driverObj.highlight({
      element: elementId,
      popover: {
        title: title,
        description: description,
      },
    });
  };

  return (
    <div className="relative">
      <header
        className="page-header"
        style={{ padding: "10px", width: "100%" }}
      >
        <h1>Header</h1>
      </header>
      <nav className="top-nav" style={{ padding: "10px", width: "100%" }}>
        <h1>Top Nav</h1>
      </nav>
      <aside
        className="sidebar"
        style={{ padding: "10px", width: "20%", marginLeft: "10px" }}
      >
        <h1>Side Bar</h1>
        <div>
          <div
            id="dashboard"
            style={{ margin: "8px 0", width: "fit-content", padding: "0 5px" }}
            onClick={() =>
              highlightFeature(
                "Dashboard",
                "Welcome to the dashboard feature",
                "#dashboard"
              )
            }
          >
            Dashboard
          </div>
          <div
            style={{ margin: "8px 0", width: "fit-content", padding: "0 5px" }}
            id="overview"
            onClick={() =>
              highlightFeature(
                "Overview",
                "Welcome to the Overview feature",
                "#overview"
              )
            }
          >
            Overview
          </div>
          <div
            style={{ margin: "8px 0", width: "fit-content", padding: "0 5px" }}
            id="settings"
            onClick={() =>
              highlightFeature(
                "Settings",
                "Welcome to the Settings feature",
                "#settings"
              )
            }
          >
            Settings
          </div>
        </div>
      </aside>
      <footer className="footer" style={{ padding: "10px", width: "100%" }}>
        <h1>Footer</h1>
      </footer>
      <OverviewKnowledge />
      <KnowledgeCard />
      <SwitchToSandbox />
    </div>
  );
}

export default App;
