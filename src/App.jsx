import { useState } from "react";
import LoginPage from "./Components/LoginPage";
import DarkModeContext from "./DarkModeContext";
import DatabaseContext from "./DatabaseContext";
import darkModeIcon from "./assets/Themes/darkMode.svg";
import lightModeIcon from "./assets/Themes/lightMode.svg";
function App() {
  const darkTheme = useState(false);
  const database = [
    {
      username: "ibsham",
      password: "123",
    },
  ];

  return (
    <div className="app">
      <DarkModeContext.Provider value={darkTheme}>
        <DatabaseContext.Provider value={database}>
          <LoginPage
            darkModeIcon={darkModeIcon}
            lightModeIcon={lightModeIcon}
          />
        </DatabaseContext.Provider>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
