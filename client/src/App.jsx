import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NftCards from "./pages/nftcards/NftCards";
import PageTitle from "./components/common/pagetitle/PageTitle";
import NftFilter from "./components/common/nftfilter/NftFilter";
import NftCollections from "./pages/collections/NftCollections";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<PageTitle/>}  >
          <Route path="nft" element={<NftFilter />} />
          <Route path="collections" element={<NftCollections/>} />
        </Route>
        {/* <Route path="/collection" element={<NftCollections />} /> */}
      </Routes>
    </>
  );
}

export default App;
