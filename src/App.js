import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SECTIONS from "./config/sections";
import { AppStateProvider } from "./context/appState";

function App() {
  return (
    <div data-test="app">
      <AppStateProvider>
        <Router>
          <MainNavigation />
          <Layout>
            <Routes>
              {Object.values(SECTIONS).map((section) => (
                <Route
                  key={section.path}
                  path={section.path}
                  element={<section.component />}
                />
              ))}
            </Routes>
          </Layout>
        </Router>
      </AppStateProvider>
    </div>
  );
}

export default App;
