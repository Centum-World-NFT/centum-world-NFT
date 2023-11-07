import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NftCards from "./pages/nftcards/NftCards";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<NftCards />} />
      </Routes>
    </>
  );
}

export default App;
