import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import SignupPage from "./pages/SignupPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Header  isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
        <Route path="/signup" element={<SignupPage setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </>
  );
}

export default App;
