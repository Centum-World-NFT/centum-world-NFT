import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import SignupPage from "./pages/SignupPage";
import { useState } from "react";
import PrivateRoute from "./Private/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={
            <LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="/signup"
          element={<SignupPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
