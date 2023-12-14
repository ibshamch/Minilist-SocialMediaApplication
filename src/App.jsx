import { useState } from "react";
import LoginPage from "./Components/LoginPage";
import DarkModeContext from "./DarkModeContext";
function App() {
  const darkTheme = useState(false);
  return (
    <div className="app">
      <DarkModeContext.Provider value={darkTheme}>
        <LoginPage />
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
